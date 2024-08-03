import { COLORS, MAGNIFICATION } from '@/constants/Config.js';
import { WEAPONS } from '@/constants/Weapons.js';

export const garindan = {
    code             : 'garindan',
    frameCounts: {
      x: 9,
      y: 5
    },
    frameHeight      : 12 * MAGNIFICATION,
    frameWidth       : 10 * MAGNIFICATION,
    moveFrameCount   : 8,
    name             : 'Garindan',
    isPropulsive     : false,
    speed            : 8,
    sprite           : 'characters/garindan',
    weapon           : WEAPONS.LASER,
    weaponColor      : COLORS.RED,
    weaponOffsetDown : [3, 9],
    weaponOffsetLeft : [0, 5],
    weaponOffsetRight: [10, 5],
    weaponOffsetUp   : [8, 1]
  };