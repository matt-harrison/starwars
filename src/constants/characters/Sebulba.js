import { MAGNIFICATION } from '@/constants/Config.js';
import { WEAPONS } from '@/constants/Weapons.js';

export const sebulba = {
    code          : 'sebulba',
    frameCounts: {
      x: 9,
      y: 5
    },
    frameHeight   : 10 * MAGNIFICATION,
    frameWidth    : 10 * MAGNIFICATION,
    moveFrameCount: 8,
    name          : 'Sebulba',
    isPropulsive  : false,
    speed         : 8,
    sprite        : 'characters/sebulba',
    weapon        : WEAPONS.BOMB
  };