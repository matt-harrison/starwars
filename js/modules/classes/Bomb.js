import { magnification } from '../../config.js';

// import { Animation } from './Animation.js';

import { detonation } from '../animations.js';
import { black, red } from '../colors.js';
import { collision } from '../utils.js';

export const Bomb = function() {
  this.init = function(origin, id) {
    this.type = 'bomb';
    this.origin = origin;
    this.active = false;
    this.counter = 0;

    this.x = origin.x + (origin.weaponOffset[0] * magnification);
    this.y = origin.y + (origin.weaponOffset[1] * magnification);
    this.frameWidth = 1 * magnification;
    this.frameHeight = 1 * magnification;
    this.spriteColumn = 0;
    this.frameCount = 5;

    this.selector = document.createElement('div');
    this.selector.id = 'bomb' + id;
    this.selector.style.position = 'absolute';
    this.selector.style.left = this.x + 'px';
    this.selector.style.top = this.y + 'px';
    this.selector.style.width = this.frameWidth + 'px';
    this.selector.style.height = this.frameHeight + 'px';
    this.selector.style.backgroundColor = black;
    this.selector.style.zIndex = '2';
  }

  this.kill = function(Animation) {
    new Animation(detonation, this);
  }

  this.update = function() {
    this.counter++;

    if (!this.active) {
      if (!collision(this, this.origin)) {
        this.active = true;
      }
    }
  }

  this.draw = function() {
    if (this.active) {
      if (this.counter % 2) {
        this.selector.style.backgroundColor = black;
      } else {
        this.selector.style.backgroundColor = red;
      }
    }
  }
};
