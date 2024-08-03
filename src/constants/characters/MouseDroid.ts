import { ANIMATIONS } from '@/constants/Animations.ts';
import { MAGNIFICATION } from '@/constants/Config.ts';
import { WEAPONS } from '@/constants/Weapons.ts';

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