import { MAGNIFICATION } from '@/constants/Config.ts';
import { WEAPONS } from '@/constants/Weapons.ts';

export const jabba = {
    code          : 'jabba',
    frameCounts: {
      x: 9,
      y: 5
    },
    frameHeight   : 11 * MAGNIFICATION,
    frameWidth    : 10 * MAGNIFICATION,
    moveFrameCount: 8,
    name          : 'Jabba the Hutt',
    isPropulsive  : false,
    speed         : 4,
    sprite        : 'characters/jabba',
    weapon        : WEAPONS.BOMB
  };