import { MAGNIFICATION } from '@/js/constants/config.js';
import { WEAPONS } from '@/js/constants/weapons.js';

export const tauntaun = {
    code          : 'tauntaun',
    frameCounts: {
      x: 9,
      y: 5
    },
    frameHeight   : 12 * MAGNIFICATION,
    frameWidth    : 10 * MAGNIFICATION,
    moveFrameCount: 8,
    name          : 'Tauntaun',
    isPropulsive  : false,
    speed         : 10,
    sprite        : 'characters/tauntaun',
    weapon        : WEAPONS.BOMB
  };