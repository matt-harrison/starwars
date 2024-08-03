import { ANIMATIONS } from "@/constants/Animations.ts";
import { COLORS, MAGNIFICATION } from "@/constants/Config.ts";
import { WEAPONS } from "@/constants/Weapons.ts";

export const FALCON = {
  code: "falcon",
  death: ANIMATIONS.SPRITZ,
  frameCounts: {
    x: 5,
    y: 4,
  },
  frameHeight: 15 * MAGNIFICATION,
  frameWidth: 15 * MAGNIFICATION,
  isPropulsive: true,
  moveFrameCount: 4,
  name: "Millenium Falcon",
  speed: 8,
  sprite: "ships/falcon",
  weapon: WEAPONS.LASER,
  weaponColor: COLORS.GREEN,
  weaponOffsetDown: [7, 8],
  weaponOffsetLeft: [5, 7],
  weaponOffsetRight: [8, 7],
  weaponOffsetUp: [7, 6],
};
