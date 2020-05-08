import { MAGNIFICATION } from '/js/constants/config.js';

export const Obstacle = function({
  data,
  master,
  stage,
  x,
  y
}) {
  Object.assign(this, data);

  this.speed = this.speed * (MAGNIFICATION / 5);
  this.leftPercent = x;
  this.topPercent = y;

  if (this.leftPercent === 0) {
    this.x = 0;
  } else if (this.leftPercent === 100) {
    this.x = master.gameWidth - this.frameWidth;
  } else {
    this.x = master.gameWidth * (this.leftPercent / 100) - (this.frameWidth / 2);
  }

  if (this.topPercent === 0) {
    this.y = 0;
  } else if (this.topPercent === 100) {
    this.y = master.gameHeight - this.frameHeight;
  } else {
    this.y = master.gameHeight * (this.topPercent / 100) - (this.frameHeight / 2);
  }

  this.selector = document.createElement('div');
  this.selector.id = `obstacle${master.actorCount++}`;
  this.selector.style.position = 'absolute';
  this.selector.style.left = this.x + 'px';
  this.selector.style.top = this.y + 'px';
  this.selector.style.width = this.frameWidth + 'px';
  this.selector.style.height = this.frameHeight + 'px';
  this.selector.style.backgroundImage = "url('img/obstacles/" + this.img + ".png')";
  this.selector.style.backgroundSize = this.width + 'px ' + this.height + 'px';

  master.actors.obstacles.push(this);
  stage.selector.appendChild(this.selector);

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
    this.selector.style.left = this.x + 'px';
    this.selector.style.top = this.y + 'px';
    this.selector.style.backgroundPosition = (0 - this.spriteColumn * this.frameWidth) + 'px 0';
  }
};
