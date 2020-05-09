import {
  getRandom,
  getObstruction,
  inBounds,
  preload,
  updateScore,
  updateVictim
} from '/js/utils.js';

import { CARDINALS, COLORS, MAGNIFICATION } from '/js/constants/config.js';

import { Animation } from '/js/classes/Animation.js';

export const Friendly = function({
  data,
  master
}) {
  Object.assign(this, data.character);
  Object.assign(this, data.details);

  this.active  = true;
  this.dead    = false;
  this.dir     = this.dir || CARDINALS[getRandom(4)]
  this.speed   = this.speed * (MAGNIFICATION / 5);
  this.trapped = false;

  this.selector = document.createElement('div');
  this.selector.id = `friendly${master.actorCount++}`;
  this.selector.style.position = 'absolute';
  this.selector.style.width = this.frameWidth + 'px';
  this.selector.style.height = this.frameHeight + 'px';
  this.selector.style.backgroundImage = "url('img/characters/" + this.sprite + ".png')";
  this.selector.style.backgroundSize = this.width + 'px ' + this.height + 'px';
  this.selector.style.backgroundRepeat = 'no-repeat';
  this.selector.style.zIndex = '2';

  // adapt to imported function
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

  master.actors.friendlies.push(this);
  master.dom.stage.selector.appendChild(this.selector);

  // adapt to imported function
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
    const position = master.actors.friendlies.indexOf(this);
    master.actors.friendlies.splice(position, 1);
  }

  this.respawn = function() {
    const position = master.actors.friendlies.indexOf(this);

    master.dom.stage.selector.removeChild(this.selector);
    master.actors.friendlies.splice(position, 1);

    new Friendly({
      data,
      master
    });
  }

  this.kill = function() {
    this.active = false;

    if (typeof(this.death) !== 'undefined') {
      this.selector.style.display = 'none';
      new Animation({
        data: this.death,
        master,
        origin: this
      });
    } else {
      this.spriteColumn = 0;
      this.spriteRow = 4;
    }

    if (this.value > 0) {
      updateVictim({
        color: COLORS.BLUE_DARK,
        hud: master.dom.hud,
        victim: this
      });
    } else {
      updateVictim({
        color: COLORS.RED,
        hud: master.dom.hud,
        victim: this
      });
    }

    updateScore({
      hud: master.dom.hud,
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

      const obstruction = getObstruction({
        character: this,
        obstacles: master.actors.obstacles
      });

      if (obstruction !== '' && !inBounds({ actor: this, master })) {
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
          if (this.x < master.gameWidth + this.frameWidth) {
            if (obstruction === '') {
              this.x += this.speed;
            } else {
              this.reverse();
            }
          } else {
            this.active = false;
          }
        } else if (this.dir === 'down') {
          if (this.y < master.gameHeight + this.frameHeight) {
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