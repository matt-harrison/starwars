import { MAGNIFICATION } from "@/constants/Config.ts";

export const threepio = {
  code: "threepio",
  death: {
    frameCount: 14,
    frameHeight: 10 * MAGNIFICATION,
    frameWidth: 8 * MAGNIFICATION,
    name: "threepiodeath",
    isRemove: false,
  },
  weapon: null,
  frameCounts: {
    x: 9,
    y: 4,
  },
  frameHeight: 10 * MAGNIFICATION,
  frameWidth: 8 * MAGNIFICATION,
  moveFrameCount: 8,
  name: "C-3PO",
  isPropulsive: false,
  speed: 5,
  sprite: "characters/threepio",
};
