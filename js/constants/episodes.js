import { COLORS, FPS } from '/js/constants/config.js';
import * as CHARACTERS from '/js/constants/characters.js';
import { OBSTACLES }   from '/js/constants/obstacles.js';
import { SHIPS }       from '/js/constants/ships.js';

//Episode IV levels
const tantive4 = {
  name: 'Tantive IV',
  password: '',
  cutscene: [
    'preface',
    'episode4-destroyer'
  ],
  bg: 'metal',
  textColor: 'black',
  enemyInterval: 32,
  enemyCount: 10,
  enemyDir: 'right',
  character: CHARACTERS.rebel,
  enemy: CHARACTERS.stormtrooper,
  boss: CHARACTERS.officerblack,
  bossHP: 2,
  friendlies: [
    {
      character: CHARACTERS.threepio,
      details: {
        delay: 3 * FPS,
        dir: 'down',
        value: 0 - 500
      }
    },
    {
      character: CHARACTERS.artoo,
      details: {
        delay: 5 * FPS,
        dir: 'down',
        value: 0 - 500
      }
    }
  ]
};

const ambassador = {
  name: 'Ambassador',
  password: '',
  cutscene: [
    'episode4-antilles'
  ],
  bg: 'metal',
  textColor: 'black',
  enemyInterval: 32,
  enemyCount: 3,
  enemyDir: 'left',
  character: CHARACTERS.stuntrooper,
  enemy: CHARACTERS.rebel,
  boss: CHARACTERS.leia,
  bossHP: 1,
  friendlies: [
    {
      character: CHARACTERS.protocolwhite,
      details: {
        delay: 5.5 * FPS,
        value: 25,
        dir: 'down'
      }
    }
  ]
};

const tatooine = {
  name: 'Tatooine',
  password: '',
  cutscene: [
    'episode4-pod',
    'episode4-crash'
  ],
  bg: 'sand',
  textColor: 'black',
  enemyInterval: 32,
  enemyCount: 1,
  obstacles: [
    {
      type: OBSTACLES.DRAGON,
      x: 50,
      y: 66
    }
  ],
  character: CHARACTERS.jawa,
  enemy: CHARACTERS.threepio,
  boss: CHARACTERS.artoo,
  bossHP: 1,
  friendlies: [
    {
      character: CHARACTERS.jawa,
      details: {
        delay: 1.5 * FPS,
        value: 0 - 500
      }
    },
    {
      character: CHARACTERS.jawa,
      details: {
        delay: 2.5 * FPS,
        value: 0 - 500
      }
    },
    {
      character: CHARACTERS.jawa,
      details: {
        delay: 3.5 * FPS,
        value: 0 - 500
      }
    }
  ]
};

const search = {
  name: 'Search',
  password: '',
  cutscene: [
    'episode4-jawas',
    'episode4-hologram',
    'episode4-binoculars'
  ],
  bg: 'sand',
  textColor: 'black',
  enemyInterval: 32,
  enemyCount: 10,
  obstacles: [
    {
      type: OBSTACLES.SPEEDER,
      x: 33,
      y: 33
    }
  ],
  character: CHARACTERS.luke,
  enemy: CHARACTERS.tusken,
  boss: CHARACTERS.bantha,
  bossHP: 2,
  friendlies: [
    {
      character: CHARACTERS.threepio,
      details: {
        delay: 10.5 * FPS,
        value: 0 - 500
      }
    },
    {
      character: CHARACTERS.artoo,
      details: {
        delay: 12.5 * FPS,
        value: 0 - 500
      }
    }
  ]
};

const sandcrawler = {
  name: 'Sandcrawler',
  password: 'endor',
  cutscene: [
    'episode4-tusken'
  ],
  bg: 'rust',
  textColor: 'black',
  enemyInterval: 32,
  enemyCount: 10,
  character: CHARACTERS.sandtrooper,
  enemy: CHARACTERS.jawa,
  boss: CHARACTERS.threebee,
  bossHP: 2,
  friendlies: [
    {
      character: CHARACTERS.arfive,
      details: {
        delay: 5.5 * FPS,
        value: 25
      }
    },
    {
      character: CHARACTERS.gonkdroid,
      details: {
        delay: 10.5 * FPS,
        dir: 'left',
        value: 25
      }
    }
  ]
};

const moistureFarm = {
  name: 'Moisture Farm',
  password: '',
  // 'cutscene' : []
  bg: 'sand',
  textColor: 'black',
  enemyInterval: 16,
  enemyCount: 1,
  character: CHARACTERS.sandtrooper,
  enemy: CHARACTERS.uncleowen,
  boss: CHARACTERS.auntberu,
  bossHP: 1,
  obstacles: [
    {
      type: OBSTACLES.IGLOO,
      x: 66,
      y: 33
    }
  ],
};

const mosEisley = {
  name: 'Mos Eisley',
  password: '',
  // 'cutscene' : []
  bg: 'marble',
  textColor: 'black',
  enemyInterval: 32,
  enemyCount: 10,
  enemyDir: 'right',
  obstacles: [
    {
      type: OBSTACLES.BAR,
      x: 0,
      y: 50
    },
    {
      type: OBSTACLES.TABLE,
      x: 33,
      y: 20
    },
    {
      type: OBSTACLES.TABLE,
      x: 66,
      y: 20
    },
    {
      type: OBSTACLES.TABLE,
      x: 33,
      y: 80
    },
    {
      type: OBSTACLES.TABLE,
      x: 66,
      y: 80
    }
  ],
  character: CHARACTERS.ben,
  enemy: CHARACTERS.sandtrooper,
  boss: CHARACTERS.pondababa,
  bossHP: 1,
  friendlies: [
    {
      character: CHARACTERS.chewbacca,
      details: {
        delay: 10.5 * FPS,
        value: 0 - 500
      }
    },
    {
      character: CHARACTERS.greedo,
      details: {
        delay: 30 * FPS,
        value: 25
      }
    }
  ]
};

const dockingBay = {
  name: 'Docking Bay 94',
  password: '',
  // 'cutscene' : []
  bg: 'dust',
  textColor: 'black',
  enemyInterval: 32,
  enemyCount: 10,
  obstacles: [
    {
      type: OBSTACLES.FALCON,
      x: 100,
      y: 0
    }
  ],
  character: CHARACTERS.hansolo,
  enemy: CHARACTERS.sandtrooper,
  boss: CHARACTERS.garindan,
  bossHP: 2
};

const alderaan = {
  name: 'Alderaan',
  password: '',
  cutscene: [
    'episode4-tarkin',
    'episode4-deathstar',
    'episode4-alderaan'
  ],
  bg: 'space',
  textColor: COLORS.YELLOW,
  enemyInterval: 48,
  enemyCount: 10,
  character: SHIPS.FALCON,
  enemy: SHIPS.ASTEROID,
  boss: SHIPS.TIE,
  bossHP: 2
};

const detention = {
  name: 'Detention',
  password: '',
  // 'cutscene' : []
  bg: 'dark',
  textColor: 'black',
  enemyInterval: 32,
  enemyCount: 10,
  obstacles: [
    {
      type: OBSTACLES.DESKS,
      x: 75,
      y: 50
    }
  ],
  character: CHARACTERS.chewbacca,
  enemy: CHARACTERS.deathstartrooper,
  boss: CHARACTERS.mousedroid,
  bossHP: 2,
  friendlies: [
    {
      character: CHARACTERS.stormtrooperhan,
      details: {
        delay: 1.5 * FPS,
        value: 0 - 500,
        dir: 'right'
      }
    },
    {
      character: CHARACTERS.stormtrooperluke,
      details: {
        delay: 1.75 * FPS,
        value: 0 - 500,
        dir: 'right'
      }
    }
  ]
};

const tractorBeam = {
  name: 'Tractor Beam',
  password: '',
  // 'cutscene' : []
  bg: 'dark',
  textColor: 'black',
  enemyInterval: 32,
  enemyCount: 10,
  enemyDir: 'right',
  obstacles: [
    {
      type: OBSTACLES.GENERATOR,
      x: 50,
      y: 0
    }
  ],
  character: CHARACTERS.ben,
  enemy: CHARACTERS.stormtrooper,
  boss: CHARACTERS.darthvader,
  bossHP: 5
};

const showdown4 = {
  name: 'Showdown',
  password: '',
  // 'cutscene' : []
  bg: 'dark',
  textColor: 'black',
  enemyInterval: 32,
  enemyCount: 0,
  character: CHARACTERS.darthvader,
  enemy: null,
  boss: CHARACTERS.ben,
  bossHP: 1
};

const escapeFromDeathStar = {
  name: 'Escape',
  password: '',
  // 'cutscene' : []
  bg: 'dark',
  textColor: 'black',
  enemyInterval: 32,
  enemyCount: 10,
  character: CHARACTERS.leia,
  enemy: CHARACTERS.stormtrooper,
  boss: CHARACTERS.tiepilot,
  bossHP: 2,
  obstacles: [
    {
      type: OBSTACLES.FALCONBIG,
      x: 100,
      y: 0
    }
  ],
  friendlies: [
    {
      character: CHARACTERS.hansolo,
      details: {
        delay: 5.5 * FPS,
        value: 0 - 500
      }
    },
    {
      character: CHARACTERS.luke,
      details: {
        delay: 10.5 * FPS,
        value: 0 - 500
      }
    },
    {
      character: CHARACTERS.chewbacca,
      details: {
        delay: 15.5 * FPS,
        value: 0 - 500
      }
    }
  ]
};

const battleOfYavin = {
  name: 'The Battle of Yavin',
  password: '',
  // 'cutscene' : []
  bg: 'space',
  textColor: COLORS.YELLOW,
  enemyInterval: 16,
  enemyCount: 3,
  character: SHIPS.FALCON,
  enemy: SHIPS.TIE,
  boss: SHIPS.TIE_ADVANCED,
  bossHP: 2,
  friendlies: [
    {
      character: SHIPS.XWING,
      details: {
        delay: 5.5 * FPS,
        value: 0 - 500,
        dir: 'up'
      }
    },
    {
      character: SHIPS.XWING,
      details: {
        delay: 5.5 * FPS,
        value: 0 - 500,
        dir: 'up'
      }
    },
    {
      character: SHIPS.XWING,
      details: {
        delay: 5.5 * FPS,
        value: 0 - 500,
        dir: 'up'
      }
    }
  ]
};

const assaultOnDeathStar = {
  name: 'Death Star',
  password: '',
  // 'cutscene' : []
  bg: 'space',
  textColor: COLORS.YELLOW,
  enemyInterval: 32,
  enemyCount: 0,
  character: SHIPS.XWING,
  enemy: null,
  boss: SHIPS.DEATHSTAR,
  bossHP: 10
};

//Episode V levels
const hoth = {
  name: 'Hoth',
  password: '',
  bg: 'snow',
  textColor: 'black',
  enemyInterval: 32,
  enemyCount: 10,
  character: CHARACTERS.luke5,
  enemy: CHARACTERS.tauntaun,//probedroid
  boss: CHARACTERS.mousedroid,//wampa
  bossHP: 2
};

//Episode VI levels
const endor = {
  name: 'Endor',
  password: '',
  bg: 'grass',
  textColor: 'black',
  enemyInterval: 32,
  enemyCount: 10,
  character: CHARACTERS.ewok,
  enemy: CHARACTERS.stormtrooper,
  boss: CHARACTERS.darthvader,
  bossHP: 2
};

const test = {
  name: 'TEST',
  password: '',
  bg: 'sand',
  textColor: 'black',
  enemyInterval: 16,
  enemyCount: 1,
  character: CHARACTERS.luke,
  enemy: CHARACTERS.ben,
  boss: CHARACTERS.auntberu,
  bossHP: 1,
  obstacles: [
    {
      type: OBSTACLES.IGLOO,
      x: 66,
      y: 33
    },
  ],
  friendlies: [
    {
      character: CHARACTERS.jabba,
      details: {
        delay: 1 * FPS,
        value: 0
      }
    }
  ]
};

export const EPISODES = [
  [test],
  [test],
  [test],
  [
    tantive4,
    ambassador,
    tatooine,
    search,
    sandcrawler,
    moistureFarm,
    mosEisley,
    dockingBay,
    alderaan,
    detention,
    tractorBeam,
    showdown4,
    escapeFromDeathStar,
    battleOfYavin,
    assaultOnDeathStar
  ],
  [hoth],
  [endor]
];
