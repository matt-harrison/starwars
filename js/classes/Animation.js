export const Animation = function({
  data,
  master,
  origin
}) {
  Object.assign(this, data);

  this.dead         = false;
  this.height       = this.frameHeight;
  this.spriteColumn = 0;
  this.width        = this.frameWidth * this.frameCount;
  this.x            = Math.floor(origin.x + (origin.frameWidth - this.frameWidth) / 2);
  this.y            = Math.floor(origin.y + (origin.frameHeight - this.frameHeight) / 2);

  this.selector                       = document.createElement('div');
  this.selector.id                    = `animtion${master.actorCount++}`;
  this.selector.style.position        = 'absolute';
  this.selector.style.left            = this.x + 'px';
  this.selector.style.top             = this.y + 'px';
  this.selector.style.width           = this.frameWidth + 'px';
  this.selector.style.height          = this.frameHeight + 'px';
  this.selector.style.backgroundImage = "url('img/animations/" + this.name + ".png')";
  this.selector.style.backgroundSize  = this.width + 'px ' + this.height + 'px';
  this.selector.style.zIndex          = '2';

  master.actors.animations.push(this);
  master.dom.stage.selector.appendChild(this.selector);

  this.kill = function() {
    const position = master.actors.animations.indexOf(this);

    master.actors.animations.splice(position, 1);

    if (this.remove) {
      master.dom.stage.selector.removeChild(this.selector);
    }
  }

  this.update = function() {
    if (this.spriteColumn + 1 < this.frameCount) {
      this.spriteColumn++;
    } else {
      this.dead = true;
    }
  }

  this.draw = function() {
    if (this.dead) {
      this.kill();
    }

    this.selector.style.backgroundPosition = (0 - this.spriteColumn * this.frameWidth) + 'px 0';
  }
};
