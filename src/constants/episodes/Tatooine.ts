import * as CHARACTERS from '@/constants/Characters.ts';
import {
  CARDINALS,
  COLORS,
  FPS,
  INFINITY,
} from '@/constants/Config.ts';
import { BACKGROUNDS } from '@/constants/Backgrounds.ts';
import { OBSTACLES } from '@/constants/Obstacles.ts';

export const TATOOINE = {
    bg: BACKGROUNDS.SAND,
    bosses: [
      {
        character: CHARACTERS.artoo,
        details: {
          dir       : CARDINALS.UP,
          hp        : 1,
          spawnDelay: 1 * FPS
        }
      }  ],
    character: CHARACTERS.jawa,
    cutscenes: [
      'episode4-pod',
      'episode4-crash'
    ],
    enemiesOptional: [],
    enemiesRequiredData: {
      character    : CHARACTERS.threepio,
      count        : 1,
      dir          : CARDINALS.DOWN,
      hp           : 1,
      spawnInterval: 0
    },
    friendlies: [
      {
        character: CHARACTERS.jawa,
        details: {
          bounceLimit: INFINITY,
          dir        : null,
          hp         : 1,
          spawnFrame : 1.5 * FPS
        }
      },
      {
        character: CHARACTERS.jawa,
        details: {
          bounceLimit: INFINITY,
          dir        : null,
          hp         : 1,
          spawnFrame : 2.5 * FPS
        }
      },
      {
        character: CHARACTERS.jawa,
        details: {
          bounceLimit: INFINITY,
          dir        : null,
          hp         : 1,
          spawnFrame : 3.5 * FPS
        }
      }
    ],
    name: 'Tatooine',
    neutrals: [],
    obstacles: [
      {
        type: OBSTACLES.DRAGON,
        x   : 50,
        y   : 66
      }
    ],
    password: undefined,
    textColor: COLORS.BLACK
  };
  