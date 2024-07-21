import { COLORS, MAGNIFICATION } from '/js/constants/config.js';
import { WEAPONS } from '/js/constants/weapons.js';

export const runehaako = {
    code          : 'runehaako',
    frameCounts: {
      x: 5,
      y: 5
    },
    frameHeight   : 12 * MAGNIFICATION,
    frameWidth    : 10 * MAGNIFICATION,
    moveFrameCount: 4,
    name          : 'Rune Haako',
    isPropulsive  : false,
    speed         : 5,
    sprite        : 'characters/runehaako',
    weapon        : null
  };