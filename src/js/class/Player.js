import {
  add,
  advanceFrame,
  attachNode,
  getRandom,
  preload,
  setPosition
} from '@/js/utils.js';

import {
  ACTOR_TYPES,
  FPS,
  KEYS,
  MAGNIFICATION,
  WEAPON_TYPES,
  WEAPONS
} from '@/js/constants/index.js';

import { Animation }  from '@/js/class/Animation.js';
import { Bomb }       from '@/js/class/Bomb.js';
import { Lightsaber } from '@/js/class/Lightsaber.js';
import { Projectile } from '@/js/class/Projectile.js';

export const Player = function({
  data,
  game
}) {
  Object.assign(this, {
    code             : data.code,
    death            : data.death,
    frameCounts      : data.frameCounts,
    frameHeight      : data.frameHeight,
    frameWidth       : data.frameWidth,
    isPropulsive     : data.isPropulsive,
    moveFrameCount   : data.moveFrameCount,
    name             : data.name,
    speed            : data.speed,
    sprite           : data.sprite,
    weapon           : data.weapon,
    weaponColor      : data.weaponColor,
    weaponOffsetDown : data.weaponOffsetDown,
    weaponOffsetLeft : data.weaponOffsetLeft,
    weaponOffsetRight: data.weaponOffsetRight,
    weaponOffsetUp   : data.weaponOffsetUp
  });

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

  switch (this.weapon) {
    case WEAPONS.BOMB:
      this.weaponDelay = FPS / 2;
      break;
    case WEAPONS.LASER:
      this.weaponDelay = FPS / 4;
      break
    case WEAPONS.LIGHTSABER:
    case WEAPONS.STUN:
      this.weaponDelay = FPS / 8;
      break;
    case WEAPONS.GUNGAN_BALL:
    case WEAPONS.ROCK:
    default:
      this.weaponDelay = FPS / 2;
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
      backgroundSize  : `${this.frameWidth * this.frameCounts.x}px ${this.frameHeight * this.frameCounts.y}px`,
      height          : `${this.frameHeight}px`,
      position        : 'absolute',
      width           : `${this.frameWidth}px`,
      zIndex          : add(this.y, this.frameHeight)
    }
  });

  if (this.death) {
    preload(`img/animations/${this.death.name}.png`);
  }

  this.attack = (key) => {
    if (this.isWeaponReady) {
      if (this.weapon.type === WEAPON_TYPES.PROJECTILE) {
        new Projectile({
          game,
          origin: this
        });
      } else if (this.weapon.type === WEAPON_TYPES.LIGHTSABER) {
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
      } else {
        new Bomb({
          game,
          origin: this
        });
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
    this.selector.style.zIndex             = add(this.y, this.frameHeight);
  };

  this.draw();
};
