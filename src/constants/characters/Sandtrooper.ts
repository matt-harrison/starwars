import { COLORS, MAGNIFICATION } from "@/constants/Config.ts";
import { WEAPONS } from "@/constants/Weapons.ts";

export const sandtrooper = {
  code: "sandtrooper",
  frameCounts: {
    x: 9,
    y: 5,
  },
  frameHeight: 11 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  moveFrameCount: 8,
  name: "Sandtrooper",
  isPropulsive: false,
  speed: 8,
  sprite: "characters/sandtrooper",
  weapon: WEAPONS.LASER,
  weaponColor: COLORS.RED,
  weaponOffsetDown: [3, 7],
  weaponOffsetLeft: [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp: [6, 0],
};
