import { ANIMATIONS }            from '@/js/constants/animations.js';
import { COLORS, MAGNIFICATION } from '@/js/constants/config.js';
import { WEAPONS }               from '@/js/constants/weapons.js';

export const DESTROYER = {
  code             : 'destroyer',
  death            : ANIMATIONS.EXPLOSION,
  frameCounts      : {
    x: 2,
    y: 4
  },
  frameHeight      : 30 * MAGNIFICATION,
  frameWidth       : 30 * MAGNIFICATION,
  isPropulsive     : true,
  moveFrameCount   : 1,
  name             : 'Star Destroyer',
  speed            : 1,
  sprite           : 'ships/destroyer',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [15, 12],
  weaponOffsetLeft : [16, 14],
  weaponOffsetRight: [12, 15 ],
  weaponOffsetUp   : [15, 16]
};
