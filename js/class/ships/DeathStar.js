import { ANIMATIONS }            from '../../constants/animations.js';
import { COLORS, MAGNIFICATION } from '../../constants/config.js';
import { WEAPONS }               from '../../constants/weapons.js';

export const DEATH_STAR = {
  code             : 'deathstar',
  death            : ANIMATIONS.EXPLOSION,
  frameCounts      : {
    x: 9,
    y: 4
  },
  frameHeight      : 10 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  isPropulsive     : true,
  moveFrameCount   : 8,
  name             : 'Death Star',
  speed            : 4,
  sprite           : 'ships/deathstar',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [3, 5],
  weaponOffsetLeft : [2, 3],
  weaponOffsetRight: [5, 3],
  weaponOffsetUp   : [3, 0]
};
