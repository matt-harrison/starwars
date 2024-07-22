import * as CHARACTERS from '../../constants/characters.js';
import {
  CARDINALS,
  COLORS,
  FPS,
  INFINITY
} from '../../constants/config.js';
import { BACKGROUNDS } from '../../constants/backgrounds.js';
import { OBSTACLES } from '../../constants/obstacles.js';
import { SHIPS } from '../../constants/ships.js';

export const SEARCH = {
  bg: BACKGROUNDS.SAND,
  bosses: [
    {
      character: CHARACTERS.bantha,
      details: {
        dir       : null,
        hp        : 2,
        spawnDelay: 1 * FPS
      }
    }
  ],
  character: CHARACTERS.luke,
  cutscenes: [
    'episode4-jawas',
    'episode4-hologram',
    'episode4-binoculars'
  ],
  enemiesOptional: [],
  enemiesRequiredData: {
    character    : CHARACTERS.tusken,
    count        : 10,
    dir          : CARDINALS.RIGHT,
    hp           : 1,
    spawnInterval: 1.5 * FPS
  },
  friendlies: [
    {
      character: CHARACTERS.threepio,
      details: {
        bounceLimit: 0,
        dir        : CARDINALS.DOWN,
        hp         : 1,
        spawnFrame : 10.5 * FPS
      }
    },
    {
      character: CHARACTERS.artoo,
      details: {
        bounceLimit: 0,
        dir        : CARDINALS.DOWN,
        hp         : 1,
        spawnFrame : 12.5 * FPS
      }
    }
  ],
  name: 'Search',
  neutrals: [],
  obstacles: [
    {
      type: OBSTACLES.SPEEDER,
      x: 33,
      y: 33
    }
  ],
  password: undefined,
  textColor: COLORS.BLACK
};