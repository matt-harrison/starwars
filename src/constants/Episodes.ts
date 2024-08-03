import { ALDERAAN } from "@/constants/episodes/Alderaan.ts";
import { AMBASSADOR } from "@/constants/episodes/Ambassador.ts";
import { ASSAULT_ON_DEATH_STAR } from "@/constants/episodes/AssaultOnDeathStar.ts";
import { ATTRACTION } from "@/constants/episodes/Attraction.ts";
import { BATTLE_OF_YAVIN } from "@/constants/episodes/BattleOfYavin.ts";
import { DETENTION } from "@/constants/episodes/Detention.ts";
import { DOCKING_BAY } from "@/constants/episodes/DockingBay.ts";
import { ENDOR } from "@/constants/episodes/Endor.ts";
import { ESCAPE_FROM_DEATH_STAR } from "@/constants/episodes/EscapeFromDeathStar.ts";
import { HOTH } from "@/constants/episodes/Hoth.ts";
import { MOISTURE_FARM } from "@/constants/episodes/MoistureFarm.ts";
import { MOS_EISLEY } from "@/constants/episodes/MosEisley.ts";
import { SANDCRAWLER } from "@/constants/episodes/Sandcrawler.ts";
import { SEARCH } from "@/constants/episodes/Search.ts";
import { SHOWDOWN } from "@/constants/episodes/Showdown.ts";
import { TANTIVE_IV } from "@/constants/episodes/TantiveIv.ts";
import { TATOOINE } from "@/constants/episodes/Tatooine.ts";
import { TEST } from "@/constants/episodes/Test.ts";
import { TRACTOR_BEAM } from "@/constants/episodes/TractorBeam.ts";

const EPISODES = [
  [TEST],
  [TEST],
  [TEST],
  [
    TEST,
    TANTIVE_IV,
    AMBASSADOR,
    TATOOINE,
    SEARCH,
    SANDCRAWLER,
    MOISTURE_FARM,
    MOS_EISLEY,
    DOCKING_BAY,
    ALDERAAN,
    DETENTION,
    TRACTOR_BEAM,
    SHOWDOWN,
    ESCAPE_FROM_DEATH_STAR,
    BATTLE_OF_YAVIN,
    ASSAULT_ON_DEATH_STAR,
  ],
  [HOTH],
  [ENDOR],
  [TEST],
  [TEST],
  [TEST],
];

export { ATTRACTION, EPISODES };
