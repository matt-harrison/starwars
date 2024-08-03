import { ANIMATIONS }            from '@/constants/Animations.ts';
import { COLORS, MAGNIFICATION } from '@/constants/Config.ts';
import { WEAPONS }               from '@/constants/Weapons.ts';

export const DEATH_STAR6 = {
  code             : 'deathstar6',
  death            : ANIMATIONS.EXPLOSION,
  frameCounts      : {
    x: 9,
    y: 4
  },
  frameHeight      : 10 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  isPropulsive     : true,
  moveFrameCount   : 8,
  name             : 'Death Star II',
  speed            : 4,
  sprite           : 'ships/deathstar6',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [3, 5],
  weaponOffsetLeft : [2, 3],
  weaponOffsetRight: [5, 3],
  weaponOffsetUp   : [3, 0]
};
