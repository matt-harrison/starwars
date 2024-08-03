import * as CHARACTERS from '@/constants/Characters.js';
import {
  COLORS,
  FPS,
} from '@/constants/Config.js';
import { BACKGROUNDS } from '@/constants/Backgrounds.js';

export const ENDOR = {
    bg: BACKGROUNDS.GRASS,
    bosses: [
      {
        character: CHARACTERS.atst,
        details: {
          dir       : null,
          hp        : 2,
          spawnDelay: 1 * FPS
        }
      }
    ],
    character: CHARACTERS.ewok,
    cutscenes: [],
    enemiesOptional: [],
    enemiesRequiredData: {
      character    : CHARACTERS.stormtrooper,
      count        : 10,
      dir          : null,
      hp           : 1,
      spawnInterval: 2 * FPS
    },
    friendlies: [
      {
        character: CHARACTERS.threepio,
        details: {
          bounceLimit: 0,
          dir        : null,
          hp         : 1,
          spawnFrame : 5 * FPS
        }
      }
    ],
    name: 'Endor',
    neutrals: [],
    obstacles: [],
    password: undefined,
    textColor: COLORS.BLACK
  };
  