import { COLORS, MAGNIFICATION } from "@/constants/Config.ts";
import { WEAPONS } from "@/constants/Weapons.ts";

export const tusken = {
  code: "tusken",
  frameCounts: {
    x: 5,
    y: 5,
  },
  frameHeight: 11 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  moveFrameCount: 4,
  name: "Tusken Raider",
  isPropulsive: false,
  speed: 8,
  sprite: "characters/tusken",
  weapon: WEAPONS.LASER,
  weaponColor: COLORS.RED,
  weaponOffsetDown: [3, 9],
  weaponOffsetLeft: [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp: [7, 0],
};
