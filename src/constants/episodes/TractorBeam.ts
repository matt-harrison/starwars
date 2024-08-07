import * as CHARACTERS from "@/constants/Characters.ts";
import { CARDINALS, COLORS, FPS } from "@/constants/Config.ts";
import { BACKGROUNDS } from "@/constants/Backgrounds.ts";
import { OBSTACLES } from "@/constants/Obstacles.ts";

export const TRACTOR_BEAM = {
  bg: BACKGROUNDS.DEATH_STAR,
  bosses: [
    {
      character: CHARACTERS.darthvader,
      details: {
        dir: null,
        hp: 3,
        spawnDelay: 1 * FPS,
      },
    },
  ],
  character: CHARACTERS.ben,
  cutscenes: [],
  enemiesOptional: [],
  enemiesRequiredData: {
    character: CHARACTERS.stormtrooper,
    count: 10,
    dir: CARDINALS.RIGHT,
    hp: 1,
    spawnInterval: 2 * FPS,
  },
  friendlies: [],
  name: "Tractor Beam",
  neutrals: [],
  obstacles: [
    {
      type: OBSTACLES.GENERATOR,
      x: 50,
      y: 0,
    },
  ],
  password: undefined,
  textColor: COLORS.BLACK,
};
