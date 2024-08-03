import { MAGNIFICATION } from '@/constants/Config.js';
import { WEAPONS } from '@/constants/Weapons.js';

export const jarjar = {
    code             : 'jarjar',
    frameCounts: {
      x: 9,
      y: 5
    },
    frameHeight      : 12 * MAGNIFICATION,
    frameWidth       : 10 * MAGNIFICATION,
    moveFrameCount   : 8,
    name             : 'Jar Jar Binks',
    isPropulsive     : false,
    speed            : 8,
    sprite           : 'characters/jarjar',
    weapon           : WEAPONS.GUNGAN_BALL,
    weaponOffsetDown : [2, 12],
    weaponOffsetLeft : [0, 3],
    weaponOffsetRight: [10, 3],
    weaponOffsetUp   : [2, 0]
  };