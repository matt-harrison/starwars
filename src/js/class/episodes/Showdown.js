import * as CHARACTERS from '@/js/constants/characters.js';
import {
  COLORS,
  FPS,
} from '@/js/constants/config.js';
import { BACKGROUNDS } from '@/js/constants/backgrounds.js';

export const SHOWDOWN = {
  bg: BACKGROUNDS.DEATH_STAR,
  bosses: [
    {
      character: CHARACTERS.ben,
      details: {
        dir       : null,
        hp        : 1,
        spawnDelay: 1 * FPS
      }
    }
  ],
  character: CHARACTERS.darthvader,
  cutscenes: [],
  enemiesOptional: [],
  enemiesRequiredData: {
    character    : CHARACTERS.stormtrooper,
    count        : 0,
    dir          : null,
    hp           : 1,
    spawnInterval: null
  },
  friendlies: [],
  name: 'Showdown',
  neutrals: [],
  obstacles: [],
  password: undefined,
  textColor: COLORS.BLACK
};
