import { COLORS, MAGNIFICATION } from "@/constants/Config.ts";
import { WEAPONS } from "@/constants/Weapons.ts";

export const jawa = {
  code: "jawa",
  frameCounts: {
    x: 5,
    y: 5,
  },
  frameHeight: 10 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  moveFrameCount: 4,
  name: "Jawa",
  isPropulsive: false,
  speed: 8,
  sprite: "characters/jawa",
  weapon: WEAPONS.LASER,
  weaponColor: COLORS.RED,
  weaponOffsetDown: [3, 7],
  weaponOffsetLeft: [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp: [7, 0],
};
