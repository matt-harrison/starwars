import { COLORS, MAGNIFICATION } from '@/js/constants/config.js';
import { WEAPONS } from '@/js/constants/weapons.js';

export const ewok = {
    code             : 'ewok',
    frameCounts: {
      x: 9,
      y: 5
    },
    frameHeight      : 11 * MAGNIFICATION,
    frameWidth       : 10 * MAGNIFICATION,
    moveFrameCount   : 8,
    name             : 'Ewok',
    isPropulsive     : false,
    speed            : 8,
    sprite           : 'characters/ewok',
    weapon           : WEAPONS.ROCK,
    weaponOffsetDown : [3, 10],
    weaponOffsetLeft : [0, 4],
    weaponOffsetRight: [10, 4],
    weaponOffsetUp   : [3, 0]
  };