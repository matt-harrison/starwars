import { COLORS, MAGNIFICATION } from '@/js/constants/config.js';
import { WEAPONS } from '@/js/constants/weapons.js';

export const coruscantguard = {
    code             : 'coruscantguard',
    frameCounts: {
      x: 5,
      y: 5
    },
    frameHeight      : 12 * MAGNIFICATION,
    frameWidth       : 10 * MAGNIFICATION,
    moveFrameCount   : 4,
    name             : 'Coruscant Guard',
    isPropulsive     : false,
    speed            : 8,
    sprite           : 'characters/coruscantguard',
    weapon           : WEAPONS.LASER,
    weaponColor      : COLORS.RED,
    weaponOffsetDown : [3, 9],
    weaponOffsetLeft : [0, 5],
    weaponOffsetRight: [10, 5],
    weaponOffsetUp   : [7, 1]
  };