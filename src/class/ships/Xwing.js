import { ANIMATIONS }            from '@/constants/animations.js';
import { COLORS, MAGNIFICATION } from '@/constants/config.js';
import { WEAPONS }               from '@/constants/weapons.js';

export const XWING = {
  code             : 'xwing',
  death            : ANIMATIONS.SPRITZ,
  frameCounts      : {
    x: 5,
    y: 4
  },
  frameHeight      : 9 * MAGNIFICATION,
  frameWidth       : 9 * MAGNIFICATION,
  isPropulsive     : true,
  moveFrameCount   : 4,
  name             : 'X-wing',
  speed            : 8,
  sprite           : 'ships/xwing',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [4, 8],
  weaponOffsetLeft : [1, 4],
  weaponOffsetRight: [8, 4],
  weaponOffsetUp   : [4, 1]
};
