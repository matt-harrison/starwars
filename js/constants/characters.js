import { ANIMATIONS }                 from '/js/constants/animations.js';
import { COLORS, FPS, MAGNIFICATION } from '/js/constants/config.js';
import { WEAPONS }               from '/js/constants/weapons.js';

export const ackbar = {
  code             : 'ackbar',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [7, 0]
};

export const amidala = {
  code             : 'amidala',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [7, 0]
};

export const ani = {
  code          : 'ani',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight   : 10 * MAGNIFICATION,
  frameWidth    : 7 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Ani',
  isPropulsive  : false,
  speed         : 8,
  sprite        : 'characters/ani',
  weapon        : WEAPONS.BOMB
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
  frameCounts: {
    x: 2,
    y: 4
  },
  frameHeight   : 9 * MAGNIFICATION,
  frameWidth    : 5 * MAGNIFICATION,
  moveFrameCount: 1,
  name          : 'R5-D4',
  isPropulsive  : false,
  speed         : 6,
  sprite        : 'characters/arfive',
  weapon        : WEAPONS.BOMB
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
  frameCounts: {
    x: 2,
    y: 4
  },
  frameHeight   : 8 * MAGNIFICATION,
  frameWidth    : 5 * MAGNIFICATION,
  moveFrameCount: 1,
  name          : 'R2-D2',
  isPropulsive  : false,
  speed         : 10,
  sprite        : 'characters/artoo',
  weapon        : WEAPONS.BOMB
};

export const atst = {
  code             : 'atst',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight      : 15 * MAGNIFICATION,
  frameWidth       : 15 * MAGNIFICATION,
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
  weaponOffsetUp   : [8, 0]
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
  frameCounts: {
    x: 5,
    y: 4
  },
  frameHeight   : 11 * MAGNIFICATION,
  frameWidth    : 8 * MAGNIFICATION,
  moveFrameCount: 4,
  name          : 'Aunt Beru',
  isPropulsive  : false,
  speed         : 6,
  sprite        : 'characters/auntberu',
  weapon        : WEAPONS.BOMB
};

export const bantha = {
  code          : 'bantha',
  frameCounts: {
    x: 10,
    y: 5
  },
  frameHeight   : 12 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Bantha',
  isPropulsive  : false,
  speed         : 10,
  sprite        : 'characters/bantha',
  weapon        : WEAPONS.BOMB
};

export const battledroid = {
  code             : 'battledroid',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [6, 0]
};

export const bb8 = {
  code          : 'bb8',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight   : 7 * MAGNIFICATION,
  frameWidth    : 5 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'BB-8',
  isPropulsive  : false,
  speed         : 10,
  sprite        : 'characters/bb8',
  weapon        : WEAPONS.BOMB
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
  frameCounts: {
    x: 6,
    y: 4
  },
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [8, 0]
};

export const bikerscout = {
  code             : 'bikerscout',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [7, 0]
};

export const bobafett = {
  code             : 'bobafett',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [7, 1]
};

export const bossnass = {
  code             : 'bossnass',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Boss Nass',
  isPropulsive     : false,
  speed            : 4,
  sprite           : 'characters/bossnass',
  weapon           : WEAPONS.GUNGAN_BALL,
  weaponOffsetDown : [2, 12],
  weaponOffsetLeft : [0,  3],
  weaponOffsetRight: [10, 3],
  weaponOffsetUp   : [2,  0]
};

export const captainantilles = {
  code             : 'captainantilles',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [6, 0]
};

export const carbonite = {
  code          : 'carbonite',
  frameCounts: {
    x: 2,
    y: 5
  },
  frameHeight   : 12 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  moveFrameCount: 1,
  name          : 'Frozen Han Solo',
  isPropulsive  : false,
  speed         : 8,
  sprite        : 'characters/carbonite',
  weapon        : WEAPONS.BOMB
};

export const chewbacca = {
  code             : 'chewbacca',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [7, 0]
};

export const chewbacca5 = {
  code             : 'chewbacca5',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight      : 15 * MAGNIFICATION,
  frameWidth       : 12 * MAGNIFICATION,
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
  weaponOffsetUp   : [8, 1]
};

export const clonecaptain = {
  code             : 'clonecaptain',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [7, 1]
};

export const clonetrooper = {
  code             : 'clonetrooper',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [7, 0]
};

export const coruscantguard = {
  code             : 'coruscantguard',
  frameCounts: {
    x: 5,
    y: 5
  },
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [7, 1]
};

export const darthmaul = {
  code             : 'darthmaul',
  frameCounts: {
    x: 10,
    y: 5
  },
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [8, 0]
};

export const darthvader = {
  code             : 'darthvader',
  death            : {
    frameCount : 4,
    frameHeight: 12 * MAGNIFICATION,
    frameWidth : 10 * MAGNIFICATION,
    name       : 'darthvaderdeath',
    isRemove   : false
  },
  frameCounts: {
    x: 10,
    y: 4
  },
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [8, 0]
};

export const darthvader5 = {
  code             : 'darthvader5',
  death            : {
    frameCount : 15,
    frameHeight: 17 * MAGNIFICATION,
    frameWidth : 12 * MAGNIFICATION,
    name       : 'darthvader5death',
    isRemove   : false
  },
  frameCounts: {
    x: 10,
    y: 4
  },
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [8, 0]
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
  frameCounts: {
    x: 10,
    y: 4
  },
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [8, 0]
};

export const deathstartrooper = {
  code             : 'deathstartrooper',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [7, 0]
};

export const droideka = {
  code             : 'droideka',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [7, 1]
};

export const emperor = {
  code          : 'emperor',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight   : 12 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Emperor',
  isPropulsive  : false,
  speed         : 4,
  sprite        : 'characters/emperor',
  weapon        : WEAPONS.BOMB
};

export const ewok = {
  code             : 'ewok',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Ewok',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/ewok',
  weapon           : WEAPONS.ROCK,
  weaponOffsetDown : [3, 10],
  weaponOffsetLeft : [0, 4],
  weaponOffsetRight: [10, 4],
  weaponOffsetUp   : [3, 0]
};

export const gamorrean = {
  code          : 'gamorrean',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight   : 12 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Gamorrean Guard',
  isPropulsive  : false,
  speed         : 6,
  sprite        : 'characters/gamorrean',
  weapon        : WEAPONS.BOMB
};

export const garindan = {
  code             : 'garindan',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [8, 1]
};

export const gonkdroid = {
  code          : 'gonkdroid',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight   : 12 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Gonk Droid',
  isPropulsive  : false,
  speed         : 4,
  sprite        : 'characters/gonkdroid',
  weapon        : WEAPONS.BOMB
};

export const greedo = {
  code             : 'greedo',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [7, 0]
};

export const gungan = {
  code             : 'gungan',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Gungan',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/gungan',
  weapon           : WEAPONS.GUNGAN_BALL,
  weaponOffsetDown : [2, 12],
  weaponOffsetLeft : [0, 3],
  weaponOffsetRight: [10, 3],
  weaponOffsetUp   : [2, 0]
};

export const hansolo = {
  code             : 'hansolo',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [7, 0]
};

export const hansolo5 = {
  code             : 'hansolo5',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [7, 0]
};

export const imperialguard = {
  code          : 'imperialguard',
  frameCounts: {
    x: 5,
    y: 5
  },
  frameHeight   : 12 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  moveFrameCount: 4,
  name          : 'Imperial Guard',
  isPropulsive  : false,
  speed         : 8,
  sprite        : 'characters/imperialguard',
  weapon        : WEAPONS.BOMB
};

export const jabba = {
  code          : 'jabba',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight   : 11 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Jabba the Hutt',
  isPropulsive  : false,
  speed         : 4,
  sprite        : 'characters/jabba',
  weapon        : WEAPONS.BOMB
};

export const jangofett = {
  code             : 'jangofett',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [7, 1]
};

export const jarjar = {
  code             : 'jarjar',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Jar Jar Binks',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/jarjar',
  weapon           : WEAPONS.GUNGAN_BALL,
  weaponOffsetDown : [2, 12],
  weaponOffsetLeft : [0, 3],
  weaponOffsetRight: [10, 3],
  weaponOffsetUp   : [2, 0]
};

export const jawa = {
  code             : 'jawa',
  frameCounts: {
    x: 5,
    y: 5
  },
  frameHeight      : 10 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [7, 0]
};

export const kyloren = {
  code             : 'kyloren',
  frameCounts: {
    x: 10,
    y: 5
  },
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [8, 0]
};

export const kylorenunmasked = {
  code             : 'kylorenunmasked',
  frameCounts: {
    x: 10,
    y: 5
  },
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [8, 0]
};

export const lando = {
  code             : 'lando',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [7, 0]
};

export const leia = {
  code             : 'leia',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [7, 0]
};

export const leia6 = {
  code             : 'leia6',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [7, 0]
};

export const lobot = {
  code             : 'lobot',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [7, 0]
};

export const logray = {
  code          : 'logray',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight   : 12 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Logray',
  isPropulsive  : false,
  speed         : 8,
  sprite        : 'characters/logray',
  weapon        : WEAPONS.ROCK
};

export const luke = {
  code             : 'luke',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [7, 0]
};

export const luke5 = {
  code             : 'luke5',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [7, 0]
};

export const luke6 = {
  code             : 'luke6',
  frameCounts: {
    x: 10,
    y: 5
  },
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [8, 1]
};

export const macewindu = {
  code             : 'macewindu',
  frameCounts: {
    x: 10,
    y: 5
  },
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [8, 0]
};

export const mawhonic = {
  code             : 'mawhonic',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [7, 0]
};

export const mousedroid = {
  code          : 'mousedroid',
  death         : ANIMATIONS.DETONATION,
  frameCounts: {
    x: 2,
    y: 4
  },
  frameHeight   : 8 * MAGNIFICATION,
  frameWidth    : 8 * MAGNIFICATION,
  moveFrameCount: 1,
  name          : 'Mouse Droid',
  isPropulsive  : false,
  speed         : 12,
  sprite        : 'characters/mousedroid',
  weapon        : WEAPONS.BOMB
};

export const naboopilot = {
  code             : 'naboopilot',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [7, 0]
};

export const nutegunray = {
  code          : 'nutegunray',
  frameCounts: {
    x: 5,
    y: 5
  },
  frameHeight   : 12 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  moveFrameCount: 4,
  name          : 'Nute Gunray',
  isPropulsive  : false,
  speed         : 5,
  sprite        : 'characters/nutegunray',
  weapon        : null
};

export const obiwan = {
  code             : 'obiwan',
  frameCounts: {
    x: 10,
    y: 5
  },
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [8, 0]
};

export const officerblack = {
  code             : 'officerblack',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [7, 0]
};

export const officergreen = {
  code             : 'officergreen',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [7, 0]
};

export const panaka = {
  code             : 'panaka',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [7, 0]
};

export const pondababa = {
  code          : 'pondababa',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight   : 12 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Ponda Baba',
  isPropulsive  : false,
  speed         : 8,
  sprite        : 'characters/pondababa',
  weapon        : null
};

export const protocolblack = {
  code          : 'protocolblack',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight   : 10 * MAGNIFICATION,
  frameWidth    : 8 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Protocol Droid',
  isPropulsive  : false,
  speed         : 5,
  sprite        : 'characters/protocolblack',
  weapon        : null
};

export const protocolwhite = {
  code          : 'protocolwhite',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight   : 10 * MAGNIFICATION,
  frameWidth    : 8 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Protocol Droid',
  isPropulsive  : false,
  speed         : 5,
  sprite        : 'characters/protocolwhite',
  weapon        : null
};

export const quigonjinn = {
  code             : 'quigonjinn',
  frameCounts: {
    x: 10,
    y: 5
  },
  frameHeight      : 12 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [8, 0]
};

export const rancor = {
  code          : 'rancor',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight   : 13 * MAGNIFICATION,
  frameWidth    : 15 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Rancor',
  isPropulsive  : false,
  speed         : 4,
  sprite        : 'characters/rancor',
  weapon        : WEAPONS.BOMB
};

export const rebel = {
  code             : 'rebel',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [6, 0]
};

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

export const sandtrooper = {
  code             : 'sandtrooper',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [6, 0]
};

export const sebulba = {
  code          : 'sebulba',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight   : 10 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Sebulba',
  isPropulsive  : false,
  speed         : 8,
  sprite        : 'characters/sebulba',
  weapon        : WEAPONS.BOMB
};

export const stormtrooper = {
  code             : 'stormtrooper',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [6, 0]
};

export const stormtrooperhan = {
  code             : 'stormtrooperhan',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [6, 0]
};

export const stormtrooperluke = {
  code             : 'stormtrooperluke',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [6, 0]
};

export const stuntrooper = {
  code             : 'stuntrooper',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
  moveFrameCount   : 8,
  name             : 'Stormtrooper',
  isPropulsive     : false,
  speed            : 8,
  sprite           : 'characters/stormtrooper',
  weapon           : WEAPONS.STUN,
  weaponOffsetDown : [0, 6],
  weaponOffsetLeft : [4, 0],
  weaponOffsetRight: [6, 0],
  weaponOffsetUp   : [0, 4]
};

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

export const tauntaun = {
  code          : 'tauntaun',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight   : 12 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Tauntaun',
  isPropulsive  : false,
  speed         : 10,
  sprite        : 'characters/tauntaun',
  weapon        : WEAPONS.BOMB
};

export const threebee = {
  code          : 'threebee',
  death         : ANIMATIONS.SPRITZ,
  frameCounts: {
    x: 9,
    y: 4
  },
  frameHeight   : 11 * MAGNIFICATION,
  frameWidth    : 8 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : '3B6-RA-7',
  isPropulsive  : false,
  speed         : 5,
  sprite        : 'characters/threebee',
  weapon        : null
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
  weapon        : null,
  frameCounts: {
    x: 9,
    y: 4
  },
  frameHeight   : 10 * MAGNIFICATION,
  frameWidth    : 8 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'C-3PO',
  isPropulsive  : false,
  speed         : 5,
  sprite        : 'characters/threepio'
};

export const tiepilot = {
  code             : 'tiepilot',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [2, 0]
};

export const tusken = {
  code             : 'tusken',
  frameCounts: {
    x: 5,
    y: 5
  },
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [7, 0]
};

export const typho = {
  code             : 'typho',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [7, 0]
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
  frameCounts: {
    x: 9,
    y: 4
  },
  frameHeight   : 12 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Uncle Owen',
  isPropulsive  : false,
  speed         : 6,
  sprite        : 'characters/uncleowen',
  weapon        : WEAPONS.BOMB
};

export const vallorum = {
  code          : 'vallorum',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight   : 11 * MAGNIFICATION,
  frameWidth    : 10 * MAGNIFICATION,
  moveFrameCount: 8,
  name          : 'Chancellor Vallorum',
  isPropulsive  : false,
  speed         : 4,
  sprite        : 'characters/vallorum',
  weapon        : null
};

export const weequay = {
  code             : 'weequay',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [7, 0]
};

export const xwingpilot = {
  code             : 'xwingpilot',
  frameCounts: {
    x: 9,
    y: 5
  },
  frameHeight      : 11 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [6, 0]
};

export const yoda = {
  code             : 'yoda',
  frameCounts: {
    x: 10,
    y: 5
  },
  frameHeight      : 10 * MAGNIFICATION,
  frameWidth       : 10 * MAGNIFICATION,
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
  weaponOffsetUp   : [7, 2]
};
