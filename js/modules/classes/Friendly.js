import { cardinals, magnification } from '../../config.js';

import { Animation } from './Animation.js';

import { blueDark, red } from '../colors.js';
import { getRandom, getObstruction, importJSON, inBounds, preload, updateScore, updateVictim } from '../utils.js';

export const Friendly = function({
  animations,
  data,
  details,
  friendlies,
  game,
  hud,
  obstacles,
  stage
}) {
  importJSON(this, data);
  importJSON(this, details);

  this.active = true;
  this.dead = false;
  this.trapped = false;

  this.speed = this.speed * (magnification / 5);

  this.selector = document.createElement('div');
  this.selector.style.position = 'absolute';
  this.selector.style.width = this.frameWidth + 'px';
  this.selector.style.height = this.frameHeight + 'px';
  this.selector.style.backgroundImage = "url('img/characters/" + this.sprite + ".png')";
  this.selector.style.backgroundSize = this.width + 'px ' + this.height + 'px';
  this.selector.style.backgroundRepeat = 'no-repeat';
  this.selector.style.zIndex = '2';

  friendlies.push(this);
  stage.selector.appendChild(this.selector);

  if (typeof(this.dir) === 'undefined') {
    this.spriteRow = getRandom(4)
    this.dir = cardinals[this.spriteRow];
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

  this.remove = function() {
    const position = friendlies.indexOf(this);
    friendlies.splice(position, 1);
  }

  this.respawn = function() {
    stage.selector.removeChild(this.selector);
    const position = friendlies.indexOf(this);
    friendlies.splice(position, 1);
    new Friendly({
      animations,
      data,
      details,
      friendlies,
      game,
      hud,
      obstacles,
      stage
    });
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
    } else {
      this.spriteColumn = 0;
      this.spriteRow = 4;
    }

    if (this.value > 0) {
      updateVictim({
        color: blueDark,
        hud,
        victim: this
      });
    } else {
      updateVictim({
        color: red,
        hud,
        victim: this
      });
    }

    updateScore({
      hud,
      points: this.value
    });
  }

  this.update = function() {
    if (this.active) {
      if (this.spriteColumn < this.moveFrameCount) {
        this.spriteColumn++;
      } else {
        this.spriteColumn = 1;
      }

      var obstruction = getObstruction({
        obj: this,
        obstacles
      });

      if (obstruction !== '' && !inBounds({game, obj: this})) {
        this.trapped = true;
      } else {
        if (this.dir === 'left') {
          if (this.x > 0 - this.frameWidth) {
            if (obstruction === '') {
              this.x -= this.speed;
            } else {
              this.reverse();
            }
          } else {
            this.active = false;
          }
        } else if (this.dir === 'up') {
          if (this.y > 0 - this.frameHeight) {
            if (obstruction === '') {
              this.y -= this.speed;
            } else {
              this.reverse();
            }
          } else {
            this.active = false;
          }
        } else if (this.dir === 'right') {
          if (this.x < game.width + this.frameWidth) {
            if (obstruction === '') {
              this.x += this.speed;
            } else {
              this.reverse();
            }
          } else {
            this.active = false;
          }
        } else if (this.dir === 'down') {
          if (this.y < game.height + this.frameHeight) {
            if (obstruction === '') {
              this.y += this.speed;
            } else {
              this.reverse();
            }
          } else {
            this.active = false;
          }
        }
      }
    }
  }

  this.draw = function() {
    this.selector.style.backgroundPosition = (0 - this.spriteColumn * this.frameWidth) + 'px ' + (0 - this.spriteRow * this.frameHeight) + 'px';
    this.selector.style.left = this.x + 'px';
    this.selector.style.top = this.y + 'px';

    if (!this.active) {
      this.remove();
    } else if (this.trapped) {
      this.respawn();
    }
  };

  this.draw();
};