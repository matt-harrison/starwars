import * as CHARACTERS from '@/constants/Characters.ts';
import {
  CARDINALS,
  COLORS,
  FPS,
} from '@/constants/Config.ts';
import { BACKGROUNDS } from '@/constants/Backgrounds.ts';
import { OBSTACLES } from '@/constants/Obstacles.ts';

export const SEARCH = {
  bg: BACKGROUNDS.SAND,
  bosses: [
    {
      character: CHARACTERS.bantha,
      details: {
        dir       : null,
        hp        : 2,
        spawnDelay: 1 * FPS
      }
    }
  ],
  character: CHARACTERS.luke,
  cutscenes: [
    'episode4-jawas',
    'episode4-hologram',
    'episode4-binoculars'
  ],
  enemiesOptional: [],
  enemiesRequiredData: {
    character    : CHARACTERS.tusken,
    count        : 10,
    dir          : CARDINALS.RIGHT,
    hp           : 1,
    spawnInterval: 1.5 * FPS
  },
  friendlies: [
    {
      character: CHARACTERS.threepio,
      details: {
        bounceLimit: 0,
        dir        : CARDINALS.DOWN,
        hp         : 1,
        spawnFrame : 10.5 * FPS
      }
    },
    {
      character: CHARACTERS.artoo,
      details: {
        bounceLimit: 0,
        dir        : CARDINALS.DOWN,
        hp         : 1,
        spawnFrame : 12.5 * FPS
      }
    }
  ],
  name: 'Search',
  neutrals: [],
  obstacles: [
    {
      type: OBSTACLES.SPEEDER,
      x: 33,
      y: 33
    }
  ],
  password: undefined,
  textColor: COLORS.BLACK
};
