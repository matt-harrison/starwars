import * as CHARACTERS from "@/constants/Characters.ts";
import { CARDINALS, COLORS, FPS } from "@/constants/Config.ts";
import { BACKGROUNDS } from "@/constants/Backgrounds.ts";

export const TANTIVE_IV = {
  bg: BACKGROUNDS.TANTIVE_IV,
  bosses: [
    {
      character: CHARACTERS.officerblack,
      details: {
        dir: CARDINALS.RIGHT,
        hp: 2,
        spawnDelay: 1 * FPS,
      },
    },
  ],
  character: CHARACTERS.rebel,
  cutscenes: ["preface", "episode4-destroyer"],
  enemiesOptional: [],
  enemiesRequiredData: {
    character: CHARACTERS.stormtrooper,
    count: 10,
    dir: CARDINALS.RIGHT,
    hp: 1,
    spawnInterval: 2 * FPS,
  },
  friendlies: [
    {
      character: CHARACTERS.threepio,
      details: {
        bounceLimit: 0,
        dir: CARDINALS.DOWN,
        hp: 1,
        spawnFrame: 3 * FPS,
      },
    },
    {
      character: CHARACTERS.artoo,
      details: {
        bounceLimit: 0,
        dir: CARDINALS.DOWN,
        hp: 1,
        spawnFrame: 5 * FPS,
      },
    },
  ],
  name: "Tantive IV",
  neutrals: [],
  obstacles: [],
  password: undefined,
  textColor: COLORS.BLACK,
};
