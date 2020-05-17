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
  ship             : false,
  speed            : 8,
  sprite           : 'ackbar',
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
  ship             : false,
  speed            : 8,
  sprite           : 'amidala',
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
  ship          : false,
  speed         : 8,
  sprite        : 'ani',
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
  ship          : false,
  speed         : 10,
  sprite        : 'artoo',
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
  ship          : false,
  speed         : 6,
  sprite        : 'arfive',
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
  ship             : false,
  speed            : 4,
  sprite           : 'atst',
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
  ship          : false,
  speed         : 6,
  sprite        : 'auntberu',
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
  ship          : false,
  speed         : 10,
  sprite        : 'bantha',
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
  ship             : false,
  speed            : 8,
  sprite           : 'battledroid',
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
  ship          : false,
  speed         : 10,
  sprite        : 'bb8',
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
  ship             : false,
  speed            : 6,
  sprite           : 'ben',
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
  ship             : false,
  speed            : 8,
  sprite           : 'bikerscout',
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
  ship             : false,
  speed            : 8,
  sprite           : 'bobafett',
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
  ship          : false,
  speed         : 4,
  sprite        : 'bossnass',
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
  ship             : false,
  speed            : 8,
  sprite           : 'captainantilles',
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
  ship          : false,
  speed         : 8,
  sprite        : 'carbonite',
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
  ship             : false,
  speed            : 8,
  sprite           : 'chewbacca',
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
  ship             : false,
  speed            : 6,
  sprite           : 'chewbacca5',
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
  ship             : false,
  speed            : 8,
  sprite           : 'clonecaptain',
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
  ship             : false,
  speed            : 8,
  sprite           : 'clonetrooper',
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
  ship             : false,
  speed            : 8,
  sprite           : 'coruscantguard',
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
  ship             : false,
  speed            : 8,
  sprite           : 'darthmaul',
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
  ship             : false,
  speed            : 8,
  sprite           : 'darthvader',
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
  ship             : false,
  speed            : 8,
  sprite           : 'darthvader5',
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
  height           : 60 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Darth Vader',
  ship             : false,
  speed            : 8,
  sprite           : 'darthvader6',
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
  ship             : false,
  speed            : 8,
  sprite           : 'deathstartrooper',
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
  ship             : false,
  speed            : 12,
  sprite           : 'droideka',
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
  ship          : false,
  speed         : 4,
  sprite        : 'emperor',
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
  ship             : false,
  speed            : 8,
  sprite           : 'ewok',
  weaponDelay      : FPS / 2,
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
  ship          : false,
  speed         : 6,
  sprite        : 'gamorrean',
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
  ship             : false,
  speed            : 8,
  sprite           : 'garindan',
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
  ship          : false,
  speed         : 4,
  sprite        : 'gonkdroid',
  weaponDelay   : FPS / 2,
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
  ship             : false,
  speed            : 8,
  sprite           : 'greedo',
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
  ship             : false,
  speed            : 8,
  sprite           : 'gungan',
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
  ship             : false,
  speed            : 8,
  sprite           : 'hansolo',
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
  ship             : false,
  speed            : 8,
  sprite           : 'hansolo5',
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
  ship          : false,
  speed         : 8,
  sprite        : 'imperialguard',
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
  ship          : false,
  speed         : 4,
  sprite        : 'jabba',
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
  ship             : false,
  speed            : 8,
  sprite           : 'jangofett',
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
  ship             : false,
  speed            : 8,
  sprite           : 'jarjar',
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
  ship             : false,
  speed            : 8,
  sprite           : 'jawa',
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
  ship             : false,
  speed            : 8,
  sprite           : 'kyloren',
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
  ship             : false,
  speed            : 8,
  sprite           : 'kylorenunmasked',
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
  ship             : false,
  speed            : 8,
  sprite           : 'lando',
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
  ship             : false,
  speed            : 8,
  sprite           : 'leia',
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
  ship             : false,
  speed            : 8,
  sprite           : 'leia6',
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
  ship             : false,
  speed            : 8,
  sprite           : 'lobot',
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
  ship          : false,
  speed         : 8,
  sprite        : 'logray',
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
  ship             : false,
  speed            : 8,
  sprite           : 'luke',
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
  ship             : false,
  speed            : 8,
  sprite           : 'luke5',
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
  ship             : false,
  speed            : 8,
  sprite           : 'luke6',
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
  ship             : false,
  speed            : 8,
  sprite           : 'macewindu',
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
  ship             : false,
  speed            : 8,
  sprite           : 'mawhonic',
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
  ship          : false,
  speed         : 12,
  sprite        : 'mousedroid',
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
  ship             : false,
  speed            : 8,
  sprite           : 'naboopilot',
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
  ship          : false,
  speed         : 5,
  sprite        : 'nutegunray',
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
  ship             : false,
  speed            : 8,
  sprite           : 'obiwan',
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
  ship             : false,
  speed            : 8,
  sprite           : 'officerblack',
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
  ship             : false,
  speed            : 8,
  sprite           : 'officergreen',
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
  ship             : false,
  speed            : 8,
  sprite           : 'panaka',
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
  ship          : false,
  speed         : 8,
  sprite        : 'pondababa',
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
  ship          : false,
  speed         : 5,
  sprite        : 'protocolblack',
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
  ship          : false,
  speed         : 5,
  sprite        : 'protocolwhite',
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
  ship             : false,
  speed            : 8,
  sprite           : 'quigonjinn',
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
  ship          : false,
  speed         : 4,
  sprite        : 'rancor',
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
  ship             : false,
  speed            : 8,
  sprite           : 'rebel',
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
  ship          : false,
  speed         : 5,
  sprite        : 'runehaako',
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
  ship             : false,
  speed            : 8,
  sprite           : 'sandtrooper',
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
  ship          : false,
  speed         : 8,
  sprite        : 'sebulba',
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
  ship             : false,
  speed            : 8,
  sprite           : 'stormtrooper',
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
  ship             : false,
  speed            : 8,
  sprite           : 'stormtrooperhan',
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
  ship             : false,
  speed            : 8,
  sprite           : 'stormtrooperluke',
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [3, 7],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [6, 0],
  weaponType       : WEAPON_TYPES.PROJECTILE,
  width            : 90 * MAGNIFICATION
};

export const stuntrooper = {
  code             : 'stormtrooper',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 55 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Stormtrooper',
  projectile       : PROJECTILES.STUN,
  ship             : false,
  speed            : 8,
  sprite           : 'stormtrooper',
  weaponDelay      : 2,
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
  ship          : false,
  speed         : 4,
  sprite        : 'tarkin',
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
  ship          : false,
  speed         : 10,
  sprite        : 'tauntaun',
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
  ship          : false,
  speed         : 5,
  sprite        : 'threebee',
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
  ship          : false,
  speed         : 5,
  sprite        : 'threepio',
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
  ship             : false,
  speed            : 8,
  sprite           : 'tiepilot',
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
  ship             : false,
  speed            : 8,
  sprite           : 'tusken',
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
  ship             : false,
  speed            : 8,
  sprite           : 'typho',
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
  frameHeight   :    12 * MAGNIFICATION,
  frameWidth    :     10 * MAGNIFICATION,
  height        :         48 * MAGNIFICATION,
  moveFrameCount: 8,
  name          :           'Uncle Owen',
  ship          :           false,
  speed         :          6,
  sprite        :         'uncleowen',
  weaponDelay   :    FPS / 2,
  weaponOffset  :   [4, 11],
  weaponType    :     WEAPON_TYPES.BOMB,
  width         :          90 * MAGNIFICATION
};

export const vallorum = {
  code          : 'vallorum',
  frameHeight   : 11 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  height        : 55 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Chancellor Vallorum',
  ship          : false,
  speed         : 4,
  sprite        : 'vallorum',
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
  ship             : false,
  speed            : 8,
  sprite           : 'weequay',
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
  ship             : false,
  speed            : 8,
  sprite           : 'xwingpilot',
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
  ship             : false,
  speed            : 4,
  sprite           : 'yoda',
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [1, 9],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [9, 4],
  weaponOffsetUp   : [7, 2],
  weaponType       : WEAPON_TYPES.LIGHTSABER,
  width            : 100 * MAGNIFICATION
};
