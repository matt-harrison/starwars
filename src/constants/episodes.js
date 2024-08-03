import { ALDERAAN } from '@/constants/episodes/Alderaan.js';
import { AMBASSADOR } from '@/constants/episodes/Ambassador.js';
import { ASSAULT_ON_DEATH_STAR } from '@/constants/episodes/AssaultOnDeathStar.js';
import { ATTRACTION } from '@/constants/episodes/Attraction.js';
import { BATTLE_OF_YAVIN } from '@/constants/episodes/BattleOfYavin.js';
import { DETENTION } from '@/constants/episodes/Detention.js';
import { DOCKING_BAY } from '@/constants/episodes/DockingBay.js';
import { ENDOR } from '@/constants/episodes/Endor.js';
import { ESCAPE_FROM_DEATH_STAR } from '@/constants/episodes/EscapeFromDeathStar.js';
import { HOTH } from '@/constants/episodes/Hoth.js';
import { MOISTURE_FARM } from '@/constants/episodes/MoistureFarm.js';
import { MOS_EISLEY } from '@/constants/episodes/MosEisley.js';
import { SANDCRAWLER } from '@/constants/episodes/Sandcrawler.js';
import { SEARCH } from '@/constants/episodes/Search.js';
import { SHOWDOWN } from '@/constants/episodes/Showdown.js';
import { TANTIVE_IV } from '@/constants/episodes/TantiveIv.js';
import { TATOOINE } from '@/constants/episodes/Tatooine.js';
import { TEST } from '@/constants/episodes/Test.js';
import { TRACTOR_BEAM } from '@/constants/episodes/TractorBeam.js';

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