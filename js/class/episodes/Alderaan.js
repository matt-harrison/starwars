import {
  COLORS,
  FPS,
} from '../../constants/config.js';
import { BACKGROUNDS } from '../../constants/backgrounds.js';
import { SHIPS } from '../../constants/ships.js';

export const ALDERAAN = {
  bg: BACKGROUNDS.SPACE,
  bosses: [
    {
      character: SHIPS.TIE,
      details: {
        dir       : null,
        hp        : 1,
        spawnDelay: 1 * FPS
      }
    }
  ],
  character: SHIPS.FALCON,
  cutscenes: [
    'episode4-tarkin',
    'episode4-deathstar',
    'episode4-alderaan'
  ],
  enemiesOptional: [],
  enemiesRequiredData: {
    character    : SHIPS.ASTEROID,
    count        : 10,
    dir          : null,
    hp           : 1,
    spawnInterval: 1 * FPS
  },
  friendlies: [],
  name: 'Alderaan',
  neutrals: [],
  obstacles: [],
  password: undefined,
  textColor: COLORS.YELLOW
};
