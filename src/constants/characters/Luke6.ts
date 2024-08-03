import { COLORS, MAGNIFICATION } from '@/constants/Config.ts';
import { WEAPONS } from '@/constants/Weapons.ts';

export const luke6 = {
    code             : 'luke6',
    frameCounts: {
      x: 10,
      y: 5
    },
    frameHeight      : 12 * MAGNIFICATION,
    frameWidth       : 10 * MAGNIFICATION,
    moveFrameCount   : 8,
    name             : 'Luke Skywalker',
    isPropulsive     : false,
    speed            : 8,
    sprite           : 'characters/luke6',
    weapon           : WEAPONS.LIGHTSABER,
    weaponColor      : COLORS.GREEN,
    weaponOffsetDown : [1, 9],
    weaponOffsetLeft : [0, 3],
    weaponOffsetRight: [10, 3],
    weaponOffsetUp   : [8, 1]
  };