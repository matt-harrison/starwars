import { ANIMATIONS }            from '@/constants/Animations.js';
import { COLORS, MAGNIFICATION } from '@/constants/Config.js';
import { WEAPONS }               from '@/constants/Weapons.js';

export const TIE = {
  code             : 'tie',
  death            : ANIMATIONS.SPRITZ,
  frameCounts      : {
    x: 5,
    y: 4
  },
  frameHeight      : 7 * MAGNIFICATION,
  frameWidth       : 7 * MAGNIFICATION,
  isPropulsive     : true,
  moveFrameCount   : 4,
  name             : 'TIE Fighter',
  speed            : 16,
  sprite           : 'ships/tie',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [3, 5],
  weaponOffsetLeft : [0, 3],
  weaponOffsetRight: [5, 3],
  weaponOffsetUp   : [3, 0]
};
