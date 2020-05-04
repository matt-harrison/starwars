import { cardinals, fps, magnification } from '/js/constants/config.js';
import {
  getRandom,
  getObstruction,
  importJSON,
  inBounds,
  preload,
  updateScore,
  updateVictim
} from '/js/constants/utils.js';

import { Animation } from '/js/classes/Animation.js';

export const Enemy = function({
  animations,
  data,
  enemies,
  game,
  hud,
  obstacles,
  stage
}) {
  importJSON(this, data);

  this.active = true;
  this.dead = false;
  this.trapped = false;

  this.speed = this.speed * (magnification / 5);

  this.weaponDelay = fps;//Shoot once per second max
  this.weaponReady = true;
  this.weaponCount = 0;

  this.selector = document.createElement('div');
  this.selector.style.position = 'absolute';
  this.selector.style.width = this.frameWidth + 'px';
  this.selector.style.height = this.frameHeight + 'px';
  this.selector.style.backgroundImage = "url('img/characters/" + this.sprite + ".png')";
  this.selector.style.backgroundSize = this.width + 'px ' + this.height + 'px';
  this.selector.style.backgroundRepeat = 'no-repeat';
  this.selector.style.zIndex = '2';

  enemies.push(this);
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
    this.dir = cardinals[this.spriteRow];
  } else {
    this.dir = stage.enemyDir;
  }

  if (this.dir === 'left') {
    this.x = game.width;
    this.y = getRandom(game.height - this.frameHeight);
    this.spriteRow = 1;
  } else if (this.dir === 'up') {
    this.x = getRandom(game.width - this.frameWidth);
    this.y = game.height;
    this.spriteRow = 3;
  } else if (this.dir === 'right') {
    this.x = 0 - this.frameWidth;
    this.y = getRandom(game.height - this.frameHeight);
    this.spriteRow = 0;
  } else if (this.dir === 'down') {
    this.x = getRandom(game.width - this.frameWidth);
    this.y = 0 - this.frameHeight;
    this.spriteRow = 2;
  }

  //Preload death animation for smooth transition
  if (typeof(this.death) !== 'undefined') {
    preload('img/animations/' + this.death.name + '.png');
  }

  this.changeDir = function() {
    if (inBounds({game, obj: this})) {
      this.spriteRow = getRandom(4);
      const randomDir = cardinals[this.spriteRow];
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
        this.blinkCount = fps;
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
    const position = enemies.indexOf(this);

    stage.selector.removeChild(this.selector);
    enemies.splice(position, 1);

    new Enemy({
      animations,
      data,
      enemies,
      game,
      hud,
      obstacles,
      stage
    });
  }

  this.kill = function() {
    this.active = false;
    stage.enemiesKilled++;

    if (typeof(this.death) !== 'undefined') {
      this.selector.style.display = 'none';
      new Animation({
        animations,
        data: this.death,
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
      if (game.counter%2 === 0 || this.dead) {
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

      var obs = getObstruction({
        obj: this,
        obstacles
      });

      if (obs !== '' && !inBounds({game, obj: this})) {
        this.trapped = true;
      } else {
        if (this.dir === 'left') {
          if (this.x - this.speed > 0 && obs === '') {
            this.x -= this.speed;
          } else {
            if (obs !== '') {
              this.x = obs.x + obs.frameWidth;
              this.changeDir();
            } else {
              this.x = 0;
              this.reverse();
            }
          }
        } else if (this.dir === 'up') {
          if (this.y - this.speed > 0 && obs === '') {
            this.y -= this.speed;
          } else {
            if (obs !== '') {
              this.y = obs.y + obs.frameHeight - this.frameHeight + magnification;
              this.changeDir();
            } else {
              this.y = 0;
              this.reverse();
            }
          }
        } else if (this.dir === 'right') {
          if (this.x + this.speed < game.width - this.frameWidth && obs === '') {
            this.x += this.speed;
          } else {
            if (obs !== '') {
              this.x = obs.x - this.frameHeight;
              this.changeDir();
            } else {
              this.x = game.width - this.frameWidth;
              this.reverse();
            }
          }
        } else if (this.dir === 'down') {
          if (this.y + this.speed < game.height - this.frameHeight && obs === '') {
            this.y += this.speed;
          } else {
            if (obs !== '') {
              this.y = obs.y - this.frameHeight;
              this.changeDir();
            } else {
              this.y = game.height - this.frameHeight;
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
