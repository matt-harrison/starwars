import { COLORS, MAGNIFICATION } from '@/constants/Config.js';
import { WEAPONS } from '@/constants/Weapons.js';

export const ackbar = {
  code             : 'ackbar',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Admiral Ackbar',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/ackbar',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [3, 8],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [7, 0]
};
