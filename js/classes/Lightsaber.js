import { attachNode, collision } from '/js/utils.js';

import { CARDINALS, COLORS, MAGNIFICATION } from '/js/constants/index.js';

export const Lightsaber = function({
  isLongRange,
  game,
  origin
}) {
  this.color    = origin.weaponColor;
  this.dir      = origin.dir;
  this.isActive = !isLongRange;
  this.origin   = origin;
  this.speed    = isLongRange ? 30 * (MAGNIFICATION / 5) : 0;
  this.thrown   = isLongRange;
  this.type     = 'lightsaber';

  if (this.dir === CARDINALS.LEFT) {
    this.frameHeight = 1 * MAGNIFICATION;
    this.frameWidth  = 8 * MAGNIFICATION;
    this.hiltHeight  = 1 * MAGNIFICATION;
    this.hiltWidth   = 2 * MAGNIFICATION;
    this.hiltX       = this.frameWidth - this.hiltWidth;
    this.hiltY       = 0;
    this.x           = origin.x + (origin.weaponOffsetLeft[0] * MAGNIFICATION) - this.frameWidth;
    this.y           = origin.y + (origin.weaponOffsetLeft[1] * MAGNIFICATION);
  } else if (this.dir === CARDINALS.UP) {
    this.frameHeight = 8 * MAGNIFICATION;
    this.frameWidth  = 1 * MAGNIFICATION;
    this.hiltHeight  = 2 * MAGNIFICATION;
    this.hiltWidth   = 1 * MAGNIFICATION;
    this.hiltX       = 0;
    this.hiltY       = this.frameHeight - this.hiltHeight;;
    this.x           = origin.x + (origin.weaponOffsetUp[0] * MAGNIFICATION);
    this.y           = origin.y + (origin.weaponOffsetUp[1] * MAGNIFICATION) - this.frameHeight;
  } else if (this.dir === CARDINALS.RIGHT) {
    this.frameHeight = 1 * MAGNIFICATION;
    this.frameWidth  = 8 * MAGNIFICATION;
    this.hiltHeight  = 1 * MAGNIFICATION;
    this.hiltWidth   = 2 * MAGNIFICATION;
    this.hiltX       = 0;
    this.hiltY       = 0;
    this.x           = origin.x + (origin.weaponOffsetRight[0] * MAGNIFICATION);
    this.y           = origin.y + (origin.weaponOffsetRight[1] * MAGNIFICATION);
  } else if (this.dir === CARDINALS.DOWN) {
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

  this.selector = attachNode({
    attributes: {
      id: `lightsaber${game.props.length}`
    },
    parent: game.stage.selector,
    styles: {
      backgroundColor: this.color,
      height         : `${this.frameHeight}px`,
      left           : `${this.x}px`,
      position       : 'absolute',
      top            : `${this.y}px`,
      width          : `${this.frameWidth}px`,
      zIndex         : 700,
    }
  });

  this.hilt = attachNode({
    attributes: {
      id: 'hilt'
    },
    parent: this.selector,
    styles: {
      backgroundColor: COLORS.GRAY,
      height         : `${this.hiltHeight}px`,
      left           : `${this.hiltX}px`,
      position       : 'relative',
      top            : `${this.hiltY}px`,
      width          : `${this.hiltWidth}px`
    }
  });

  game.props.push(this);

  this.reverse = function() {
    if (this.dir === CARDINALS.LEFT) {
      this.dir = CARDINALS.RIGHT;
    } else if (this.dir === CARDINALS.UP) {
      this.dir = CARDINALS.DOWN;
    } else if (this.dir === CARDINALS.RIGHT) {
      this.dir = CARDINALS.LEFT;
    } else if (this.dir === CARDINALS.DOWN) {
      this.dir = CARDINALS.UP;
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
    if (!this.isActive && !collision(this, this.origin)) {
      this.isActive = true;
    }

    if (this.thrown) {
      if (this.dir === CARDINALS.LEFT) {
        if (this.x - this.speed > 0) {
          this.x -= this.speed;
        } else {
          this.x = 0;
          this.reverse();
        }
      } else if (this.dir === CARDINALS.UP) {
        if (this.y - this.speed > 0) {
          this.y -= this.speed;
        } else {
          this.y = 0;
          this.reverse();
        }
      } else if (this.dir === CARDINALS.RIGHT) {
        if (this.x + this.speed < game.width - this.width) {
          this.x += this.speed;
        } else {
          this.x = game.width - this.frameWidth;
          this.reverse();
        }
      } else if (this.dir === CARDINALS.DOWN) {
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
    if (origin.isAttacking) {
      this.selector.style.left = `${this.x}px`;
      this.selector.style.top  = `${this.y}px`;
    } else {
      this.kill();
    }
  }
};
