import * as CHARACTERS from '@/constants/Characters.js';
import {
  CARDINALS,
  COLORS,
  FPS,
} from '@/constants/Config.js';
import { BACKGROUNDS } from '@/constants/Backgrounds.js';

export const SANDCRAWLER = {
  bg: BACKGROUNDS.SANDCRAWLER,
  bosses: [
    {
      character: CHARACTERS.threebee,
      details: {
        dir       : null,
        hp        : 1,
        spawnDelay: 1 * FPS
      }
    }
  ],
  character: CHARACTERS.sandtrooper,
  cutscenes: [
    'episode4-tusken'
  ],
  enemiesOptional: [],
  enemiesRequiredData: {
    character    : CHARACTERS.jawa,
    count        : 10,
    dir          : null,
    hp           : 1,
    spawnInterval: 2 * FPS
  },
  friendlies: [],
  name: 'Sandcrawler',
  neutrals: [
    {
      character: CHARACTERS.arfive,
      details: {
        bounceLimit: 0,
        dir        : null,
        hp         : 1,
        spawnFrame : 5.5 * FPS
      }
    },
    {
      character: CHARACTERS.gonkdroid,
      details: {
        bounceLimit: 0,
        dir        : CARDINALS.LEFT,
        hp         : 1,
        spawnFrame : 10.5 * FPS
      }
    }
  ],
  obstacles: [],
  password: undefined,
  textColor: COLORS.BLACK
};
