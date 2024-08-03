import * as CHARACTERS from '@/constants/characters.js';
import {
  CARDINALS,
  COLORS,
  FPS,
} from '@/constants/config.js';
import { BACKGROUNDS } from '@/constants/backgrounds.js';
import { OBSTACLES } from '@/constants/obstacles.js';

export const DETENTION = {
  bg: BACKGROUNDS.DEATH_STAR,
  bosses: [
    {
      character: CHARACTERS.mousedroid,
      details: {
        dir       : null,
        hp        : 1,
        spawnDelay: 1 * FPS
      }
    }
  ],
  character: CHARACTERS.chewbacca,
  cutscenes: [],
  enemiesOptional: [],
  enemiesRequiredData: {
    character    : CHARACTERS.deathstartrooper,
    count        : 10,
    dir          : null,
    hp           : 1,
    spawnInterval: 2 * FPS
  },
  friendlies: [
    {
      character: CHARACTERS.stormtrooperhan,
      details: {
        bounceLimit: 0,
        dir        : CARDINALS.RIGHT,
        hp         : 1,
        spawnFrame : 1.5 * FPS
      }
    },
    {
      character: CHARACTERS.stormtrooperluke,
      details: {
        bounceLimit: 0,
        dir        : CARDINALS.RIGHT,
        hp         : 1,
        spawnFrame : 1.75 * FPS
      }
    }
  ],
  name: 'Detention',
  neutrals: [],
  obstacles: [
    {
      type: OBSTACLES.DESKS,
      x   : 75,
      y   : 50
    }
  ],
  password: undefined,
  textColor: COLORS.BLACK
};
