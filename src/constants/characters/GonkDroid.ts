import { MAGNIFICATION } from "@/constants/Config.ts";
import { WEAPONS } from "@/constants/Weapons.ts";

export const gonkdroid = {
  code: "gonkdroid",
  frameCounts: {
    x: 9,
    y: 5,
  },
  frameHeight: 12 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  moveFrameCount: 8,
  name: "Gonk Droid",
  isPropulsive: false,
  speed: 4,
  sprite: "characters/gonkdroid",
  weapon: WEAPONS.BOMB,
};
