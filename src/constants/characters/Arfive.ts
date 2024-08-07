import { MAGNIFICATION } from "@/constants/Config.ts";
import { WEAPONS } from "@/constants/Weapons.ts";

export const arfive = {
  code: "arfive",
  death: {
    frameCount: 6,
    frameHeight: 9 * MAGNIFICATION,
    frameWidth: 5 * MAGNIFICATION,
    name: "arfivedeath",
    isRemove: false,
  },
  frameCounts: {
    x: 2,
    y: 4,
  },
  frameHeight: 9 * MAGNIFICATION,
  frameWidth: 5 * MAGNIFICATION,
  moveFrameCount: 1,
  name: "R5-D4",
  isPropulsive: false,
  speed: 6,
  sprite: "characters/arfive",
  weapon: WEAPONS.BOMB,
};
