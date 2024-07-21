import { COLORS, MAGNIFICATION } from '/js/constants/config.js';
import { WEAPONS } from '/js/constants/weapons.js';

export const quigonjinn = {
    code             : 'quigonjinn',
    frameCounts: {
      x: 10,
      y: 5
    },
    frameHeight      : 12 * MAGNIFICATION,
    frameWidth       : 10 * MAGNIFICATION,
    moveFrameCount   : 8,
    name             : 'Qui-Gon Jinn',
    isPropulsive     : false,
    speed            : 8,
    sprite           : 'characters/quigonjinn',
    weapon           : WEAPONS.LIGHTSABER,
    weaponColor      : COLORS.GREEN,
    weaponOffsetDown : [1, 10],
    weaponOffsetLeft : [0, 4],
    weaponOffsetRight: [10, 4],
    weaponOffsetUp   : [8, 0]
  };