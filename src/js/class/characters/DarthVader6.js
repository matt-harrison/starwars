import { COLORS, MAGNIFICATION } from '@/js/constants/config.js';
import { WEAPONS } from '@/js/constants/weapons.js';

export const darthvader6 = {
    code             : 'darthvader6',
    death            : {
      frameCount : 12,
      frameHeight: 12 * MAGNIFICATION,
      frameWidth : 10 * MAGNIFICATION,
      name       : 'darthvader6death',
      isRemove   : false
    },
    frameCounts: {
      x: 10,
      y: 4
    },
    frameHeight      : 12 * MAGNIFICATION,
    frameWidth       : 10 * MAGNIFICATION,
    moveFrameCount   : 8,
    name             : 'Darth Vader',
    isPropulsive     : false,
    speed            : 8,
    sprite           : 'characters/darthvader',
    weapon           : WEAPONS.LIGHTSABER,
    weaponColor      : COLORS.RED,
    weaponOffsetDown : [1, 8],
    weaponOffsetLeft : [0, 5],
    weaponOffsetRight: [10, 3],
    weaponOffsetUp   : [8, 0]
  };