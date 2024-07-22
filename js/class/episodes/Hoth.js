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

export const HOTH = {
    bg: BACKGROUNDS.SNOW,
    bosses: [
      {
        character: CHARACTERS.mousedroid, // add wampa
        details: {
          dir       : null,
          hp        : 2,
          spawnDelay: 1 * FPS
        }
      }
    ],
    character: CHARACTERS.luke5,
    cutscenes: [],
    enemiesOptional: [],
    enemiesRequiredData: {
      character    : CHARACTERS.tauntaun, // add probe droid
      count        : 10,
      dir          : null,
      hp           : 1,
      spawnInterval: 2 * FPS
    },
    friendlies: [],
    name: 'Hoth',
    neutrals: [],
    obstacles: [],
    password: undefined,
    textColor: COLORS.BLACK
  };
  