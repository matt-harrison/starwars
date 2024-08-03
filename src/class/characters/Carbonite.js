import { MAGNIFICATION } from '@/constants/config.js';
import { WEAPONS } from '@/constants/weapons.js';

export const carbonite = {
    code          : 'carbonite',
    frameCounts: {
      x: 2,
      y: 5
    },
    frameHeight   : 12 * MAGNIFICATION,
    frameWidth    : 10 * MAGNIFICATION,
    moveFrameCount: 1,
    name          : 'Frozen Han Solo',
    isPropulsive  : false,
    speed         : 8,
    sprite        : 'characters/carbonite',
    weapon        : WEAPONS.BOMB
  };