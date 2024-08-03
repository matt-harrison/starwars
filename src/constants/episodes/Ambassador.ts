import * as CHARACTERS from "@/constants/Characters.ts";
import { CARDINALS, COLORS, FPS } from "@/constants/Config.ts";
import { BACKGROUNDS } from "@/constants/Backgrounds.ts";

export const AMBASSADOR = {
  bg: BACKGROUNDS.TANTIVE_IV,
  bosses: [
    {
      character: CHARACTERS.leia,
      details: {
        dir: null,
        hp: 1,
        spawnDelay: 1 * FPS,
      },
    },
  ],
  character: CHARACTERS.stuntrooper,
  cutscenes: ["episode4-antilles"],
  enemiesOptional: [],
  enemiesRequiredData: {
    character: CHARACTERS.rebel,
    count: 3,
    dir: CARDINALS.LEFT,
    hp: 1,
    spawnInterval: 2 * FPS,
  },
  friendlies: [],
  name: "Ambassador",
  neutrals: [
    {
      character: CHARACTERS.protocolwhite,
      details: {
        bounceLimit: 0,
        dir: CARDINALS.DOWN,
        hp: 1,
        spawnFrame: 5.5 * FPS,
      },
    },
  ],
  obstacles: [],
  password: undefined,
  textColor: COLORS.BLACK,
};
