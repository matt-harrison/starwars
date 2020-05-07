import { ANIMATIONS }                from '/js/constants/animations.js';
import { COLORS, MAGNIFICATION }     from '/js/constants/config.js';
import { PROJECTILES, WEAPON_TYPES } from '/js/constants/weapons.js';

const ASTEROID = {
  name: 'Asteroid',
  sprite: 'asteroid',
  ship: true,
  death: ANIMATIONS.SPRITZ,
  weaponType: null,
  width: 14 * MAGNIFICATION,
  height: 28 * MAGNIFICATION,
  frameWidth: 7 * MAGNIFICATION,
  frameHeight: 7 * MAGNIFICATION,
  moveFrameCount: 1,
  speed: 8
};

const DEATHSTAR = {
  name: 'Death Star',
  sprite: 'deathstar',
  ship: true,
  death: ANIMATIONS.EXPLOSION,
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.LASER,
  weaponColor: COLORS.GREEN,
  weaponOffsetLeft: [2, 3],
  weaponOffsetUp: [3, 0],
  weaponOffsetRight: [5, 3],
  weaponOffsetDown: [3, 5],
  width: 90 * MAGNIFICATION,
  height: 40 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 10 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 4,
  speedMin: 4,
  speedMax: 4
};

const DEATHSTAR6 = {
  name: 'Death Star II',
  sprite: 'deathstar6',
  ship: true,
  death: ANIMATIONS.EXPLOSION,
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.LASER,
  weaponColor: COLORS.GREEN,
  weaponOffsetLeft: [2, 3],
  weaponOffsetUp: [3, 0],
  weaponOffsetRight: [5, 3],
  weaponOffsetDown: [3, 5],
  width: 90 * MAGNIFICATION,
  height: 40 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 10 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 4,
  speedMin: 4,
  speedMax: 4
};

const DESTROYER = {
  name: 'Star Destroyer',
  sprite: 'destroyer',
  ship: true,
  death: ANIMATIONS.EXPLOSION,
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.LASER,
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [16, 14],
  weaponOffsetUp: [15, 16],
  weaponOffsetRight: [12, 15 ],
  weaponOffsetDown: [15, 12],
  width: 60 * MAGNIFICATION,
  height: 120 * MAGNIFICATION,
  frameWidth: 30 * MAGNIFICATION,
  frameHeight: 30 * MAGNIFICATION,
  moveFrameCount: 1,
  speed: 1,
  speedMin: 1,
  speedMax: 5
};

const FALCON = {
  name: 'Millenium Falcon',
  sprite: 'falcon',
  ship: true,
  death: ANIMATIONS.SPRITZ,
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.LASER,
  weaponColor: COLORS.GREEN,
  weaponOffsetLeft: [5, 7],
  weaponOffsetUp: [7, 6],
  weaponOffsetRight: [8, 7],
  weaponOffsetDown: [7, 8],
  width: 75 * MAGNIFICATION,
  height: 60 * MAGNIFICATION,
  frameWidth: 15 * MAGNIFICATION,
  frameHeight: 15 * MAGNIFICATION,
  moveFrameCount: 4,
  speed: 8,
  speedMin: 8,
  speedMax: 15
};

const TIE = {
  name: 'TIE Fighter',
  sprite: 'tie',
  ship: true,
  death: ANIMATIONS.SPRITZ,
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.LASER,
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 3],
  weaponOffsetUp: [3, 0],
  weaponOffsetRight: [5, 3],
  weaponOffsetDown: [3, 5],
  width: 35 * MAGNIFICATION,
  height: 28 * MAGNIFICATION,
  frameWidth: 7 * MAGNIFICATION,
  frameHeight: 7 * MAGNIFICATION,
  moveFrameCount: 4,
  speed: 12,
  speedMin: 8,
  speedMax: 12
};

const TIE_ADVANCED = {
  name: 'Darth Vader',
  sprite: 'vadertie',
  ship: true,
  death: {
    name: 'vadertiedeath',
    frameWidth: 7 * MAGNIFICATION,
    frameHeight: 7 * MAGNIFICATION,
    frameCount: 8,
    remove: true
  },
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.LASER,
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 3],
  weaponOffsetUp: [3, 0],
  weaponOffsetRight: [5, 3],
  weaponOffsetDown: [3, 5],
  width: 35 * MAGNIFICATION,
  height: 28 * MAGNIFICATION,
  frameWidth: 7 * MAGNIFICATION,
  frameHeight: 7 * MAGNIFICATION,
  moveFrameCount: 4,
  speed: 12,
  speedMin: 10,
  speedMax: 12
};

const XWING = {
  name: 'X-wing',
  sprite: 'xwing',
  ship: true,
  death: ANIMATIONS.SPRITZ,
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.LASER,
  weaponColor: COLORS.GREEN,
  weaponOffsetLeft: [1, 4],
  weaponOffsetUp: [4, 1],
  weaponOffsetRight: [8, 4],
  weaponOffsetDown: [4, 8],
  width: 45 * MAGNIFICATION,
  height: 36 * MAGNIFICATION,
  frameWidth: 9 * MAGNIFICATION,
  frameHeight: 9 * MAGNIFICATION,
  moveFrameCount: 4,
  speed: 8,
  speedMin: 8,
  speedMax: 12
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
