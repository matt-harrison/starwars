import {
  advanceFrame,
  add,
  attachNode,
  changeDirection,
  getRandom,
  preload,
  setCoordinates,
  setPosition,
  updateHud
} from '/js/utils.js';

import {
  ACTOR_TYPES,
  CARDINALS,
  FPS,
  MAGNIFICATION
} from '/js/constants/index.js';

import { Animation } from '/js/classes/Animation.js';

export const Actor = function({
  data,
  game
}) {
  Object.assign(this, data.character);
  Object.assign(this, data.details);

  this.blinkCount   = 0;
  this.bounceCount  = 0;
  this.dir          = this.dir ? this.dir :  Object.values(CARDINALS)[getRandom(Object.values(CARDINALS).length)]
  this.hp           = this.hp ? this.hp : 1;
  this.isActive     = true;
  this.isBlinking   = false;
  this.speed        = this.speed * (MAGNIFICATION / 5);
  this.spriteColumn = 1;

  setCoordinates({
    actor: this,
    game
  });

  this.selector = attachNode({
    attributes: {
      id: `${this.type}${game.enemies.length}`
    },
    parent: game.stage.selector,
    styles: {
      backgroundImage : `url('img/${this.sprite}.png')`,
      backgroundRepeat: 'no-repeat',
      backgroundSize  : `${this.width}px ${this.height}px`,
      height          : `${this.frameHeight}px`,
      position        : 'absolute',
      width           : `${this.frameWidth}px`,
      zIndex          : add(this.y, this.frameHeight)
    }
  });

  switch (this.type) {
    case ACTOR_TYPES.ENEMY:
      game.enemies.push(this);
      break;
    case ACTOR_TYPES.FRIENDLY:
      game.friendlies.push(this);
      break;
    case ACTOR_TYPES.NEUTRAL:
      game.neutrals.push(this);
      break;
  }

  if (this.death) {
    preload(`img/animations/${this.death.name}.png`);
  }

  this.hit = () => {
    if (this.isActive && !this.isBlinking) {
      if (--this.hp === 0) {
        this.kill();
      } else {
        this.isBlinking   = true;
        this.blinkCount = FPS;

        changeDirection({ actor: this, game });
      }
    }

    updateHud({
      game,
      victim: this,
    });
  }

  this.kill = () => {
    if (this.type === ACTOR_TYPES.ENEMY && !this.isOptional) {
      game.enemiesKilled++;
    }

    this.isActive     = false;
    this.isBlinking   = false;
    this.spriteColumn = 0;
    this.spriteRow    = 4;

    if (this.death) {
      new Animation({
        data: this.death,
        game,
        origin: this
      });
    }
  }

  this.update = () => {
    if (this.isActive) {
      advanceFrame(this);

      if (this.isBlinking) {
        if (game.counter % 2 === 0) {
          this.selector.style.display = '';
        } else {
          this.selector.style.display = 'none';
        }

        if (--this.blinkCount === 0) {
          this.isBlinking = false;
          this.selector.style.display = '';
        }
      }

      setPosition({ actor: this, game });
    }
  }

  this.draw = () => {
    this.selector.style.backgroundPosition = `${(0 - this.spriteColumn * this.frameWidth)}px ${(0 - this.spriteRow * this.frameHeight)}px`;
    this.selector.style.left               = `${this.x}px`;
    this.selector.style.top                = `${this.y}px`;
    this.selector.style.zIndex             = add(this.y, this.frameHeight);
  };

  this.draw();
};
