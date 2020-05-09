import { ANIMATIONS }                 from '/js/constants/animations.js';
import { COLORS, FPS, MAGNIFICATION } from '/js/constants/config.js';
import { PROJECTILES, WEAPON_TYPES }  from '/js/constants/weapons.js';

export const ackbar = {
  name: 'Admiral Ackbar',
  code: 'ackbar',
  sprite: 'ackbar',
  ship: false,
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.LASER,
  weaponColor: COLORS.GREEN,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [7, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 8],
  width: 90 * MAGNIFICATION,
  height: 60 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 12 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const amidala = {
  name: 'Queen Amidala',
  code: 'amidala',
  sprite: 'amidala',
  ship: false,
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.LASER,
  weaponColor: COLORS.GREEN,
  weaponOffsetLeft: [0, 5],
  weaponOffsetUp: [7, 0],
  weaponOffsetRight: [10, 5],
  weaponOffsetDown: [3, 9],
  width: 90 * MAGNIFICATION,
  height: 60 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 12 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const ani = {
  name: 'Ani',
  code: 'ani',
  sprite: 'ani',
  ship: false,
  weaponType: WEAPON_TYPES.BOMB,
  weaponOffset: [3, 9],
  width: 63 * MAGNIFICATION,
  height: 50 * MAGNIFICATION,
  frameWidth: 7 * MAGNIFICATION,
  frameHeight: 10 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const artoo = {
  name: 'R2-D2',
  code: 'artoo',
  sprite: 'artoo',
  ship: false,
  weaponType: WEAPON_TYPES.BOMB,
  weaponOffset: [3, 7],
  width: 14 * MAGNIFICATION,
  height: 40 * MAGNIFICATION,
  frameWidth: 7 * MAGNIFICATION,
  frameHeight: 8 * MAGNIFICATION,
  moveFrameCount: 1,
  speed: 10
};

export const arfive = {
  name: 'R5-D4',
  code: 'arfive',
  sprite: 'arfive',
  ship: false,
  death: {
    name: 'arfivedeath',
    frameWidth: 5 * MAGNIFICATION,
    frameHeight: 9 * MAGNIFICATION,
    frameCount: 6,
    remove: false
  },
  weaponType: WEAPON_TYPES.BOMB,
  weaponOffset: [3, 8],
  width: 10 * MAGNIFICATION,
  height: 36 * MAGNIFICATION,
  frameWidth: 5 * MAGNIFICATION,
  frameHeight: 9 * MAGNIFICATION,
  moveFrameCount: 1,
  speed: 6
};

export const atst = {
  name: 'AT-ST',
  code: 'atst',
  sprite: 'atst',
  ship: false,
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.LASER,
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [2, 5],
  weaponOffsetUp: [8, 0],
  weaponOffsetRight: [13, 5],
  weaponOffsetDown: [6, 8],
  width: 135 * MAGNIFICATION,
  height: 75 * MAGNIFICATION,
  frameWidth: 15 * MAGNIFICATION,
  frameHeight: 15 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 4
};

export const auntberu = {
  name: 'Aunt Beru',
  code: 'auntberu',
  sprite: 'auntberu',
  ship: false,
  death: {
    name: 'auntberudeath',
    frameWidth: 10 * MAGNIFICATION,
    frameHeight: 12 * MAGNIFICATION,
    frameCount: 10,
    remove: false
  },
  weaponType: WEAPON_TYPES.BOMB,
  weaponOffset: [4, 10],
  width: 40 * MAGNIFICATION,
  height: 44 * MAGNIFICATION,
  frameWidth: 8 * MAGNIFICATION,
  frameHeight: 11 * MAGNIFICATION,
  moveFrameCount: 4,
  speed: 6
};

export const bantha = {
  name: 'Bantha',
  code: 'bantha',
  sprite: 'bantha',
  ship: false,
  weaponType: WEAPON_TYPES.ATTACK,
  width: 100 * MAGNIFICATION,
  height: 60 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 12 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 10
};

export const battledroid = {
  name: 'Battle Droid',
  code: 'battledroid',
  sprite: 'battledroid',
  ship: false,
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.LASER,
  weaponColor: COLORS.GREEN,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [6, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 8],
  width: 90 * MAGNIFICATION,
  height: 55 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 11 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const bb8 = {
  name: 'BB-8',
  code: 'bb8',
  sprite: 'bb8',
  ship: false,
  weaponType: WEAPON_TYPES.BOMB,
  weaponOffset: [3, 7],
  width: 45 * MAGNIFICATION,
  height: 35 * MAGNIFICATION,
  frameWidth: 5 * MAGNIFICATION,
  frameHeight: 7 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 10
};

export const ben = {
  name: 'Ben Kenobi',
  code: 'ben',
  sprite: 'ben',
  ship: false,
  death: {
    name: 'bendeath',
    frameWidth: 10 * MAGNIFICATION,
    frameHeight: 12 * MAGNIFICATION,
    frameCount: 6,
    remove: false
  },
  weaponType: WEAPON_TYPES.LIGHTSABER,
  weaponColor: COLORS.BLUE,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [8, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [1, 10],
  width: 60 * MAGNIFICATION,
  height: 60 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 12 * MAGNIFICATION,
  moveFrameCount: 4,
  speed: 6
};

export const bikerscout = {
  name: 'Biker Scout',
  code: 'bikerscout',
  sprite: 'bikerscout',
  ship: false,
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.LASER,
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [7, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 8],
  width: 90 * MAGNIFICATION,
  height: 55 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 11 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const bobafett = {
  name: 'Boba Fett',
  code: 'bobafett',
  sprite: 'bobafett',
  ship: false,
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.LASER,
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 5],
  weaponOffsetUp: [7, 1],
  weaponOffsetRight: [10, 5],
  weaponOffsetDown: [3, 9],
  width: 90 * MAGNIFICATION,
  height: 60 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 12 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const bossnass = {
  name: 'Boss Nass',
  code: 'bossnass',
  sprite: 'bossnass',
  ship: false,
  weaponType: WEAPON_TYPES.ATTACK,
  width: 90 * MAGNIFICATION,
  height: 60 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 12 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 4
};

export const captainantilles = {
  name: 'Captain Antilles',
  code: 'captainantilles',
  sprite: 'captainantilles',
  ship: false,
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.LASER,
  weaponColor: COLORS.GREEN,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [6, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 7],
  width: 90 * MAGNIFICATION,
  height: 55 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 11 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const carbonite = {
  name: 'Frozen Han Solo',
  code: 'carbonite',
  sprite: 'carbonite',
  ship: false,
  weaponType: WEAPON_TYPES.ATTACK,
  width: 20 * MAGNIFICATION,
  height: 60 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 12 * MAGNIFICATION,
  moveFrameCount: 1,
  speed: 8
};

export const chewbacca = {
  name: 'Chewbacca',
  code: 'chewbacca',
  sprite: 'chewbacca',
  ship: false,
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.LASER,
  weaponColor: COLORS.GREEN,
  weaponOffsetLeft: [0, 5],
  weaponOffsetUp: [7, 0],
  weaponOffsetRight: [10, 5],
  weaponOffsetDown: [3, 9],
  width: 90 * MAGNIFICATION,
  height: 60 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 12 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const chewbacca5 = {
  name: 'Chewbacca',
  code: 'chewbacca5',
  sprite: 'chewbacca5',
  ship: false,
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.LASER,
  weaponColor: COLORS.GREEN,
  weaponOffsetLeft: [0, 8],
  weaponOffsetUp: [8, 1],
  weaponOffsetRight: [11, 8],
  weaponOffsetDown: [4, 12],
  width: 108 * MAGNIFICATION,
  height: 75 * MAGNIFICATION,
  frameWidth: 12 * MAGNIFICATION,
  frameHeight: 15 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 6
};

export const clonecaptain = {
  name: 'Clone Captain',
  code: 'clonecaptain',
  sprite: 'clonecaptain',
  ship: false,
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.LASER,
  weaponColor: COLORS.BLUE,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [7, 1],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 8],
  width: 90 * MAGNIFICATION,
  height: 55 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 11 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const clonetrooper = {
  name: 'Clone Trooper',
  code: 'clonetrooper',
  sprite: 'clonetrooper',
  ship: false,
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.LASER,
  weaponColor: COLORS.BLUE,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [7, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 8],
  width: 90 * MAGNIFICATION,
  height: 55 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 11 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const coruscantguard = {
  name: 'Coruscant Guard',
  code: 'coruscantguard',
  sprite: 'coruscantguard',
  ship: false,
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.LASER,
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 5],
  weaponOffsetUp: [7, 1],
  weaponOffsetRight: [10, 5],
  weaponOffsetDown: [3, 9],
  width: 50 * MAGNIFICATION,
  height: 60 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 12 * MAGNIFICATION,
  moveFrameCount: 4,
  speed: 8
};

export const darthmaul = {
  name: 'Darth Maul',
  code: 'darthmaul',
  sprite: 'darthmaul',
  ship: false,
  weaponType: WEAPON_TYPES.LIGHTSABER,
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [8, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [1, 10],
  width: 100 * MAGNIFICATION,
  height: 60 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 12 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const darthvader = {
  name: 'Darth Vader',
  code: 'darthvader',
  sprite: 'darthvader',
  ship: false,
  weaponType: WEAPON_TYPES.LIGHTSABER,
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 5],
  weaponOffsetUp: [8, 0],
  weaponOffsetRight: [10, 3],
  weaponOffsetDown: [1, 8],
  width: 100 * MAGNIFICATION,
  height: 60 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 12 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const darthvader5 = {
  name: 'Darth Vader',
  code: 'darthvader5',
  sprite: 'darthvader5',
  ship: false,
  weaponType: WEAPON_TYPES.LIGHTSABER,
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 5],
  weaponOffsetUp: [8, 0],
  weaponOffsetRight: [10, 3],
  weaponOffsetDown: [1, 8],
  width: 100 * MAGNIFICATION,
  height: 60 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 12 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const darthvader6 = {
  name: 'Darth Vader',
  code: 'darthvader6',
  sprite: 'darthvader6',
  ship: false,
  death: {
    name: 'darthvader6death',
    frameWidth: 10 * MAGNIFICATION,
    frameHeight: 12 * MAGNIFICATION,
    frameCount: 12,
    remove: false
  },
  weaponType: WEAPON_TYPES.LIGHTSABER,
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 5],
  weaponOffsetUp: [8, 0],
  weaponOffsetRight: [10, 3],
  weaponOffsetDown: [1, 8],
  width: 100 * MAGNIFICATION,
  height: 60 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 12 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const deathstartrooper = {
  name: 'Death Star Trooper',
  code: 'deathstartrooper',
  sprite: 'deathstartrooper',
  ship: false,
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.LASER,
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [7, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 7],
  width: 90 * MAGNIFICATION,
  height: 55 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 11 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const droideka = {
  name: 'Droideka',
  code: 'droideka',
  sprite: 'droideka',
  ship: false,
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.LASER,
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 5],
  weaponOffsetUp: [7, 1],
  weaponOffsetRight: [10, 5],
  weaponOffsetDown: [2, 8],
  width: 90 * MAGNIFICATION,
  height: 60 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 12 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 12
};

export const emperor = {
  name: 'Emperor',
  code: 'emperor',
  sprite: 'emperor',
  ship: false,
  weaponType: WEAPON_TYPES.BOMB,
  width: 90 * MAGNIFICATION,
  height: 60 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 12 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 4
};

export const ewok = {
  name: 'Ewok',
  code: 'ewok',
  sprite: 'ewok',
  ship: false,
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.ROCK,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [3, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 10],
  weaponDelay: FPS / 2,
  width: 90 * MAGNIFICATION,
  height: 55 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 11 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const gamorrean = {
  name: 'Gamorrean Guard',
  code: 'gamorrean',
  sprite: 'gamorrean',
  ship: false,
  weaponType: WEAPON_TYPES.ATTACK,
  width: 90 * MAGNIFICATION,
  height: 60 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 12 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 6
};

export const garindan = {
  name: 'Garindan',
  code: 'garindan',
  sprite: 'garindan',
  ship: false,
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.LASER,
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 5],
  weaponOffsetUp: [7, 1],
  weaponOffsetRight: [10, 5],
  weaponOffsetDown: [3, 9],
  width: 90 * MAGNIFICATION,
  height: 60 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 12 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const gonkdroid = {
  name: 'Gonk Droid',
  code: 'gonkdroid',
  sprite: 'gonkdroid',
  ship: false,
  weaponType: WEAPON_TYPES.BOMB,
  weaponOffset: [4, 11],
  weaponDelay: FPS / 2,
  width: 90 * MAGNIFICATION,
  height: 60 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 12 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 4
};

export const greedo = {
  name: 'Greedo',
  code: 'greedo',
  sprite: 'greedo',
  ship: false,
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.LASER,
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [7, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 8],
  width: 90 * MAGNIFICATION,
  height: 55 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 11 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const gungan = {
  name: 'Gungan',
  code: 'gungan',
  sprite: 'gungan',
  ship: false,
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.GUNGAN_BALL,
  weaponOffsetLeft: [0, 3],
  weaponOffsetUp: [2, 0],
  weaponOffsetRight: [10, 3],
  weaponOffsetDown: [2, 12],
  width: 90 * MAGNIFICATION,
  height: 60 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 12 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const hansolo = {
  name: 'Han Solo',
  code: 'hansolo',
  sprite: 'hansolo',
  ship: false,
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.LASER,
  weaponColor: COLORS.GREEN,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [7, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 8],
  width: 90 * MAGNIFICATION,
  height: 55 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 11 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const hansolo5 = {
  name: 'Han Solo',
  code: 'hansolo5',
  sprite: 'hansolo5',
  ship: false,
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.LASER,
  weaponColor: COLORS.GREEN,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [7, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 8],
  width: 90 * MAGNIFICATION,
  height: 55 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 11 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const imperialguard = {
  name: 'Imperial Guard',
  code: 'imperialguard',
  sprite: 'imperialguard',
  ship: false,
  weaponType: WEAPON_TYPES.ATTACK,
  width: 50 * MAGNIFICATION,
  height: 60 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 12 * MAGNIFICATION,
  moveFrameCount: 4,
  speed: 8
};

export const jabba = {
  name: 'Jabba the Hutt',
  code: 'jabba',
  sprite: 'jabba',
  ship: false,
  weaponType: WEAPON_TYPES.ATTACK,
  width: 90 * MAGNIFICATION,
  height: 55 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 11 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 4
};

export const jangofett = {
  name: 'Jango Fett',
  code: 'jangofett',
  sprite: 'jangofett',
  ship: false,
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.LASER,
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 5],
  weaponOffsetUp: [7, 1],
  weaponOffsetRight: [10, 5],
  weaponOffsetDown: [3, 9],
  width: 90 * MAGNIFICATION,
  height: 60 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 12 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const jarjar = {
  name: 'Jar Jar Binks',
  code: 'jarjar',
  sprite: 'jarjar',
  ship: false,
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.GUNGAN_BALL,
  weaponOffsetLeft: [0, 3],
  weaponOffsetUp: [2, 0],
  weaponOffsetRight: [10, 3],
  weaponOffsetDown: [2, 12],
  width: 90 * MAGNIFICATION,
  height: 60 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 12 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const jawa = {
  name: 'Jawa',
  code: 'jawa',
  sprite: 'jawa',
  ship: false,
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.LASER,
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [7, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 7],
  width: 50 * MAGNIFICATION,
  height: 50 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 10 * MAGNIFICATION,
  moveFrameCount: 4,
  speed: 8
};

export const kyloren = {
  name: 'Kylo Ren',
  code: 'kyloren',
  sprite: 'kyloren',
  ship: false,
  weaponType: WEAPON_TYPES.LIGHTSABER,
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 5],
  weaponOffsetUp: [8, 0],
  weaponOffsetRight: [10, 3],
  weaponOffsetDown: [1, 8],
  width: 100 * MAGNIFICATION,
  height: 60 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 12 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const kylorenunmasked = {
  name: 'Kylo Ren',
  code: 'kylorenunmasked',
  sprite: 'kylorenunmasked',
  ship: false,
  weaponType: WEAPON_TYPES.LIGHTSABER,
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 5],
  weaponOffsetUp: [8, 0],
  weaponOffsetRight: [10, 3],
  weaponOffsetDown: [1, 8],
  width: 100 * MAGNIFICATION,
  height: 60 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 12 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const lando = {
  name: 'Lando Calrissian',
  code: 'lando',
  sprite: 'lando',
  ship: false,
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.LASER,
  weaponColor: COLORS.GREEN,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [7, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 8],
  width: 90 * MAGNIFICATION,
  height: 55 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 11 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const leia = {
  name: 'Princess Leia',
  code: 'leia',
  sprite: 'leia',
  ship: false,
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.LASER,
  weaponColor: COLORS.GREEN,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [7, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 8],
  width: 90 * MAGNIFICATION,
  height: 55 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 11 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const leia6 = {
  name: 'Princess Leia',
  code: 'leia6',
  sprite: 'leia6',
  ship: false,
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.LASER,
  weaponColor: COLORS.GREEN,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [7, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 8],
  width: 90 * MAGNIFICATION,
  height: 55 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 11 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const lobot = {
  name: 'Lobot',
  code: 'lobot',
  sprite: 'lobot',
  ship: false,
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.LASER,
  weaponColor: COLORS.GREEN,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [7, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 8],
  width: 90 * MAGNIFICATION,
  height: 55 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 11 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const logray = {
  name: 'Logray',
  code: 'logray',
  sprite: 'logray',
  ship: false,
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.ROCK,
  width: 90 * MAGNIFICATION,
  height: 60 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 12 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const luke = {
  name: 'Luke Skywalker',
  code: 'luke',
  sprite: 'luke',
  ship: false,
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.LASER,
  weaponColor: COLORS.GREEN,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [7, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 8],
  width: 90 * MAGNIFICATION,
  height: 55 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 11 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const luke5 = {
  name: 'Luke Skywalker',
  code: 'luke5',
  sprite: 'luke5',
  ship: false,
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.LASER,
  weaponColor: COLORS.GREEN,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [7, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 8],
  width: 90 * MAGNIFICATION,
  height: 55 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 11 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const luke6 = {
  name: 'Luke Skywalker',
  code: 'luke6',
  sprite: 'luke6',
  ship: false,
  weaponType: WEAPON_TYPES.LIGHTSABER,
  weaponColor: COLORS.GREEN,
  weaponOffsetLeft: [0, 3],
  weaponOffsetUp: [8, 1],
  weaponOffsetRight: [10, 3],
  weaponOffsetDown: [1, 9],
  width: 100 * MAGNIFICATION,
  height: 60 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 12 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const macewindu = {
  name: 'Mace Windu',
  code: 'macewindu',
  sprite: 'macewindu',
  ship: false,
  weaponType: WEAPON_TYPES.LIGHTSABER,
  weaponColor: COLORS.PURPLE,
  weaponOffsetLeft: [0, 3],
  weaponOffsetUp: [8, 0],
  weaponOffsetRight: [10, 3],
  weaponOffsetDown: [1, 9],
  width: 100 * MAGNIFICATION,
  height: 55 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 11 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const mawhonic = {
  name: 'Mawhonic',
  code: 'mawhonic',
  sprite: 'mawhonic',
  ship: false,
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.LASER,
  weaponColor: COLORS.BLUE,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [7, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 8],
  width: 90 * MAGNIFICATION,
  height: 55 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 11 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const mousedroid = {
  name: 'Mouse Droid',
  code: 'mousedroid',
  sprite: 'mousedroid',
  ship: false,
  death: ANIMATIONS.DETONATION,
  weaponType: WEAPON_TYPES.BOMB,
  weaponOffset: [4, 5],
  width: 16 * MAGNIFICATION,
  height: 32 * MAGNIFICATION,
  frameWidth: 8 * MAGNIFICATION,
  frameHeight: 8 * MAGNIFICATION,
  moveFrameCount: 1,
  speed: 12
};

export const naboopilot = {
  name: 'Naboo Pilot',
  code: 'naboopilot',
  sprite: 'naboopilot',
  ship: false,
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.LASER,
  weaponColor: COLORS.BLUE,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [7, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 8],
  width: 90 * MAGNIFICATION,
  height: 55 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 11 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const nutegunray = {
  name: 'Nute Gunray',
  code: 'nutegunray',
  sprite: 'nutegunray',
  ship: false,
  weaponType: null,
  width: 50 * MAGNIFICATION,
  height: 60 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 12 * MAGNIFICATION,
  moveFrameCount: 4,
  speed: 5
};

export const obiwan = {
  name: 'Obi Wan Kenobi',
  code: 'obiwan',
  sprite: 'obiwan',
  ship: false,
  weaponType: WEAPON_TYPES.LIGHTSABER,
  weaponColor: COLORS.BLUE,
  weaponOffsetLeft: [0, 3],
  weaponOffsetUp: [8, 0],
  weaponOffsetRight: [10, 3],
  weaponOffsetDown: [1, 10],
  width: 100 * MAGNIFICATION,
  height: 60 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 12 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const officerblack = {
  name: 'Imperial Officer',
  code: 'officerblack',
  sprite: 'officerblack',
  ship: false,
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.LASER,
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [7, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 8],
  width: 90 * MAGNIFICATION,
  height: 55 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 11 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const officergreen = {
  name: 'Imperial Officer',
  code: 'officergreen',
  sprite: 'officergreen',
  ship: false,
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.LASER,
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [7, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 8],
  width: 90 * MAGNIFICATION,
  height: 55 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 11 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const panaka = {
  name: 'Captain Panaka',
  code: 'panaka',
  sprite: 'panaka',
  ship: false,
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.LASER,
  weaponColor: COLORS.BLUE,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [7, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 8],
  width: 90 * MAGNIFICATION,
  height: 55 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 11 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const pondababa = {
  name: 'Ponda Baba',
  code: 'pondababa',
  sprite: 'pondababa',
  ship: false,
  weaponType: null,
  width: 90 * MAGNIFICATION,
  height: 60 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 12 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const protocolblack = {
  name: 'Protocol Droid',
  code: 'protocolblack',
  sprite: 'protocolblack',
  ship: false,
  weaponType: null,
  width: 72 * MAGNIFICATION,
  height: 50 * MAGNIFICATION,
  frameWidth: 8 * MAGNIFICATION,
  frameHeight: 10 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 5
};

export const protocolwhite = {
  name: 'Protocol Droid',
  code: 'protocolwhite',
  sprite: 'protocolwhite',
  ship: false,
  weaponType: null,
  width: 72 * MAGNIFICATION,
  height: 50 * MAGNIFICATION,
  frameWidth: 8 * MAGNIFICATION,
  frameHeight: 10 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 5
};

export const quigonjinn = {
  name: 'Qui-Gon Jinn',
  code: 'quigonjinn',
  sprite: 'quigonjinn',
  ship: false,
  weaponType: WEAPON_TYPES.LIGHTSABER,
  weaponColor: COLORS.GREEN,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [8, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [1, 10],
  width: 100 * MAGNIFICATION,
  height: 60 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 12 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const rancor = {
  name: 'Rancor',
  code: 'rancor',
  sprite: 'rancor',
  ship: false,
  weaponType: WEAPON_TYPES.BOMB,
  weaponOffset: [3, 7],
  width: 135 * MAGNIFICATION,
  height: 65 * MAGNIFICATION,
  frameWidth: 15 * MAGNIFICATION,
  frameHeight: 13 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 4
};

export const rebel = {
  name: 'Rebel',
  code: 'rebel',
  sprite: 'rebel',
  ship: false,
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.LASER,
  weaponColor: COLORS.GREEN,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [6, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 7],
  width: 90 * MAGNIFICATION,
  height: 55 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 11 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const runehaako = {
  name: 'Rune Haako',
  code: 'runehaako',
  sprite: 'runehaako',
  ship: false,
  weaponType: null,
  width: 50 * MAGNIFICATION,
  height: 60 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 12 * MAGNIFICATION,
  moveFrameCount: 4,
  speed: 5
};

export const sandtrooper = {
  name: 'Sandtrooper',
  ship: false,
  code: 'sandtrooper',
  sprite: 'sandtrooper',
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.LASER,
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [6, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 7],
  width: 90 * MAGNIFICATION,
  height: 55 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 11 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const sebulba = {
  name: 'Sebulba',
  ship: false,
  code: 'sebulba',
  sprite: 'sebulba',
  weaponType: WEAPON_TYPES.BOMB,
  weaponOffset: [4, 9],
  width: 90 * MAGNIFICATION,
  height: 50 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 10 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const stormtrooper = {
  name: 'Stormtrooper',
  ship: false,
  code: 'stormtrooper',
  sprite: 'stormtrooper',
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.LASER,
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [6, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 7],
  width: 90 * MAGNIFICATION,
  height: 55 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 11 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const stormtrooperhan = {
  name: 'Han Solo',
  ship: false,
  code: 'stormtrooperhan',
  sprite: 'stormtrooperhan',
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.LASER,
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [6, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 7],
  width: 90 * MAGNIFICATION,
  height: 55 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 11 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const stormtrooperluke = {
  name: 'Luke Skywalker',
  ship: false,
  code: 'stormtrooperluke',
  sprite: 'stormtrooperluke',
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.LASER,
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [6, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 7],
  width: 90 * MAGNIFICATION,
  height: 55 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 11 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const stuntrooper = {
  name: 'Stormtrooper',
  ship: false,
  code: 'stormtrooper',
  sprite: 'stormtrooper',
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.STUN,
  weaponOffsetLeft: [4, 0],
  weaponOffsetUp: [0, 4],
  weaponOffsetRight: [6, 0],
  weaponOffsetDown: [0, 6],
  weaponDelay: 2,
  width: 90 * MAGNIFICATION,
  height: 55 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 11 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const tarkin = {
  name: 'Grand Moff Tarkin',
  code: 'tarkin',
  sprite: 'tarkin',
  ship: false,
  weaponType: null,
  width: 90 * MAGNIFICATION,
  height: 55 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 11 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 4
};

export const tauntaun = {
  name: 'Tauntaun',
  ship: false,
  code: 'tauntaun',
  sprite: 'tauntaun',
  weaponType: WEAPON_TYPES.BOMB,
  weaponOffset: [5, 11],
  width: 90 * MAGNIFICATION,
  height: 60 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 12 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 10
};

export const threebee = {
  name: '3B6-RA-7',
  code: 'threebee',
  sprite: 'threebee',
  ship: false,
  death: ANIMATIONS.SPRITZ,
  weaponType: null,
  width: 72 * MAGNIFICATION,
  height: 55 * MAGNIFICATION,
  frameWidth: 8 * MAGNIFICATION,
  frameHeight: 11 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 5
};

export const threepio = {
  name: 'C-3PO',
  code: 'threepio',
  sprite: 'threepio',
  ship: false,
  weaponType: null,
  width: 72 * MAGNIFICATION,
  height: 50 * MAGNIFICATION,
  frameWidth: 8 * MAGNIFICATION,
  frameHeight: 10 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 5
};

export const tiepilot = {
  name: 'TIE Fighter Pilot',
  ship: false,
  code: 'tiepilot',
  sprite: 'tiepilot',
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.LASER,
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 5],
  weaponOffsetUp: [2, 0],
  weaponOffsetRight: [10, 5],
  weaponOffsetDown: [9, 9],
  width: 90 * MAGNIFICATION,
  height: 55 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 11 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const tusken = {
  name: 'Tusken Raider',
  ship: false,
  code: 'tusken',
  sprite: 'tusken',
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.LASER,
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [7, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 9],
  width: 50 * MAGNIFICATION,
  height: 55 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 11 * MAGNIFICATION,
  moveFrameCount: 4,
  speed: 8
};

export const typho = {
  name: 'Captain Typho',
  ship: false,
  code: 'typho',
  sprite: 'typho',
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.LASER,
  weaponColor: COLORS.BLUE,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [7, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 8],
  width: 90 * MAGNIFICATION,
  height: 55 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 11 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const uncleowen = {
  name: 'Uncle Owen',
  code: 'uncleowen',
  sprite: 'uncleowen',
  ship: false,
  death: {
  name: 'uncleowendeath',
    frameWidth: 10 * MAGNIFICATION,
    frameHeight: 12 * MAGNIFICATION,
    frameCount: 10,
    remove: false
  },
  weaponType: WEAPON_TYPES.BOMB,
  weaponOffset: [4, 11],
  weaponDelay: FPS / 2,
  width: 90 * MAGNIFICATION,
  height: 48 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 12 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 6
};

export const vallorum = {
  name: 'Chancellor Vallorum',
  code: 'vallorum',
  sprite: 'vallorum',
  ship: false,
  weaponType: null,
  width: 90 * MAGNIFICATION,
  height: 55 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 11 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 4
};

export const weequay = {
  name: 'Weequay',
  ship: false,
  code: 'weequay',
  sprite: 'weequay',
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.LASER,
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [7, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 8],
  width: 90 * MAGNIFICATION,
  height: 55 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 11 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const xwingpilot = {
  name: 'X-wing Pilot',
  ship: false,
  code: 'xwingpilot',
  sprite: 'xwingpilot',
  weaponType: WEAPON_TYPES.PROJECTILE,
  projectile: PROJECTILES.LASER,
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [6, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 7],
  width: 90 * MAGNIFICATION,
  height: 55 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 11 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 8
};

export const yoda = {
  name: 'Yoda',
  code: 'yoda',
  sprite: 'yoda',
  ship: false,
  weaponType: WEAPON_TYPES.LIGHTSABER,
  weaponColor: COLORS.GREEN,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [7, 2],
  weaponOffsetRight: [9, 4],
  weaponOffsetDown: [1, 9],
  width: 100 * MAGNIFICATION,
  height: 50 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 10 * MAGNIFICATION,
  moveFrameCount: 8,
  speed: 4
};