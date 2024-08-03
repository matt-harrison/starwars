import { MAGNIFICATION } from '@/constants/Config.ts';
import { WEAPONS } from '@/constants/Weapons.ts';

export const rancor = {
    code          : 'rancor',
    frameCounts: {
      x: 9,
      y: 5
    },
    frameHeight   : 13 * MAGNIFICATION,
    frameWidth    : 15 * MAGNIFICATION,
    moveFrameCount: 8,
    name          : 'Rancor',
    isPropulsive  : false,
    speed         : 4,
    sprite        : 'characters/rancor',
    weapon        : WEAPONS.BOMB
  };