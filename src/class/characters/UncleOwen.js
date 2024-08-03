import { MAGNIFICATION } from '@/constants/config.js';
import { WEAPONS } from '@/constants/weapons.js';

export const uncleowen = {
  code          : 'uncleowen',
  death         : {
    frameCount:  10,
    frameHeight: 12 * MAGNIFICATION,
    frameWidth:  10 * MAGNIFICATION,
    name:        'uncleowendeath',
    isRemove:    false
  },
  frameCounts: {
    x: 9,
    y: 4
  },
  frameHeight   : 12 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Uncle Owen',
  isPropulsive  : false,
  speed         : 6,
  sprite        : 'characters/uncleowen',
  weapon        : WEAPONS.BOMB
};
