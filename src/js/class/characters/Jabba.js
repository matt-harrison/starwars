import { COLORS, MAGNIFICATION } from '@/js/constants/config.js';
import { WEAPONS } from '@/js/constants/weapons.js';

export const jabba = {
    code          : 'jabba',
    frameCounts: {
      x: 9,
      y: 5
    },
    frameHeight   : 11 * MAGNIFICATION,
    frameWidth    : 10 * MAGNIFICATION,
    moveFrameCount: 8,
    name          : 'Jabba the Hutt',
    isPropulsive  : false,
    speed         : 4,
    sprite        : 'characters/jabba',
    weapon        : WEAPONS.BOMB
  };