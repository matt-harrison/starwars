import {
  CARDINALS,
  MAGNIFICATION,
  PROJECTILES,
  WEAPON_TYPES,
} from '/js/constants/index.js';
import { attachNode } from '/js/utils.js';

export const Projectile = function({
  game,
  origin
}) {
  if (typeof origin.projectile == 'object') {
    Object.assign(this, origin.projectile);
  }

  origin.isWeaponReady = false;

  this.dir              = origin.dir;
  this.isActive         = true;
  this.isLastFrame      = false;
  this.isLastFrameDrawn = false;
  this.origin           = origin;
  this.spriteColumn     = 0;
  this.type             = origin.projectile;

  if (origin.projectile === PROJECTILES.LASER) {
    if (this.dir === CARDINALS.LEFT || this.dir === CARDINALS.RIGHT) {
      this.height = 1 * MAGNIFICATION;
      this.width  = 2 * MAGNIFICATION;
    } else if (this.dir === CARDINALS.UP || this.dir === CARDINALS.DOWN) {
      this.height = 2 * MAGNIFICATION;
      this.width  = 1 * MAGNIFICATION;
    }

    this.frameHeight = this.height;
    this.frameWidth  = this.width;
    this.speed       = 30;
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

  if (origin.projectile === PROJECTILES.LASER) {
    this.selector.style.backgroundColor = origin.weaponColor;
  } else {
    this.selector.style.backgroundImage = `url('img/projectiles/${this.name}.png')`;
  }

  game.props.push(this);

  this.setLastFrame = () => {
    this.isLastFrame = true;
  };

  this.kill = () => {
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
          this.kill();
        }
      } else if (this.dir === CARDINALS.UP) {
        if (this.y > 0 - this.frameHeight) {
          this.y -= this.speed;
        } else {
          this.kill();
        }
      } else if (this.dir === CARDINALS.RIGHT) {
        if (this.x < game.width) {
          this.x += this.speed;
        } else {
          this.kill();
        }
      } else if (this.dir === CARDINALS.DOWN) {
        if (this.y < game.height) {
          this.y += this.speed;
        } else {
          this.kill();
        }
      }
    }

    if (this.isActive && this.isLastFrameDrawn) {
      this.kill();
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
