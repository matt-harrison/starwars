import { COLORS, MAGNIFICATION } from '@/constants/Config.js';
import { WEAPONS } from '@/constants/Weapons.js';

export const darthmaul = {
  code             : 'darthmaul',
  frameCounts: {
    x: 10,
    y: 5
  },
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Darth Maul',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/darthmaul',
  weapon           : WEAPONS.LIGHTSABER,
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [1, 10],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [8, 0]
};