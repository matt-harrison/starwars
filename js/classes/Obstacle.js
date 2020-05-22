import { MAGNIFICATION } from '/js/constants/index.js';

export const Obstacle = function({
  data,
  game
}) {
  Object.assign(this, data);

  this.leftPercent = this.x;
  this.topPercent  = this.y;

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

  this.selector                       = document.createElement('div');
  this.selector.id                    = `obstacle${game.obstacles.length}`;
  this.selector.style.backgroundImage = `url('img/obstacles/${this.img}.png')`;
  this.selector.style.backgroundSize  = `${this.width}px ${this.height}px`;
  this.selector.style.height          = `${this.frameHeight}px`;
  this.selector.style.left            = `${this.x}px`;
  this.selector.style.position        = 'absolute';
  this.selector.style.top             = `${this.y}px`;
  this.selector.style.width           = `${this.frameWidth}px`;

  game.obstacles.push(this);
  game.stage.selector.appendChild(this.selector);

  this.update = function() {
    if (this.frameCount > 1) {
      if (this.spriteColumn + 1 < this.frameCount) {
        this.spriteColumn++;
      } else {
        this.spriteColumn = 0;
      }
    }
  }

  this.draw = function() {
    this.selector.style.backgroundPosition = `${0 - this.spriteColumn * this.frameWidth}px 0`;
    this.selector.style.left               = `${this.x}px`;
    this.selector.style.top                = `${this.y}px`;
  }
};
