import { COLORS, MAGNIFICATION } from '@/constants/config.js';
import { WEAPONS } from '@/constants/weapons.js';

export const amidala = {
  code             : 'amidala',
  frameCounts: {
    x: 9,
    y: 5,
  },
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Queen Amidala',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/amidala',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [3, 9],
  weaponOffsetLeft : [0, 5],
  weaponOffsetRight: [10, 5],
  weaponOffsetUp   : [7, 0]
};
