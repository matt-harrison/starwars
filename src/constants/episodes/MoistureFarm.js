import * as CHARACTERS from '@/constants/Characters.js';
import {
  COLORS,
  FPS,
} from '@/constants/Config.js';
import { BACKGROUNDS } from '@/constants/Backgrounds.js';
import { OBSTACLES } from '@/constants/Obstacles.js';

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
