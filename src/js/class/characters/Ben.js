import { COLORS, MAGNIFICATION } from '@/js/constants/config.js';
import { WEAPONS } from '@/js/constants/weapons.js';

export const ben = {
    code             : 'ben',
    death            : {
      frameCount : 6,
      frameHeight: 12 * MAGNIFICATION,
      frameWidth : 10 * MAGNIFICATION,
      name       : 'bendeath',
      isRemove   : false
    },
    frameCounts: {
      x: 6,
      y: 4
    },
    frameHeight      : 12 * MAGNIFICATION,
    frameWidth       : 10 * MAGNIFICATION,
    moveFrameCount   : 4,
    name             : 'Ben Kenobi',
    isPropulsive     : false,
    speed            : 6,
    sprite           : 'characters/ben',
    weapon           : WEAPONS.LIGHTSABER,
    weaponColor      : COLORS.BLUE,
    weaponOffsetDown : [1, 10],
    weaponOffsetLeft : [0, 4],
    weaponOffsetRight: [10, 4],
    weaponOffsetUp   : [8, 0]
  };