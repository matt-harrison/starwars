import {
  getRandom,
  getObstruction,
  inBounds,
  preload,
  updateScore,
  updateVictim
} from '/js/utils.js';

import { CARDINALS, FPS, MAGNIFICATION } from '/js/constants/config.js';

import { Animation } from '/js/classes/Animation.js';

export const Enemy = function({
  data,
  hud,
  master,
  stage
}) {
  Object.assign(this, data);

  this.active = true;
  this.dead = false;
  this.trapped = false;

  this.speed = this.speed * (MAGNIFICATION / 5);

  this.weaponDelay = FPS;//Shoot once per second max
  this.weaponReady = true;
  this.weaponCount = 0;

  this.selector = document.createElement('div');
  this.selector.id = `enemy${master.actorCount++}`;
  this.selector.style.position = 'absolute';
  this.selector.style.width = this.frameWidth + 'px';
  this.selector.style.height = this.frameHeight + 'px';
  this.selector.style.backgroundImage = "url('img/characters/" + this.sprite + ".png')";
  this.selector.style.backgroundSize = this.width + 'px ' + this.height + 'px';
  this.selector.style.backgroundRepeat = 'no-repeat';
  this.selector.style.zIndex = '2';

  master.actors.enemies.push(this);
  stage.selector.appendChild(this.selector);

  this.spriteColumn = 1;
  this.blinking = false;
  this.blinkCount = 0;

  if (data === stage.boss) {
    this.isBoss = true;
    this.hp = stage.bossHP;
    this.value = stage.bossHP * 100;
  } else {
    this.isBoss = false;
    this.hp = 1;
    this.value = 100;
  }

  if (typeof(stage.enemyDir) === 'undefined') {
    this.spriteRow = getRandom(4);
    this.dir = CARDINALS[this.spriteRow];
  } else {
    this.dir = stage.enemyDir;
  }

  if (this.dir === 'left') {
    this.x = master.gameWidth;
    this.y = getRandom(master.gameHeight - this.frameHeight);
    this.spriteRow = 1;
  } else if (this.dir === 'up') {
    this.x = getRandom(master.gameWidth - this.frameWidth);
    this.y = master.gameHeight;
    this.spriteRow = 3;
  } else if (this.dir === 'right') {
    this.x = 0 - this.frameWidth;
    this.y = getRandom(master.gameHeight - this.frameHeight);
    this.spriteRow = 0;
  } else if (this.dir === 'down') {
    this.x = getRandom(master.gameWidth - this.frameWidth);
    this.y = 0 - this.frameHeight;
    this.spriteRow = 2;
  }

  //Preload death animation for smooth transition
  if (typeof(this.death) !== 'undefined') {
    preload('img/animations/' + this.death.name + '.png');
  }

  this.changeDir = function() {
    if (inBounds({ actor: this, master })) {
      this.spriteRow = getRandom(4);
      const randomDir = CARDINALS[this.spriteRow];
      if (this.dir === randomDir) {
        this.changeDir();
      } else {
        this.dir = randomDir;
      }
    }
  }

  this.reverse = function() {
    if (this.dir === 'left') {
      this.dir = 'right';
      this.spriteRow = 0;
    } else if (this.dir === 'up') {
      this.dir = 'down';
      this.spriteRow = 2;
    } else if (this.dir === 'right') {
      this.dir = 'left';
      this.spriteRow = 1;
    } else if (this.dir === 'down') {
      this.dir = 'up';
      this.spriteRow = 3;
    }
  }

  this.collide = function() {
    if (this.ship && !this.isBoss) {
      this.dead = true;
    }
  }

  this.hit = function() {
    if (!this.blinking) {
      if (--this.hp === 0) {
        this.dead = true;
      } else {
        this.blinking = true;
        this.blinkCount = FPS;
        this.changeDir();
      }
    }

    updateVictim({
      color: stage.textColor,
      hud,
      victim: this
    });
  }

  this.respawn = function() {
    const position = master.actors.enemies.indexOf(this);

    stage.selector.removeChild(this.selector);
    master.actors.enemies.splice(position, 1);

    new Enemy({
      data,
      hud,
      master,
      stage
    });
  }

  this.kill = function() {
    this.active = false;
    stage.enemiesKilled++;

    if (typeof(this.death) !== 'undefined') {
      this.selector.style.display = 'none';
      new Animation({
        data: this.death,
        master,
        origin: this,
        stage
      });
    } else {
      this.blinkCount = 0;
      this.spriteColumn = 0;
      this.spriteRow = 4;
    }

    updateScore({
      hud,
      points: this.value
    });
  }

  this.update = function() {
    if (this.blinking) {
      if (master.counter % 2 === 0 || this.dead) {
        this.selector.style.display = '';
      } else {
        this.selector.style.display = 'none';
      }

      if (--this.blinkCount === 0) {
        this.blinking = false;
        this.selector.style.display = '';
      }
    }
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

      if (this.spriteColumn < this.moveFrameCount) {
        this.spriteColumn++;
      } else {
        this.spriteColumn = 1;
      }

      const obstruction = getObstruction({
        character: this,
        obstacles: master.actors.obstacles
      });

      if (obstruction !== '' && !inBounds({ actor: this, master })) {
        this.trapped = true;
      } else {
        if (this.dir === 'left') {
          if (this.x - this.speed > 0 && obstruction === '') {
            this.x -= this.speed;
          } else {
            if (obstruction !== '') {
              this.x = obstruction.x + obstruction.frameWidth;
              this.changeDir();
            } else {
              this.x = 0;
              this.reverse();
            }
          }
        } else if (this.dir === 'up') {
          if (this.y - this.speed > 0 && obstruction === '') {
            this.y -= this.speed;
          } else {
            if (obstruction !== '') {
              this.y = obstruction.y + obstruction.frameHeight - this.frameHeight + MAGNIFICATION;
              this.changeDir();
            } else {
              this.y = 0;
              this.reverse();
            }
          }
        } else if (this.dir === 'right') {
          if (this.x + this.speed < master.gameWidth - this.frameWidth && obstruction === '') {
            this.x += this.speed;
          } else {
            if (obstruction !== '') {
              this.x = obstruction.x - this.frameHeight;
              this.changeDir();
            } else {
              this.x = master.gameWidth - this.frameWidth;
              this.reverse();
            }
          }
        } else if (this.dir === 'down') {
          if (this.y + this.speed < master.gameHeight - this.frameHeight && obstruction === '') {
            this.y += this.speed;
          } else {
            if (obstruction !== '') {
              this.y = obstruction.y - this.frameHeight;
              this.changeDir();
            } else {
              this.y = master.gameHeight - this.frameHeight;
              this.reverse();
            }
          }
        }
      }
    }
  }

  this.draw = function() {
    if (this.trapped) {
      this.respawn();
    } else {
      this.selector.style.backgroundPosition = (0 - this.spriteColumn * this.frameWidth) + 'px ' + (0 - this.spriteRow * this.frameHeight) + 'px';
      this.selector.style.left = this.x + 'px';
      this.selector.style.top = this.y + 'px';
    }
  };

  this.draw();
};
