import { collision } from '/js/utils.js';

import { ANIMATIONS } from '/js/constants/animations.js';
import {
  COLORS,
  MAGNIFICATION
} from '/js/constants/config.js';
import { WEAPON_TYPES } from '/js/constants/weapons.js';

import { Animation } from '/js/classes/Animation.js';

export const Bomb = function({
  master,
  origin
}) {
  this.active       = false;
  this.frameCount   = 5;
  this.frameHeight  = 1 * MAGNIFICATION;
  this.frameWidth   = 1 * MAGNIFICATION;
  this.origin       = origin;
  this.spriteColumn = 0;
  this.type         = WEAPON_TYPES.BOMB;
  this.x            = origin.x + (origin.weaponOffset[0] * MAGNIFICATION);
  this.y            = origin.y + (origin.weaponOffset[1] * MAGNIFICATION);

  this.selector                       = document.createElement('div');
  this.selector.id                    = `bomb${master.props.length}`;
  this.selector.style.position        = 'absolute';
  this.selector.style.left            = `${this.x}px`;
  this.selector.style.top             = `${this.y}px`;
  this.selector.style.width           = `${this.frameWidth}px`;
  this.selector.style.height          = `${this.frameHeight}px`;
  this.selector.style.backgroundColor = COLORS.BLACK;
  this.selector.style.zIndex          = '2';

  master.props.push(this);
  master.dom.stage.selector.appendChild(this.selector);

  this.kill = function() {
    this.active = false;

    master.dom.stage.selector.removeChild(this.selector);

    new Animation({
      data: ANIMATIONS.DETONATION,
      master,
      origin: this
    });
  }

  this.update = function() {
    if (!this.active && !collision(this, this.origin)) {
      this.active = true;
    }
  }

  this.draw = function() {
    if (this.active) {
      if (master.counter % 2) {
        this.selector.style.backgroundColor = COLORS.BLACK;
      } else {
        this.selector.style.backgroundColor = COLORS.RED;
      }
    }
  }
};
