import * as CHARACTERS from "@/constants/Characters.ts";
import { COLORS, FPS } from "@/constants/Config.ts";
import { BACKGROUNDS } from "@/constants/Backgrounds.ts";

export const HOTH = {
  bg: BACKGROUNDS.SNOW,
  bosses: [
    {
      character: CHARACTERS.mousedroid, // add wampa
      details: {
        dir: null,
        hp: 2,
        spawnDelay: 1 * FPS,
      },
    },
  ],
  character: CHARACTERS.luke5,
  cutscenes: [],
  enemiesOptional: [],
  enemiesRequiredData: {
    character: CHARACTERS.tauntaun, // add probe droid
    count: 10,
    dir: null,
    hp: 1,
    spawnInterval: 2 * FPS,
  },
  friendlies: [],
  name: "Hoth",
  neutrals: [],
  obstacles: [],
  password: undefined,
  textColor: COLORS.BLACK,
};
