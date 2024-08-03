import { MAGNIFICATION } from '@/constants/Config.js';
import { WEAPONS } from '@/constants/Weapons.js';

export const stuntrooper = {
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
    weapon           : WEAPONS.STUN,
    weaponOffsetDown : [0, 6],
    weaponOffsetLeft : [4, 0],
    weaponOffsetRight: [6, 0],
    weaponOffsetUp   : [0, 4]
  };