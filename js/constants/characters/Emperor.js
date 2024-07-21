import { COLORS, MAGNIFICATION } from '/js/constants/config.js';
import { WEAPONS } from '/js/constants/weapons.js';

export const emperor = {
    code          : 'emperor',
    frameCounts: {
      x: 9,
      y: 5
    },
    frameHeight   : 12 * MAGNIFICATION,
    frameWidth    : 10 * MAGNIFICATION,
    moveFrameCount: 8,
    name          : 'Emperor',
    isPropulsive  : false,
    speed         : 4,
    sprite        : 'characters/emperor',
    weapon        : WEAPONS.BOMB
  };