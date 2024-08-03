import * as CHARACTERS from "@/constants/Characters.ts";
import { CARDINALS, COLORS, FPS } from "@/constants/Config.ts";
import { BACKGROUNDS } from "@/constants/Backgrounds.ts";
import { OBSTACLES } from "@/constants/Obstacles.ts";

export const MOS_EISLEY = {
  bg: BACKGROUNDS.MARBLE,
  bosses: [
    {
      character: CHARACTERS.drevazan,
      details: {
        dir: CARDINALS.LEFT,
        hp: 1,
        spawnDelay: 1 * FPS,
      },
    },
    {
      character: CHARACTERS.pondababa,
      details: {
        dir: CARDINALS.LEFT,
        hp: 1,
        spawnDelay: 1.5 * FPS,
      },
    },
  ],
  character: CHARACTERS.ben,
  cutscenes: [],
  enemiesOptional: [
    {
      character: CHARACTERS.greedo,
      details: {
        bounceLimit: 0,
        dir: null,
        hp: 1,
        spawnFrame: 30 * FPS,
      },
    },
  ],
  enemiesRequiredData: {
    character: CHARACTERS.sandtrooper,
    count: 10,
    dir: null,
    hp: 1,
    spawnInterval: 2 * FPS,
  },
  friendlies: [
    {
      character: CHARACTERS.chewbacca,
      details: {
        bounceLimit: 0,
        dir: CARDINALS.LEFT,
        hp: 1,
        spawnFrame: 10.5 * FPS,
      },
    },
    {
      character: CHARACTERS.hansolo,
      details: {
        bounceLimit: 0,
        dir: CARDINALS.LEFT,
        hp: 1,
        spawnFrame: 10.5 * FPS,
      },
    },
  ],
  name: "Mos Eisley",
  neutrals: [],
  obstacles: [
    {
      type: OBSTACLES.BAR,
      x: 0,
      y: 50,
    },
    {
      type: OBSTACLES.TABLE,
      x: 25,
      y: 25,
    },
    {
      type: OBSTACLES.TABLE,
      x: 50,
      y: 25,
    },
    {
      type: OBSTACLES.TABLE,
      x: 75,
      y: 25,
    },
    {
      type: OBSTACLES.TABLE,
      x: 75,
      y: 50,
    },
    {
      type: OBSTACLES.TABLE,
      x: 25,
      y: 75,
    },
    {
      type: OBSTACLES.TABLE,
      x: 50,
      y: 75,
    },
    {
      type: OBSTACLES.TABLE,
      x: 75,
      y: 75,
    },
  ],
  password: undefined,
  textColor: COLORS.BLACK,
};
