import { COLORS, MAGNIFICATION } from '@/constants/Config.js';
import { WEAPONS } from '@/constants/Weapons.js';

export const chewbacca5 = {
    code             : 'chewbacca5',
    frameCounts: {
      x: 9,
      y: 5
    },
    frameHeight      : 15 * MAGNIFICATION,
    frameWidth       : 12 * MAGNIFICATION,
    moveFrameCount   : 8,
    name             : 'Chewbacca',
    isPropulsive     : false,
    speed            : 6,
    sprite           : 'characters/chewbacca5',
    weapon           : WEAPONS.LASER,
    weaponColor      : COLORS.GREEN,
    weaponOffsetDown : [4, 12],
    weaponOffsetLeft : [0, 8],
    weaponOffsetRight: [11, 8],
    weaponOffsetUp   : [8, 1]
  };