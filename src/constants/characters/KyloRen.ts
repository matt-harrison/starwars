import { COLORS, MAGNIFICATION } from "@/constants/Config.ts";
import { WEAPONS } from "@/constants/Weapons.ts";

export const kyloren = {
  code: "kyloren",
  frameCounts: {
    x: 10,
    y: 5,
  },
  frameHeight: 12 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  moveFrameCount: 8,
  name: "Kylo Ren",
  isPropulsive: false,
  speed: 8,
  sprite: "characters/kyloren",
  weapon: WEAPONS.LIGHTSABER,
  weaponColor: COLORS.RED,
  weaponOffsetDown: [1, 8],
  weaponOffsetLeft: [0, 5],
  weaponOffsetRight: [10, 3],
  weaponOffsetUp: [8, 0],
};
