import { MAGNIFICATION } from '/js/constants/index.js';
import { attachNode } from '/js/utils.js';

export const Obstacle = function({
  data,
  game
}) {
  Object.assign(this, {
    frameCount : data.frameCount,
    frameHeight: data.frameHeight,
    frameWidth : data.frameWidth,
    height     : data.height,
    img        : data.img,
    width      : data.width,
    leftPercent: data.x,
    topPercent : data.y
  });

  if (this.leftPercent === 0) {
    this.x = 0;
  } else if (this.leftPercent === 100) {
    this.x = game.width - this.frameWidth;
  } else {
    this.x = game.width * (this.leftPercent / 100) - (this.frameWidth / 2);
  }

  if (this.topPercent === 0) {
    this.y = 0;
  } else if (this.topPercent === 100) {
    this.y = game.height - this.frameHeight;
  } else {
    this.y = game.height * (this.topPercent / 100) - (this.frameHeight / 2);
  }

  this.selector = attachNode({
    attributes: {
      id: `obstacle${game.obstacles.length}`
    },
    parent: game.stage.selector,
    styles: {
      backgroundImage: `url('img/obstacles/${this.img}.png')`,
      backgroundSize : `${this.width}px ${this.height}px`,
      height         : `${this.frameHeight}px`,
      left           : `${this.x}px`,
      position       : 'absolute',
      top            : `${this.y}px`,
      width          : `${this.frameWidth}px`,
      zIndex         : this.y
    }
  });

  game.obstacles.push(this);

  this.update = () => {
    if (this.frameCount > 1) {
      if (this.spriteColumn + 1 < this.frameCount) {
        this.spriteColumn++;
      } else {
        this.spriteColumn = 0;
      }
    }
  }

  this.draw = () => {
    this.selector.style.backgroundPosition = `${0 - this.spriteColumn * this.frameWidth}px 0`;
    this.selector.style.left               = `${this.x}px`;
    this.selector.style.top                = `${this.y}px`;
  }
};
