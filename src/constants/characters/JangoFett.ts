import { COLORS, MAGNIFICATION } from '@/constants/Config.ts';
import { WEAPONS } from '@/constants/Weapons.ts';

export const jangofett = {
    code             : 'jangofett',
    frameCounts: {
      x: 9,
      y: 5
    },
    frameHeight      : 12 * MAGNIFICATION,
    frameWidth       : 10 * MAGNIFICATION,
    moveFrameCount   : 8,
    name             : 'Jango Fett',
    isPropulsive     : false,
    speed            : 8,
    sprite           : 'characters/jangofett',
    weapon           : WEAPONS.LASER,
    weaponColor      : COLORS.RED,
    weaponOffsetDown : [3, 9],
    weaponOffsetLeft : [0, 5],
    weaponOffsetRight: [10, 5],
    weaponOffsetUp   : [7, 1]
  };