import {
  CARDINALS,
  MAGNIFICATION
} from '/js/constants/config.js';
import { PROJECTILES, WEAPON_TYPES } from '/js/constants/weapons.js';

export const Projectile = function({
  master,
  origin
}) {
  Object.assign(this, origin.projectile);

  origin.weaponReady = false;

  this.active       = true;
  this.dir          = origin.dir;
  this.origin       = origin;
  this.spriteColumn = 0;
  this.type         = origin.projectile;

  this.selector                = document.createElement('div');
  this.selector.id             = `projectile${master.props.length}`;
  this.selector.style.position = 'absolute';

  if (origin.projectile === PROJECTILES.LASER) {
    this.selector.style.backgroundColor = origin.weaponColor;

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
  } else {
    this.selector.style.backgroundImage = `url('img/projectiles/${this.name}.png')`;
  }

  this.selector.style.backgroundSize = `${this.width}px ${this.height}px`;
  this.speed                         = this.speed * (MAGNIFICATION / 5);

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

  this.selector.style.height = this.frameHeight + 'px';
  this.selector.style.width  = this.frameWidth  + 'px';
  this.selector.style.zIndex = '4';

  master.props.push(this);
  master.dom.stage.selector.appendChild(this.selector);

  this.kill = function() {
    this.active = false;

    master.dom.stage.selector.removeChild(this.selector);
  }

  this.update = function() {
    if (this.active) {
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
        if (this.x < master.gameWidth) {
          this.x += this.speed;
        } else {
          this.kill();
        }
      } else if (this.dir === CARDINALS.DOWN) {
        if (this.y < master.gameHeight) {
          this.y += this.speed;
        } else {
          this.kill();
        }
      }
    }
  }

  this.draw = function() {
    if (this.active) {
      this.selector.style.backgroundPosition = `${0 - this.spriteColumn * this.frameWidth}px 0`;
      this.selector.style.left               = `${this.x}px`;
      this.selector.style.top                = `${this.y}px`;
    }
  };

  this.draw();
};
