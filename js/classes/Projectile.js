import { magnification } from '/js/constants/config.js';
import { importJSON }    from '/js/constants/utils.js';

export const Projectile = function({
  game,
  origin,
  props,
  stage
}) {
  importJSON(this, origin.projectile);

  origin.weaponReady = false;

  this.type = origin.projectile;
  this.origin = origin;
  this.dir = origin.dir;
  this.active = false;
  this.dead = false;
  this.spriteColumn = 0;

  this.selector = document.createElement('div');
  this.selector.style.position = 'absolute';

  if (origin.projectile === 'laser') {
    this.selector.style.backgroundColor = origin.weaponColor;

    if (this.dir === 'left' || this.dir === 'right') {
      this.width = 2 * magnification;
      this.height = 1 * magnification;
    } else if (this.dir === 'up' || this.dir === 'down') {
      this.width = 1 * magnification;
      this.height = 2 * magnification;
    }

    this.frameWidth = this.width;
    this.frameHeight = this.height;
    this.speed = 30;
  } else {
    this.selector.style.backgroundImage = "url('img/projectiles/" + this.name + ".png')";
  }

  this.selector.style.backgroundSize = this.width + 'px ' + this.height + 'px';

  this.speed = this.speed * (magnification / 5);

  if (this.dir === 'left') {
    this.x = origin.x + (origin.weaponOffsetLeft[0] * magnification) - this.frameWidth;
    this.y = origin.y + (origin.weaponOffsetLeft[1] * magnification);
  } else if (this.dir === 'up') {
    this.x = origin.x + (origin.weaponOffsetUp[0] * magnification);
    this.y = origin.y + (origin.weaponOffsetUp[1] * magnification) - this.frameHeight;
  } else if (this.dir === 'right') {
    this.x = origin.x + (origin.weaponOffsetRight[0] * magnification);
    this.y = origin.y + (origin.weaponOffsetRight[1] * magnification);
  } else if (this.dir === 'down') {
    this.x = origin.x + (origin.weaponOffsetDown[0] * magnification);
    this.y = origin.y + (origin.weaponOffsetDown[1] * magnification);
  }

  this.selector.style.width = this.frameWidth + 'px';
  this.selector.style.height = this.frameHeight + 'px';
  this.selector.style.zIndex = '4';

  props.push(this);
  stage.selector.appendChild(this.selector);

  this.kill = function() {
    const position = props.indexOf(this);

    props.splice(position, 1);
    stage.selector.removeChild(this.selector);
  }

  this.update = function() {
    if (this.active) {
      if (this.frameCount > 1) {
        if (++this.spriteColumn > this.frameCount) {
          this.spriteColumn = 0;
        }
      }

      if (this.dir === 'left') {
        if (this.x > 0 - this.frameWidth) {
          this.x -= this.speed;
        } else {
          this.dead = true;
        }
      } else if (this.dir === 'up') {
        if (this.y > 0 - this.frameHeight) {
          this.y -= this.speed;
        } else {
          this.dead = true;
        }
      } else if (this.dir === 'right') {
        if (this.x < game.width) {
          this.x += this.speed;
        } else {
          // this.dead = true;
        }
      } else if (this.dir === 'down') {
        if (this.y < game.height) {
          this.y += this.speed;
        } else {
          this.dead = true;
        }
      }
    } else {
      this.active = true;
    }
  }

  this.draw = function() {
    if (this.dead) {
      this.kill();
    } else {
      this.selector.style.left = this.x + 'px';
      this.selector.style.top = this.y + 'px';
      this.selector.style.backgroundPosition = (0 - this.spriteColumn * this.frameWidth) + 'px 0';
    }
  };

  this.draw();
};
