import { COLORS, MAGNIFICATION } from '@/constants/config.js';
import { WEAPONS } from '@/constants/weapons.js';

export const leia6 = {
    code             : 'leia6',
    frameCounts: {
      x: 9,
      y: 5
    },
    frameHeight      : 11 * MAGNIFICATION,
    frameWidth       : 10 * MAGNIFICATION,
    moveFrameCount   : 8,
    name             : 'Princess Leia',
    isPropulsive     : false,
    speed            : 8,
    sprite           : 'characters/leia6',
    weapon           : WEAPONS.LASER,
    weaponColor      : COLORS.GREEN,
    weaponOffsetDown : [3, 8],
    weaponOffsetLeft : [0, 4],
    weaponOffsetRight: [10, 4],
    weaponOffsetUp   : [7, 0]
  };
  