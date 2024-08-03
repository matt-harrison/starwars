import { COLORS, MAGNIFICATION } from '@/constants/Config.js';
import { WEAPONS } from '@/constants/Weapons.js';

export const xwingpilot = {
  code             : 'xwingpilot',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'X-wing Pilot',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/xwingpilot',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [3, 7],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [6, 0]
};
