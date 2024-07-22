import * as CHARACTERS from '@/js/constants/characters.js';
import {
  CARDINALS,
  COLORS,
  FPS,
  INFINITY
} from '@/js/constants/config.js';
import { BACKGROUNDS } from '@/js/constants/backgrounds.js';
import { OBSTACLES } from '@/js/constants/obstacles.js';
import { SHIPS } from '@/js/constants/ships.js';

export const ASSAULT_ON_DEATH_STAR = {
  bg: BACKGROUNDS.SPACE,
  bosses: [
    {
      character: SHIPS.DEATH_STAR,
      details: {
        dir       : null,
        hp        : 10,
        spawnDelay: 1 * FPS
      }
    }
  ],
  character: SHIPS.XWING,
  cutscenes: [],
  enemiesOptional: [],
  enemiesRequiredData: {
    character    : null,
    count        : 0,
    dir          : null,
    hp           : null,
    spawnInterval: null
  },
  friendlies: [],
  name: 'Death Star',
  neutrals: [],
  obstacles: [],
  password: undefined,
  textColor: COLORS.YELLOW
};
