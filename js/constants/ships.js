import { magnification } from '/js/constants/config.js';
import * as animations   from '/js/constants/animations.js';
import { COLORS }       from '/js/constants/colors.js';

export const asteroid = {
  name: 'Asteroid',
  sprite: 'asteroid',
  ship: true,
  death: animations.spritz,
  weaponType: null,
  width: 14 * magnification,
  height: 28 * magnification,
  frameWidth: 7 * magnification,
  frameHeight: 7 * magnification,
  moveFrameCount: 1,
  speed: 8
};

export const deathstar = {
  name: 'Death Star',
  sprite: 'deathstar',
  ship: true,
  death: animations.explosion,
  weaponType: 'projectile',
  projectile: 'laser',
  weaponColor: COLORS.GREEN,
  weaponOffsetLeft: [2, 3],
  weaponOffsetUp: [3, 0],
  weaponOffsetRight: [5, 3],
  weaponOffsetDown: [3, 5],
  width: 90 * magnification,
  height: 40 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 10 * magnification,
  moveFrameCount: 8,
  speed: 4,
  speedMin: 4,
  speedMax: 4
};

export const deathstar6 = {
  name: 'Death Star II',
  sprite: 'deathstar6',
  ship: true,
  death: animations.explosion,
  weaponType: 'projectile',
  projectile: 'laser',
  weaponColor: COLORS.GREEN,
  weaponOffsetLeft: [2, 3],
  weaponOffsetUp: [3, 0],
  weaponOffsetRight: [5, 3],
  weaponOffsetDown: [3, 5],
  width: 90 * magnification,
  height: 40 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 10 * magnification,
  moveFrameCount: 8,
  speed: 4,
  speedMin: 4,
  speedMax: 4
};

export const destroyer = {
  name: 'Star Destroyer',
  sprite: 'destroyer',
  ship: true,
  death: animations.explosion,
  weaponType: 'projectile',
  projectile: 'laser',
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [16, 14],
  weaponOffsetUp: [15, 16],
  weaponOffsetRight: [12, 15 ],
  weaponOffsetDown: [15, 12],
  width: 60 * magnification,
  height: 120 * magnification,
  frameWidth: 30 * magnification,
  frameHeight: 30 * magnification,
  moveFrameCount: 1,
  speed: 1,
  speedMin: 1,
  speedMax: 5
};

export const falcon = {
  name: 'Millenium Falcon',
  sprite: 'falcon',
  ship: true,
  death: animations.spritz,
  weaponType: 'projectile',
  projectile: 'laser',
  weaponColor: COLORS.GREEN,
  weaponOffsetLeft: [5, 7],
  weaponOffsetUp: [7, 6],
  weaponOffsetRight: [8, 7],
  weaponOffsetDown: [7, 8],
  width: 75 * magnification,
  height: 60 * magnification,
  frameWidth: 15 * magnification,
  frameHeight: 15 * magnification,
  moveFrameCount: 4,
  speed: 8,
  speedMin: 8,
  speedMax: 15
};

export const tie = {
  name: 'TIE Fighter',
  sprite: 'tie',
  ship: true,
  death: animations.spritz,
  weaponType: 'projectile',
  projectile: 'laser',
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 3],
  weaponOffsetUp: [3, 0],
  weaponOffsetRight: [5, 3],
  weaponOffsetDown: [3, 5],
  width: 35 * magnification,
  height: 28 * magnification,
  frameWidth: 7 * magnification,
  frameHeight: 7 * magnification,
  moveFrameCount: 4,
  speed: 12,
  speedMin: 8,
  speedMax: 12
};

export const vadertie = {
  name: 'Darth Vader',
  sprite: 'vadertie',
  ship: true,
  death: {
    name: 'vadertiedeath',
    frameWidth: 7 * magnification,
    frameHeight: 7 * magnification,
    frameCount: 8,
    remove: true
  },
  weaponType: 'projectile',
  projectile: 'laser',
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 3],
  weaponOffsetUp: [3, 0],
  weaponOffsetRight: [5, 3],
  weaponOffsetDown: [3, 5],
  width: 35 * magnification,
  height: 28 * magnification,
  frameWidth: 7 * magnification,
  frameHeight: 7 * magnification,
  moveFrameCount: 4,
  speed: 12,
  speedMin: 10,
  speedMax: 12
};

export const xwing = {
  name: 'X-wing',
  sprite: 'xwing',
  ship: true,
  death: animations.spritz,
  weaponType: 'projectile',
  projectile: 'laser',
  weaponColor: COLORS.GREEN,
  weaponOffsetLeft: [1, 4],
  weaponOffsetUp: [4, 1],
  weaponOffsetRight: [8, 4],
  weaponOffsetDown: [4, 8],
  width: 45 * magnification,
  height: 36 * magnification,
  frameWidth: 9 * magnification,
  frameHeight: 9 * magnification,
  moveFrameCount: 4,
  speed: 8,
  speedMin: 8,
  speedMax: 12
};