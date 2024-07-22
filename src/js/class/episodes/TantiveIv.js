import * as CHARACTERS from '@/js/constants/characters.js';
import {
  CARDINALS,
  COLORS,
  FPS,
} from '@/js/constants/config.js';
import { BACKGROUNDS } from '@/js/constants/backgrounds.js';
import { SHIPS } from '@/js/constants/ships.js';

export const TANTIVE_IV = {
    bg: BACKGROUNDS.TANTIVE_IV,
    bosses: [
      {
        character: CHARACTERS.officerblack,
        details: {
          dir       : null,
          hp        : 2,
          spawnDelay: 1 * FPS
        }
      }
    ],
    character: CHARACTERS.rebel,
    cutscenes: [
      'preface',
      'episode4-destroyer'
    ],
    enemiesOptional: [],
    enemiesRequiredData: {
      character    : CHARACTERS.stormtrooper,
      count        : 10,
      dir          : CARDINALS.RIGHT,
      hp           : 1,
      spawnInterval: 2 * FPS
    },
    friendlies: [
      {
        character: CHARACTERS.threepio,
        details: {
          bounceLimit: 0,
          dir        : CARDINALS.DOWN,
          hp         : 1,
          spawnFrame : 3 * FPS
        }
      },
      {
        character: CHARACTERS.artoo,
        details: {
          bounceLimit: 0,
          dir        : CARDINALS.DOWN,
          hp         : 1,
          spawnFrame : 5 * FPS
        }
      }
    ],
    name: 'Tantive IV',
    neutrals: [],
    obstacles: [],
    password: undefined,
    textColor: COLORS.BLACK
  };
  