import { COLORS, MAGNIFICATION } from '@/constants/Config.js';
import { WEAPONS } from '@/constants/Weapons.js';

export const tiepilot = {
    code             : 'tiepilot',
    frameCounts: {
      x: 9,
      y: 5
    },
    frameHeight      : 11 * MAGNIFICATION,
    frameWidth       : 10 * MAGNIFICATION,
    moveFrameCount   : 8,
    name             : 'TIE Fighter Pilot',
    isPropulsive     : false,
    speed            : 8,
    sprite           : 'characters/tiepilot',
    weapon           : WEAPONS.LASER,
    weaponColor      : COLORS.RED,
    weaponOffsetDown : [9, 9],
    weaponOffsetLeft : [0, 5],
    weaponOffsetRight: [10, 5],
    weaponOffsetUp   : [2, 0]
  };