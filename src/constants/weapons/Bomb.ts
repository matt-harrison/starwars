import { add, attachNode, collision } from "@/utils.ts";

import { Animation } from "@/class/Animation.ts";
import { ANIMATIONS } from "@/constants/Animations.ts";

import {
  CARDINALS,
  COLORS,
  MAGNIFICATION,
  WEAPON_TYPES,
} from "@/constants/Config.ts";

export const Bomb = function ({ game, origin }) {
  this.frameCount = 5;
  this.frameHeight = 1 * MAGNIFICATION;
  this.frameWidth = 1 * MAGNIFICATION;
  this.isActive = false;
  this.origin = origin;
  this.spriteColumn = 0;
  this.type = WEAPON_TYPES.BOMB;

  switch (origin.dir) {
    case CARDINALS.DOWN:
      this.x = origin.x + origin.frameWidth / 2;
      this.y = origin.y + origin.frameHeight - 2 * MAGNIFICATION;
      break;
    case CARDINALS.LEFT:
      this.x = origin.x + origin.frameWidth;
      this.y = origin.y + origin.frameHeight - MAGNIFICATION;
      break;
    case CARDINALS.RIGHT:
      this.x = origin.x;
      this.y = origin.y + origin.frameHeight - MAGNIFICATION;
      break;
    case CARDINALS.UP:
      this.x = origin.x + origin.frameWidth / 2;
      this.y = origin.y + origin.frameHeight;
      break;
  }

  this.selector = attachNode({
    attributes: {
      id: `bomb${game.props.length}`,
    },
    parent: game.stage.selector,
    styles: {
      backgroundColor: COLORS.BLACK,
      height: `${this.frameHeight}px`,
      left: `${this.x}px`,
      position: "absolute",
      top: `${this.y}px`,
      width: `${this.frameWidth}px`,
      zIndex: add(this.y, this.frameHeight),
    },
  });

  game.props.push(this);

  this.kill = () => {
    this.isActive = false;

    game.stage.selector.removeChild(this.selector);

    new Animation({
      data: ANIMATIONS.DETONATION,
      game,
      origin: this,
    });
  };

  this.update = () => {
    if (!this.isActive && !collision(this, this.origin)) {
      this.isActive = true;
    }
  };

  this.draw = () => {
    if (this.isActive) {
      if (game.counter % 2) {
        this.selector.style.backgroundColor = COLORS.BLACK;
      } else {
        this.selector.style.backgroundColor = COLORS.RED;
      }
    }
  };
};
