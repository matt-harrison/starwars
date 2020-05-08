import {
  getRandom,
  getObstruction,
  preload
} from '/js/utils.js';

import { FPS, MAGNIFICATION }        from '/js/constants/config.js';
import { PROJECTILES, WEAPON_TYPES } from '/js/constants/weapons.js';

import { Animation }  from '/js/classes/Animation.js';
import { Lightsaber } from '/js/classes/Lightsaber.js';
import { Projectile } from '/js/classes/Projectile.js';

export const Player = function({
  data,
  master,
  level,
  stage
}) {
  Object.assign(this, data);

  this.speed = this.speed * (MAGNIFICATION / 5);

  this.x = Math.floor((master.gameWidth - this.frameWidth) / 2);
  this.y = Math.floor((master.gameHeight - this.frameHeight) / 2);
  this.dir = 'down';
  this.spriteColumn = 0;
  this.spriteRow = 2;
  this.running = false;
  this.attacking = false;
  this.active = true;
  this.dead = false;
  this.lightsaber = '';

  if (this.weaponType === WEAPON_TYPES.PROJECTILE) {
    if (this.projectile === PROJECTILES.LASER) {
      this.weaponDelay = FPS / 4;
    } else if (typeof(this.weaponDelay) === 'undefined') {
      this.weaponDelay = FPS / 2;
    }
  } else if (this.weaponType === WEAPON_TYPES.BOMB) {
    this.weaponDelay = 8;
  } else if (this.weaponType === WEAPON_TYPES.LIGHTSABER) {
    this.weaponDelay = 2;
  }

  this.weaponReady = true;
  this.weaponCount = 0;

  this.selector = document.createElement('div');
  this.selector.id = 'player';
  this.selector.style.position = 'absolute';
  this.selector.style.width = this.frameWidth + 'px';
  this.selector.style.height = this.frameHeight + 'px';
  this.selector.style.backgroundImage = "url('img/characters/" + this.sprite + ".png')";
  this.selector.style.backgroundSize = this.width + 'px ' + this.height + 'px';
  this.selector.style.backgroundRepeat = 'no-repeat';
  this.selector.style.zIndex = '3';
  stage.selector.appendChild(this.selector);

  if (typeof(this.death) !== 'undefined') {
    preload('img/animations/' + this.death.name + '.png');
  }

  this.attack = function(key) {
    if (this.weaponReady) {
      if (this.weaponType === WEAPON_TYPES.PROJECTILE) {
        new Projectile({
          master,
          origin: this,
          stage
        });

        //As levels progress, enemies will become liklier to dodge projectiles
        master.actors.enemies.forEach(enemy => {
          if (enemy.sprite !== 'asteroid') {
            if (getRandom(20 - level) === 0) {
              enemy.changeDir();
            }
          }
        });
      } else if (this.weaponType === WEAPON_TYPES.BOMB) {
        new Bomb({
          master,
          origin: this,
          stage
        });
      } else if (this.weaponType === WEAPON_TYPES.LIGHTSABER) {
        const isLongRange = (key === 'Z');

        this.lightsaber = new Lightsaber({
          isLongRange,
          master,
          origin: this,
          stage
        });

        master.keys = [key];

        this.running = false;
        this.attacking = true;
        this.spriteColumn = this.moveFrameCount + 1;
      } else if (this.weaponType === WEAPON_TYPES.ATTACK) {
      }

      this.weaponReady = false;
    }
  }

  this.kill = function() {
    this.active = false;

    if (typeof(this.death) !== 'undefined') {
      this.selector.style.display = 'none';
      new Animation({
        data: this.death,
        master,
        origin: this,
        stage
      });

      if (this.lightsaber !== '') {
        this.lightsaber.kill();
      }
    } else {
      this.spriteColumn = 0;
      this.spriteRow = 4;
    }
  }

  this.update = function() {
    if (this.dead) {
      if (this.active) {
        this.kill();
      }
    } else {
      if (!this.weaponReady) {
        if (this.weaponCount++ === this.weaponDelay) {
          this.weaponReady = true;
          this.weaponCount = 0;
        }
      }
      if (this.running || this.ship) {
        if (this.spriteColumn < this.moveFrameCount) {
          this.spriteColumn++;
        } else {
          this.spriteColumn = 1;
        }

        var obstruction = getObstruction({
          obj: this,
          obstacles: master.actors.obstacles
        });

        if (this.dir === 'left') {
          if (this.x - this.speed > 0) {
            if (obstruction === '') {
              this.x -= this.speed;
            } else {
              this.x = obstruction.x + obstruction.frameWidth;
            }
          } else if (this.ship) {
            this.x = 0;
            this.dir = 'right';
          }
          this.spriteRow = 1;
        } else if (this.dir === 'up') {
          if (this.y - this.speed > 0) {
            var obstruction = getObstruction({
              obj: this,
              obstacles: master.actors.obstacles
            });

            if (obstruction === '') {
              this.y -= this.speed;
            } else {
              this.y = obstruction.y + obstruction.frameHeight - this.frameHeight + MAGNIFICATION;
            }
          } else if (this.ship) {
            this.y = 0;
            this.dir = 'down';
          }
          this.spriteRow = 3;
        } else if (this.dir === 'right') {
          if (this.x + this.speed < master.gameWidth - this.frameWidth) {
            var obstruction = getObstruction({
              obj: this,
              obstacles: master.actors.obstacles
            });

            if (obstruction === '') {
              this.x += this.speed;
            } else {
              this.x = obstruction.x - this.frameWidth;
            }
          } else if (this.ship) {
            this.x = master.gameWidth - this.frameWidth;
            this.dir = 'left';
          }
          this.spriteRow = 0;
        } else if (this.dir === 'down') {
          if (this.y + this.speed < master.gameHeight - this.frameHeight) {
            var obstruction = getObstruction({
              obj: this,
              obstacles: master.actors.obstacles
            });

            if (obstruction === '') {
              this.y += this.speed;
            } else {
              this.y = obstruction.y - this.frameHeight;
            }
          } else if (this.ship) {
            this.y = master.gameHeight - this.frameHeight;
            this.dir = 'up';
          }
          this.spriteRow = 2;
        }
      }
    }
  }

  this.draw = function() {
    this.selector.style.backgroundPosition = (0 - this.spriteColumn * this.frameWidth) + 'px ' + (0 - this.spriteRow * this.frameHeight) + 'px';
    this.selector.style.left = this.x + 'px';
    this.selector.style.top = this.y + 'px';
  };

  this.draw();
};
