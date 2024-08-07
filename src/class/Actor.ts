import {
  advanceFrame,
  add,
  attachNode,
  changeDirection,
  getRandom,
  preload,
  setCoordinates,
  setPosition,
  updateHud,
} from "@/utils.ts";

import {
  ACTOR_TYPES,
  CARDINALS,
  FPS,
  MAGNIFICATION,
} from "@/constants/Config.ts";

import { Animation } from "@/class/Animation.ts";

export const Actor = function ({ data, game }) {
  Object.assign(this, {
    bounceLimit: data.details.bounceLimit,
    code: data.character.code,
    death: data.character.death,
    dir: data.details.dir,
    frameCounts: data.character.frameCounts,
    frameHeight: data.character.frameHeight,
    frameWidth: data.character.frameWidth,
    hp: data.details.hp,
    id: data.details.id,
    isOptional: data.details.isOptional,
    isPropulsive: data.character.isPropulsive,
    moveFrameCount: data.character.moveFrameCount,
    name: data.character.name,
    spawnFrame: data.details.spawnFrame,
    speed: data.character.speed,
    sprite: data.character.sprite,
    type: data.details.type,
    weapon: data.character.weapon,
    weaponColor: data.character.weaponColor,
    weaponOffsetDown: data.character.weaponOffsetDown,
    weaponOffsetLeft: data.character.weaponOffsetLeft,
    weaponOffsetRight: data.character.weaponOffsetRight,
    weaponOffsetUp: data.character.weaponOffsetUp,
  });

  this.blinkCount = 0;
  this.bounceCount = 0;
  this.dir = this.dir
    ? this.dir
    : Object.values(CARDINALS)[getRandom(Object.values(CARDINALS).length)];
  this.hp = this.hp ? this.hp : 1;
  this.isActive = true;
  this.isBlinking = false;
  this.speed = this.speed * (MAGNIFICATION / 5);
  this.spriteColumn = 1;

  setCoordinates({
    actor: this,
    game,
  });

  this.selector = attachNode({
    attributes: {
      id: this.id,
    },
    parent: game.stage.selector,
    styles: {
      backgroundImage: `url('img/${this.sprite}.png')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: `${this.frameWidth * this.frameCounts.x}px ${this.frameHeight * this.frameCounts.y}px`,
      height: `${this.frameHeight}px`,
      position: "absolute",
      width: `${this.frameWidth}px`,
      zIndex: add(this.y, this.frameHeight),
    },
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
        this.isBlinking = true;
        this.blinkCount = FPS;

        changeDirection({ actor: this, game });
      }
    }

    updateHud({
      game,
      victim: this,
    });
  };

  this.kill = () => {
    if (this.type === ACTOR_TYPES.ENEMY && !this.isOptional) {
      game.enemiesKilled++;
    }

    this.isActive = false;
    this.isBlinking = false;
    this.spriteColumn = 0;
    this.spriteRow = 4;

    if (this.death) {
      new Animation({
        data: this.death,
        game,
        origin: this,
      });
    }
  };

  this.update = () => {
    if (this.isActive) {
      advanceFrame(this);

      if (this.isBlinking) {
        if (game.counter % 2 === 0) {
          this.selector.style.display = "";
        } else {
          this.selector.style.display = "none";
        }

        if (--this.blinkCount === 0) {
          this.isBlinking = false;
          this.selector.style.display = "";
        }
      }

      setPosition({ actor: this, game });
    }
  };

  this.draw = () => {
    this.selector.style.backgroundPosition = `${0 - this.spriteColumn * this.frameWidth}px ${0 - this.spriteRow * this.frameHeight}px`;
    this.selector.style.left = `${this.x}px`;
    this.selector.style.top = `${this.y}px`;
    this.selector.style.zIndex = add(this.y, this.frameHeight);
  };

  this.draw();
};
