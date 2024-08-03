import { MAGNIFICATION } from '@/constants/Config.ts';
import { WEAPONS } from '@/constants/Weapons.ts';

export const logray = {
    code          : 'logray',
    frameCounts: {
      x: 9,
      y: 5
    },
    frameHeight   : 12 * MAGNIFICATION,
    frameWidth    : 10 * MAGNIFICATION,
    moveFrameCount: 8,
    name          : 'Logray',
    isPropulsive  : false,
    speed         : 8,
    sprite        : 'characters/logray',
    weapon        : WEAPONS.ROCK
  };