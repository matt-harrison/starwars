import { ANIMATIONS }            from '/js/constants/animations.js';
import { COLORS, MAGNIFICATION } from '/js/constants/config.js';
import { WEAPONS }          from '/js/constants/weapons.js';

const ASTEROID = {
  code          : 'asteroid',
  death         : ANIMATIONS.SPRITZ,
  frameCounts   : {
    x: 2,
    y: 4
  },
  frameHeight   : 7 * MAGNIFICATION,
  frameWidth    : 7 * MAGNIFICATION,
  isPropulsive  : true,
  moveFrameCount: 1,
  name          : 'Asteroid',
  speed         : 4,
  sprite        : 'ships/asteroid',
  weapon        : null
};

const DEATH_STAR = {
  code             : 'deathstar',
  death            : ANIMATIONS.EXPLOSION,
  frameCounts      : {
    x: 9,
    y: 4
  },
  frameHeight      : 10 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  isPropulsive     : true,
  moveFrameCount   : 8,
  name             : 'Death Star',
  speed            : 4,
  sprite           : 'ships/deathstar',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [3, 5],
  weaponOffsetLeft : [2, 3],
  weaponOffsetRight: [5, 3],
  weaponOffsetUp   : [3, 0]
};

const DEATH_STAR6 = {
  code             : 'deathstar6',
  death            : ANIMATIONS.EXPLOSION,
  frameCounts      : {
    x: 9,
    y: 4
  },
  frameHeight      : 10 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  isPropulsive     : true,
  moveFrameCount   : 8,
  name             : 'Death Star II',
  speed            : 4,
  sprite           : 'ships/deathstar6',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [3, 5],
  weaponOffsetLeft : [2, 3],
  weaponOffsetRight: [5, 3],
  weaponOffsetUp   : [3, 0]
};

const DESTROYER = {
  code             : 'destroyer',
  death            : ANIMATIONS.EXPLOSION,
  frameCounts      : {
    x: 2,
    y: 4
  },
  frameHeight      : 30 * MAGNIFICATION,
  frameWidth       : 30 * MAGNIFICATION,
  isPropulsive     : true,
  moveFrameCount   : 1,
  name             : 'Star Destroyer',
  speed            : 1,
  sprite           : 'ships/destroyer',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [15, 12],
  weaponOffsetLeft : [16, 14],
  weaponOffsetRight: [12, 15 ],
  weaponOffsetUp   : [15, 16]
};

const FALCON = {
  code             : 'falcon',
  death            : ANIMATIONS.SPRITZ,
  frameCounts      : {
    x: 5,
    y: 4
  },
  frameHeight      : 15 * MAGNIFICATION,
  frameWidth       : 15 * MAGNIFICATION,
  isPropulsive     : true,
  moveFrameCount   : 4,
  name             : 'Millenium Falcon',
  speed            : 8,
  sprite           : 'ships/falcon',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [7, 8],
  weaponOffsetLeft : [5, 7],
  weaponOffsetRight: [8, 7],
  weaponOffsetUp   : [7, 6]
};

const TIE = {
  code             : 'tie',
  death            : ANIMATIONS.SPRITZ,
  frameCounts      : {
    x: 5,
    y: 4
  },
  frameHeight      : 7 * MAGNIFICATION,
  frameWidth       : 7 * MAGNIFICATION,
  isPropulsive     : true,
  moveFrameCount   : 4,
  name             : 'TIE Fighter',
  speed            : 16,
  sprite           : 'ships/tie',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [3, 5],
  weaponOffsetLeft : [0, 3],
  weaponOffsetRight: [5, 3],
  weaponOffsetUp   : [3, 0]
};

const TIE_ADVANCED = {
  code             : 'vadertie',
  death            : {
    frameCount : 8,
    frameHeight: 7 * MAGNIFICATION,
    frameWidth : 7 * MAGNIFICATION,
    name       : 'vadertiedeath',
    isRemove   : true
  },
  frameCounts      : {
    x: 5,
    y: 4
  },
  frameHeight      : 7 * MAGNIFICATION,
  frameWidth       : 7 * MAGNIFICATION,
  isPropulsive     : true,
  moveFrameCount   : 4,
  name             : 'Darth Vader',
  speed            : 16,
  sprite           : 'ships/vadertie',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [3, 5],
  weaponOffsetLeft : [0, 3],
  weaponOffsetRight: [5, 3],
  weaponOffsetUp   : [3, 0]
};

const XWING = {
  code             : 'xwing',
  death            : ANIMATIONS.SPRITZ,
  frameCounts      : {
    x: 5,
    y: 4
  },
  frameHeight      : 9 * MAGNIFICATION,
  frameWidth       : 9 * MAGNIFICATION,
  isPropulsive     : true,
  moveFrameCount   : 4,
  name             : 'X-wing',
  speed            : 8,
  sprite           : 'ships/xwing',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [4, 8],
  weaponOffsetLeft : [1, 4],
  weaponOffsetRight: [8, 4],
  weaponOffsetUp   : [4, 1]
};

export const SHIPS = {
  ASTEROID,
  DEATH_STAR,
  DEATH_STAR6,
  DESTROYER,
  FALCON,
  TIE,
  TIE_ADVANCED,
  XWING
};
