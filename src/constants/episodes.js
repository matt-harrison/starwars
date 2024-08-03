import { ALDERAAN } from '@/class/episodes/Alderaan.js';
import { AMBASSADOR } from '@/class/episodes/Ambassador.js';
import { ASSAULT_ON_DEATH_STAR } from '@/class/episodes/AssaultOnDeathStar.js';
import { ATTRACTION } from '@/class/episodes/Attraction.js';
import { BATTLE_OF_YAVIN } from '@/class/episodes/BattleOfYavin.js';
import { DETENTION } from '@/class/episodes/Detention.js';
import { DOCKING_BAY } from '@/class/episodes/DockingBay.js';
import { ENDOR } from '@/class/episodes/Endor.js';
import { ESCAPE_FROM_DEATH_STAR } from '@/class/episodes/EscapeFromDeathStar.js';
import { HOTH } from '@/class/episodes/Hoth.js';
import { MOISTURE_FARM } from '@/class/episodes/MoistureFarm.js';
import { MOS_EISLEY } from '@/class/episodes/MosEisley.js';
import { SANDCRAWLER } from '@/class/episodes/Sandcrawler.js';
import { SEARCH } from '@/class/episodes/Search.js';
import { SHOWDOWN } from '@/class/episodes/Showdown.js';
import { TANTIVE_IV } from '@/class/episodes/TantiveIv.js';
import { TATOOINE } from '@/class/episodes/Tatooine.js';
import { TEST } from '@/class/episodes/Test.js';
import { TRACTOR_BEAM } from '@/class/episodes/TractorBeam.js';

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