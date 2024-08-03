import { add, attachNode } from '@/utils.js';

export const Animation = function({
  data,
  game,
  origin
}) {
  Object.assign(this, {
    frameCount : data.frameCount,
    frameHeight: data.frameHeight,
    frameWidth : data.frameWidth,
    name       : data.name,
    isRemove   : data.isRemove
  });

  this.height       = this.frameHeight;
  this.isActive     = true;
  this.spriteColumn = 0;
  this.width        = this.frameWidth * this.frameCount;
  this.x            = origin.x;
  this.y            = origin.y + origin.frameHeight - this.frameHeight;

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
      zIndex         : add(this.y, this.frameHeight)
    }
  });

  game.animations.push(this);

  this.kill = () => {
    this.isActive = false;

    if (this.isRemove) {
      game.stage.selector.removeChild(this.selector);
    }
  }

  this.update = () => {
    if (this.isActive) {
      if (this.spriteColumn + 1 < this.frameCount) {
        this.spriteColumn++;
      } else {
        this.kill();
      }
    }
  }

  this.draw = () => {
    if (this.isActive) {
      this.selector.style.backgroundPosition = `${0 - this.spriteColumn * this.frameWidth}px 0`;
    }
  }
};
