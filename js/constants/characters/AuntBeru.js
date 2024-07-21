import { COLORS, MAGNIFICATION } from '/js/constants/config.js';
import { WEAPONS } from '/js/constants/weapons.js';

export const auntberu = {
  code          : 'auntberu',
  death         : {
    frameCount : 10,
    frameHeight: 12 * MAGNIFICATION,
    frameWidth : 10 * MAGNIFICATION,
    name       : 'auntberudeath',
    isRemove   : false
  },
  frameCounts: {
    x: 5,
    y: 4
  },
  frameHeight   : 11 * MAGNIFICATION,
  frameWidth    : 8 * MAGNIFICATION,
  moveFrameCount: 4,
  name          : 'Aunt Beru',
  isPropulsive  : false,
  speed         : 6,
  sprite        : 'characters/auntberu',
  weapon        : WEAPONS.BOMB
};
