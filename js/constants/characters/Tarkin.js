import { COLORS, MAGNIFICATION } from '/js/constants/config.js';
import { WEAPONS } from '/js/constants/weapons.js';

export const tarkin = {
    code          : 'tarkin',
    frameHeight   : 11 * MAGNIFICATION,
    frameCounts: {
      x: 9,
      y: 5
    },
    frameWidth    : 10 * MAGNIFICATION,
    moveFrameCount: 8,
    name          : 'Grand Moff Tarkin',
    isPropulsive  : false,
    speed         : 4,
    sprite        : 'characters/tarkin',
    weapon        : null
  };