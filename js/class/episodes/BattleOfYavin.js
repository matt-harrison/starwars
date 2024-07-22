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

export const BATTLE_OF_YAVIN = {
  bg: BACKGROUNDS.SPACE,
  bosses: [
    {
      character: SHIPS.TIE,
      details: {
        dir       : CARDINALS.DOWN,
        hp        : 1,
        spawnDelay: 2 * FPS
      }
    },
    {
      character: SHIPS.TIE,
      details: {
        dir       : CARDINALS.DOWN,
        hp        : 1,
        spawnDelay: 2 * FPS
      }
    },
    {
      character: SHIPS.TIE_ADVANCED,
      details: {
        dir       : CARDINALS.DOWN,
        hp        : 3,
        spawnDelay: 2.25 * FPS
      }
    }
  ],
  character: SHIPS.FALCON,
  cutscenes: [],
  enemiesOptional: [],
  enemiesRequiredData: {
    character    : null,
    count        : 0,
    dir          : null,
    hp           : null,
    spawnInterval: null
  },
  friendlies: [
    {
      character: SHIPS.XWING,
      details: {
        bounceLimit: 0,
        dir        : CARDINALS.UP,
        hp         : 1,
        spawnFrame : 10 * FPS
      }
    },
    {
      character: SHIPS.XWING,
      details: {
        bounceLimit: 0,
        dir        : CARDINALS.UP,
        hp         : 1,
        spawnFrame : 10 * FPS
      }
    },
    {
      character: SHIPS.XWING,
      details: {
        bounceLimit: 0,
        dir        : CARDINALS.UP,
        hp         : 1,
        spawnFrame : 10 * FPS
      }
    }
  ],
  name: 'The Battle of Yavin',
  neutrals: [],
  obstacles: [],
  password: undefined,
  textColor: COLORS.YELLOW
};
