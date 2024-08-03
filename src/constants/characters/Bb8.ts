import { MAGNIFICATION } from '@/constants/Config.ts';
import { WEAPONS } from '@/constants/Weapons.ts';

export const bb8 = {
    code          : 'bb8',
    frameCounts: {
      x: 9,
      y: 5
    },
    frameHeight   : 7 * MAGNIFICATION,
    frameWidth    : 5 * MAGNIFICATION,
    moveFrameCount: 8,
    name          : 'BB-8',
    isPropulsive  : false,
    speed         : 10,
    sprite        : 'characters/bb8',
    weapon        : WEAPONS.BOMB
  };