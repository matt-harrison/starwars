import { COLORS, MAGNIFICATION } from '@/js/constants/config.js';
import { WEAPONS } from '@/js/constants/weapons.js';

export const bossnass = {
    code             : 'bossnass',
    frameCounts: {
      x: 9,
      y: 5
    },
    frameHeight      : 12 * MAGNIFICATION,
    frameWidth       : 10 * MAGNIFICATION,
    moveFrameCount   : 8,
    name             : 'Boss Nass',
    isPropulsive     : false,
    speed            : 4,
    sprite           : 'characters/bossnass',
    weapon           : WEAPONS.GUNGAN_BALL,
    weaponOffsetDown : [2, 12],
    weaponOffsetLeft : [0,  3],
    weaponOffsetRight: [10, 3],
    weaponOffsetUp   : [2,  0]
  };