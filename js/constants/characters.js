import { ANIMATIONS }                 from '/js/constants/animations.js';
import { COLORS, FPS, MAGNIFICATION } from '/js/constants/config.js';
import { WEAPONS }               from '/js/constants/weapons.js';

export const ackbar = {
  code             : 'ackbar',
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 12 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Admiral Ackbar',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/ackbar',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [3, 8],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [7, 0],
  width            : 10 * 9 * MAGNIFICATION,
  sheetSize: {
    height: 5,
    width : 9
  }
};

export const amidala = {
  code             : 'amidala',
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 12 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Queen Amidala',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/amidala',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [3, 9],
  weaponOffsetLeft : [0, 5],
  weaponOffsetRight: [10, 5],
  weaponOffsetUp   : [7, 0],
  width            : 10 * 9 * MAGNIFICATION
};

export const ani = {
  code          : 'ani',
  frameHeight   : 10 * MAGNIFICATION,
  frameWidth    : 7 * MAGNIFICATION,
  height        : 10 * 5 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Ani',
  isPropulsive  : false,
  speed         : 8,
  sprite        : 'characters/ani',
  weapon        : WEAPONS.BOMB,
  width         : 7 * 9 * MAGNIFICATION
};

export const arfive = {
  code          : 'arfive',
  death         : {
    frameCount : 6,
    frameHeight: 9 * MAGNIFICATION,
    frameWidth : 5 * MAGNIFICATION,
    name       : 'arfivedeath',
    isRemove   : false
  },
  frameHeight   : 9 * MAGNIFICATION,
  frameWidth    : 5 * MAGNIFICATION,
  height        : 9 * 4 * MAGNIFICATION,
  moveFrameCount: 1,
  name          : 'R5-D4',
  isPropulsive  : false,
  speed         : 6,
  sprite        : 'characters/arfive',
  weapon        : WEAPONS.BOMB,
  width         : 5 * 2 * MAGNIFICATION
};

export const artoo = {
  code          : 'artoo',
  death         : {
    frameCount : 7,
    frameHeight: 8 * MAGNIFICATION,
    frameWidth : 5 * MAGNIFICATION,
    name       : 'artoodeath',
    isRemove   : false
  },
  frameHeight   : 8 * MAGNIFICATION,
  frameWidth    : 5 * MAGNIFICATION,
  height        : 8 * 4 * MAGNIFICATION,
  moveFrameCount: 1,
  name          : 'R2-D2',
  isPropulsive  : false,
  speed         : 10,
  sprite        : 'characters/artoo',
  weapon        : WEAPONS.BOMB,
  width         : 5 * 2 * MAGNIFICATION
};

export const atst = {
  code             : 'atst',
  frameHeight      : 15 * MAGNIFICATION,
  frameWidth       : 15 * MAGNIFICATION,
  height           : 15 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'AT-ST',
  isPropulsive     : false,
  speed            : 4,
  sprite           : 'characters/atst',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [6, 8],
  weaponOffsetLeft : [2, 5],
  weaponOffsetRight: [13, 5],
  weaponOffsetUp   : [8, 0],
  width            : 15 * 9 * MAGNIFICATION
};

export const auntberu = {
  code          : 'auntberu',
  death         : {
    frameCount : 10,
    frameHeight: 12 * MAGNIFICATION,
    frameWidth : 10 * MAGNIFICATION,
    name       : 'auntberudeath',
    isRemove   : false
  },
  frameHeight   : 11 * MAGNIFICATION,
  frameWidth    : 8 * MAGNIFICATION,
  height        : 11 * 4 * MAGNIFICATION,
  moveFrameCount: 4,
  name          : 'Aunt Beru',
  isPropulsive  : false,
  speed         : 6,
  sprite        : 'characters/auntberu',
  weapon        : WEAPONS.BOMB,
  width         : 10 * 4 * MAGNIFICATION
};

export const bantha = {
  code          : 'bantha',
  frameHeight   : 12 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  height        : 12 * 5 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Bantha',
  isPropulsive  : false,
  speed         : 10,
  sprite        : 'characters/bantha',
  weapon        : WEAPONS.BOMB,
  width         : 10 * 10 * MAGNIFICATION
};

export const battledroid = {
  code             : 'battledroid',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 11 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Battle Droid',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/battledroid',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [3, 8],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [6, 0],
  width            : 10 * 9 * MAGNIFICATION
};

export const bb8 = {
  code          : 'bb8',
  frameHeight   : 7 * MAGNIFICATION,
  frameWidth    : 5 * MAGNIFICATION,
  height        : 7 * 5 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'BB-8',
  isPropulsive  : false,
  speed         : 10,
  sprite        : 'characters/bb8',
  weapon        : WEAPONS.BOMB,
  width         : 5 * 9 * MAGNIFICATION
};

export const ben = {
  code             : 'ben',
  death            : {
    frameCount : 6,
    frameHeight: 12 * MAGNIFICATION,
    frameWidth : 10 * MAGNIFICATION,
    name       : 'bendeath',
    isRemove   : false
  },
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 12 * 5 * MAGNIFICATION,
  moveFrameCount   : 4,
  name             : 'Ben Kenobi',
  isPropulsive     : false,
  speed            : 6,
  sprite           : 'characters/ben',
  weapon           : WEAPONS.LIGHTSABER,
  weaponColor      : COLORS.BLUE,
  weaponOffsetDown : [1, 10],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [8, 0],
  width            : 12 * 5 * MAGNIFICATION
};

export const bikerscout = {
  code             : 'bikerscout',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 11 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Biker Scout',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/bikerscout',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [3, 8],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [7, 0],
  width            : 10 * 9 * MAGNIFICATION
};

export const bobafett = {
  code             : 'bobafett',
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 12 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Boba Fett',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/bobafett',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [3, 9],
  weaponOffsetLeft : [0, 5],
  weaponOffsetRight: [10, 5],
  weaponOffsetUp   : [7, 1],
  width            : 10 * 9 * MAGNIFICATION
};

export const bossnass = {
  code             : 'bossnass',
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 12 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Boss Nass',
  isPropulsive     : false,
  speed            : 4,
  sprite           : 'characters/bossnass',
  weapon           : WEAPONS.GUNGAN_BALL,
  weaponOffsetDown : [2, 12],
  weaponOffsetLeft : [0,  3],
  weaponOffsetRight: [10, 3],
  weaponOffsetUp   : [2,  0],
  width            : 10 * 9 * MAGNIFICATION
};

export const captainantilles = {
  code             : 'captainantilles',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 11 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Captain Antilles',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/captainantilles',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [3, 7],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [6, 0],
  width            : 10 * 9 * MAGNIFICATION
};

export const carbonite = {
  code          : 'carbonite',
  frameHeight   : 12 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  height        : 12 * 5 * MAGNIFICATION,
  moveFrameCount: 1,
  name          : 'Frozen Han Solo',
  isPropulsive  : false,
  speed         : 8,
  sprite        : 'characters/carbonite',
  weapon        : WEAPONS.BOMB,
  width         : 10 * 2 * MAGNIFICATION
};

export const chewbacca = {
  code             : 'chewbacca',
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 12 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Chewbacca',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/chewbacca',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [3, 9],
  weaponOffsetLeft : [0, 5],
  weaponOffsetRight: [10, 5],
  weaponOffsetUp   : [7, 0],
  width            : 10 * 9 * MAGNIFICATION
};

export const chewbacca5 = {
  code             : 'chewbacca5',
  frameHeight      : 15 * MAGNIFICATION,
  frameWidth       : 12 * MAGNIFICATION,
  height           : 15 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Chewbacca',
  isPropulsive     : false,
  speed            : 6,
  sprite           : 'characters/chewbacca5',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [4, 12],
  weaponOffsetLeft : [0, 8],
  weaponOffsetRight: [11, 8],
  weaponOffsetUp   : [8, 1],
  width            : 12 * 9 * MAGNIFICATION
};

export const clonecaptain = {
  code             : 'clonecaptain',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 11 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Clone Captain',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/clonecaptain',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.BLUE,
  weaponOffsetDown : [3, 8],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [7, 1],
  width            : 10 * 9 * MAGNIFICATION
};

export const clonetrooper = {
  code             : 'clonetrooper',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 11 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Clone Trooper',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/clonetrooper',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.BLUE,
  weaponOffsetDown : [3, 8],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [7, 0],
  width            : 10 * 9 * MAGNIFICATION
};

export const coruscantguard = {
  code             : 'coruscantguard',
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 12 * 5 * MAGNIFICATION,
  moveFrameCount   : 4,
  name             : 'Coruscant Guard',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/coruscantguard',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [3, 9],
  weaponOffsetLeft : [0, 5],
  weaponOffsetRight: [10, 5],
  weaponOffsetUp   : [7, 1],
  width            : 10 * 5 * MAGNIFICATION
};

export const darthmaul = {
  code             : 'darthmaul',
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 12 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Darth Maul',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/darthmaul',
  weapon           : WEAPONS.LIGHTSABER,
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [1, 10],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [8, 0],
  width            : 10 * 10 * MAGNIFICATION
};

export const darthvader = {
  code             : 'darthvader',
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 12 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Darth Vader',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/darthvader',
  weapon           : WEAPONS.LIGHTSABER,
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [1, 8],
  weaponOffsetLeft : [0, 5],
  weaponOffsetRight: [10, 3],
  weaponOffsetUp   : [8, 0],
  width            : 10 * 10 * MAGNIFICATION
};

export const darthvader5 = {
  code             : 'darthvader5',
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 12 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Darth Vader',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/darthvader5',
  weapon           : WEAPONS.LIGHTSABER,
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [1, 8],
  weaponOffsetLeft : [0, 5],
  weaponOffsetRight: [10, 3],
  weaponOffsetUp   : [8, 0],
  width            : 10 * 10 * MAGNIFICATION
};

export const darthvader6 = {
  code             : 'darthvader6',
  death            : {
    frameCount : 12,
    frameHeight: 12 * MAGNIFICATION,
    frameWidth : 10 * MAGNIFICATION,
    name       : 'darthvader6death',
    isRemove   : false
  },
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 12 * 4 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Darth Vader',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/darthvader6',
  weapon           : WEAPONS.LIGHTSABER,
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [1, 8],
  weaponOffsetLeft : [0, 5],
  weaponOffsetRight: [10, 3],
  weaponOffsetUp   : [8, 0],
  width            : 10 * 10 * MAGNIFICATION
};

export const deathstartrooper = {
  code             : 'deathstartrooper',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 11 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Death Star Trooper',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/deathstartrooper',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [3, 7],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [7, 0],
  width            : 10 * 9 * MAGNIFICATION
};

export const droideka = {
  code             : 'droideka',
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 12 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Droideka',
  isPropulsive     : false,
  speed            : 12,
  sprite           : 'characters/droideka',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [2, 8],
  weaponOffsetLeft : [0, 5],
  weaponOffsetRight: [10, 5],
  weaponOffsetUp   : [7, 1],
  width            : 10 * 9 * MAGNIFICATION
};

export const emperor = {
  code          : 'emperor',
  frameHeight   : 12 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  height        : 12 * 5 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Emperor',
  isPropulsive  : false,
  speed         : 4,
  sprite        : 'characters/emperor',
  weapon        : WEAPONS.BOMB,
  width         : 10 * 9 * MAGNIFICATION
};

export const ewok = {
  code             : 'ewok',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 11 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Ewok',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/ewok',
  weapon           : WEAPONS.ROCK,
  weaponOffsetDown : [3, 10],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [3, 0],
  width            : 10 * 9 * MAGNIFICATION
};

export const gamorrean = {
  code          : 'gamorrean',
  frameHeight   : 12 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  height        : 12 * 5 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Gamorrean Guard',
  isPropulsive  : false,
  speed         : 6,
  sprite        : 'characters/gamorrean',
  weapon        : WEAPONS.BOMB,
  width         : 10 * 9 * MAGNIFICATION
};

export const garindan = {
  code             : 'garindan',
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 12 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Garindan',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/garindan',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [3, 9],
  weaponOffsetLeft : [0, 5],
  weaponOffsetRight: [10, 5],
  weaponOffsetUp   : [7, 1],
  width            : 10 * 9 * MAGNIFICATION
};

export const gonkdroid = {
  code          : 'gonkdroid',
  frameHeight   : 12 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  height        : 12 * 5 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Gonk Droid',
  isPropulsive  : false,
  speed         : 4,
  sprite        : 'characters/gonkdroid',
  weapon        : WEAPONS.BOMB,
  width         : 10 * 9 * MAGNIFICATION
};

export const greedo = {
  code             : 'greedo',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 11 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Greedo',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/greedo',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [3, 8],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [7, 0],
  width            : 10 * 9 * MAGNIFICATION
};

export const gungan = {
  code             : 'gungan',
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 12 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Gungan',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/gungan',
  weapon           : WEAPONS.GUNGAN_BALL,
  weaponOffsetDown : [2, 12],
  weaponOffsetLeft : [0, 3],
  weaponOffsetRight: [10, 3],
  weaponOffsetUp   : [2, 0],
  width            : 10 * 9 * MAGNIFICATION
};

export const hansolo = {
  code             : 'hansolo',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 11 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Han Solo',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/hansolo',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [3, 8],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [7, 0],
  width            : 10 * 9 * MAGNIFICATION
};

export const hansolo5 = {
  code             : 'hansolo5',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 11 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Han Solo',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/hansolo5',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [3, 8],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [7, 0],
  width            : 10 * 9 * MAGNIFICATION
};

export const imperialguard = {
  code          : 'imperialguard',
  frameHeight   : 12 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  height        : 12 * 5 * MAGNIFICATION,
  moveFrameCount: 4,
  name          : 'Imperial Guard',
  isPropulsive  : false,
  speed         : 8,
  sprite        : 'characters/imperialguard',
  weapon        : WEAPONS.BOMB,
  width         : 10 * 5 * MAGNIFICATION
};

export const jabba = {
  code          : 'jabba',
  frameHeight   : 11 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  height        : 11 * 5 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Jabba the Hutt',
  isPropulsive  : false,
  speed         : 4,
  sprite        : 'characters/jabba',
  weapon        : WEAPONS.BOMB,
  width         : 10 * 9 * MAGNIFICATION
};

export const jangofett = {
  code             : 'jangofett',
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 12 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Jango Fett',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/jangofett',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [3, 9],
  weaponOffsetLeft : [0, 5],
  weaponOffsetRight: [10, 5],
  weaponOffsetUp   : [7, 1],
  width            : 10 * 9 * MAGNIFICATION
};

export const jarjar = {
  code             : 'jarjar',
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 12 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Jar Jar Binks',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/jarjar',
  weapon           : WEAPONS.GUNGAN_BALL,
  weaponOffsetDown : [2, 12],
  weaponOffsetLeft : [0, 3],
  weaponOffsetRight: [10, 3],
  weaponOffsetUp   : [2, 0],
  width            : 10 * 9 * MAGNIFICATION
};

export const jawa = {
  code             : 'jawa',
  frameHeight      : 10 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 10 * 5 * MAGNIFICATION,
  moveFrameCount   : 4,
  name             : 'Jawa',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/jawa',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [3, 7],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [7, 0],
  width            : 10 * 5 * MAGNIFICATION
};

export const kyloren = {
  code             : 'kyloren',
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 12 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Kylo Ren',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/kyloren',
  weapon           : WEAPONS.LIGHTSABER,
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [1, 8],
  weaponOffsetLeft : [0, 5],
  weaponOffsetRight: [10, 3],
  weaponOffsetUp   : [8, 0],
  width            : 10 * 10 * MAGNIFICATION
};

export const kylorenunmasked = {
  code             : 'kylorenunmasked',
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 12 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Kylo Ren',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/kylorenunmasked',
  weapon           : WEAPONS.LIGHTSABER,
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [1, 8],
  weaponOffsetLeft : [0, 5],
  weaponOffsetRight: [10, 3],
  weaponOffsetUp   : [8, 0],
  width            : 10 * 10 * MAGNIFICATION
};

export const lando = {
  code             : 'lando',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 11 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Lando Calrissian',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/lando',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [3, 8],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [7, 0],
  width            : 10 * 9 * MAGNIFICATION
};

export const leia = {
  code             : 'leia',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 11 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Princess Leia',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/leia',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [3, 8],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [7, 0],
  width            : 10 * 9 * MAGNIFICATION
};

export const leia6 = {
  code             : 'leia6',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 11 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Princess Leia',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/leia6',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [3, 8],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [7, 0],
  width            : 10 * 9 * MAGNIFICATION
};

export const lobot = {
  code             : 'lobot',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 11 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Lobot',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/lobot',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [3, 8],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [7, 0],
  width            : 10 * 9 * MAGNIFICATION
};

export const logray = {
  code          : 'logray',
  frameHeight   : 12 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  height        : 12 * 5 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Logray',
  isPropulsive  : false,
  speed         : 8,
  sprite        : 'characters/logray',
  weapon        : WEAPONS.ROCK,
  width         : 10 * 9 * MAGNIFICATION
};

export const luke = {
  code             : 'luke',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 11 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Luke Skywalker',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/luke',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [3, 8],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [7, 0],
  width            : 10 * 9 * MAGNIFICATION
};

export const luke5 = {
  code             : 'luke5',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 11 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Luke Skywalker',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/luke5',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [3, 8],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [7, 0],
  width            : 10 * 9 * MAGNIFICATION
};

export const luke6 = {
  code             : 'luke6',
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 12 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Luke Skywalker',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/luke6',
  weapon           : WEAPONS.LIGHTSABER,
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [1, 9],
  weaponOffsetLeft : [0, 3],
  weaponOffsetRight: [10, 3],
  weaponOffsetUp   : [8, 1],
  width            : 10 * 10 * MAGNIFICATION
};

export const macewindu = {
  code             : 'macewindu',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 11 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Mace Windu',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/macewindu',
  weapon           : WEAPONS.LIGHTSABER,
  weaponColor      : COLORS.PURPLE,
  weaponOffsetDown : [1, 9],
  weaponOffsetLeft : [0, 3],
  weaponOffsetRight: [10, 3],
  weaponOffsetUp   : [8, 0],
  width            : 10 * 10 * MAGNIFICATION
};

export const mawhonic = {
  code             : 'mawhonic',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 11 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Mawhonic',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/mawhonic',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.BLUE,
  weaponOffsetDown : [3, 8],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [7, 0],
  width            : 10 * 9 * MAGNIFICATION
};

export const mousedroid = {
  code          : 'mousedroid',
  death         : ANIMATIONS.DETONATION,
  frameHeight   : 8 * MAGNIFICATION,
  frameWidth    : 8 * MAGNIFICATION,
  height        : 8 * 4 * MAGNIFICATION,
  moveFrameCount: 1,
  name          : 'Mouse Droid',
  isPropulsive  : false,
  speed         : 12,
  sprite        : 'characters/mousedroid',
  weapon        : WEAPONS.BOMB,
  width         : 8 * 2 * MAGNIFICATION
};

export const naboopilot = {
  code             : 'naboopilot',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 11 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Naboo Pilot',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/naboopilot',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.BLUE,
  weaponOffsetDown : [3, 8],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [7, 0],
  width            : 10 * 9 * MAGNIFICATION
};

export const nutegunray = {
  code          : 'nutegunray',
  frameHeight   : 12 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  height        : 12 * 5 * MAGNIFICATION,
  moveFrameCount: 4,
  name          : 'Nute Gunray',
  isPropulsive  : false,
  speed         : 5,
  sprite        : 'characters/nutegunray',
  weapon        : null,
  width         : 10 * 5 * MAGNIFICATION
};

export const obiwan = {
  code             : 'obiwan',
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 12 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Obi Wan Kenobi',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/obiwan',
  weapon           : WEAPONS.LIGHTSABER,
  weaponColor      : COLORS.BLUE,
  weaponOffsetDown : [1, 10],
  weaponOffsetLeft : [0, 3],
  weaponOffsetRight: [10, 3],
  weaponOffsetUp   : [8, 0],
  width            : 10 * 10 * MAGNIFICATION
};

export const officerblack = {
  code             : 'officerblack',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 11 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Imperial Officer',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/officerblack',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [3, 8],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [7, 0],
  width            : 10 * 9 * MAGNIFICATION
};

export const officergreen = {
  code             : 'officergreen',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 11 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Imperial Officer',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/officergreen',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [3, 8],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [7, 0],
  width            : 10 * 9 * MAGNIFICATION
};

export const panaka = {
  code             : 'panaka',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 11 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Captain Panaka',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/panaka',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.BLUE,
  weaponOffsetDown : [3, 8],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [7, 0],
  width            : 10 * 9 * MAGNIFICATION
};

export const pondababa = {
  code          : 'pondababa',
  frameHeight   : 12 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  height        : 12 * 5 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Ponda Baba',
  isPropulsive  : false,
  speed         : 8,
  sprite        : 'characters/pondababa',
  weapon        : null,
  width         : 10 * 9 * MAGNIFICATION
};

export const protocolblack = {
  code          : 'protocolblack',
  frameHeight   : 10 * MAGNIFICATION,
  frameWidth    : 8 * MAGNIFICATION,
  height        : 10 * 5 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Protocol Droid',
  isPropulsive  : false,
  speed         : 5,
  sprite        : 'characters/protocolblack',
  weapon        : null,
  width         : 8 * 9 * MAGNIFICATION
};

export const protocolwhite = {
  code          : 'protocolwhite',
  frameHeight   : 10 * MAGNIFICATION,
  frameWidth    : 8 * MAGNIFICATION,
  height        : 10 * 5 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Protocol Droid',
  isPropulsive  : false,
  speed         : 5,
  sprite        : 'characters/protocolwhite',
  weapon        : null,
  width         : 8 * 9 * MAGNIFICATION
};

export const quigonjinn = {
  code             : 'quigonjinn',
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 12 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Qui-Gon Jinn',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/quigonjinn',
  weapon           : WEAPONS.LIGHTSABER,
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [1, 10],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [8, 0],
  width            : 10 * 10 * MAGNIFICATION
};

export const rancor = {
  code          : 'rancor',
  frameHeight   : 13 * MAGNIFICATION,
  frameWidth    : 15 * MAGNIFICATION,
  height        : 13 * 5 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Rancor',
  isPropulsive  : false,
  speed         : 4,
  sprite        : 'characters/rancor',
  weapon        : WEAPONS.BOMB,
  width         : 15 * 9 * MAGNIFICATION
};

export const rebel = {
  code             : 'rebel',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 11 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Rebel',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/rebel',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [3, 7],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [6, 0],
  width            : 10 * 9 * MAGNIFICATION
};

export const runehaako = {
  code          : 'runehaako',
  frameHeight   : 12 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  height        : 12 * 5 * MAGNIFICATION,
  moveFrameCount: 4,
  name          : 'Rune Haako',
  isPropulsive  : false,
  speed         : 5,
  sprite        : 'characters/runehaako',
  weapon        : null,
  width         : 10 * 5 * MAGNIFICATION
};

export const sandtrooper = {
  code             : 'sandtrooper',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 11 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Sandtrooper',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/sandtrooper',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [3, 7],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [6, 0],
  width            : 10 * 9 * MAGNIFICATION
};

export const sebulba = {
  code          : 'sebulba',
  frameHeight   : 10 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  height        : 10 * 5 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Sebulba',
  isPropulsive  : false,
  speed         : 8,
  sprite        : 'characters/sebulba',
  weapon        : WEAPONS.BOMB,
  width         : 10 * 9 * MAGNIFICATION
};

export const stormtrooper = {
  code             : 'stormtrooper',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 11 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Stormtrooper',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/stormtrooper',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [3, 7],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [6, 0],
  width            : 10 * 9 * MAGNIFICATION
};

export const stormtrooperhan = {
  code             : 'stormtrooperhan',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 11 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Han Solo',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/stormtrooperhan',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [3, 7],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [6, 0],
  width            : 10 * 9 * MAGNIFICATION
};

export const stormtrooperluke = {
  code             : 'stormtrooperluke',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 11 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Luke Skywalker',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/stormtrooperluke',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [3, 7],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [6, 0],
  width            : 10 * 9 * MAGNIFICATION
};

export const stuntrooper = {
  code             : 'stuntrooper',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 11 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Stormtrooper',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/stormtrooper',
  weapon           : WEAPONS.STUN,
  weaponOffsetDown : [0, 6],
  weaponOffsetLeft : [4, 0],
  weaponOffsetRight: [6, 0],
  weaponOffsetUp   : [0, 4],
  width            : 10 * 9 * MAGNIFICATION
};

export const tarkin = {
  code          : 'tarkin',
  frameHeight   : 11 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  height        : 11 * 5 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Grand Moff Tarkin',
  isPropulsive  : false,
  speed         : 4,
  sprite        : 'characters/tarkin',
  weapon        : null,
  width         : 10 * 9 * MAGNIFICATION
};

export const tauntaun = {
  code          : 'tauntaun',
  frameHeight   : 12 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  height        : 12 * 5 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Tauntaun',
  isPropulsive  : false,
  speed         : 10,
  sprite        : 'characters/tauntaun',
  weapon        : WEAPONS.BOMB,
  width         : 10 * 9 * MAGNIFICATION
};

export const threebee = {
  code          : 'threebee',
  death         : ANIMATIONS.SPRITZ,
  frameHeight   : 11 * MAGNIFICATION,
  frameWidth    : 8 * MAGNIFICATION,
  height        : 11 * 4 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : '3B6-RA-7',
  isPropulsive  : false,
  speed         : 5,
  sprite        : 'characters/threebee',
  weapon        : null,
  width         : 8 * 9 * MAGNIFICATION
};

export const threepio = {
  code          : 'threepio',
  death         : {
    frameCount : 14,
    frameHeight: 10 * MAGNIFICATION,
    frameWidth : 8 * MAGNIFICATION,
    name       : 'threepiodeath',
    isRemove   : false
  },
  frameHeight   : 10 * MAGNIFICATION,
  frameWidth    : 8 * MAGNIFICATION,
  height        : 10 * 4 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'C-3PO',
  isPropulsive  : false,
  speed         : 5,
  sprite        : 'characters/threepio',
  weapon        : null,
  width         : 8 * 9 * MAGNIFICATION
};

export const tiepilot = {
  code             : 'tiepilot',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 11 * 5 * MAGNIFICATION,
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
  weaponOffsetUp   : [2, 0],
  width            : 10 * 9 * MAGNIFICATION
};

export const tusken = {
  code             : 'tusken',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 11 * 5 * MAGNIFICATION,
  moveFrameCount   : 4,
  name             : 'Tusken Raider',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/tusken',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [3, 9],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [7, 0],
  width            : 10 * 5 * MAGNIFICATION
};

export const typho = {
  code             : 'typho',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 11 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Captain Typho',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/typho',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.BLUE,
  weaponOffsetDown : [3, 8],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [7, 0],
  width            : 10 * 9 * MAGNIFICATION
};

export const uncleowen = {
  code          : 'uncleowen',
  death         : {
    frameCount:  10,
    frameHeight: 12 * MAGNIFICATION,
    frameWidth:  10 * MAGNIFICATION,
    name:        'uncleowendeath',
    isRemove:    false
  },
  frameHeight   : 12 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  height        : 12 * 4 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Uncle Owen',
  isPropulsive  : false,
  speed         : 6,
  sprite        : 'characters/uncleowen',
  weapon        : WEAPONS.BOMB,
  width         : 10 * 9 * MAGNIFICATION
};

export const vallorum = {
  code          : 'vallorum',
  frameHeight   : 11 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  height        : 11 * 5 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Chancellor Vallorum',
  isPropulsive  : false,
  speed         : 4,
  sprite        : 'characters/vallorum',
  weapon        : null,
  width         : 10 * 9 * MAGNIFICATION
};

export const weequay = {
  code             : 'weequay',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 11 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Weequay',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/weequay',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [3, 8],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [7, 0],
  width            : 10 * 9 * MAGNIFICATION
};

export const xwingpilot = {
  code             : 'xwingpilot',
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 11 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'X-wing Pilot',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/xwingpilot',
  weapon           : WEAPONS.LASER,
  weaponColor      : COLORS.RED,
  weaponOffsetDown : [3, 7],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [6, 0],
  width            : 10 * 9 * MAGNIFICATION
};

export const yoda = {
  code             : 'yoda',
  frameHeight      : 10 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  height           : 10 * 5 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Yoda',
  isPropulsive     : false,
  speed            : 4,
  sprite           : 'characters/yoda',
  weapon           : WEAPONS.LIGHTSABER,
  weaponColor      : COLORS.GREEN,
  weaponOffsetDown : [1, 9],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [9, 4],
  weaponOffsetUp   : [7, 2],
  width            : 10 * 10 * MAGNIFICATION
};
