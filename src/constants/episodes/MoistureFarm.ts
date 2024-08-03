import * as CHARACTERS from '@/constants/Characters.ts';
import {
  COLORS,
  FPS,
} from '@/constants/Config.ts';
import { BACKGROUNDS } from '@/constants/Backgrounds.ts';
import { OBSTACLES } from '@/constants/Obstacles.ts';

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
