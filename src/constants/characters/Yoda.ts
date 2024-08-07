import { COLORS, MAGNIFICATION } from "@/constants/Config.ts";
import { WEAPONS } from "@/constants/Weapons.ts";

export const yoda = {
  code: "yoda",
  frameCounts: {
    x: 10,
    y: 5,
  },
  frameHeight: 10 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  moveFrameCount: 8,
  name: "Yoda",
  isPropulsive: false,
  speed: 4,
  sprite: "characters/yoda",
  weapon: WEAPONS.LIGHTSABER,
  weaponColor: COLORS.GREEN,
  weaponOffsetDown: [1, 9],
  weaponOffsetLeft: [0, 4],
  weaponOffsetRight: [9, 4],
  weaponOffsetUp: [7, 2],
};
