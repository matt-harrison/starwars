import { ANIMATIONS } from '@/constants/Animations.js';
import { MAGNIFICATION } from '@/constants/Config.js';

export const threebee = {
    code          : 'threebee',
    death         : ANIMATIONS.SPRITZ,
    frameCounts: {
      x: 9,
      y: 4
    },
    frameHeight   : 11 * MAGNIFICATION,
    frameWidth    : 8 * MAGNIFICATION,
    moveFrameCount: 8,
    name          : '3B6-RA-7',
    isPropulsive  : false,
    speed         : 5,
    sprite        : 'characters/threebee',
    weapon        : null
  };