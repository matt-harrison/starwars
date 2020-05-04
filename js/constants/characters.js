import { fps, magnification } from '/js/constants/config.js';
import * as animations        from '/js/constants/animations.js';
import { COLORS }             from '/js/constants/colors.js';
import * as projectiles       from '/js/constants/projectiles.js';

export const ackbar = {
  name: 'Admiral Ackbar',
  sprite: 'ackbar',
  ship: false,
  weaponType: 'projectile',
  projectile: 'laser',
  weaponColor: COLORS.GREEN,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [7, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 8],
  width: 90 * magnification,
  height: 60 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 12 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const amidala = {
  name: 'Queen Amidala',
  sprite: 'amidala',
  ship: false,
  weaponType: 'projectile',
  projectile: 'laser',
  weaponColor: COLORS.GREEN,
  weaponOffsetLeft: [0, 5],
  weaponOffsetUp: [7, 0],
  weaponOffsetRight: [10, 5],
  weaponOffsetDown: [3, 9],
  width: 90 * magnification,
  height: 60 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 12 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const ani = {
  name: 'Ani',
  sprite: 'ani',
  ship: false,
  weaponType: 'bomb',
  weaponOffset: [3, 9],
  width: 63 * magnification,
  height: 50 * magnification,
  frameWidth: 7 * magnification,
  frameHeight: 10 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const artoo = {
  name: 'R2-D2',
  sprite: 'artoo',
  ship: false,
  weaponType: 'bomb',
  weaponOffset: [3, 7],
  width: 14 * magnification,
  height: 40 * magnification,
  frameWidth: 7 * magnification,
  frameHeight: 8 * magnification,
  moveFrameCount: 1,
  speed: 10
};

export const arfive = {
  name: 'R5-D4',
  sprite: 'arfive',
  ship: false,
  death: {
    name: 'arfivedeath',
    frameWidth: 5 * magnification,
    frameHeight: 9 * magnification,
    frameCount: 6,
    remove: false
  },
  weaponType: 'bomb',
  weaponOffset: [3, 8],
  width: 10 * magnification,
  height: 36 * magnification,
  frameWidth: 5 * magnification,
  frameHeight: 9 * magnification,
  moveFrameCount: 1,
  speed: 6
};

export const atst = {
  name: 'AT-ST',
  sprite: 'atst',
  ship: false,
  weaponType: 'projectile',
  projectile: 'laser',
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [2, 5],
  weaponOffsetUp: [8, 0],
  weaponOffsetRight: [13, 5],
  weaponOffsetDown: [6, 8],
  width: 135 * magnification,
  height: 75 * magnification,
  frameWidth: 15 * magnification,
  frameHeight: 15 * magnification,
  moveFrameCount: 8,
  speed: 4
};

export const auntberu = {
  name: 'Aunt Beru',
  sprite: 'auntberu',
  ship: false,
  death: {
    name: 'auntberudeath',
    frameWidth: 10 * magnification,
    frameHeight: 12 * magnification,
    frameCount: 10,
    remove: false
  },
  weaponType: 'bomb',
  weaponOffset: [4, 10],
  width: 40 * magnification,
  height: 44 * magnification,
  frameWidth: 8 * magnification,
  frameHeight: 11 * magnification,
  moveFrameCount: 4,
  speed: 6
};

export const bantha = {
  name: 'Bantha',
  sprite: 'bantha',
  ship: false,
  weaponType: 'attack',
  width: 100 * magnification,
  height: 60 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 12 * magnification,
  moveFrameCount: 8,
  speed: 10
};

export const battledroid = {
  name: 'Battle Droid',
  sprite: 'battledroid',
  ship: false,
  weaponType: 'projectile',
  projectile: 'laser',
  weaponColor: COLORS.GREEN,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [6, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 8],
  width: 90 * magnification,
  height: 55 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 11 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const bb8 = {
  name: 'BB-8',
  sprite: 'bb8',
  ship: false,
  weaponType: 'bomb',
  weaponOffset: [3, 7],
  width: 45 * magnification,
  height: 35 * magnification,
  frameWidth: 5 * magnification,
  frameHeight: 7 * magnification,
  moveFrameCount: 8,
  speed: 10
};

export const ben = {
  name: 'Ben Kenobi',
  sprite: 'ben',
  ship: false,
  death: {
    name: 'bendeath',
    frameWidth: 10 * magnification,
    frameHeight: 12 * magnification,
    frameCount: 6,
    remove: false
  },
  weaponType: 'lightsaber',
  weaponColor: COLORS.BLUE,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [8, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [1, 10],
  width: 60 * magnification,
  height: 60 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 12 * magnification,
  moveFrameCount: 4,
  speed: 6
};

export const bikerscout = {
  name: 'Biker Scout',
  sprite: 'bikerscout',
  ship: false,
  weaponType: 'projectile',
  projectile: 'laser',
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [7, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 8],
  width: 90 * magnification,
  height: 55 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 11 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const bobafett = {
  name: 'Boba Fett',
  sprite: 'bobafett',
  ship: false,
  weaponType: 'projectile',
  projectile: 'laser',
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 5],
  weaponOffsetUp: [7, 1],
  weaponOffsetRight: [10, 5],
  weaponOffsetDown: [3, 9],
  width: 90 * magnification,
  height: 60 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 12 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const bossnass = {
  name: 'Boss Nass',
  sprite: 'bossnass',
  ship: false,
  weaponType: 'attack',
  width: 90 * magnification,
  height: 60 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 12 * magnification,
  moveFrameCount: 8,
  speed: 4
};

export const captainantilles = {
  name: 'Captain Antilles',
  sprite: 'captainantilles',
  ship: false,
  weaponType: 'projectile',
  projectile: 'laser',
  weaponColor: COLORS.GREEN,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [6, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 7],
  width: 90 * magnification,
  height: 55 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 11 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const carbonite = {
  name: 'Frozen Han Solo',
  sprite: 'carbonite',
  ship: false,
  weaponType: 'attack',
  width: 20 * magnification,
  height: 60 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 12 * magnification,
  moveFrameCount: 1,
  speed: 8
};

export const chewbacca = {
  name: 'Chewbacca',
  sprite: 'chewbacca',
  ship: false,
  weaponType: 'projectile',
  projectile: 'laser',
  weaponColor: COLORS.GREEN,
  weaponOffsetLeft: [0, 5],
  weaponOffsetUp: [7, 0],
  weaponOffsetRight: [10, 5],
  weaponOffsetDown: [3, 9],
  width: 90 * magnification,
  height: 60 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 12 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const chewbacca5 = {
  name: 'Chewbacca',
  sprite: 'chewbacca5',
  ship: false,
  weaponType: 'projectile',
  projectile: 'laser',
  weaponColor: COLORS.GREEN,
  weaponOffsetLeft: [0, 8],
  weaponOffsetUp: [8, 1],
  weaponOffsetRight: [11, 8],
  weaponOffsetDown: [4, 12],
  width: 108 * magnification,
  height: 75 * magnification,
  frameWidth: 12 * magnification,
  frameHeight: 15 * magnification,
  moveFrameCount: 8,
  speed: 6
};

export const clonecaptain = {
  name: 'Clone Captain',
  sprite: 'clonecaptain',
  ship: false,
  weaponType: 'projectile',
  projectile: 'laser',
  weaponColor: COLORS.BLUE,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [7, 1],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 8],
  width: 90 * magnification,
  height: 55 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 11 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const clonetrooper = {
  name: 'Clone Trooper',
  sprite: 'clonetrooper',
  ship: false,
  weaponType: 'projectile',
  projectile: 'laser',
  weaponColor: COLORS.BLUE,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [7, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 8],
  width: 90 * magnification,
  height: 55 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 11 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const coruscantguard = {
  name: 'Coruscant Guard',
  sprite: 'coruscantguard',
  ship: false,
  weaponType: 'projectile',
  projectile: 'laser',
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 5],
  weaponOffsetUp: [7, 1],
  weaponOffsetRight: [10, 5],
  weaponOffsetDown: [3, 9],
  width: 50 * magnification,
  height: 60 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 12 * magnification,
  moveFrameCount: 4,
  speed: 8
};

export const darthmaul = {
  name: 'Darth Maul',
  sprite: 'darthmaul',
  ship: false,
  weaponType: 'lightsaber',
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [8, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [1, 10],
  width: 100 * magnification,
  height: 60 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 12 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const darthvader = {
  name: 'Darth Vader',
  sprite: 'darthvader',
  ship: false,
  weaponType: 'lightsaber',
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 5],
  weaponOffsetUp: [8, 0],
  weaponOffsetRight: [10, 3],
  weaponOffsetDown: [1, 8],
  width: 100 * magnification,
  height: 60 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 12 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const darthvader5 = {
  name: 'Darth Vader',
  sprite: 'darthvader5',
  ship: false,
  weaponType: 'lightsaber',
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 5],
  weaponOffsetUp: [8, 0],
  weaponOffsetRight: [10, 3],
  weaponOffsetDown: [1, 8],
  width: 100 * magnification,
  height: 60 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 12 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const darthvader6 = {
  name: 'Darth Vader',
  sprite: 'darthvader6',
  ship: false,
  death: {
    name: 'darthvader6death',
    frameWidth: 10 * magnification,
    frameHeight: 12 * magnification,
    frameCount: 12,
    remove: false
  },
  weaponType: 'lightsaber',
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 5],
  weaponOffsetUp: [8, 0],
  weaponOffsetRight: [10, 3],
  weaponOffsetDown: [1, 8],
  width: 100 * magnification,
  height: 60 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 12 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const deathstartrooper = {
  name: 'Death Star Trooper',
  sprite: 'deathstartrooper',
  ship: false,
  weaponType: 'projectile',
  projectile: 'laser',
  weaponColor: COLORS.GREEN,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [7, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 7],
  width: 90 * magnification,
  height: 55 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 11 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const droideka = {
  name: 'Droideka',
  sprite: 'droideka',
  ship: false,
  weaponType: 'projectile',
  projectile: 'laser',
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 5],
  weaponOffsetUp: [7, 1],
  weaponOffsetRight: [10, 5],
  weaponOffsetDown: [2, 8],
  width: 90 * magnification,
  height: 60 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 12 * magnification,
  moveFrameCount: 8,
  speed: 12
};

export const emperor = {
  name: 'Emperor',
  sprite: 'emperor',
  ship: false,
  weaponType: 'bomb',
  width: 90 * magnification,
  height: 60 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 12 * magnification,
  moveFrameCount: 8,
  speed: 4
};

export const ewok = {
  name: 'Ewok',
  sprite: 'ewok',
  ship: false,
  weaponType: 'projectile',
  projectile: projectiles.rock,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [3, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 10],
  weaponDelay: fps / 2,
  width: 90 * magnification,
  height: 55 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 11 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const gamorrean = {
  name: 'Gamorrean Guard',
  sprite: 'gamorrean',
  ship: false,
  weaponType: 'attack',
  width: 90 * magnification,
  height: 60 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 12 * magnification,
  moveFrameCount: 8,
  speed: 6
};

export const garindan = {
  name: 'Garindan',
  sprite: 'garindan',
  ship: false,
  weaponType: 'projectile',
  projectile: 'laser',
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 5],
  weaponOffsetUp: [7, 1],
  weaponOffsetRight: [10, 5],
  weaponOffsetDown: [3, 9],
  width: 90 * magnification,
  height: 60 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 12 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const gonkdroid = {
  name: 'Gonk Droid',
  sprite: 'gonkdroid',
  ship: false,
  weaponType: 'bomb',
  weaponOffset: [4, 11],
  weaponDelay: fps / 2,
  width: 90 * magnification,
  height: 60 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 12 * magnification,
  moveFrameCount: 8,
  speed: 4
};

export const greedo = {
  name: 'Greedo',
  sprite: 'greedo',
  ship: false,
  weaponType: 'projectile',
  projectile: 'laser',
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [7, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 8],
  width: 90 * magnification,
  height: 55 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 11 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const gungan = {
  name: 'Gungan',
  sprite: 'gungan',
  ship: false,
  weaponType: 'projectile',
  projectile: projectiles.gunganBall,
  weaponOffsetLeft: [0, 3],
  weaponOffsetUp: [2, 0],
  weaponOffsetRight: [10, 3],
  weaponOffsetDown: [2, 12],
  width: 90 * magnification,
  height: 60 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 12 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const hansolo = {
  name: 'Han Solo',
  sprite: 'hansolo',
  ship: false,
  weaponType: 'projectile',
  projectile: 'laser',
  weaponColor: COLORS.GREEN,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [7, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 8],
  width: 90 * magnification,
  height: 55 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 11 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const hansolo5 = {
  name: 'Han Solo',
  sprite: 'hansolo5',
  ship: false,
  weaponType: 'projectile',
  projectile: 'laser',
  weaponColor: COLORS.GREEN,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [7, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 8],
  width: 90 * magnification,
  height: 55 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 11 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const imperialguard = {
  name: 'Imperial Guard',
  sprite: 'imperialguard',
  ship: false,
  weaponType: 'attack',
  width: 50 * magnification,
  height: 60 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 12 * magnification,
  moveFrameCount: 4,
  speed: 8
};

export const jabba = {
  name: 'Jabba the Hutt',
  sprite: 'jabba',
  ship: false,
  weaponType: 'attack',
  width: 90 * magnification,
  height: 55 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 11 * magnification,
  moveFrameCount: 8,
  speed: 4
};

export const jangofett = {
  name: 'Jango Fett',
  sprite: 'jangofett',
  ship: false,
  weaponType: 'projectile',
  projectile: 'laser',
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 5],
  weaponOffsetUp: [7, 1],
  weaponOffsetRight: [10, 5],
  weaponOffsetDown: [3, 9],
  width: 90 * magnification,
  height: 60 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 12 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const jarjar = {
  name: 'Jar Jar Binks',
  sprite: 'jarjar',
  ship: false,
  weaponType: 'projectile',
  projectile: projectiles.gunganBall,
  weaponOffsetLeft: [0, 3],
  weaponOffsetUp: [2, 0],
  weaponOffsetRight: [10, 3],
  weaponOffsetDown: [2, 12],
  width: 90 * magnification,
  height: 60 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 12 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const jawa = {
  name: 'Jawa',
  sprite: 'jawa',
  ship: false,
  weaponType: 'projectile',
  projectile: 'laser',
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [7, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 7],
  width: 50 * magnification,
  height: 50 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 10 * magnification,
  moveFrameCount: 4,
  speed: 8
};

export const kyloren = {
  name: 'Kylo Ren',
  sprite: 'kyloren',
  ship: false,
  weaponType: 'lightsaber',
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 5],
  weaponOffsetUp: [8, 0],
  weaponOffsetRight: [10, 3],
  weaponOffsetDown: [1, 8],
  width: 100 * magnification,
  height: 60 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 12 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const kylorenunmasked = {
  name: 'Kylo Ren',
  sprite: 'kylorenunmasked',
  ship: false,
  weaponType: 'lightsaber',
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 5],
  weaponOffsetUp: [8, 0],
  weaponOffsetRight: [10, 3],
  weaponOffsetDown: [1, 8],
  width: 100 * magnification,
  height: 60 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 12 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const lando = {
  name: 'Lando Calrissian',
  sprite: 'lando',
  ship: false,
  weaponType: 'projectile',
  projectile: 'laser',
  weaponColor: COLORS.GREEN,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [7, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 8],
  width: 90 * magnification,
  height: 55 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 11 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const leia = {
  name: 'Princess Leia',
  sprite: 'leia',
  ship: false,
  weaponType: 'projectile',
  projectile: 'laser',
  weaponColor: COLORS.GREEN,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [7, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 8],
  width: 90 * magnification,
  height: 55 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 11 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const leia6 = {
  name: 'Princess Leia',
  sprite: 'leia6',
  ship: false,
  weaponType: 'projectile',
  projectile: 'laser',
  weaponColor: COLORS.GREEN,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [7, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 8],
  width: 90 * magnification,
  height: 55 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 11 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const lobot = {
  name: 'Lobot',
  sprite: 'lobot',
  ship: false,
  weaponType: 'projectile',
  projectile: 'laser',
  weaponColor: COLORS.GREEN,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [7, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 8],
  width: 90 * magnification,
  height: 55 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 11 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const logray = {
  name: 'Logray',
  sprite: 'logray',
  ship: false,
  weaponType: 'projectile',
  projectile: projectiles.rock,
  width: 90 * magnification,
  height: 60 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 12 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const luke = {
  name: 'Luke Skywalker',
  sprite: 'luke',
  ship: false,
  weaponType: 'projectile',
  projectile: 'laser',
  weaponColor: COLORS.GREEN,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [7, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 8],
  width: 90 * magnification,
  height: 55 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 11 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const luke5 = {
  name: 'Luke Skywalker',
  sprite: 'luke5',
  ship: false,
  weaponType: 'projectile',
  projectile: 'laser',
  weaponColor: COLORS.GREEN,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [7, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 8],
  width: 90 * magnification,
  height: 55 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 11 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const luke6 = {
  name: 'Luke Skywalker',
  sprite: 'luke6',
  ship: false,
  weaponType: 'lightsaber',
  weaponColor: COLORS.GREEN,
  weaponOffsetLeft: [0, 3],
  weaponOffsetUp: [8, 1],
  weaponOffsetRight: [10, 3],
  weaponOffsetDown: [1, 9],
  width: 100 * magnification,
  height: 60 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 12 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const macewindu = {
  name: 'Mace Windu',
  sprite: 'macewindu',
  ship: false,
  weaponType: 'lightsaber',
  weaponColor: COLORS.PURPLE,
  weaponOffsetLeft: [0, 3],
  weaponOffsetUp: [8, 0],
  weaponOffsetRight: [10, 3],
  weaponOffsetDown: [1, 9],
  width: 100 * magnification,
  height: 55 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 11 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const mawhonic = {
  name: 'Mawhonic',
  sprite: 'mawhonic',
  ship: false,
  weaponType: 'projectile',
  projectile: 'laser',
  weaponColor: COLORS.BLUE,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [7, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 8],
  width: 90 * magnification,
  height: 55 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 11 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const mousedroid = {
  name: 'Mouse Droid',
  sprite: 'mousedroid',
  ship: false,
  death: animations.detonation,
  weaponType: 'bomb',
  weaponOffset: [4, 5],
  width: 16 * magnification,
  height: 32 * magnification,
  frameWidth: 8 * magnification,
  frameHeight: 8 * magnification,
  moveFrameCount: 1,
  speed: 12
};

export const naboopilot = {
  name: 'Naboo Pilot',
  sprite: 'naboopilot',
  ship: false,
  weaponType: 'projectile',
  projectile: 'laser',
  weaponColor: COLORS.BLUE,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [7, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 8],
  width: 90 * magnification,
  height: 55 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 11 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const nutegunray = {
  name: 'Nute Gunray',
  sprite: 'nutegunray',
  ship: false,
  weaponType: 'none',
  width: 50 * magnification,
  height: 60 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 12 * magnification,
  moveFrameCount: 4,
  speed: 5
};

export const obiwan = {
  name: 'Obi Wan Kenobi',
  sprite: 'obiwan',
  ship: false,
  weaponType: 'lightsaber',
  weaponColor: COLORS.BLUE,
  weaponOffsetLeft: [0, 3],
  weaponOffsetUp: [8, 0],
  weaponOffsetRight: [10, 3],
  weaponOffsetDown: [1, 10],
  width: 100 * magnification,
  height: 60 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 12 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const officerblack = {
  name: 'Imperial Officer',
  sprite: 'officerblack',
  ship: false,
  weaponType: 'projectile',
  projectile: 'laser',
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [7, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 8],
  width: 90 * magnification,
  height: 55 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 11 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const officergreen = {
  name: 'Imperial Officer',
  sprite: 'officergreen',
  ship: false,
  weaponType: 'projectile',
  projectile: 'laser',
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [7, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 8],
  width: 90 * magnification,
  height: 55 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 11 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const panaka = {
  name: 'Captain Panaka',
  sprite: 'panaka',
  ship: false,
  weaponType: 'projectile',
  projectile: 'laser',
  weaponColor: COLORS.BLUE,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [7, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 8],
  width: 90 * magnification,
  height: 55 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 11 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const pondababa = {
  name: 'Ponda Baba',
  sprite: 'pondababa',
  ship: false,
  weaponType: 'none',
  width: 90 * magnification,
  height: 60 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 12 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const protocolblack = {
  name: 'Protocol Droid',
  sprite: 'protocolblack',
  ship: false,
  weaponType: 'none',
  width: 72 * magnification,
  height: 50 * magnification,
  frameWidth: 8 * magnification,
  frameHeight: 10 * magnification,
  moveFrameCount: 8,
  speed: 5
};

export const protocolwhite = {
  name: 'Protocol Droid',
  sprite: 'protocolwhite',
  ship: false,
  weaponType: 'none',
  width: 72 * magnification,
  height: 50 * magnification,
  frameWidth: 8 * magnification,
  frameHeight: 10 * magnification,
  moveFrameCount: 8,
  speed: 5
};

export const quigonjinn = {
  name: 'Qui-Gon Jinn',
  sprite: 'quigonjinn',
  ship: false,
  weaponType: 'lightsaber',
  weaponColor: COLORS.GREEN,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [8, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [1, 10],
  width: 100 * magnification,
  height: 60 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 12 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const rancor = {
  name: 'Rancor',
  sprite: 'rancor',
  ship: false,
  weaponType: 'bomb',
  weaponOffset: [3, 7],
  width: 135 * magnification,
  height: 65 * magnification,
  frameWidth: 15 * magnification,
  frameHeight: 13 * magnification,
  moveFrameCount: 8,
  speed: 4
};

export const rebel = {
  name: 'Rebel',
  sprite: 'rebel',
  ship: false,
  weaponType: 'projectile',
  projectile: 'laser',
  weaponColor: COLORS.GREEN,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [6, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 7],
  width: 90 * magnification,
  height: 55 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 11 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const runehaako = {
  name: 'Rune Haako',
  sprite: 'runehaako',
  ship: false,
  weaponType: 'none',
  width: 50 * magnification,
  height: 60 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 12 * magnification,
  moveFrameCount: 4,
  speed: 5
};

export const sandtrooper = {
  name: 'Sandtrooper',
  ship: false,
  sprite: 'sandtrooper',
  weaponType: 'projectile',
  projectile: 'laser',
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [6, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 7],
  width: 90 * magnification,
  height: 55 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 11 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const sebulba = {
  name: 'Sebulba',
  ship: false,
  sprite: 'sebulba',
  weaponType: 'bomb',
  weaponOffset: [4, 9],
  width: 90 * magnification,
  height: 50 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 10 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const stormtrooper = {
  name: 'Stormtrooper',
  ship: false,
  sprite: 'stormtrooper',
  weaponType: 'projectile',
  projectile: 'laser',
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [6, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 7],
  width: 90 * magnification,
  height: 55 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 11 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const stormtrooperhan = {
  name: 'Han Solo',
  ship: false,
  sprite: 'stormtrooperhan',
  weaponType: 'projectile',
  projectile: 'laser',
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [6, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 7],
  width: 90 * magnification,
  height: 55 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 11 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const stormtrooperluke = {
  name: 'Luke Skywalker',
  ship: false,
  sprite: 'stormtrooperluke',
  weaponType: 'projectile',
  projectile: 'laser',
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [6, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 7],
  width: 90 * magnification,
  height: 55 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 11 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const stuntrooper = {
  name: 'Stormtrooper',
  ship: false,
  sprite: 'stormtrooper',
  weaponType: 'projectile',
  projectile: projectiles.stun,
  weaponOffsetLeft: [4, 0],
  weaponOffsetUp: [0, 4],
  weaponOffsetRight: [6, 0],
  weaponOffsetDown: [0, 6],
  weaponDelay: 2,
  width: 90 * magnification,
  height: 55 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 11 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const tarkin = {
  name: 'Grand Moff Tarkin',
  sprite: 'tarkin',
  ship: false,
  weaponType: 'none',
  width: 90 * magnification,
  height: 55 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 11 * magnification,
  moveFrameCount: 8,
  speed: 4
};

export const tauntaun = {
  name: 'Tauntaun',
  ship: false,
  sprite: 'tauntaun',
  weaponType: 'bomb',
  weaponOffset: [5, 11],
  width: 90 * magnification,
  height: 60 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 12 * magnification,
  moveFrameCount: 8,
  speed: 10
};

export const threebee = {
  name: '3B6-RA-7',
  sprite: 'threebee',
  ship: false,
  death: animations.spritz,
  weaponType: 'none',
  width: 72 * magnification,
  height: 55 * magnification,
  frameWidth: 8 * magnification,
  frameHeight: 11 * magnification,
  moveFrameCount: 8,
  speed: 5
};

export const threepio = {
  name: 'C-3PO',
  sprite: 'threepio',
  ship: false,
  weaponType: 'none',
  width: 72 * magnification,
  height: 50 * magnification,
  frameWidth: 8 * magnification,
  frameHeight: 10 * magnification,
  moveFrameCount: 8,
  speed: 5
};

export const tiepilot = {
  name: 'TIE Fighter Pilot',
  ship: false,
  sprite: 'tiepilot',
  weaponType: 'projectile',
  projectile: 'laser',
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 5],
  weaponOffsetUp: [2, 0],
  weaponOffsetRight: [10, 5],
  weaponOffsetDown: [9, 9],
  width: 90 * magnification,
  height: 55 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 11 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const tusken = {
  name: 'Tusken Raider',
  ship: false,
  sprite: 'tusken',
  weaponType: 'projectile',
  projectile: 'laser',
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [7, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 9],
  width: 50 * magnification,
  height: 55 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 11 * magnification,
  moveFrameCount: 4,
  speed: 8
};

export const typho = {
  name: 'Captain Typho',
  ship: false,
  sprite: 'typho',
  weaponType: 'projectile',
  projectile: 'laser',
  weaponColor: COLORS.BLUE,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [7, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 8],
  width: 90 * magnification,
  height: 55 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 11 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const uncleowen = {
  name: 'Uncle Owen',
  sprite: 'uncleowen',
  ship: false,
  death: {
  name: 'uncleowendeath',
    frameWidth: 10 * magnification,
    frameHeight: 12 * magnification,
    frameCount: 10,
    remove: false
  },
  weaponType: 'bomb',
  weaponOffset: [4, 11],
  weaponDelay: fps / 2,
  width: 90 * magnification,
  height: 48 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 12 * magnification,
  moveFrameCount: 8,
  speed: 6
};

export const vallorum = {
  name: 'Chancellor Vallorum',
  sprite: 'vallorum',
  ship: false,
  weaponType: 'none',
  width: 90 * magnification,
  height: 55 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 11 * magnification,
  moveFrameCount: 8,
  speed: 4
};

export const weequay = {
  name: 'Weequay',
  ship: false,
  sprite: 'weequay',
  weaponType: 'projectile',
  projectile: 'laser',
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [7, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 8],
  width: 90 * magnification,
  height: 55 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 11 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const xwingpilot = {
  name: 'X-wing Pilot',
  ship: false,
  sprite: 'xwingpilot',
  weaponType: 'projectile',
  projectile: 'laser',
  weaponColor: COLORS.RED,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [6, 0],
  weaponOffsetRight: [10, 4],
  weaponOffsetDown: [3, 7],
  width: 90 * magnification,
  height: 55 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 11 * magnification,
  moveFrameCount: 8,
  speed: 8
};

export const yoda = {
  name: 'Yoda',
  sprite: 'yoda',
  ship: false,
  weaponType: 'lightsaber',
  weaponColor: COLORS.GREEN,
  weaponOffsetLeft: [0, 4],
  weaponOffsetUp: [7, 2],
  weaponOffsetRight: [9, 4],
  weaponOffsetDown: [1, 9],
  width: 100 * magnification,
  height: 50 * magnification,
  frameWidth: 10 * magnification,
  frameHeight: 10 * magnification,
  moveFrameCount: 8,
  speed: 4
};