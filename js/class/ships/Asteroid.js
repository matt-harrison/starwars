import { ANIMATIONS }            from '../../constants/animations.js';
import { COLORS, MAGNIFICATION } from '../../constants/config.js';
import { WEAPONS }               from '../../constants/weapons.js';

export const ASTEROID = {
  code          : 'asteroid',
  death         : ANIMATIONS.SPRITZ,
  frameCounts   : {
    x: 2,
    y: 4
  },
  frameHeight   : 7 * MAGNIFICATION,
  frameWidth    : 7 * MAGNIFICATION,
  isPropulsive  : true,
  moveFrameCount: 1,
  name          : 'Asteroid',
  speed         : 4,
  sprite        : 'ships/asteroid',
  weapon        : null
};
