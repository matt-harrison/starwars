import { MAGNIFICATION } from "@/constants/Config.ts";
import { WEAPONS } from "@/constants/Weapons.ts";

export const carbonite = {
  code: "carbonite",
  frameCounts: {
    x: 2,
    y: 5,
  },
  frameHeight: 12 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  moveFrameCount: 1,
  name: "Frozen Han Solo",
  isPropulsive: false,
  speed: 8,
  sprite: "characters/carbonite",
  weapon: WEAPONS.BOMB,
};
