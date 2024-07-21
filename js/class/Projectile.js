import {
  CARDINALS,
  MAGNIFICATION,
  WEAPON_TYPES,
  WEAPONS
} from '/js/constants/index.js';
import { attachNode } from '/js/utils.js';

export const Projectile = function({
  game,
  origin
}) {
  Object.assign(this, {
    dir             : origin.dir,
    frameCount      : origin.weapon.frameCount,
    frameHeight     : origin.weapon.frameHeight,
    frameWidth      : origin.weapon.frameWidth,
    height          : origin.weapon.frameHeight,
    isActive        : true,
    isLastFrame     : false,
    isLastFrameDrawn: false,
    name            : origin.weapon.name,
    origin,
    speed           : origin.weapon.speed || 30,
    spriteColumn    : 0,
    type            : origin.weapon.type,
    width           : origin.weapon.frameWidth * origin.weapon.frameCount
  });

  origin.isWeaponReady = false;

  if (this.name === WEAPONS.LASER.name) {
    if (this.dir === CARDINALS.LEFT || this.dir === CARDINALS.RIGHT) {
      this.height = 1 * MAGNIFICATION;
      this.width  = 2 * MAGNIFICATION;
    } else if (this.dir === CARDINALS.UP || this.dir === CARDINALS.DOWN) {
      this.height = 2 * MAGNIFICATION;
      this.width  = 1 * MAGNIFICATION;
    }

    this.frameHeight = this.height;
    this.frameWidth  = this.width;
  }

  this.speed = this.speed * (MAGNIFICATION / 5);

  if (this.dir === CARDINALS.LEFT) {
    this.x = origin.x + (origin.weaponOffsetLeft[0] * MAGNIFICATION) - this.frameWidth;
    this.y = origin.y + (origin.weaponOffsetLeft[1] * MAGNIFICATION);
  } else if (this.dir === CARDINALS.UP) {
    this.x = origin.x + (origin.weaponOffsetUp[0] * MAGNIFICATION);
    this.y = origin.y + (origin.weaponOffsetUp[1] * MAGNIFICATION) - this.frameHeight;
  } else if (this.dir === CARDINALS.RIGHT) {
    this.x = origin.x + (origin.weaponOffsetRight[0] * MAGNIFICATION);
    this.y = origin.y + (origin.weaponOffsetRight[1] * MAGNIFICATION);
  } else if (this.dir === CARDINALS.DOWN) {
    this.x = origin.x + (origin.weaponOffsetDown[0] * MAGNIFICATION);
    this.y = origin.y + (origin.weaponOffsetDown[1] * MAGNIFICATION);
  }

  this.selector = attachNode({
    attributes: {
      id: `projectile${game.props.length}`
    },
    parent: game.stage.selector,
    styles: {
      backgroundSize: `${this.width}px ${this.height}px`,
      height        : `${this.frameHeight}px`,
      position      : 'absolute',
      width         : `${this.frameWidth}px`,
      zIndex        : 600
    }
  });

  if (this.name === WEAPONS.LASER.name) {
    this.selector.style.backgroundColor = origin.weaponColor;
  } else {
    this.selector.style.backgroundImage = `url('img/projectiles/${this.name}.png')`;
  }

  game.props.push(this);

  this.kill = () => {
    this.isLastFrame = true;
  }

  this.remove = () => {
    this.isActive = false;

    game.stage.selector.removeChild(this.selector);
  }

  this.update = () => {
    if (this.isActive && !this.isLastFrame) {
      if (this.frameCount > 1) {
        if (++this.spriteColumn > this.frameCount) {
          this.spriteColumn = 0;
        }
      }

      if (this.dir === CARDINALS.LEFT) {
        if (this.x > 0 - this.frameWidth) {
          this.x -= this.speed;
        } else {
          this.remove();
        }
      } else if (this.dir === CARDINALS.UP) {
        if (this.y > 0 - this.frameHeight) {
          this.y -= this.speed;
        } else {
          this.remove();
        }
      } else if (this.dir === CARDINALS.RIGHT) {
        if (this.x < game.width) {
          this.x += this.speed;
        } else {
          this.remove();
        }
      } else if (this.dir === CARDINALS.DOWN) {
        if (this.y < game.height) {
          this.y += this.speed;
        } else {
          this.remove();
        }
      }
    }

    if (this.isActive && this.isLastFrameDrawn) {
      this.remove();
    }
  }

  this.draw = () => {
    if (this.isActive) {
      this.selector.style.backgroundPosition = `${0 - this.spriteColumn * this.frameWidth}px 0`;
      this.selector.style.left               = `${this.x}px`;
      this.selector.style.top                = `${this.y}px`;
    }

    if (this.isLastFrame) {
      this.isLastFrameDrawn = true;
    }
  };

  this.draw();
};
