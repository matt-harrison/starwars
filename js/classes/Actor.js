import {
  advanceFrame,
  add,
  changeDirection,
  getCoords,
  getPosition,
  getRandom,
  inBounds,
  preload,
  updateHud
} from '/js/utils.js';

import { ACTOR_TYPES, CARDINALS, FPS, MAGNIFICATION } from '/js/constants/config.js';

import { Animation } from '/js/classes/Animation.js';

export const Actor = function({
  data,
  master
}) {
  Object.assign(this, data.character);
  Object.assign(this, data.details);

  this.active       = true;
  this.blinkCount   = 0;
  this.blinking     = false;
  this.bounceCount  = 0;
  this.dir          = this.dir ? this.dir :  Object.values(CARDINALS)[getRandom(Object.values(CARDINALS).length)]
  this.hp           = this.hp ? this.hp : 1;
  this.speed        = this.speed * (MAGNIFICATION / 5);
  this.spriteColumn = 1;
  this.weaponDelay  = FPS;
  this.weaponReady  = true;

  this.tempCount = 0;

  getCoords({
    actor: this,
    master
  });

  this.selector                        = document.createElement('div');
  this.selector.id                     = `${this.type}${master.enemies.length}`;
  this.selector.style.backgroundImage  = `url('img/characters/${this.sprite}.png')`;
  this.selector.style.backgroundRepeat = 'no-repeat';
  this.selector.style.backgroundSize   = `${this.width}px ${this.height}px`;
  this.selector.style.height           = this.frameHeight + 'px';
  this.selector.style.position         = 'absolute';
  this.selector.style.width            = this.frameWidth + 'px';
  this.selector.style.zIndex           = add(this.y, this.frameHeight);

  switch (this.type) {
    case ACTOR_TYPES.ENEMY:
      master.enemies.push(this);
      break;
    case ACTOR_TYPES.FRIENDLY:
      master.friendlies.push(this);
      break;
    case ACTOR_TYPES.NEUTRAL:
      master.neutrals.push(this);
      break;
  }

  master.stage.selector.appendChild(this.selector);

  if (this.death) {
    preload('img/animations/' + this.death.name + '.png');
  }

  this.collide = () => {
    if (this.active && this.ship) {
      this.kill();
    }
  }

  this.hit = () => {
    if (!this.blinking) {
      if (--this.hp === 0) {
        this.kill();
      } else {
        this.blinking   = true;
        this.blinkCount = FPS;

        changeDirection({ actor: this, master });
      }
    }

    updateHud({
      master,
      victim: this,
    });
  }

  this.kill = () => {
    if (this.type === ACTOR_TYPES.ENEMY && !this.isOptional) {
      master.stage.enemiesKilled++;
    }

    this.active       = false;
    this.blinking     = false;
    this.spriteColumn = 0;
    this.spriteRow    = 4;

    if (this.death) {
      new Animation({
        data: this.death,
        master,
        origin: this
      });
    }
  }

  this.update = () => {
    if (this.active) {
      advanceFrame(this);

      if (this.blinking) {
        if (master.counter % 2 === 0) {
          this.selector.style.display = '';
        } else {
          this.selector.style.display = 'none';
        }

        if (--this.blinkCount === 0) {
          this.blinking = false;
          this.selector.style.display = '';
        }
      }

      this.weaponReady = (
        this.type === ACTOR_TYPES.ENEMY &&
        master.count % this.weaponDelay === 0
      );

      getPosition({ actor: this, master });
    }

    this.tempCount++;
  }

  this.draw = () => {
    this.selector.style.backgroundPosition = `${(0 - this.spriteColumn * this.frameWidth)}px ${(0 - this.spriteRow * this.frameHeight)}px`;
    this.selector.style.left               = `${this.x}px`;
    this.selector.style.top                = `${this.y}px`;
    this.selector.style.zIndex             = this.y;
  };

  this.draw();
};
