import { COLORS, MAGNIFICATION } from '@/constants/Config.js';
import { WEAPONS } from '@/constants/Weapons.js';

export const obiwan = {
    code             : 'obiwan',
    frameCounts: {
      x: 10,
      y: 5
    },
    frameHeight      : 12 * MAGNIFICATION,
    frameWidth       : 10 * MAGNIFICATION,
    moveFrameCount   : 8,
    name             : 'Obi Wan Kenobi',
    isPropulsive     : false,
    speed            : 8,
    sprite           : 'characters/obiwan',
    weapon           : WEAPONS.LIGHTSABER,
    weaponColor      : COLORS.BLUE,
    weaponOffsetDown : [1, 10],
    weaponOffsetLeft : [0, 3],
    weaponOffsetRight: [10, 3],
    weaponOffsetUp   : [8, 0]
  };