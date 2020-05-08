import { collision } from '/js/utils.js';

import { ANIMATIONS }            from '/js/constants/animations.js';
import { COLORS, MAGNIFICATION } from '/js/constants/config.js';

import { Animation } from '/js/classes/Animation.js';

export const Bomb = function({
  master,
  origin,
  stage
}) {
  this.type = 'bomb';
  this.origin = origin;
  this.active = false;

  this.x = origin.x + (origin.weaponOffset[0] * MAGNIFICATION);
  this.y = origin.y + (origin.weaponOffset[1] * MAGNIFICATION);
  this.frameWidth = 1 * MAGNIFICATION;
  this.frameHeight = 1 * MAGNIFICATION;
  this.spriteColumn = 0;
  this.frameCount = 5;

  this.selector = document.createElement('div');
  this.selector.id = `bomb${master.actorCount++}`;
  this.selector.style.position = 'absolute';
  this.selector.style.left = this.x + 'px';
  this.selector.style.top = this.y + 'px';
  this.selector.style.width = this.frameWidth + 'px';
  this.selector.style.height = this.frameHeight + 'px';
  this.selector.style.backgroundColor = COLORS.BLACK;
  this.selector.style.zIndex = '2';

  master.actors.props.push(this);
  stage.selector.appendChild(this.selector);

  this.update = function() {
    if (!this.active) {
      if (!collision(this, this.origin)) {
        this.active = true;
      }
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

  this.kill = function() {
    const position = master.actors.props.indexOf(this);

    master.actors.props.splice(position, 1);
    stage.selector.removeChild(this.selector);

    new Animation({
      data: ANIMATIONS.DETONATION,
      master,
      origin: this,
      stage
    });
  }
};
