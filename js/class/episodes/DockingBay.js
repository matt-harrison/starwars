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
