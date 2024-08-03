import { COLORS, MAGNIFICATION } from '@/constants/config.js';
import { WEAPONS } from '@/constants/weapons.js';

export const atst = {
  code             : 'atst',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight      : 15 * MAGNIFICATION,
  frameWidth       : 15 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'AT-ST',
  isPropulsive     : false,
  speed            : 4,
  sprite           : 'characters/atst',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [6, 8],
  weaponOffsetLeft : [2, 5],
  weaponOffsetRight: [13, 5],
  weaponOffsetUp   : [8, 0]
};
