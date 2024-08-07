import { MAGNIFICATION } from "@/constants/Config.ts";
import { WEAPONS } from "@/constants/Weapons.ts";

export const artoo = {
  code: "artoo",
  death: {
    frameCount: 7,
    frameHeight: 8 * MAGNIFICATION,
    frameWidth: 5 * MAGNIFICATION,
    name: "artoodeath",
    isRemove: false,
  },
  frameCounts: {
    x: 2,
    y: 4,
  },
  frameHeight: 8 * MAGNIFICATION,
  frameWidth: 5 * MAGNIFICATION,
  moveFrameCount: 1,
  name: "R2-D2",
  isPropulsive: false,
  speed: 10,
  sprite: "characters/artoo",
  weapon: WEAPONS.BOMB,
};
