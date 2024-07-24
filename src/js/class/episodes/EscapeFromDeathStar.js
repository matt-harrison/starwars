import * as CHARACTERS from '@/js/constants/characters.js';
import {
  CARDINALS,
  COLORS,
  FPS,
} from '@/js/constants/config.js';
import { BACKGROUNDS } from '@/js/constants/backgrounds.js';
import { OBSTACLES } from '@/js/constants/obstacles.js';

export const ESCAPE_FROM_DEATH_STAR = {
  bg: BACKGROUNDS.DEATH_STAR,
  bosses: [
    {
      character: CHARACTERS.tiepilot,
      details: {
        dir       : null,
        hp        : 2,
        spawnDelay: 1 * FPS
      }
    }
  ],
  character: CHARACTERS.leia,
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
      character: CHARACTERS.hansolo,
      details: {
        bounceLimit: 0,
        dir        : CARDINALS.RIGHT,
        hp         : 1,
        spawnFrame : 5.5 * FPS
      }
    },
    {
      character: CHARACTERS.luke,
      details: {
        bounceLimit: 0,
        dir        : CARDINALS.RIGHT,
        hp         : 1,
        spawnFrame : 10.5 * FPS
      }
    },
    {
      character: CHARACTERS.chewbacca,
      details: {
        bounceLimit: 0,
        dir        : CARDINALS.RIGHT,
        hp         : 1,
        spawnFrame : 15.5 * FPS
      }
    }
  ],
  name: 'Escape',
  neutrals: [],
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
