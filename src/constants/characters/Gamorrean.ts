import { MAGNIFICATION } from "@/constants/Config.ts";
import { WEAPONS } from "@/constants/Weapons.ts";

export const gamorrean = {
  code: "gamorrean",
  frameCounts: {
    x: 9,
    y: 5,
  },
  frameHeight: 12 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  moveFrameCount: 8,
  name: "Gamorrean Guard",
  isPropulsive: false,
  speed: 6,
  sprite: "characters/gamorrean",
  weapon: WEAPONS.BOMB,
};
