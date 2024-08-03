import { COLORS, MAGNIFICATION } from "@/constants/Config.ts";
import { WEAPONS } from "@/constants/Weapons.ts";

export const tiepilot = {
  code: "tiepilot",
  frameCounts: {
    x: 9,
    y: 5,
  },
  frameHeight: 11 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  moveFrameCount: 8,
  name: "TIE Fighter Pilot",
  isPropulsive: false,
  speed: 8,
  sprite: "characters/tiepilot",
  weapon: WEAPONS.LASER,
  weaponColor: COLORS.RED,
  weaponOffsetDown: [9, 9],
  weaponOffsetLeft: [0, 5],
  weaponOffsetRight: [10, 5],
  weaponOffsetUp: [2, 0],
};
