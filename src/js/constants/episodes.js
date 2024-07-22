import { ALDERAAN } from '@/js/class/episodes/Alderaan.js';
import { AMBASSADOR } from '@/js/class/episodes/Ambassador.js';
import { ASSAULT_ON_DEATH_STAR } from '@/js/class/episodes/AssaultOnDeathStar.js';
import { ATTRACTION } from '@/js/class/episodes/Attraction.js';
import { BATTLE_OF_YAVIN } from '@/js/class/episodes/BattleOfYavin.js';
import { DETENTION } from '@/js/class/episodes/Detention.js';
import { DOCKING_BAY } from '@/js/class/episodes/DockingBay.js';
import { ENDOR } from '@/js/class/episodes/Endor.js';
import { ESCAPE_FROM_DEATH_STAR } from '@/js/class/episodes/EscapeFromDeathStar.js';
import { HOTH } from '@/js/class/episodes/Hoth.js';
import { MOISTURE_FARM } from '@/js/class/episodes/MoistureFarm.js';
import { MOS_EISLEY } from '@/js/class/episodes/MosEisley.js';
import { SANDCRAWLER } from '@/js/class/episodes/Sandcrawler.js';
import { SEARCH } from '@/js/class/episodes/Search.js';
import { SHOWDOWN } from '@/js/class/episodes/Showdown.js';
import { TANTIVE_IV } from '@/js/class/episodes/TantiveIv.js';
import { TATOOINE } from '@/js/class/episodes/Tatooine.js';
import { TEST } from '@/js/class/episodes/Test.js';
import { TRACTOR_BEAM } from '@/js/class/episodes/TractorBeam.js';

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