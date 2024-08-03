import { MAGNIFICATION } from '@/constants/config.js';
import { WEAPONS } from '@/constants/weapons.js';

export const bantha = {
  code          : 'bantha',
  frameCounts: {
    x: 10,
    y: 5
  },
  frameHeight   : 12 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Bantha',
  isPropulsive  : false,
  speed         : 10,
  sprite        : 'characters/bantha',
  weapon        : WEAPONS.BOMB
};
