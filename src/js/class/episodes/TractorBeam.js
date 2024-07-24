import * as CHARACTERS from '@/js/constants/characters.js';
import {
  CARDINALS,
  COLORS,
  FPS,
} from '@/js/constants/config.js';
import { BACKGROUNDS } from '@/js/constants/backgrounds.js';
import { OBSTACLES } from '@/js/constants/obstacles.js';

export const TRACTOR_BEAM = {
  bg: BACKGROUNDS.DEATH_STAR,
  bosses: [
    {
      character: CHARACTERS.darthvader,
      details: {
        dir       : null,
        hp        : 3,
        spawnDelay: 1 * FPS
      }
    }
  ],
  character: CHARACTERS.ben,
  cutscenes: [],
  enemiesOptional: [],
  enemiesRequiredData: {
    character    : CHARACTERS.stormtrooper,
    count        : 10,
    dir          : CARDINALS.RIGHT,
    hp           : 1,
    spawnInterval: 2 * FPS
  },
  friendlies: [],
  name: 'Tractor Beam',
  neutrals: [],
  obstacles: [
    {
      type: OBSTACLES.GENERATOR,
      x   : 50,
      y   : 0
    }
  ],
  password: undefined,
  textColor: COLORS.BLACK
};
