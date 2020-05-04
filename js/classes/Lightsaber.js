import { COLORS }          from '/js/constants/colors.js';
import { magnification } from '/js/constants/config.js';
import { collision }     from '/js/constants/utils.js';

export const Lightsaber = function({
  game,
  isLongRange,
  origin,
  props,
  stage
}) {
  this.type = 'lightsaber';
  this.origin = origin;
  this.dir = origin.dir;
  this.color = origin.weaponColor;
  this.active = !isLongRange;
  this.speed = isLongRange ? 30 * (magnification / 5) : 0;
  this.thrown = isLongRange;

  if (this.dir === 'left') {
    this.frameWidth = 8 * magnification;
    this.frameHeight = 1 * magnification;
    this.hiltWidth = 2 * magnification;
    this.hiltHeight = 1 * magnification;
    this.x = origin.x + (origin.weaponOffsetLeft[0] * magnification) - this.frameWidth;
    this.y = origin.y + (origin.weaponOffsetLeft[1] * magnification);
    this.hiltX = this.frameWidth - this.hiltWidth;
    this.hiltY = 0;
  } else if (this.dir === 'up') {
    this.frameWidth = 1 * magnification;
    this.frameHeight = 8 * magnification;
    this.hiltWidth = 1 * magnification;
    this.hiltHeight = 2 * magnification;
    this.x = origin.x + (origin.weaponOffsetUp[0] * magnification);
    this.y = origin.y + (origin.weaponOffsetUp[1] * magnification) - this.frameHeight;
    this.hiltX = 0;
    this.hiltY = this.frameHeight - this.hiltHeight;;
  } else if (this.dir === 'right') {
    this.frameWidth = 8 * magnification;
    this.frameHeight = 1 * magnification;
    this.hiltWidth = 2 * magnification;
    this.hiltHeight = 1 * magnification;
    this.x = origin.x + (origin.weaponOffsetRight[0] * magnification);
    this.y = origin.y + (origin.weaponOffsetRight[1] * magnification);
    this.hiltX = 0;
    this.hiltY = 0;
  } else if (this.dir === 'down') {
    this.frameWidth = 1 * magnification;
    this.frameHeight = 8 * magnification;
    this.hiltWidth = 1 * magnification;
    this.hiltHeight = 2 * magnification;
    this.x = origin.x + (origin.weaponOffsetDown[0] * magnification);
    this.y = origin.y + (origin.weaponOffsetDown[1] * magnification);
    this.hiltX = 0;
    this.hiltY = 0;
  }

  this.width = this.frameWidth;
  this.height = this.frameHeight;

  this.selector = document.createElement('div');
  this.selector.style.position = 'absolute';
  this.selector.style.left = this.x + 'px';
  this.selector.style.top = this.y + 'px';
  this.selector.style.width = this.frameWidth + 'px';
  this.selector.style.height = this.frameHeight + 'px';
  this.selector.style.backgroundColor = this.color;
  this.selector.style.zIndex = '4';

  this.hilt = document.createElement('div');
  this.hilt.style.position = 'relative';
  this.hilt.style.left = this.hiltX + 'px';
  this.hilt.style.top = this.hiltY + 'px';
  this.hilt.style.width = this.hiltWidth + 'px';
  this.hilt.style.height = this.hiltHeight + 'px';
  this.hilt.style.backgroundColor = COLORS.GRAY;

  props.push(this);
  stage.selector.appendChild(this.selector);
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
    const position = props.indexOf(this);

    stage.selector.removeChild(this.selector);
    props.splice(position, 1);
    origin.lightsaber = '';
    origin.spriteColumn = 0;
  }

  this.update = function() {
    if (!this.active) {
      if (!collision(this, this.origin)) {
        this.active = true;
      }
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
        if (this.x + this.speed < game.width - this.width) {
          this.x += this.speed;
        } else {
          this.x = game.width - this.frameWidth;
          this.reverse();
        }
      } else if (this.dir === 'down') {
        if (this.y + this.speed < game.height - this.height) {
          this.y += this.speed;
        } else {
          this.y = game.height - this.frameHeight;
          this.reverse();
        }
      }
    }
  }

  this.draw = function() {
    if (origin.attacking) {
      this.selector.style.left = this.x + 'px';
      this.selector.style.top = this.y + 'px';
    } else {
      this.kill();
    }
  }
};
