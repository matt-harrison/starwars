import { COLORS, MAGNIFICATION } from '/js/constants/config.js';
import { WEAPONS } from '/js/constants/weapons.js';

export const imperialguard = {
    code          : 'imperialguard',
    frameCounts: {
      x: 5,
      y: 5
    },
    frameHeight   : 12 * MAGNIFICATION,
    frameWidth    : 10 * MAGNIFICATION,
    moveFrameCount: 4,
    name          : 'Imperial Guard',
    isPropulsive  : false,
    speed         : 8,
    sprite        : 'characters/imperialguard',
    weapon        : WEAPONS.BOMB
  };