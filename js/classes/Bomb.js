import { attachNode, collision } from '/js/utils.js';

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

  this.selector = attachNode({
    attributes: {
      id: `bomb${game.props.length}`
    },
    parent: game.stage.selector,
    styles: {
      backgroundColor: COLORS.BLACK,
      height         : `${this.frameHeight}px`,
      left           : `${this.x}px`,
      position       : 'absolute',
      top            : `${this.y}px`,
      width          : `${this.frameWidth}px`,
      zIndex         : '2'
    }
  });

  game.props.push(this);

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
