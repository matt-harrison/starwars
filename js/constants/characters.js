import { ANIMATIONS }                 from '/js/constants/animations.js';
import { COLORS, FPS, MAGNIFICATION } from '/js/constants/config.js';
import { PROJECTILES, WEAPON_TYPES }  from '/js/constants/weapons.js';

export const ackbar = {
  code             : 'ackbar',
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 60 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Admiral Ackbar',
  projectile       : PROJECTILES.LASER,
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/ackbar',
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [3, 8],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [7, 0],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 90 * MAGNIFICATION
};

export const amidala = {
  code             : 'amidala',
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 60 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Queen Amidala',
  projectile       : PROJECTILES.LASER,
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/amidala',
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [3, 9],
  weaponOffsetLeft : [0, 5],
  weaponOffsetRight: [10, 5],
  weaponOffsetUp   : [7, 0],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 90 * MAGNIFICATION
};

export const ani = {
  code          : 'ani',
  frameHeight   : 10 * MAGNIFICATION,
  frameWidth    : 7 * MAGNIFICATION,
  height        : 50 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Ani',
  isPropulsive  : false,
  speed         : 8,
  sprite        : 'characters/ani',
  weaponOffset  : [3, 9],
  weaponType    : WEAPON_TYPES.BOMB,
  width         : 63 * MAGNIFICATION
};

export const artoo = {
  code          : 'artoo',
  frameHeight   : 8 * MAGNIFICATION,
  frameWidth    : 7 * MAGNIFICATION,
  height        : 40 * MAGNIFICATION,
  moveFrameCount: 1,
  name          : 'R2-D2',
  isPropulsive  : false,
  speed         : 10,
  sprite        : 'characters/artoo',
  weaponOffset  : [3, 7],
  weaponType    : WEAPON_TYPES.BOMB,
  width         : 14 * MAGNIFICATION
};

export const arfive = {
  code          : 'arfive',
  death         : ANIMATIONS.DEATHS.ARFIVE,
  frameHeight   : 9 * MAGNIFICATION,
  frameWidth    : 5 * MAGNIFICATION,
  height        : 36 * MAGNIFICATION,
  moveFrameCount: 1,
  name          : 'R5-D4',
  isPropulsive  : false,
  speed         : 6,
  sprite        : 'characters/arfive',
  weaponOffset  : [3, 8],
  weaponType    : WEAPON_TYPES.BOMB,
  width         : 10 * MAGNIFICATION
};

export const atst = {
  code             : 'atst',
  frameHeight      : 15 * MAGNIFICATION,
  frameWidth       : 15 * MAGNIFICATION,
  height           : 75 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'AT-ST',
  projectile       : PROJECTILES.LASER,
  isPropulsive     : false,
  speed            : 4,
  sprite           : 'characters/atst',
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [6, 8],
  weaponOffsetLeft : [2, 5],
  weaponOffsetRight: [13, 5],
  weaponOffsetUp   : [8, 0],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 135 * MAGNIFICATION
};

export const auntberu = {
  code          : 'auntberu',
  death         : ANIMATIONS.DEATHS.AUNT_BERU,
  frameHeight   : 11 * MAGNIFICATION,
  frameWidth    : 8 * MAGNIFICATION,
  height        : 44 * MAGNIFICATION,
  moveFrameCount: 4,
  name          : 'Aunt Beru',
  isPropulsive  : false,
  speed         : 6,
  sprite        : 'characters/auntberu',
  weaponOffset  : [4, 10],
  weaponType    : WEAPON_TYPES.BOMB,
  width         : 40 * MAGNIFICATION
};

export const bantha = {
  code          : 'bantha',
  frameHeight   : 12 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  height        : 60 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Bantha',
  isPropulsive  : false,
  speed         : 10,
  sprite        : 'characters/bantha',
  weaponType    : WEAPON_TYPES.ATTACK,
  width         : 100 * MAGNIFICATION
};

export const battledroid = {
  code             : 'battledroid',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 55 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Battle Droid',
  projectile       : PROJECTILES.LASER,
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/battledroid',
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [3, 8],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [6, 0],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 90 * MAGNIFICATION
};

export const bb8 = {
  code          : 'bb8',
  frameHeight   : 7 * MAGNIFICATION,
  frameWidth    : 5 * MAGNIFICATION,
  height        : 35 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'BB-8',
  isPropulsive  : false,
  speed         : 10,
  sprite        : 'characters/bb8',
  weaponOffset  : [3, 7],
  weaponType    : WEAPON_TYPES.BOMB,
  width         : 45 * MAGNIFICATION
};

export const ben = {
  code             : 'ben',
  death            : ANIMATIONS.DEATHS.BEN,
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 60 * MAGNIFICATION,
  moveFrameCount   : 4,
  name             : 'Ben Kenobi',
  isPropulsive     : false,
  speed            : 6,
  sprite           : 'characters/ben',
  weaponColor      : COLORS.BLUE,
  weaponOffsetDown : [1, 10],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [8, 0],
  weaponType       : WEAPON_TYPES.LIGHTSABER,
  width            : 60 * MAGNIFICATION
};

export const bikerscout = {
  code             : 'bikerscout',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 55 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Biker Scout',
  projectile       : PROJECTILES.LASER,
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/bikerscout',
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [3, 8],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [7, 0],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 90 * MAGNIFICATION
};

export const bobafett = {
  code             : 'bobafett',
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 60 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Boba Fett',
  projectile       : PROJECTILES.LASER,
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/bobafett',
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [3, 9],
  weaponOffsetLeft : [0, 5],
  weaponOffsetRight: [10, 5],
  weaponOffsetUp   : [7, 1],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 90 * MAGNIFICATION
};

export const bossnass = {
  code          : 'bossnass',
  frameHeight   : 12 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  height        : 60 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Boss Nass',
  isPropulsive  : false,
  speed         : 4,
  sprite        : 'characters/bossnass',
  weaponType    : WEAPON_TYPES.ATTACK,
  width         : 90 * MAGNIFICATION
};

export const captainantilles = {
  code             : 'captainantilles',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 55 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Captain Antilles',
  projectile       : PROJECTILES.LASER,
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/captainantilles',
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [3, 7],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [6, 0],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 90 * MAGNIFICATION
};

export const carbonite = {
  code          : 'carbonite',
  frameHeight   : 12 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  height        : 60 * MAGNIFICATION,
  moveFrameCount: 1,
  name          : 'Frozen Han Solo',
  isPropulsive  : false,
  speed         : 8,
  sprite        : 'characters/carbonite',
  weaponType    : WEAPON_TYPES.ATTACK,
  width         : 20 * MAGNIFICATION
};

export const chewbacca = {
  code             : 'chewbacca',
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 60 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Chewbacca',
  projectile       : PROJECTILES.LASER,
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/chewbacca',
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [3, 9],
  weaponOffsetLeft : [0, 5],
  weaponOffsetRight: [10, 5],
  weaponOffsetUp   : [7, 0],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 90 * MAGNIFICATION
};

export const chewbacca5 = {
  code             : 'chewbacca5',
  frameHeight      : 15 * MAGNIFICATION,
  frameWidth       : 12 * MAGNIFICATION,
  height           : 75 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Chewbacca',
  projectile       : PROJECTILES.LASER,
  isPropulsive     : false,
  speed            : 6,
  sprite           : 'characters/chewbacca5',
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [4, 12],
  weaponOffsetLeft : [0, 8],
  weaponOffsetRight: [11, 8],
  weaponOffsetUp   : [8, 1],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 108 * MAGNIFICATION
};

export const clonecaptain = {
  code             : 'clonecaptain',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 55 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Clone Captain',
  projectile       : PROJECTILES.LASER,
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/clonecaptain',
  weaponColor      : COLORS.BLUE,
  weaponOffsetDown : [3, 8],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [7, 1],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 90 * MAGNIFICATION
};

export const clonetrooper = {
  code             : 'clonetrooper',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 55 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Clone Trooper',
  projectile       : PROJECTILES.LASER,
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/clonetrooper',
  weaponColor      : COLORS.BLUE,
  weaponOffsetDown : [3, 8],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [7, 0],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 90 * MAGNIFICATION
};

export const coruscantguard = {
  code             : 'coruscantguard',
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 60 * MAGNIFICATION,
  moveFrameCount   : 4,
  name             : 'Coruscant Guard',
  projectile       : PROJECTILES.LASER,
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/coruscantguard',
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [3, 9],
  weaponOffsetLeft : [0, 5],
  weaponOffsetRight: [10, 5],
  weaponOffsetUp   : [7, 1],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 50 * MAGNIFICATION
};

export const darthmaul = {
  code             : 'darthmaul',
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 60 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Darth Maul',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/darthmaul',
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [1, 10],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [8, 0],
  weaponType       : WEAPON_TYPES.LIGHTSABER,
  width            : 100 * MAGNIFICATION
};

export const darthvader = {
  code             : 'darthvader',
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 60 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Darth Vader',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/darthvader',
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [1, 8],
  weaponOffsetLeft : [0, 5],
  weaponOffsetRight: [10, 3],
  weaponOffsetUp   : [8, 0],
  weaponType       : WEAPON_TYPES.LIGHTSABER,
  width            : 100 * MAGNIFICATION
};

export const darthvader5 = {
  code             : 'darthvader5',
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 60 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Darth Vader',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/darthvader5',
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [1, 8],
  weaponOffsetLeft : [0, 5],
  weaponOffsetRight: [10, 3],
  weaponOffsetUp   : [8, 0],
  weaponType       : WEAPON_TYPES.LIGHTSABER,
  width            : 100 * MAGNIFICATION
};

export const darthvader6 = {
  code             : 'darthvader6',
  death            : ANIMATIONS.DEATHS.DARTH_VADER6,
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 48 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Darth Vader',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/darthvader6',
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [1, 8],
  weaponOffsetLeft : [0, 5],
  weaponOffsetRight: [10, 3],
  weaponOffsetUp   : [8, 0],
  weaponType       : WEAPON_TYPES.LIGHTSABER,
  width            : 100 * MAGNIFICATION
};

export const deathstartrooper = {
  code             : 'deathstartrooper',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 55 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Death Star Trooper',
  projectile       : PROJECTILES.LASER,
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/deathstartrooper',
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [3, 7],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [7, 0],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 90 * MAGNIFICATION
};

export const droideka = {
  code             : 'droideka',
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 60 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Droideka',
  projectile       : PROJECTILES.LASER,
  isPropulsive     : false,
  speed            : 12,
  sprite           : 'characters/droideka',
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [2, 8],
  weaponOffsetLeft : [0, 5],
  weaponOffsetRight: [10, 5],
  weaponOffsetUp   : [7, 1],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 90 * MAGNIFICATION
};

export const emperor = {
  code          : 'emperor',
  frameHeight   : 12 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  height        : 60 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Emperor',
  isPropulsive  : false,
  speed         : 4,
  sprite        : 'characters/emperor',
  weaponType    : WEAPON_TYPES.BOMB,
  width         : 90 * MAGNIFICATION
};

export const ewok = {
  code             : 'ewok',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 55 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Ewok',
  projectile       : PROJECTILES.ROCK,
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/ewok',
  weaponOffsetDown : [3, 10],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [3, 0],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 90 * MAGNIFICATION
};

export const gamorrean = {
  code          : 'gamorrean',
  frameHeight   : 12 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  height        : 60 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Gamorrean Guard',
  isPropulsive  : false,
  speed         : 6,
  sprite        : 'characters/gamorrean',
  weaponType    : WEAPON_TYPES.ATTACK,
  width         : 90 * MAGNIFICATION
};

export const garindan = {
  code             : 'garindan',
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 60 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Garindan',
  projectile       : PROJECTILES.LASER,
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/garindan',
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [3, 9],
  weaponOffsetLeft : [0, 5],
  weaponOffsetRight: [10, 5],
  weaponOffsetUp   : [7, 1],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 90 * MAGNIFICATION
};

export const gonkdroid = {
  code          : 'gonkdroid',
  frameHeight   : 12 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  height        : 60 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Gonk Droid',
  isPropulsive  : false,
  speed         : 4,
  sprite        : 'characters/gonkdroid',
  weaponOffset  : [4, 11],
  weaponType    : WEAPON_TYPES.BOMB,
  width         : 90 * MAGNIFICATION
};

export const greedo = {
  code             : 'greedo',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 55 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Greedo',
  projectile       : PROJECTILES.LASER,
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/greedo',
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [3, 8],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [7, 0],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 90 * MAGNIFICATION
};

export const gungan = {
  code             : 'gungan',
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 60 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Gungan',
  projectile       : PROJECTILES.GUNGAN_BALL,
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/gungan',
  weaponOffsetDown : [2, 12],
  weaponOffsetLeft : [0, 3],
  weaponOffsetRight: [10, 3],
  weaponOffsetUp   : [2, 0],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 90 * MAGNIFICATION
};

export const hansolo = {
  code             : 'hansolo',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 55 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Han Solo',
  projectile       : PROJECTILES.LASER,
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/hansolo',
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [3, 8],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [7, 0],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 90 * MAGNIFICATION
};

export const hansolo5 = {
  code             : 'hansolo5',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 55 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Han Solo',
  projectile       : PROJECTILES.LASER,
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/hansolo5',
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [3, 8],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [7, 0],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 90 * MAGNIFICATION
};

export const imperialguard = {
  code          : 'imperialguard',
  frameHeight   : 12 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  height        : 60 * MAGNIFICATION,
  moveFrameCount: 4,
  name          : 'Imperial Guard',
  isPropulsive  : false,
  speed         : 8,
  sprite        : 'characters/imperialguard',
  weaponType    : WEAPON_TYPES.ATTACK,
  width         : 50 * MAGNIFICATION
};

export const jabba = {
  code          : 'jabba',
  frameHeight   : 11 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  height        : 55 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Jabba the Hutt',
  isPropulsive  : false,
  speed         : 4,
  sprite        : 'characters/jabba',
  weaponType    : WEAPON_TYPES.ATTACK,
  width         : 90 * MAGNIFICATION
};

export const jangofett = {
  code             : 'jangofett',
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 60 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Jango Fett',
  projectile       : PROJECTILES.LASER,
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/jangofett',
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [3, 9],
  weaponOffsetLeft : [0, 5],
  weaponOffsetRight: [10, 5],
  weaponOffsetUp   : [7, 1],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 90 * MAGNIFICATION
};

export const jarjar = {
  code             : 'jarjar',
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 60 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Jar Jar Binks',
  projectile       : PROJECTILES.GUNGAN_BALL,
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/jarjar',
  weaponOffsetDown : [2, 12],
  weaponOffsetLeft : [0, 3],
  weaponOffsetRight: [10, 3],
  weaponOffsetUp   : [2, 0],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 90 * MAGNIFICATION
};

export const jawa = {
  code             : 'jawa',
  frameHeight      : 10 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 50 * MAGNIFICATION,
  moveFrameCount   : 4,
  name             : 'Jawa',
  projectile       : PROJECTILES.LASER,
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/jawa',
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [3, 7],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [7, 0],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 50 * MAGNIFICATION
};

export const kyloren = {
  code             : 'kyloren',
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 60 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Kylo Ren',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/kyloren',
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [1, 8],
  weaponOffsetLeft : [0, 5],
  weaponOffsetRight: [10, 3],
  weaponOffsetUp   : [8, 0],
  weaponType       : WEAPON_TYPES.LIGHTSABER,
  width            : 100 * MAGNIFICATION
};

export const kylorenunmasked = {
  code             : 'kylorenunmasked',
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 60 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Kylo Ren',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/kylorenunmasked',
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [1, 8],
  weaponOffsetLeft : [0, 5],
  weaponOffsetRight: [10, 3],
  weaponOffsetUp   : [8, 0],
  weaponType       : WEAPON_TYPES.LIGHTSABER,
  width            : 100 * MAGNIFICATION
};

export const lando = {
  code             : 'lando',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 55 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Lando Calrissian',
  projectile       : PROJECTILES.LASER,
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/lando',
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [3, 8],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [7, 0],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 90 * MAGNIFICATION
};

export const leia = {
  code             : 'leia',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 55 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Princess Leia',
  projectile       : PROJECTILES.LASER,
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/leia',
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [3, 8],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [7, 0],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 90 * MAGNIFICATION
};

export const leia6 = {
  code             : 'leia6',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 55 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Princess Leia',
  projectile       : PROJECTILES.LASER,
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/leia6',
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [3, 8],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [7, 0],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 90 * MAGNIFICATION
};

export const lobot = {
  code             : 'lobot',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 55 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Lobot',
  projectile       : PROJECTILES.LASER,
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/lobot',
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [3, 8],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [7, 0],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 90 * MAGNIFICATION
};

export const logray = {
  code          : 'logray',
  frameHeight   : 12 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  height        : 60 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Logray',
  projectile    : PROJECTILES.ROCK,
  isPropulsive  : false,
  speed         : 8,
  sprite        : 'characters/logray',
  weaponType    : WEAPON_TYPES.PROJECTILE,
  width         : 90 * MAGNIFICATION
};

export const luke = {
  code             : 'luke',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 55 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Luke Skywalker',
  projectile       : PROJECTILES.LASER,
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/luke',
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [3, 8],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [7, 0],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 90 * MAGNIFICATION
};

export const luke5 = {
  code             : 'luke5',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 55 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Luke Skywalker',
  projectile       : PROJECTILES.LASER,
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/luke5',
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [3, 8],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [7, 0],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 90 * MAGNIFICATION
};

export const luke6 = {
  code             : 'luke6',
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 60 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Luke Skywalker',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/luke6',
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [1, 9],
  weaponOffsetLeft : [0, 3],
  weaponOffsetRight: [10, 3],
  weaponOffsetUp   : [8, 1],
  weaponType       : WEAPON_TYPES.LIGHTSABER,
  width            : 100 * MAGNIFICATION
};

export const macewindu = {
  code             : 'macewindu',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 55 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Mace Windu',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/macewindu',
  weaponColor      : COLORS.PURPLE,
  weaponOffsetDown : [1, 9],
  weaponOffsetLeft : [0, 3],
  weaponOffsetRight: [10, 3],
  weaponOffsetUp   : [8, 0],
  weaponType       : WEAPON_TYPES.LIGHTSABER,
  width            : 100 * MAGNIFICATION
};

export const mawhonic = {
  code             : 'mawhonic',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 55 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Mawhonic',
  projectile       : PROJECTILES.LASER,
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/mawhonic',
  weaponColor      : COLORS.BLUE,
  weaponOffsetDown : [3, 8],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [7, 0],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 90 * MAGNIFICATION
};

export const mousedroid = {
  code          : 'mousedroid',
  death         : ANIMATIONS.DETONATION,
  frameHeight   : 8 * MAGNIFICATION,
  frameWidth    : 8 * MAGNIFICATION,
  height        : 32 * MAGNIFICATION,
  moveFrameCount: 1,
  name          : 'Mouse Droid',
  isPropulsive  : false,
  speed         : 12,
  sprite        : 'characters/mousedroid',
  weaponOffset  : [4, 5],
  weaponType    : WEAPON_TYPES.BOMB,
  width         : 16 * MAGNIFICATION
};

export const naboopilot = {
  code             : 'naboopilot',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 55 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Naboo Pilot',
  projectile       : PROJECTILES.LASER,
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/naboopilot',
  weaponColor      : COLORS.BLUE,
  weaponOffsetDown : [3, 8],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [7, 0],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 90 * MAGNIFICATION
};

export const nutegunray = {
  code          : 'nutegunray',
  frameHeight   : 12 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  height        : 60 * MAGNIFICATION,
  moveFrameCount: 4,
  name          : 'Nute Gunray',
  isPropulsive  : false,
  speed         : 5,
  sprite        : 'characters/nutegunray',
  weaponType    : null,
  width         : 50 * MAGNIFICATION
};

export const obiwan = {
  code             : 'obiwan',
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 60 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Obi Wan Kenobi',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/obiwan',
  weaponColor      : COLORS.BLUE,
  weaponOffsetDown : [1, 10],
  weaponOffsetLeft : [0, 3],
  weaponOffsetRight: [10, 3],
  weaponOffsetUp   : [8, 0],
  weaponType       : WEAPON_TYPES.LIGHTSABER,
  width            : 100 * MAGNIFICATION
};

export const officerblack = {
  code             : 'officerblack',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 55 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Imperial Officer',
  projectile       : PROJECTILES.LASER,
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/officerblack',
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [3, 8],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [7, 0],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 90 * MAGNIFICATION
};

export const officergreen = {
  code             : 'officergreen',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 55 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Imperial Officer',
  projectile       : PROJECTILES.LASER,
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/officergreen',
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [3, 8],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [7, 0],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 90 * MAGNIFICATION
};

export const panaka = {
  code             : 'panaka',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 55 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Captain Panaka',
  projectile       : PROJECTILES.LASER,
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/panaka',
  weaponColor      : COLORS.BLUE,
  weaponOffsetDown : [3, 8],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [7, 0],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 90 * MAGNIFICATION
};

export const pondababa = {
  code          : 'pondababa',
  frameHeight   : 12 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  height        : 60 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Ponda Baba',
  isPropulsive  : false,
  speed         : 8,
  sprite        : 'characters/pondababa',
  weaponType    : null,
  width         : 90 * MAGNIFICATION
};

export const protocolblack = {
  code          : 'protocolblack',
  frameHeight   : 10 * MAGNIFICATION,
  frameWidth    : 8 * MAGNIFICATION,
  height        : 50 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Protocol Droid',
  isPropulsive  : false,
  speed         : 5,
  sprite        : 'characters/protocolblack',
  weaponType    : null,
  width         : 72 * MAGNIFICATION
};

export const protocolwhite = {
  code          : 'protocolwhite',
  frameHeight   : 10 * MAGNIFICATION,
  frameWidth    : 8 * MAGNIFICATION,
  height        : 50 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Protocol Droid',
  isPropulsive  : false,
  speed         : 5,
  sprite        : 'characters/protocolwhite',
  weaponType    : null,
  width         : 72 * MAGNIFICATION
};

export const quigonjinn = {
  code             : 'quigonjinn',
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 60 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Qui-Gon Jinn',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/quigonjinn',
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [1, 10],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [8, 0],
  weaponType       : WEAPON_TYPES.LIGHTSABER,
  width            : 100 * MAGNIFICATION
};

export const rancor = {
  code          : 'rancor',
  frameHeight   : 13 * MAGNIFICATION,
  frameWidth    : 15 * MAGNIFICATION,
  height        : 65 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Rancor',
  isPropulsive  : false,
  speed         : 4,
  sprite        : 'characters/rancor',
  weaponOffset  : [3, 7],
  weaponType    : WEAPON_TYPES.BOMB,
  width         : 135 * MAGNIFICATION
};

export const rebel = {
  code             : 'rebel',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 55 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Rebel',
  projectile       : PROJECTILES.LASER,
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/rebel',
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [3, 7],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [6, 0],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 90 * MAGNIFICATION
};

export const runehaako = {
  code          : 'runehaako',
  frameHeight   : 12 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  height        : 60 * MAGNIFICATION,
  moveFrameCount: 4,
  name          : 'Rune Haako',
  isPropulsive  : false,
  speed         : 5,
  sprite        : 'characters/runehaako',
  weaponType    : null,
  width         : 50 * MAGNIFICATION
};

export const sandtrooper = {
  code             : 'sandtrooper',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 55 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Sandtrooper',
  projectile       : PROJECTILES.LASER,
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/sandtrooper',
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [3, 7],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [6, 0],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 90 * MAGNIFICATION
};

export const sebulba = {
  code          : 'sebulba',
  frameHeight   : 10 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  height        : 50 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Sebulba',
  isPropulsive  : false,
  speed         : 8,
  sprite        : 'characters/sebulba',
  weaponOffset  : [4, 9],
  weaponType    : WEAPON_TYPES.BOMB,
  width         : 90 * MAGNIFICATION
};

export const stormtrooper = {
  code             : 'stormtrooper',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 55 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Stormtrooper',
  projectile       : PROJECTILES.LASER,
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/stormtrooper',
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [3, 7],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [6, 0],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 90 * MAGNIFICATION
};

export const stormtrooperhan = {
  code             : 'stormtrooperhan',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 55 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Han Solo',
  projectile       : PROJECTILES.LASER,
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/stormtrooperhan',
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [3, 7],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [6, 0],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 90 * MAGNIFICATION
};

export const stormtrooperluke = {
  code             : 'stormtrooperluke',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 55 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Luke Skywalker',
  projectile       : PROJECTILES.LASER,
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/stormtrooperluke',
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [3, 7],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [6, 0],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 90 * MAGNIFICATION
};

export const stuntrooper = {
  code             : 'stuntrooper',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 55 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Stormtrooper',
  projectile       : PROJECTILES.STUN,
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/stormtrooper',
  weaponOffsetDown : [0, 6],
  weaponOffsetLeft : [4, 0],
  weaponOffsetRight: [6, 0],
  weaponOffsetUp   : [0, 4],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 90 * MAGNIFICATION
};

export const tarkin = {
  code          : 'tarkin',
  frameHeight   : 11 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  height        : 55 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Grand Moff Tarkin',
  isPropulsive  : false,
  speed         : 4,
  sprite        : 'characters/tarkin',
  weaponType    : null,
  width         : 90 * MAGNIFICATION
};

export const tauntaun = {
  code          : 'tauntaun',
  frameHeight   : 12 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  height        : 60 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Tauntaun',
  isPropulsive  : false,
  speed         : 10,
  sprite        : 'characters/tauntaun',
  weaponOffset  : [5, 11],
  weaponType    : WEAPON_TYPES.BOMB,
  width         : 90 * MAGNIFICATION
};

export const threebee = {
  code          : 'threebee',
  death         : ANIMATIONS.SPRITZ,
  frameHeight   : 11 * MAGNIFICATION,
  frameWidth    : 8 * MAGNIFICATION,
  height        : 44 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : '3B6-RA-7',
  isPropulsive  : false,
  speed         : 5,
  sprite        : 'characters/threebee',
  weaponType    : null,
  width         : 72 * MAGNIFICATION
};

export const threepio = {
  code          : 'threepio',
  frameHeight   : 10 * MAGNIFICATION,
  frameWidth    : 8 * MAGNIFICATION,
  height        : 50 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'C-3PO',
  isPropulsive  : false,
  speed         : 5,
  sprite        : 'characters/threepio',
  weaponType    : null,
  width         : 72 * MAGNIFICATION
};

export const tiepilot = {
  code             : 'tiepilot',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 55 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'TIE Fighter Pilot',
  projectile       : PROJECTILES.LASER,
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/tiepilot',
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [9, 9],
  weaponOffsetLeft : [0, 5],
  weaponOffsetRight: [10, 5],
  weaponOffsetUp   : [2, 0],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 90 * MAGNIFICATION
};

export const tusken = {
  code             : 'tusken',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 55 * MAGNIFICATION,
  moveFrameCount   : 4,
  name             : 'Tusken Raider',
  projectile       : PROJECTILES.LASER,
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/tusken',
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [3, 9],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [7, 0],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 50 * MAGNIFICATION
};

export const typho = {
  code             : 'typho',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 55 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Captain Typho',
  projectile       : PROJECTILES.LASER,
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/typho',
  weaponColor      : COLORS.BLUE,
  weaponOffsetDown : [3, 8],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [7, 0],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 90 * MAGNIFICATION
};

export const uncleowen = {
  code          : 'uncleowen',
  death         : ANIMATIONS.DEATHS.UNCLE_OWEN,
  frameHeight   : 12 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  height        : 48 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Uncle Owen',
  isPropulsive  : false,
  speed         : 6,
  sprite        : 'characters/uncleowen',
  weaponOffset  : [4, 11],
  weaponType    : WEAPON_TYPES.BOMB,
  width         : 90 * MAGNIFICATION
};

export const vallorum = {
  code          : 'vallorum',
  frameHeight   : 11 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  height        : 55 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Chancellor Vallorum',
  isPropulsive  : false,
  speed         : 4,
  sprite        : 'characters/vallorum',
  weaponType    : null,
  width         : 90 * MAGNIFICATION
};

export const weequay = {
  code             : 'weequay',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 55 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Weequay',
  projectile       : PROJECTILES.LASER,
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/weequay',
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [3, 8],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [7, 0],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 90 * MAGNIFICATION
};

export const xwingpilot = {
  code             : 'xwingpilot',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 55 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'X-wing Pilot',
  projectile       : PROJECTILES.LASER,
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/xwingpilot',
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [3, 7],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [6, 0],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 90 * MAGNIFICATION
};

export const yoda = {
  code             : 'yoda',
  frameHeight      : 10 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 50 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Yoda',
  isPropulsive     : false,
  speed            : 4,
  sprite           : 'characters/yoda',
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [1, 9],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [9, 4],
  weaponOffsetUp   : [7, 2],
  weaponType       : WEAPON_TYPES.LIGHTSABER,
  width            : 100 * MAGNIFICATION
};
