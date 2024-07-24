import * as CHARACTERS from '@/js/constants/characters.js';
import {
  COLORS,
  FPS,
} from '@/js/constants/config.js';
import { BACKGROUNDS } from '@/js/constants/backgrounds.js';
import { OBSTACLES } from '@/js/constants/obstacles.js';

export const MOISTURE_FARM = {
  bg: BACKGROUNDS.SAND,
  bosses: [
    {
      character: CHARACTERS.auntberu,
      details: {
        dir  : null,
        hp   : 1,
        spawnDelay: 1 * FPS
      }
    }
  ],
  character: CHARACTERS.sandtrooper,
  cutscenes: [],
  enemiesOptional: [],
  enemiesRequiredData: {
    character    : CHARACTERS.uncleowen,
    count        : 1,
    dir          : null,
    hp           : 1,
    spawnInterval: 0
  },
  friendlies: [],
  name: 'Moisture Farm',
  neutrals: [],
  obstacles: [
    {
      type: OBSTACLES.IGLOO,
      x   : 66,
      y   : 33
    }
  ],
  password: undefined,
  textColor: COLORS.BLACK
};
