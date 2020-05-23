import {
  advanceFrame,
  attachNode,
  getRandom,
  preload,
  setPosition
} from '/js/utils.js';

import {
  ACTOR_TYPES,
  FPS,
  KEYS,
  MAGNIFICATION,
  PROJECTILES,
  WEAPON_TYPES
} from '/js/constants/index.js';

import { Animation }  from '/js/classes/Animation.js';
import { Bomb }       from '/js/classes/Bomb.js';
import { Lightsaber } from '/js/classes/Lightsaber.js';
import { Projectile } from '/js/classes/Projectile.js';

export const Player = function({
  data,
  game
}) {
  Object.assign(this, data);

  this.bounceCount   = 0;
  this.dir           = 'down';
  this.isActive      = true;
  this.isAttacking   = false;
  this.isWeaponReady = true;
  this.lightsaber    = '';
  this.isRunning     = false;
  this.speed         = this.speed * (MAGNIFICATION / 5);
  this.spriteColumn  = 0;
  this.spriteRow     = 2;
  this.type          = ACTOR_TYPES.PLAYER;
  this.weaponCounter = 0;
  this.x             = Math.floor((game.width - this.frameWidth) / 2);
  this.y             = Math.floor((game.height - this.frameHeight) / 2);

  switch (this.weaponType) {
    case WEAPON_TYPES.BOMB:
      this.weaponDelay = FPS / 2;
      break;
    case WEAPON_TYPES.STUN:
    case WEAPON_TYPES.LIGHTSABER:
      this.weaponDelay = FPS / 8;
      break;
    case WEAPON_TYPES.PROJECTILE:
      switch (this.projectile) {
        case PROJECTILES.LASER:
          this.weaponDelay = FPS / 4;
          break
        case PROJECTILES.STUN:
          this.weaponDelay = FPS / 8;
          break
        default:
          this.weaponDelay = FPS / 2;
          break;
      }
      break;
  }

  this.selector = attachNode({
    attributes: {
      id: 'player'
    },
    parent: game.stage.selector,
    styles: {
      backgroundImage : `url('img/${this.sprite}.png')`,
      backgroundRepeat: 'no-repeat',
      backgroundSize  : `${this.width}px ${this.height}px`,
      height          : `${this.frameHeight}px`,
      position        : 'absolute',
      width           : `${this.frameWidth}px`,
      zIndex          : this.y,
    }
  });

  if (this.death) {
    preload(`img/animations/${this.death.name}.png`);
  }

  this.attack = (key) => {
    if (this.isWeaponReady) {
      if (this.weaponType === WEAPON_TYPES.PROJECTILE) {
        new Projectile({
          game,
          origin: this
        });
      } else if (this.weaponType === WEAPON_TYPES.BOMB) {
        new Bomb({
          game,
          origin: this
        });
      } else if (this.weaponType === WEAPON_TYPES.LIGHTSABER) {
        const isLongRange = (key === KEYS.Z);

        this.lightsaber = new Lightsaber({
          isLongRange,
          game,
          origin: this
        });

        game.keys = [key];

        this.isAttacking  = true;
        this.isRunning    = false;
        this.spriteColumn = this.moveFrameCount + 1;
      }

      this.isWeaponReady = false;
    }
  }

  this.kill = () => {
    this.isActive     = false;
    this.spriteColumn = 0;
    this.spriteRow    = 4;

    if (this.death) {
      new Animation({
        data: this.death,
        game,
        origin: this
      });

      if (this.lightsaber !== '') {
        this.lightsaber.kill();
      }
    }
  }

  this.update = () => {
    if (this.isActive) {
      if (this.isRunning || this.isPropulsive) {
        advanceFrame(this);
        setPosition({ actor: this, game });
      }

      if (!this.isWeaponReady) {
        if (this.weaponCounter++ === this.weaponDelay) {
          this.isWeaponReady = true;
          this.weaponCounter = 0;
        }
      }
    }
  }

  this.draw = () => {
    this.selector.style.backgroundPosition = `${0 - this.spriteColumn * this.frameWidth}px ${0 - this.spriteRow * this.frameHeight}px`;
    this.selector.style.left               = `${this.x}px`;
    this.selector.style.top                = `${this.y}px`;
    this.selector.style.zIndex             = this.y;
  };

  this.draw();
};
