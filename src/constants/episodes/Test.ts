import * as CHARACTERS from "@/constants/Characters.ts";
import { CARDINALS, COLORS, FPS } from "@/constants/Config.ts";
import { BACKGROUNDS } from "@/constants/Backgrounds.ts";
import { OBSTACLES } from "@/constants/Obstacles.ts";

export const TEST = {
  bg: BACKGROUNDS.DUST,
  bosses: [
    {
      character: CHARACTERS.darthvader,
      details: {
        dir: CARDINALS.DOWN,
        hp: 1,
        spawnDelay: 1 * FPS,
      },
    },
    {
      character: CHARACTERS.darthvader5,
      details: {
        dir: CARDINALS.UP,
        hp: 1,
        spawnDelay: 2 * FPS,
      },
    },
    {
      character: CHARACTERS.darthvader6,
      details: {
        dir: CARDINALS.UP,
        hp: 1,
        spawnDelay: 3 * FPS,
      },
    },
  ],
  character: CHARACTERS.stormtrooper,
  cutscenes: [],
  enemiesOptional: [
    // {
    //   character: CHARACTERS.deathstartrooper,
    //   details: {
    //     bounceLimit: 0,
    //     dir        : CARDINALS.RIGHT,
    //     hp         : 1,
    //     spawnFrame : 0 * FPS
    //   }
    // }
  ],
  enemiesRequiredData: {
    character: CHARACTERS.stormtrooper,
    count: 1,
    dir: CARDINALS.LEFT,
    hp: 1,
    spawnInterval: 1 * FPS,
  },
  friendlies: [
    // {
    //   character: CHARACTERS.bb8,
    //   details: {
    //     bounceLimit: 1
    //     dir        : CARDINALS.RIGHT,
    //     hp         : 2,
    //     spawnFrame : 0 * FPS,
    //   }
    // }
  ],
  name: "Test Kitchen",
  neutrals: [
    // {
    //   character: CHARACTERS.arfive,
    //   details: {
    //     bounceLimit: INFINITY,
    //     dir        : null,
    //     hp         : 1,
    //     spawnFrame : 0 * FPS
    //   }
    // },
    // {
    //   character: CHARACTERS.auntberu,
    //   details: {
    //     bounceLimit: INFINITY,
    //     dir        : null,
    //     hp         : 1,
    //     spawnFrame : 0 * FPS
    //   }
    // },
    // {
    //   character: CHARACTERS.ben,
    //   details: {
    //     bounceLimit: INFINITY,
    //     dir        : null,
    //     hp         : 1,
    //     spawnFrame : 0 * FPS
    //   }
    // },
    // {
    //   character: CHARACTERS.darthvader6,
    //   details: {
    //     bounceLimit: INFINITY,
    //     dir        : null,
    //     hp         : 1,
    //     spawnFrame : 0 * FPS
    //   }
    // },
    // {
    //   character: CHARACTERS.uncleowen,
    //   details: {
    //     bounceLimit: INFINITY,
    //     dir        : null,
    //     hp         : 1,
    //     spawnFrame : 0 * FPS
    //   }
    // },
    // {
    //   character: CHARACTERS.threebee,
    //   details: {
    //     bounceLimit: INFINITY,
    //     dir        : null,
    //     hp         : 1,
    //     spawnFrame : 0 * FPS
    //   }
    // },
    // {
    //   character: SHIPS.DEATH_STAR,
    //   details: {
    //     bounceLimit: INFINITY,
    //     dir        : null,
    //     hp         : 1,
    //     spawnFrame : 0 * FPS
    //   }
    // }
  ],
  obstacles: [
    {
      type: OBSTACLES.TABLE,
      x: 75,
      y: 75,
    },
  ],
  password: "",
  textColor: COLORS.BLACK,
};
