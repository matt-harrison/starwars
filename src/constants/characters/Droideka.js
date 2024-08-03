import { COLORS, MAGNIFICATION } from '@/constants/Config.js';
import { WEAPONS } from '@/constants/Weapons.js';

export const droideka = {
  code             : 'droideka',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Droideka',
  isPropulsive     : false,
  speed            : 12,
  sprite           : 'characters/droideka',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [2, 8],
  weaponOffsetLeft : [0, 5],
  weaponOffsetRight: [10, 5],
  weaponOffsetUp   : [7, 1]
};