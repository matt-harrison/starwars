import { ANIMATIONS } from '@/constants/Animations.js';
import { MAGNIFICATION } from '@/constants/Config.js';
import { WEAPONS } from '@/constants/Weapons.js';

export const mousedroid = {
    code          : 'mousedroid',
    death         : ANIMATIONS.DETONATION,
    frameCounts: {
      x: 2,
      y: 4
    },
    frameHeight   : 8 * MAGNIFICATION,
    frameWidth    : 8 * MAGNIFICATION,
    moveFrameCount: 1,
    name          : 'Mouse Droid',
    isPropulsive  : false,
    speed         : 12,
    sprite        : 'characters/mousedroid',
    weapon        : WEAPONS.BOMB
  };