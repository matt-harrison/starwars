import { collision } from '/js/utils.js';

import {
  ANIMATIONS,
  COLORS,
  MAGNIFICATION,
  WEAPON_TYPES
} from '/js/constants/index.js';

import { Animation } from '/js/classes/Animation.js';

export const Bomb = function({
  game,
  origin
}) {
  this.frameCount   = 5;
  this.frameHeight  = 1 * MAGNIFICATION;
  this.frameWidth   = 1 * MAGNIFICATION;
  this.isActive     = false;
  this.origin       = origin;
  this.spriteColumn = 0;
  this.type         = WEAPON_TYPES.BOMB;
  this.x            = origin.x + (origin.weaponOffset[0] * MAGNIFICATION);
  this.y            = origin.y + (origin.weaponOffset[1] * MAGNIFICATION);

  this.selector                       = document.createElement('div');
  this.selector.id                    = `bomb${game.props.length}`;
  this.selector.style.position        = 'absolute';
  this.selector.style.left            = `${this.x}px`;
  this.selector.style.top             = `${this.y}px`;
  this.selector.style.width           = `${this.frameWidth}px`;
  this.selector.style.height          = `${this.frameHeight}px`;
  this.selector.style.backgroundColor = COLORS.BLACK;
  this.selector.style.zIndex          = '2';

  game.props.push(this);
  game.stage.selector.appendChild(this.selector);

  this.kill = function() {
    this.isActive = false;

    game.stage.selector.removeChild(this.selector);

    new Animation({
      data: ANIMATIONS.DETONATION,
      game,
      origin: this
    });
  }

  this.update = function() {
    if (!this.isActive && !collision(this, this.origin)) {
      this.isActive = true;
    }
  }

  this.draw = function() {
    if (this.isActive) {
      if (game.counter % 2) {
        this.selector.style.backgroundColor = COLORS.BLACK;
      } else {
        this.selector.style.backgroundColor = COLORS.RED;
      }
    }
  }
};
