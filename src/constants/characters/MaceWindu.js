import { COLORS, MAGNIFICATION } from '@/constants/Config.js';
import { WEAPONS } from '@/constants/Weapons.js';

export const macewindu = {
    code             : 'macewindu',
    frameCounts: {
      x: 10,
      y: 5
    },
    frameHeight      : 11 * MAGNIFICATION,
    frameWidth       : 10 * MAGNIFICATION,
    moveFrameCount   : 8,
    name             : 'Mace Windu',
    isPropulsive     : false,
    speed            : 8,
    sprite           : 'characters/macewindu',
    weapon           : WEAPONS.LIGHTSABER,
    weaponColor      : COLORS.PURPLE,
    weaponOffsetDown : [1, 9],
    weaponOffsetLeft : [0, 3],
    weaponOffsetRight: [10, 3],
    weaponOffsetUp   : [8, 0]
  };