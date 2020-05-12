import {
  advanceFrame,
  changeDirection,
  getPosition,
  getRandom,
  preload
} from '/js/utils.js';

import { ACTOR_TYPES, FPS, MAGNIFICATION } from '/js/constants/config.js';
import { PROJECTILES, WEAPON_TYPES }       from '/js/constants/weapons.js';

import { Animation }  from '/js/classes/Animation.js';
import { Bomb }       from '/js/classes/Bomb.js';
import { Lightsaber } from '/js/classes/Lightsaber.js';
import { Projectile } from '/js/classes/Projectile.js';

export const Player = function({
  data,
  master
}) {
  Object.assign(this, data);

  this.active       = true;
  this.attacking    = false;
  this.bounceCount  = 0;
  this.dead         = false;
  this.dir          = 'down';
  this.lightsaber   = '';
  this.running      = false;
  this.speed        = this.speed * (MAGNIFICATION / 5);
  this.spriteColumn = 0;
  this.spriteRow    = 2;
  this.type         = ACTOR_TYPES.PLAYER;
  this.weaponCount  = 0;
  this.weaponReady  = true;
  this.x            = Math.floor((master.gameWidth - this.frameWidth) / 2);
  this.y            = Math.floor((master.gameHeight - this.frameHeight) / 2);

  if (!this.weaponDelay) {
    switch (this.weaponType) {
      case WEAPON_TYPES.BOMB:
        this.weaponDelay = 8;
        break;
      case WEAPON_TYPES.LIGHTSABER:
        this.weaponDelay = 2;
        break;
      case WEAPON_TYPES.PROJECTILE:
        this.weaponDelay = this.projectile === PROJECTILES.LASER ? FPS / 4 :  FPS / 2;
        break;
    }
  }

  this.selector                        = document.createElement('div');
  this.selector.id                     = 'player';
  this.selector.style.backgroundImage  = `url('img/characters/${this.sprite}.png')`;
  this.selector.style.backgroundRepeat = 'no-repeat';
  this.selector.style.backgroundSize   = `${this.width}px ${this.height}px`;
  this.selector.style.height           = this.frameHeight + 'px';
  this.selector.style.position         = 'absolute';
  this.selector.style.width            = this.frameWidth + 'px';
  this.selector.style.zIndex           = this.y;

  master.dom.stage.selector.appendChild(this.selector);

  if (this.death) {
    preload('img/animations/' + this.death.name + '.png');
  }

  this.attack = function(key) {
    if (this.weaponReady) {
      if (this.weaponType === WEAPON_TYPES.PROJECTILE) {
        new Projectile({
          master,
          origin: this
        });

        //As levels progress, enemies will become liklier to dodge projectiles
        master.actors.enemies.forEach(enemy => {
          if (enemy.active && enemy.sprite !== 'asteroid') {
            if (getRandom(20 - master.level) === 0) {
              changeDirection({ actor: enemy, master });
            }
          }
        });
      } else if (this.weaponType === WEAPON_TYPES.BOMB) {
        new Bomb({
          master,
          origin: this
        });
      } else if (this.weaponType === WEAPON_TYPES.LIGHTSABER) {
        const isLongRange = (key === 'Z');

        this.lightsaber = new Lightsaber({
          isLongRange,
          master,
          origin: this
        });

        master.keys = [key];

        this.running = false;
        this.attacking = true;
        this.spriteColumn = this.moveFrameCount + 1;
      } else if (this.weaponType === WEAPON_TYPES.ATTACK) {
      }

      this.weaponReady = false;
    }
  }

  this.kill = function() {
    this.active       = false;
    this.spriteColumn = 0;
    this.spriteRow    = 4;

    if (this.death) {
      new Animation({
        data: this.death,
        master,
        origin: this
      });

      if (this.lightsaber !== '') {
        this.lightsaber.kill();
      }
    }
  }

  this.update = function() {
    if (this.dead) {
      if (this.active) {
        this.kill();
      }
    } else {
      if (!this.weaponReady) {
        if (this.weaponCount++ === this.weaponDelay) {
          this.weaponReady = true;
          this.weaponCount = 0;
        }
      }

      if (this.running || this.ship) {
        advanceFrame(this);
        getPosition({ actor: this, master });
      }
    }
  }

  this.draw = function() {
    this.selector.style.backgroundPosition = `${0 - this.spriteColumn * this.frameWidth}px ${0 - this.spriteRow * this.frameHeight}px`;
    this.selector.style.left               = `${this.x}px`;
    this.selector.style.top                = `${this.y}px`;
    this.selector.style.zIndex             = this.y;
  };

  this.draw();
};
