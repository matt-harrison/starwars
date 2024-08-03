import { COLORS, MAGNIFICATION } from '@/constants/Config.js';
import { WEAPONS } from '@/constants/Weapons.js';

export const drevazan = {
  code             : 'drevazan',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Han Solo',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/drevazan',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [3, 8],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [7, 0]
};
