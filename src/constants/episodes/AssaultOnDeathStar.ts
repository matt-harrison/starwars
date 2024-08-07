import { COLORS, FPS } from "@/constants/Config.ts";
import { BACKGROUNDS } from "@/constants/Backgrounds.ts";
import { SHIPS } from "@/constants/Ships.ts";

export const ASSAULT_ON_DEATH_STAR = {
  bg: BACKGROUNDS.SPACE,
  bosses: [
    {
      character: SHIPS.DEATH_STAR,
      details: {
        dir: null,
        hp: 10,
        spawnDelay: 1 * FPS,
      },
    },
  ],
  character: SHIPS.XWING,
  cutscenes: [],
  enemiesOptional: [],
  enemiesRequiredData: {
    character: null,
    count: 0,
    dir: null,
    hp: null,
    spawnInterval: null,
  },
  friendlies: [],
  name: "Death Star",
  neutrals: [],
  obstacles: [],
  password: undefined,
  textColor: COLORS.YELLOW,
};
