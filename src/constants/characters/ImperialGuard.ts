import { MAGNIFICATION } from '@/constants/Config.ts';
import { WEAPONS } from '@/constants/Weapons.ts';

export const imperialguard = {
    code          : 'imperialguard',
    frameCounts: {
      x: 5,
      y: 5
    },
    frameHeight   : 12 * MAGNIFICATION,
    frameWidth    : 10 * MAGNIFICATION,
    moveFrameCount: 4,
    name          : 'Imperial Guard',
    isPropulsive  : false,
    speed         : 8,
    sprite        : 'characters/imperialguard',
    weapon        : WEAPONS.BOMB
  };