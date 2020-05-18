export const Animation = function({
  data,
  master,
  origin
}) {
  Object.assign(this, data);

  this.active       = true;
  this.height       = this.frameHeight;
  this.spriteColumn = 0;
  this.width        = this.frameWidth * this.frameCount;
  this.x            = Math.floor(origin.x + (origin.frameWidth - this.frameWidth) / 2);
  this.y            = Math.floor(origin.y + (origin.frameHeight - this.frameHeight) / 2);

  this.selector                       = document.createElement('div');
  this.selector.id                    = `animtion${master.animations.length}`;
  this.selector.style.position        = 'absolute';
  this.selector.style.left            = this.x + 'px';
  this.selector.style.top             = this.y + 'px';
  this.selector.style.width           = this.frameWidth + 'px';
  this.selector.style.height          = this.frameHeight + 'px';
  this.selector.style.backgroundImage = `url('img/animations/${this.name}.png')`;
  this.selector.style.backgroundSize  = `${this.width}px ${this.height}px`;
  this.selector.style.zIndex          = '2';

  master.animations.push(this);
  master.dom.stage.selector.appendChild(this.selector);

  this.kill = function() {
    this.active = false;

    if (this.remove) {
      master.dom.stage.selector.removeChild(this.selector);
    }
  }

  this.update = function() {
    if (this.active) {
      if (this.spriteColumn + 1 < this.frameCount) {
        this.spriteColumn++;
      } else {
        this.kill();
      }
    }
  }

  this.draw = function() {
    if (this.active) {
      this.selector.style.backgroundPosition = `${0 - this.spriteColumn * this.frameWidth}px 0`;
    }
  }
};
