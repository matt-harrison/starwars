import { fps, magnification } from '../../config.js';

import { getRandom, getObstruction, importJSON, preload } from '../utils.js';

import { Animation } from './Animation.js';
import { Lightsaber } from './Lightsaber.js';
import { Projectile } from './Projectile.js';

export const Player = function({
  animations,
  data,
  enemies,
  game,
  keys,
  level,
  obstacles,
  props,
  stage
}) {
  importJSON(this, data);

  this.speed = this.speed * (magnification / 5);

  this.x = Math.floor((game.width - this.frameWidth) / 2);
  this.y = Math.floor((game.height - this.frameHeight) / 2);
  this.dir = 'down';
  this.spriteColumn = 0;
  this.spriteRow = 2;
  this.running = false;
  this.attacking = false;
  this.active = true;
  this.dead = false;
  this.lightsaber = '';

  if (this.weaponType === 'projectile') {
    if (this.projectile === 'laser') {
      this.weaponDelay = fps / 4;
    } else if (typeof(this.weaponDelay) === 'undefined') {
      this.weaponDelay = fps / 2;
    }
  } else if (this.weaponType === 'bomb') {
    this.weaponDelay = 8;
  } else if (this.weaponType === 'lightsaber') {
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
      if (this.weaponType === 'projectile') {
        new Projectile({
          game,
          origin: this,
          props,
          stage
        });

        //Sometimes the enemy will try to dodge
        for (var enemy in enemies) {
          if (enemies[enemy].sprite !== 'asteroid') {
            //Dodges will get more likely as game progresses
            if (getRandom(20 - level) === 0) {
              enemies[enemy].changeDir();
            }
          }
        }
      } else if (this.weaponType === 'bomb') {
        new Bomb({
          animations,
          origin: this,
          props,
          stage
        });
      } else if (this.weaponType === 'lightsaber') {
        const isLongRange = (key === 'Z');

        this.lightsaber = new Lightsaber({
          game,
          isLongRange,
          origin: this,
          props,
          stage
        });
        keys = [key];

        this.running = false;
        this.attacking = true;
        this.spriteColumn = this.moveFrameCount + 1;
      } else if (this.weaponType === 'attack') {
      }

      this.weaponReady = false;
    }
  }

  this.kill = function() {
    this.active = false;
    if (typeof(this.death) !== 'undefined') {
      this.selector.style.display = 'none';
      new Animation({
        animations,
        data: this.death,
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

        var obs = getObstruction({
          obj: this,
          obstacles
        });

        if (this.dir === 'left') {
          if (this.x - this.speed > 0) {
            if (obs === '') {
              this.x -= this.speed;
            } else {
              this.x = obs.x + obs.frameWidth;
            }
          } else if (this.ship) {
            this.x = 0;
            this.dir = 'right';
          }
          this.spriteRow = 1;
        } else if (this.dir === 'up') {
          if (this.y - this.speed > 0) {
            var obs = getObstruction({
              obj: this,
              obstacles
            });

            if (obs === '') {
              this.y -= this.speed;
            } else {
              this.y = obs.y + obs.frameHeight - this.frameHeight + magnification;
            }
          } else if (this.ship) {
            this.y = 0;
            this.dir = 'down';
          }
          this.spriteRow = 3;
        } else if (this.dir === 'right') {
          if (this.x + this.speed < game.width - this.frameWidth) {
            var obs = getObstruction({
              obj: this,
              obstacles
            });

            if (obs === '') {
              this.x += this.speed;
            } else {
              this.x = obs.x - this.frameWidth;
            }
          } else if (this.ship) {
            this.x = game.width - this.frameWidth;
            this.dir = 'left';
          }
          this.spriteRow = 0;
        } else if (this.dir === 'down') {
          if (this.y + this.speed < game.height - this.frameHeight) {
            var obs = getObstruction({
              obj: this,
              obstacles
            });

            if (obs === '') {
              this.y += this.speed;
            } else {
              this.y = obs.y - this.frameHeight;
            }
          } else if (this.ship) {
            this.y = game.height - this.frameHeight;
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
