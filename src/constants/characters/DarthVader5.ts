import { COLORS, MAGNIFICATION } from "@/constants/Config.ts";
import { WEAPONS } from "@/constants/Weapons.ts";

export const darthvader5 = {
  code: "darthvader5",
  death: {
    frameCount: 15,
    frameHeight: 17 * MAGNIFICATION,
    frameWidth: 12 * MAGNIFICATION,
    name: "darthvader5death",
    isRemove: false,
  },
  frameCounts: {
    x: 10,
    y: 4,
  },
  frameHeight: 12 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  moveFrameCount: 8,
  name: "Darth Vader",
  isPropulsive: false,
  speed: 8,
  sprite: "characters/darthvader",
  weapon: WEAPONS.LIGHTSABER,
  weaponColor: COLORS.RED,
  weaponOffsetDown: [1, 8],
  weaponOffsetLeft: [0, 5],
  weaponOffsetRight: [10, 3],
  weaponOffsetUp: [8, 0],
};
