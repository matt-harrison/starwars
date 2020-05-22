import { ANIMATIONS }                from '/js/constants/animations.js';
import { COLORS, MAGNIFICATION }     from '/js/constants/config.js';
import { PROJECTILES, WEAPON_TYPES } from '/js/constants/weapons.js';

const ASTEROID = {
  code          : 'asteroid',
  death         : ANIMATIONS.SPRITZ,
  frameHeight   : 7 * MAGNIFICATION,
  frameWidth    : 7 * MAGNIFICATION,
  height        : 28 * MAGNIFICATION,
  isPropulsive  : true,
  moveFrameCount: 1,
  name          : 'Asteroid',
  speed         : 8,
  sprite        : 'ships/asteroid',
  weaponType    : null,
  width         : 14 * MAGNIFICATION
};

const DEATHSTAR = {
  code             : 'deathstar',
  death            : ANIMATIONS.EXPLOSION,
  frameHeight      : 10 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 40 * MAGNIFICATION,
  isPropulsive     : true,
  moveFrameCount   : 8,
  name             : 'Death Star',
  projectile       : PROJECTILES.LASER,
  speed            : 4,
  speedMax         : 4,
  speedMin         : 4,
  sprite           : 'ships/deathstar',
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [3, 5],
  weaponOffsetLeft : [2, 3],
  weaponOffsetRight: [5, 3],
  weaponOffsetUp   : [3, 0],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 90 * MAGNIFICATION
};

const DEATHSTAR6 = {
  code             : 'deathstar6',
  death            : ANIMATIONS.EXPLOSION,
  frameHeight      : 10 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 40 * MAGNIFICATION,
  isPropulsive     : true,
  moveFrameCount   : 8,
  name             : 'Death Star II',
  projectile       : PROJECTILES.LASER,
  speed            : 4,
  speedMax         : 4,
  speedMin         : 4,
  sprite           : 'ships/deathstar6',
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [3, 5],
  weaponOffsetLeft : [2, 3],
  weaponOffsetRight: [5, 3],
  weaponOffsetUp   : [3, 0],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 90 * MAGNIFICATION
};

const DESTROYER = {
  code             : 'destroyer',
  death            : ANIMATIONS.EXPLOSION,
  frameHeight      : 30 * MAGNIFICATION,
  frameWidth       : 30 * MAGNIFICATION,
  height           : 120 * MAGNIFICATION,
  isPropulsive     : true,
  moveFrameCount   : 1,
  name             : 'Star Destroyer',
  projectile       : PROJECTILES.LASER,
  speed            : 1,
  speedMax         : 5,
  speedMin         : 1,
  sprite           : 'ships/destroyer',
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [15, 12],
  weaponOffsetLeft : [16, 14],
  weaponOffsetRight: [12, 15 ],
  weaponOffsetUp   : [15, 16],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 60 * MAGNIFICATION
};

const FALCON = {
  code             : 'falcon',
  death            : ANIMATIONS.SPRITZ,
  frameHeight      : 15 * MAGNIFICATION,
  frameWidth       : 15 * MAGNIFICATION,
  height           : 60 * MAGNIFICATION,
  isPropulsive     : true,
  moveFrameCount   : 4,
  name             : 'Millenium Falcon',
  projectile       : PROJECTILES.LASER,
  speed            : 8,
  speedMax         : 15,
  speedMin         : 8,
  sprite           : 'ships/falcon',
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [7, 8],
  weaponOffsetLeft : [5, 7],
  weaponOffsetRight: [8, 7],
  weaponOffsetUp   : [7, 6],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 75 * MAGNIFICATION
};

const TIE = {
  code             : 'tie',
  death            : ANIMATIONS.SPRITZ,
  frameHeight      : 7 * MAGNIFICATION,
  frameWidth       : 7 * MAGNIFICATION,
  height           : 28 * MAGNIFICATION,
  isPropulsive     : true,
  moveFrameCount   : 4,
  name             : 'TIE Fighter',
  projectile       : PROJECTILES.LASER,
  speed            : 12,
  speedMax         : 12,
  speedMin         : 8,
  sprite           : 'ships/tie',
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [3, 5],
  weaponOffsetLeft : [0, 3],
  weaponOffsetRight: [5, 3],
  weaponOffsetUp   : [3, 0],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 35 * MAGNIFICATION
};

const TIE_ADVANCED = {
  code             : 'vadertie',
  death            : ANIMATIONS.DEATHS.TIE_ADVANCED,
  frameHeight      : 7 * MAGNIFICATION,
  frameWidth       : 7 * MAGNIFICATION,
  height           : 28 * MAGNIFICATION,
  isPropulsive     : true,
  moveFrameCount   : 4,
  name             : 'Darth Vader',
  projectile       : PROJECTILES.LASER,
  speed            : 12,
  speedMax         : 12,
  speedMin         : 10,
  sprite           : 'ships/vadertie',
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [3, 5],
  weaponOffsetLeft : [0, 3],
  weaponOffsetRight: [5, 3],
  weaponOffsetUp   : [3, 0],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 35 * MAGNIFICATION
};

const XWING = {
  code             : 'xwing',
  death            : ANIMATIONS.SPRITZ,
  frameHeight      : 9 * MAGNIFICATION,
  frameWidth       : 9 * MAGNIFICATION,
  height           : 36 * MAGNIFICATION,
  isPropulsive     : true,
  moveFrameCount   : 4,
  name             : 'X-wing',
  projectile       : PROJECTILES.LASER,
  speed            : 8,
  speedMax         : 12,
  speedMin         : 8,
  sprite           : 'ships/xwing',
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [4, 8],
  weaponOffsetLeft : [1, 4],
  weaponOffsetRight: [8, 4],
  weaponOffsetUp   : [4, 1],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 45 * MAGNIFICATION
};

export const SHIPS = {
  ASTEROID,
  DEATHSTAR,
  DEATHSTAR6,
  DESTROYER,
  FALCON,
  TIE,
  TIE_ADVANCED,
  XWING
};
