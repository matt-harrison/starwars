import { CARDINALS, COLORS, FPS } from '/js/constants/config.js';
import * as CHARACTERS            from '/js/constants/characters.js';
import { OBSTACLES }              from '/js/constants/obstacles.js';
import { SHIPS }                  from '/js/constants/ships.js';

export const ATTRACTION = {
  bg: 'metal',
  textColor: 'black',
  enemyInterval: FPS,
  enemyCount: 3,
  enemyDir: CARDINALS.RIGHT,
  enemy: CHARACTERS.stormtrooper,
  friendlies: [
    {
      character: CHARACTERS.rebel,
      details: {
        delay: 0.5 * FPS,
        dir: CARDINALS.LEFT
      }
    },
    {
      character: CHARACTERS.rebel,
      details: {
        delay: 1.5 * FPS,
        dir: CARDINALS.LEFT
      }
    },
    {
      character: CHARACTERS.rebel,
      details: {
        delay: 2.5 * FPS,
        dir: CARDINALS.LEFT
      }
    },
    {
      character: CHARACTERS.threepio,
      details: {
        bounceLimit: 0,
        delay: 2 * FPS,
        dir: CARDINALS.DOWN
      }
    },
    {
      character: CHARACTERS.artoo,
      details: {
        bounceLimit: 0,
        delay: 4 * FPS,
        dir: CARDINALS.DOWN
      }
    }
  ]
};

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
  enemyDir: CARDINALS.RIGHT,
  character: CHARACTERS.rebel,
  enemy: CHARACTERS.stormtrooper,
  boss: CHARACTERS.officerblack,
  bossHP: 2,
  friendlies: [
    {
      character: CHARACTERS.threepio,
      details: {
        bounceLimit: 0,
        delay: 3 * FPS,
        dir: CARDINALS.DOWN,
        value: 0 - 500
      }
    },
    {
      character: CHARACTERS.artoo,
      details: {
        bounceLimit: 0,
        delay: 5 * FPS,
        dir: CARDINALS.DOWN,
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
  enemyDir: CARDINALS.LEFT,
  character: CHARACTERS.stuntrooper,
  enemy: CHARACTERS.rebel,
  boss: CHARACTERS.leia,
  bossHP: 1,
  friendlies: [
    {
      character: CHARACTERS.protocolwhite,
      details: {
        bounceLimit: 0,
        delay: 5.5 * FPS,
        value: 25,
        dir: CARDINALS.DOWN
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
        bounceLimit: 0,
        delay: 1.5 * FPS,
        value: 0 - 500
      }
    },
    {
      character: CHARACTERS.jawa,
      details: {
        bounceLimit: 0,
        delay: 2.5 * FPS,
        value: 0 - 500
      }
    },
    {
      character: CHARACTERS.jawa,
      details: {
        bounceLimit: 0,
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
        bounceLimit: 0,
        delay: 10.5 * FPS,
        value: 0 - 500
      }
    },
    {
      character: CHARACTERS.artoo,
      details: {
        bounceLimit: 0,
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
        bounceLimit: 0,
        delay: 5.5 * FPS,
        value: 25
      }
    },
    {
      character: CHARACTERS.gonkdroid,
      details: {
        bounceLimit: 0,
        delay: 10.5 * FPS,
        dir: CARDINALS.LEFT,
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
  enemyDir: CARDINALS.UP,
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
        bounceLimit: 0,
        delay: 10.5 * FPS,
        value: 0 - 500
      }
    },
    {
      character: CHARACTERS.greedo,
      details: {
        bounceLimit: 0,
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
  friendlies: [
    {
      character: CHARACTERS.jabba,
      details: {
        bounceLimit: 0,
        bounceLimit: 0,
        delay: 30 * FPS
      }
    }
  ],
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
        bounceLimit: 0,
        delay: 1.5 * FPS,
        value: 0 - 500,
        dir: CARDINALS.RIGHT
      }
    },
    {
      character: CHARACTERS.stormtrooperluke,
      details: {
        bounceLimit: 0,
        delay: 1.75 * FPS,
        value: 0 - 500,
        dir: CARDINALS.RIGHT
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
  enemyDir: CARDINALS.RIGHT,
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
        bounceLimit: 0,
        delay: 5.5 * FPS,
        value: 0 - 500
      }
    },
    {
      character: CHARACTERS.luke,
      details: {
        bounceLimit: 0,
        delay: 10.5 * FPS,
        value: 0 - 500
      }
    },
    {
      character: CHARACTERS.chewbacca,
      details: {
        bounceLimit: 0,
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
        bounceLimit: 0,
        delay: 5.5 * FPS,
        value: 0 - 500,
        dir: CARDINALS.UP
      }
    },
    {
      character: SHIPS.XWING,
      details: {
        bounceLimit: 0,
        delay: 5.5 * FPS,
        value: 0 - 500,
        dir: CARDINALS.UP
      }
    },
    {
      character: SHIPS.XWING,
      details: {
        bounceLimit: 0,
        delay: 5.5 * FPS,
        value: 0 - 500,
        dir: CARDINALS.UP
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
    // tantive4,
    // ambassador,
    // tatooine,
    // search,
    // sandcrawler,
    // moistureFarm,
    // mosEisley,
    // dockingBay,
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
