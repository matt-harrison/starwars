import { INFINITY } from '/js/constants/index.js';
import { attachNode } from '/js/utils.js';

export const Animation = function({
  data,
  game,
  origin
}) {
  Object.assign(this, data);

  this.height       = this.frameHeight;
  this.isActive     = true;
  this.spriteColumn = 0;
  this.width        = this.frameWidth * this.frameCount;
  this.x            = Math.floor(origin.x + (origin.frameWidth - this.frameWidth) / 2);
  this.y            = Math.floor(origin.y + (origin.frameHeight - this.frameHeight) / 2);

  this.selector = attachNode({
    attributes: {
      id: `animation${game.animations.length}`
    },
    parent: game.stage.selector,
    styles: {
      backgroundImage: `url('img/animations/${this.name}.png')`,
      backgroundSize : `${this.width}px ${this.height}px`,
      height         : `${this.frameHeight}px`,
      left           : `${this.x}px`,
      position       : 'absolute',
      top            : `${this.y}px`,
      width          : `${this.frameWidth}px`,
      zIndex         : '2'
    }
  });

  game.animations.push(this);

  this.kill = function() {
    this.isActive = false;

    if (this.isRemove) {
      game.stage.selector.removeChild(this.selector);
    }
  }

  this.update = function() {
    if (this.isActive) {
      if (this.spriteColumn + 1 < this.frameCount) {
        this.spriteColumn++;
      } else {
        this.kill();
      }
    }
  }

  this.draw = function() {
    if (this.isActive) {
      this.selector.style.backgroundPosition = `${0 - this.spriteColumn * this.frameWidth}px 0`;
    }
  }
};
