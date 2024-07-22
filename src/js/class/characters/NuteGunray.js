import { COLORS, MAGNIFICATION } from '@/js/constants/config.js';
import { WEAPONS } from '@/js/constants/weapons.js';

export const nutegunray = {
    code          : 'nutegunray',
    frameCounts: {
      x: 5,
      y: 5
    },
    frameHeight   : 12 * MAGNIFICATION,
    frameWidth    : 10 * MAGNIFICATION,
    moveFrameCount: 4,
    name          : 'Nute Gunray',
    isPropulsive  : false,
    speed         : 5,
    sprite        : 'characters/nutegunray',
    weapon        : null
  };