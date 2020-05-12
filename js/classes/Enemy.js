import {
  advanceFrame,
  changeDirection,
  getCoords,
  getPosition,
  getRandom,
  inBounds,
  preload,
  updateScore,
  updateVictim
} from '/js/utils.js';

import { ACTOR_TYPES, CARDINALS, FPS, MAGNIFICATION } from '/js/constants/config.js';

import { Animation } from '/js/classes/Animation.js';

export const Enemy = function({
  data,
  master
}) {
  Object.assign(this, data);

  this.active       = true;
  this.blinkCount   = 0;
  this.blinking     = false;
  this.bounceCount  = 0;
  this.dead         = false;
  this.dir          = master.dom.stage.enemyDir ? master.dom.stage.enemyDir :  Object.values(CARDINALS)[getRandom(Object.values(CARDINALS).length)]
  this.hp           = data === master.dom.stage.boss ? master.dom.stage.bossHP : 1;
  this.isBoss       = data === master.dom.stage.boss ? true : false;
  this.speed        = this.speed * (MAGNIFICATION / 5);
  this.spriteColumn = 1;
  this.type         = ACTOR_TYPES.ENEMY;
  this.value        = data === master.dom.stage.boss ? master.dom.stage.bossHP * 100 : 100;
  this.weaponCount  = 0;
  this.weaponDelay  = FPS;
  this.weaponReady  = true;

  getCoords({
    actor: this,
    master
  });

  this.selector                        = document.createElement('div');
  this.selector.id                     = `enemy${master.actorCount++}`;
  this.selector.style.backgroundImage  = `url('img/characters/${this.sprite}.png')`;
  this.selector.style.backgroundRepeat = 'no-repeat';
  this.selector.style.backgroundSize   = `${this.width}px ${this.height}px`;
  this.selector.style.height           = this.frameHeight + 'px';
  this.selector.style.position         = 'absolute';
  this.selector.style.width            = this.frameWidth + 'px';
  this.selector.style.zIndex           = this.y;

  master.actors.enemies.push(this);
  master.dom.stage.selector.appendChild(this.selector);

  if (this.death) {
    preload('img/animations/' + this.death.name + '.png');
  }

  this.collide = () => {
    if (this.active && this.ship && !this.isBoss) {
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

    updateVictim({
      color: master.dom.stage.textColor,
      hud: master.dom.hud,
      victim: this
    });
  }

  this.kill = () => {
    master.dom.stage.enemiesKilled++;

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

    updateScore({
      hud: master.dom.hud,
      points: this.value
    });
  }

  // identical to Friendly aside from array name
  this.remove = () => {
    const position = master.actors.enemies.indexOf(this);

    master.actors.enemies.splice(position, 1);
    master.dom.stage.selector.removeChild(this.selector);
  };

  // identical to Friendly aside from class name
  this.respawn = () => {
    this.remove();

    new Enemy({
      data,
      master
    });
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

      if (!this.weaponReady) {
        if (this.weaponCount++ === this.weaponDelay) {
          this.weaponReady = true;
          this.weaponCount = 0;
        }
      }

      getPosition({ actor: this, master });
    }
  }

  // identical to Friendly.draw
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
