import { COLORS, MAGNIFICATION } from '@/js/constants/config.js';
import { WEAPONS } from '@/js/constants/weapons.js';

export const stormtrooper = {
    code             : 'stormtrooper',
    frameCounts: {
      x: 9,
      y: 5
    },
    frameHeight      : 11 * MAGNIFICATION,
    frameWidth       : 10 * MAGNIFICATION,
    moveFrameCount   : 8,
    name             : 'Stormtrooper',
    isPropulsive     : false,
    speed            : 8,
    sprite           : 'characters/stormtrooper',
    weapon           : WEAPONS.LASER,
    weaponColor      : COLORS.RED,
    weaponOffsetDown : [3, 7],
    weaponOffsetLeft : [0, 4],
    weaponOffsetRight: [10, 4],
    weaponOffsetUp   : [6, 0]
  };