import * as CHARACTERS from "@/constants/Characters.ts";
import { CARDINALS, COLORS, FPS, INFINITY } from "@/constants/Config.ts";
import { BACKGROUNDS } from "@/constants/Backgrounds.ts";

export const ATTRACTION = {
  bg: BACKGROUNDS.TANTIVE_IV,
  bosses: [],
  character: CHARACTERS.rebel,
  cutscenes: [],
  enemiesOptional: [],
  enemiesRequiredData: {
    character: CHARACTERS.stormtrooper,
    count: 3,
    dir: CARDINALS.RIGHT,
    hp: 1,
    spawnInterval: 1 * FPS,
  },
  friendlies: [
    {
      character: CHARACTERS.rebel,
      details: {
        bounceLimit: INFINITY,
        dir: CARDINALS.LEFT,
        hp: 1,
        spawnFrame: 0.5 * FPS,
      },
    },
    {
      character: CHARACTERS.rebel,
      details: {
        bounceLimit: INFINITY,
        dir: CARDINALS.LEFT,
        hp: 1,
        spawnFrame: 1.5 * FPS,
      },
    },
    {
      character: CHARACTERS.rebel,
      details: {
        bounceLimit: INFINITY,
        dir: CARDINALS.LEFT,
        hp: 1,
        spawnFrame: 2.5 * FPS,
      },
    },
    {
      character: CHARACTERS.threepio,
      details: {
        bounceLimit: 0,
        dir: CARDINALS.DOWN,
        hp: 1,
        spawnFrame: 2 * FPS,
      },
    },
    {
      character: CHARACTERS.artoo,
      details: {
        bounceLimit: 0,
        dir: CARDINALS.DOWN,
        hp: 1,
        spawnFrame: 4 * FPS,
      },
    },
  ],
  name: "Star Wars",
  neutrals: [],
  obstacles: [],
  password: undefined,
  textColor: COLORS.BLACK,
};
