import { COLORS, MAGNIFICATION } from '@/constants/Config.ts';
import { WEAPONS } from '@/constants/Weapons.ts';

export const luke5 = {
    code             : 'luke5',
    frameCounts: {
      x: 9,
      y: 5
    },
    frameHeight      : 11 * MAGNIFICATION,
    frameWidth       : 10 * MAGNIFICATION,
    moveFrameCount   : 8,
    name             : 'Luke Skywalker',
    isPropulsive     : false,
    speed            : 8,
    sprite           : 'characters/luke5',
    weapon           : WEAPONS.LASER,
    weaponColor      : COLORS.GREEN,
    weaponOffsetDown : [3, 8],
    weaponOffsetLeft : [0, 4],
    weaponOffsetRight: [10, 4],
    weaponOffsetUp   : [7, 0]
  };