import { collision } from '/js/utils.js';

import { COLORS, MAGNIFICATION } from '/js/constants/config.js';

export const Lightsaber = function({
  isLongRange,
  game,
  origin
}) {
  this.active = !isLongRange;
  this.color  = origin.weaponColor;
  this.dir    = origin.dir;
  this.origin = origin;
  this.speed  = isLongRange ? 30 * (MAGNIFICATION / 5) : 0;
  this.thrown = isLongRange;
  this.type   = 'lightsaber';

  if (this.dir === 'left') {
    this.frameHeight = 1 * MAGNIFICATION;
    this.frameWidth  = 8 * MAGNIFICATION;
    this.hiltHeight  = 1 * MAGNIFICATION;
    this.hiltWidth   = 2 * MAGNIFICATION;
    this.hiltX       = this.frameWidth - this.hiltWidth;
    this.hiltY       = 0;
    this.x           = origin.x + (origin.weaponOffsetLeft[0] * MAGNIFICATION) - this.frameWidth;
    this.y           = origin.y + (origin.weaponOffsetLeft[1] * MAGNIFICATION);
  } else if (this.dir === 'up') {
    this.frameHeight = 8 * MAGNIFICATION;
    this.frameWidth  = 1 * MAGNIFICATION;
    this.hiltHeight  = 2 * MAGNIFICATION;
    this.hiltWidth   = 1 * MAGNIFICATION;
    this.hiltX       = 0;
    this.hiltY       = this.frameHeight - this.hiltHeight;;
    this.x           = origin.x + (origin.weaponOffsetUp[0] * MAGNIFICATION);
    this.y           = origin.y + (origin.weaponOffsetUp[1] * MAGNIFICATION) - this.frameHeight;
  } else if (this.dir === 'right') {
    this.frameHeight = 1 * MAGNIFICATION;
    this.frameWidth  = 8 * MAGNIFICATION;
    this.hiltHeight  = 1 * MAGNIFICATION;
    this.hiltWidth   = 2 * MAGNIFICATION;
    this.hiltX       = 0;
    this.hiltY       = 0;
    this.x           = origin.x + (origin.weaponOffsetRight[0] * MAGNIFICATION);
    this.y           = origin.y + (origin.weaponOffsetRight[1] * MAGNIFICATION);
  } else if (this.dir === 'down') {
    this.frameHeight = 8 * MAGNIFICATION;
    this.frameWidth  = 1 * MAGNIFICATION;
    this.hiltHeight  = 2 * MAGNIFICATION;
    this.hiltWidth   = 1 * MAGNIFICATION;
    this.hiltX       = 0;
    this.hiltY       = 0;
    this.x           = origin.x + (origin.weaponOffsetDown[0] * MAGNIFICATION);
    this.y           = origin.y + (origin.weaponOffsetDown[1] * MAGNIFICATION);
  }

  this.height = this.frameHeight;
  this.width  = this.frameWidth;

  this.selector                       = document.createElement('div');
  this.selector.id                    = `lightsaber${game.props.length}`;
  this.selector.style.backgroundColor = this.color;
  this.selector.style.height          = this.frameHeight + 'px';
  this.selector.style.left            = this.x + 'px';
  this.selector.style.position        = 'absolute';
  this.selector.style.top             = this.y + 'px';
  this.selector.style.width           = this.frameWidth + 'px';
  this.selector.style.zIndex          = '4';

  this.hilt                       = document.createElement('div');
  this.hilt.style.backgroundColor = COLORS.GRAY;
  this.hilt.style.height          = this.hiltHeight + 'px';
  this.hilt.style.left            = this.hiltX + 'px';
  this.hilt.style.position        = 'relative';
  this.hilt.style.top             = this.hiltY + 'px';
  this.hilt.style.width           = this.hiltWidth + 'px';

  game.props.push(this);
  game.stage.selector.appendChild(this.selector);
  this.selector.appendChild(this.hilt);

  this.reverse = function() {
    if (this.dir === 'left') {
      this.dir = 'right';
    } else if (this.dir === 'up') {
      this.dir = 'down';
    } else if (this.dir === 'right') {
      this.dir = 'left';
    } else if (this.dir === 'down') {
      this.dir = 'up';
    }
  }

  this.kill = function() {
    const position = game.props.indexOf(this);

    game.stage.selector.removeChild(this.selector);
    game.props.splice(position, 1);

    origin.lightsaber   = '';
    origin.spriteColumn = 0;
  }

  this.update = function() {
    if (!this.active && !collision(this, this.origin)) {
      this.active = true;
    }

    if (this.thrown) {
      if (this.dir === 'left') {
        if (this.x - this.speed > 0) {
          this.x -= this.speed;
        } else {
          this.x = 0;
          this.reverse();
        }
      } else if (this.dir === 'up') {
        if (this.y - this.speed > 0) {
          this.y -= this.speed;
        } else {
          this.y = 0;
          this.reverse();
        }
      } else if (this.dir === 'right') {
        if (this.x + this.speed < game.gameWidth - this.width) {
          this.x += this.speed;
        } else {
          this.x = game.gameWidth - this.frameWidth;
          this.reverse();
        }
      } else if (this.dir === 'down') {
        if (this.y + this.speed < game.gameHeight - this.height) {
          this.y += this.speed;
        } else {
          this.y = game.gameHeight - this.frameHeight;
          this.reverse();
        }
      }
    }
  }

  this.draw = function() {
    if (origin.attacking) {
      this.selector.style.left = this.x + 'px';
      this.selector.style.top  = this.y + 'px';
    } else {
      this.kill();
    }
  }
};
