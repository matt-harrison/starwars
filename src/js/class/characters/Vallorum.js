import { COLORS, MAGNIFICATION } from '@/js/constants/config.js';
import { WEAPONS } from '@/js/constants/weapons.js';

export const vallorum = {
  code          : 'vallorum',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight   : 11 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Chancellor Vallorum',
  isPropulsive  : false,
  speed         : 4,
  sprite        : 'characters/vallorum',
  weapon        : null
};
