import { MAGNIFICATION } from '@/constants/Config.js';
import { WEAPONS } from '@/constants/Weapons.js';

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