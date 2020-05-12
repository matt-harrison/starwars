import {
  advanceFrame,
  getCoords,
  getPosition,
  getRandom,
  inBounds,
  preload,
  updateScore,
  updateVictim
} from '/js/utils.js';

import { ACTOR_TYPES, CARDINALS, COLORS, MAGNIFICATION } from '/js/constants/config.js';

import { Animation } from '/js/classes/Animation.js';

export const Friendly = function({
  data,
  master
}) {
  Object.assign(this, data.character);
  Object.assign(this, data.details);

  const dir = Object.values(CARDINALS)[getRandom(Object.values(CARDINALS).length)];

  this.active      = true;
  this.blinking    = false;
  this.bounceCount = 0;
  this.dir         = this.dir || dir;
  this.hp          = 1;
  this.speed       = this.speed * (MAGNIFICATION / 5);
  this.type        = ACTOR_TYPES.FRIENDLY;

  getCoords({
    actor: this,
    master
  });

  this.selector                        = document.createElement('div');
  this.selector.id                     = `friendly${master.actorCount++}`;
  this.selector.style.backgroundImage  = `url('img/characters/${this.sprite}.png')`;
  this.selector.style.backgroundRepeat = 'no-repeat';
  this.selector.style.backgroundSize   = `${this.width}px ${this.height}px`;
  this.selector.style.height           = this.frameHeight + 'px';
  this.selector.style.position         = 'absolute';
  this.selector.style.width            = this.frameWidth + 'px';
  this.selector.style.zIndex           = this.y;

  master.actors.friendlies.push(this);
  master.dom.stage.selector.appendChild(this.selector);

  this.kill = () => {
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

    if (this.value > 0) {
      updateVictim({
        color: COLORS.BLUE_DARK,
        hud: master.dom.hud,
        victim: this
      });
    } else {
      updateVictim({
        color: COLORS.RED,
        hud: master.dom.hud,
        victim: this
      });
    }

    updateScore({
      hud: master.dom.hud,
      points: this.value
    });
  };

  // identical to Enemy aside from array name
  this.remove = () => {
    const position = master.actors.friendlies.indexOf(this);

    master.actors.friendlies.splice(position, 1);
    master.dom.stage.selector.removeChild(this.selector);
  };

  // identical to Enemy aside from class name
  this.respawn = () => {
    this.remove();

    new Friendly({
      data,
      master
    });
  };

  this.update = () => {
    if (this.active) {
      advanceFrame(this);
      getPosition({ actor: this, master });
    }
  }

  // identical to Enemy.draw
  this.draw = () => {
    if (this.selector) {
      this.selector.style.backgroundPosition = `${(0 - this.spriteColumn * this.frameWidth)}px ${(0 - this.spriteRow * this.frameHeight)}px`;
      this.selector.style.left               = `${this.x}px`;
      this.selector.style.top                = `${this.y}px`;
      this.selector.style.zIndex             = this.y;
    }
  };

  this.draw();
};
