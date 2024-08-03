import { MAGNIFICATION } from '@/constants/config.js';
import { WEAPONS } from '@/constants/weapons.js';

export const ani = {
  code          : 'ani',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight   : 10 * MAGNIFICATION,
  frameWidth    : 7 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Ani',
  isPropulsive  : false,
  speed         : 8,
  sprite        : 'characters/ani',
  weapon        : WEAPONS.BOMB
};
