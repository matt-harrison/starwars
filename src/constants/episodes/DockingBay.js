import * as CHARACTERS from '@/constants/Characters.js';
import {
  COLORS,
  FPS,
  INFINITY
} from '@/constants/Config.js';
import { BACKGROUNDS } from '@/constants/Backgrounds.js';
import { OBSTACLES } from '@/constants/Obstacles.js';

export const DOCKING_BAY = {
  bg: BACKGROUNDS.DUST,
  bosses: [
    {
      character: CHARACTERS.garindan,
      details: {
        dir       : null,
        hp        : 2,
        spawnDelay: 1 * FPS
      }
    }
  ],
  character: CHARACTERS.hansolo,
  cutscenes: [],
  enemiesOptional: [
    {
      character: CHARACTERS.jabba,
      details: {
        bounceLimit: INFINITY,
        dir        : null,
        hp         : 5,
        spawnFrame : 30 * FPS
      }
    }
  ],
  enemiesRequiredData: {
    character    : CHARACTERS.sandtrooper,
    count        : 10,
    dir          : null,
    hp           : 1,
    spawnInterval: 2 * FPS
  },
  friendlies: [],
  name: 'Docking Bay 94',
  obstacles: [
    {
      type: OBSTACLES.FALCON,
      x   : 100,
      y   : 0
    }
  ],
  password: undefined,
  textColor: COLORS.BLACK
};
