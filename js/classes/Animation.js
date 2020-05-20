import { INFINITY } from '/js/constants/config.js';

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

  this.selector                       = document.createElement('div');
  this.selector.id                    = `animtion${game.animations.length}`;
  this.selector.style.position        = 'absolute';
  this.selector.style.left            = `${this.x}px`;
  this.selector.style.top             = `${this.y}px`;
  this.selector.style.width           = `${this.frameWidth}px`;
  this.selector.style.height          = `${this.frameHeight}px`;
  this.selector.style.backgroundImage = `url('img/animations/${this.name}.png')`;
  this.selector.style.backgroundSize  = `${this.width}px ${this.height}px`;
  this.selector.style.zIndex          = '2';

  game.animations.push(this);
  game.stage.selector.appendChild(this.selector);

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
