import { CARDINALS, COLORS, FPS } from '/js/constants/config.js';
import * as CHARACTERS            from '/js/constants/characters.js';
import { OBSTACLES }              from '/js/constants/obstacles.js';
import { SHIPS }                  from '/js/constants/ships.js';

export const ATTRACTION = {
  bg: 'metal',
  bosses: [],
  character: CHARACTERS.rebel,
  cutscenes: [],
  enemiesOptional: [],
  enemiesRequiredTemplate: {
    bounceLimit:   undefined,
    character:     CHARACTERS.stormtrooper,
    count:         3,
    delayInterval: 1 * FPS,
    dir:           CARDINALS.RIGHT,
    hp:            1
  },
  friendlies: [
    {
      character: CHARACTERS.rebel,
      details: {
        bounceLimit: undefined,
        delay:       0.5 * FPS,
        dir:         CARDINALS.LEFT,
        hp:          1
      }
    },
    {
      character: CHARACTERS.rebel,
      details: {
        bounceLimit: undefined,
        delay:       1.5 * FPS,
        dir:         CARDINALS.LEFT,
        hp:          1
      }
    },
    {
      character: CHARACTERS.rebel,
      details: {
        bounceLimit: undefined,
        delay:       2.5 * FPS,
        dir:         CARDINALS.LEFT,
        hp:          1
      }
    },
    {
      character: CHARACTERS.threepio,
      details: {
        bounceLimit: 0,
        delay:       2 * FPS,
        dir:         CARDINALS.DOWN,
        hp:          1
      }
    },
    {
      character: CHARACTERS.artoo,
      details: {
        bounceLimit: 0,
        delay:       4 * FPS,
        dir:         CARDINALS.DOWN,
        hp:          1
      }
    }
  ],
  name: null,
  neutrals: [],
  obstacles: [],
  password: undefined,
  textColor: COLORS.BLACK
};

//Episode IV levels
const tantive4 = {
  bg: 'metal',
  bosses: [
    {
      character: CHARACTERS.officerblack,
      details: {
        bounceLimit: undefined,
        delay:       0,
        dir:         undefined,
        hp:          2
      }
    }
  ],
  character: CHARACTERS.rebel,
  cutscenes: [
    'preface',
    'episode4-destroyer'
  ],
  enemiesOptional: [],
  enemiesRequiredTemplate: {
    bounceLimit:   undefined,
    character:     CHARACTERS.stormtrooper,
    count:         10,
    delayInterval: 2 * FPS,
    dir:           CARDINALS.RIGHT,
    hp:            1
  },
  friendlies: [
    {
      character: CHARACTERS.threepio,
      details: {
        bounceLimit: 0,
        delay:       3 * FPS,
        dir:         CARDINALS.DOWN,
        hp:          1
      }
    },
    {
      character: CHARACTERS.artoo,
      details: {
        bounceLimit: 0,
        delay:       5 * FPS,
        dir:         CARDINALS.DOWN,
        hp:          1
      }
    }
  ],
  name: 'Tantive IV',
  neutrals: [],
  obstacles: [],
  password: undefined,
  textColor: 'black'
};

const ambassador = {
  bg: 'metal',
  bosses: [
    {
      character: CHARACTERS.leia,
      details: {
        bounceLimit: undefined,
        delay:       0,
        dir:         undefined,
        hp:          1
      }
    }
  ],
  character: CHARACTERS.stuntrooper,
  cutscenes: [
    'episode4-antilles'
  ],
  enemiesOptional: [],
  enemiesRequiredTemplate: {
    bounceLimit:   undefined,
    character:     CHARACTERS.rebel,
    count:         3,
    delayInterval: 2 * FPS,
    dir:           CARDINALS.LEFT,
    hp:            1
  },
  friendlies: [],
  name: 'Ambassador',
  neutrals: [
    {
      character: CHARACTERS.protocolwhite,
      details: {
        bounceLimit: 0,
        delay:       5.5 * FPS,
        dir:         CARDINALS.DOWN,
        hp:          1
      }
    }
  ],
  obstacles: [],
  password: undefined,
  textColor: 'black'
};

const tatooine = {
  bg: 'sand',
  bosses: [
    {
      character: CHARACTERS.artoo,
      details: {
        bounceLimit: undefined,
        delay:       0,
        dir:         undefined,
        hp:          1
      }
    }  ],
  character: CHARACTERS.jawa,
  cutscenes: [
    'episode4-pod',
    'episode4-crash'
  ],
  enemiesOptional: [],
  enemiesRequiredTemplate: {
    bounceLimit:   undefined,
    character:     CHARACTERS.threepio,
    count:         1,
    delayInterval: 0,
    dir:           undefined,
    hp:            1
  },
  friendlies: [
    {
      character: CHARACTERS.jawa,
      details: {
        bounceLimit: undefined,
        delay:       1.5 * FPS,
        dir:         undefined,
        hp:          1
      }
    },
    {
      character: CHARACTERS.jawa,
      details: {
        bounceLimit: undefined,
        delay:       2.5 * FPS,
        dir:         undefined,
        hp:          1
      }
    },
    {
      character: CHARACTERS.jawa,
      details: {
        bounceLimit: undefined,
        delay:       3.5 * FPS,
        dir:         undefined,
        hp:          1
      }
    }
  ],
  name: 'Tatooine',
  neutrals: [],
  obstacles: [
    {
      type: OBSTACLES.DRAGON,
      x: 50,
      y: 66
    }
  ],
  password: undefined,
  textColor: 'black'
};

const search = {
  bg: 'sand',
  bosses: [
    {
      character: CHARACTERS.bantha,
      details: {
        bounceLimit: undefined,
        delay:       0,
        dir:         undefined,
        hp:          2
      }
    }
  ],
  character: CHARACTERS.luke,
  cutscenes: [
    'episode4-jawas',
    'episode4-hologram',
    'episode4-binoculars'
  ],
  enemiesOptional: [],
  enemiesRequiredTemplate: {
    bounceLimit:   undefined,
    character:     CHARACTERS.tusken,
    count:         10,
    delayInterval: 1.5 * FPS,
    dir:           CARDINALS.RIGHT,
    hp:            1
  },
  friendlies: [
    {
      character: CHARACTERS.threepio,
      details: {
        bounceLimit: 0,
        delay:       10.5 * FPS,
        dir:         CARDINALS.DOWN,
        hp:          1
      }
    },
    {
      character: CHARACTERS.artoo,
      details: {
        bounceLimit: 0,
        delay:       12.5 * FPS,
        dir:         CARDINALS.DOWN,
        hp:          1
      }
    }
  ],
  name: 'Search',
  neutrals: [],
  obstacles: [
    {
      type: OBSTACLES.SPEEDER,
      x: 33,
      y: 33
    }
  ],
  password: undefined,
  textColor: 'black'
};

const sandcrawler = {
  bg: 'rust',
  bosses: [
    {
      character: CHARACTERS.threebee,
      details: {
        bounceLimit: undefined,
        delay:       0,
        dir:         undefined,
        hp:          2
      }
    }
  ],
  character: CHARACTERS.sandtrooper,
  cutscenes: [
    'episode4-tusken'
  ],
  enemiesOptional: [],
  enemiesRequiredTemplate: {
    bounceLimit:   undefined,
    character:     CHARACTERS.jawa,
    count:         10,
    delayInterval: 2 * FPS,
    dir:           undefined,
    hp:            1
  },
  friendlies: [],
  name: 'Sandcrawler',
  neutrals: [
    {
      character: CHARACTERS.arfive,
      details: {
        bounceLimit: 0,
        delay:       5.5 * FPS,
        dir:         undefined,
        hp:          1
      }
    },
    {
      character: CHARACTERS.gonkdroid,
      details: {
        bounceLimit: 0,
        delay:       10.5 * FPS,
        dir:         CARDINALS.LEFT,
        hp:          1
      }
    }
  ],
  obstacles: [],
  password: undefined,
  textColor: COLORS.BLACK
};

const moistureFarm = {
  bg: 'sand',
  bosses: [
    {
      character: CHARACTERS.auntberu,
      details: {
        bounceLimit: undefined,
        delay:       0,
        dir:         undefined,
        hp:          1
      }
    }
  ],
  character: CHARACTERS.sandtrooper,
  cutscenes: [],
  enemiesOptional: [],
  enemiesRequiredTemplate: {
    bounceLimit:   undefined,
    character:     CHARACTERS.uncleowen,
    count:         1,
    delayInterval: 0,
    dir:           undefined,
    hp:            1
  },
  friendlies: [
    {
      character: undefined,
      details: {
        bounceLimit: undefined,
        delay:       undefined,
        dir:         undefined,
        hp:          undefined
      }
    }
  ],
  name: 'Moisture Farm',
  neutrals: [],
  obstacles: [
    {
      type: OBSTACLES.IGLOO,
      x: 66,
      y: 33
    }
  ],
  password: undefined,
  textColor: COLORS.BLACK
};

const mosEisley = {
  bg: 'marble',
  bosses: [
    {
      character: CHARACTERS.pondababa,
      details: {
        bounceLimit: undefined,
        delay:       0,
        dir:         undefined,
        hp:          1
      }
    }
  ],
  character: CHARACTERS.ben,
  cutscenes: [],
  enemiesOptional: [
    {
      character: CHARACTERS.greedo,
      details: {
        bounceLimit: 0,
        delay:       30 * FPS,
        dir:         undefined,
        hp:          1
      }
    }
  ],
  enemiesRequiredTemplate: {
    bounceLimit:   undefined,
    character:     CHARACTERS.sandtrooper,
    count:         10,
    delayInterval: 2 * FPS,
    dir:           undefined,
    hp:            1
  },
  friendlies: [
    {
      character: CHARACTERS.chewbacca,
      details: {
        bounceLimit: 0,
        delay:       10.5 * FPS,
        dir:         undefined,
        hp:          1
      }
    },
    {
      character: CHARACTERS.hansolo,
      details: {
        bounceLimit: 0,
        delay:       10.5 * FPS,
        dir:         undefined,
        hp:          1
      }
    }
  ],
  name: 'Mos Eisley',
  neutrals: [],
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
  password: undefined,
  textColor: COLORS.BLACK
};

const dockingBay = {
  bg: 'dust',
  bosses: [
    {
      character: CHARACTERS.garindan,
      details: {
        bounceLimit: undefined,
        delay:       0,
        dir:         undefined,
        hp:          2
      }
    }
  ],
  character: CHARACTERS.hansolo,
  cutscenes: [],
  enemiesOptional: [
    {
      character: CHARACTERS.jabba,
      details: {
        bounceLimit: undefined,
        delay:       30 * FPS,
        dir:         undefined,
        hp:          5
      }
    }
  ],
  enemiesRequiredTemplate: {
    bounceLimit:   undefined,
    character:     CHARACTERS.sandtrooper,
    count:         10,
    delayInterval: 2 * FPS,
    dir:           undefined,
    hp:            1
  },
  friendlies: [],
  name: 'Docking Bay 94',
  obstacles: [
    {
      type: OBSTACLES.FALCON,
      x: 100,
      y: 0
    }
  ],
  password: undefined,
  textColor: 'black'
};

const alderaan = {
  bg: 'space',
  bosses: [
    {
      character: SHIPS.TIE,
      details: {
        bounceLimit: undefined,
        delay:       0,
        dir:         undefined,
        hp:          2
      }
    }
  ],
  character: SHIPS.FALCON,
  cutscenes: [
    'episode4-tarkin',
    'episode4-deathstar',
    'episode4-alderaan'
  ],
  enemiesOptional: [],
  enemiesRequiredTemplate: {
    bounceLimit:   undefined,
    character:     SHIPS.ASTEROID,
    count:         10,
    delayInterval: 3 * FPS,
    dir:           undefined,
    hp:            1
  },
  friendlies: [],
  name: 'Alderaan',
  neutrals: [],
  obstacles: [],
  password: undefined,
  textColor: COLORS.YELLOW
};

const detention = {
  bg: 'dark',
  bosses: [
    {
      character: CHARACTERS.mousedroid,
      details: {
        bounceLimit: undefined,
        delay:       0,
        dir:         undefined,
        hp:          2
      }
    }
  ],
  character: CHARACTERS.chewbacca,
  cutscenes: [],
  enemiesOptional: [],
  enemiesRequiredTemplate: {
    bounceLimit:   undefined,
    character:     CHARACTERS.deathstartrooper,
    count:         10,
    delayInterval: 2 * FPS,
    dir:           undefined,
    hp:            1
  },
  friendlies: [
    {
      character: CHARACTERS.stormtrooperhan,
      details: {
        bounceLimit: 0,
        delay:       1.5 * FPS,
        dir:         CARDINALS.RIGHT,
        hp:          1
      }
    },
    {
      character: CHARACTERS.stormtrooperluke,
      details: {
        bounceLimit: 0,
        delay:       1.75 * FPS,
        dir:         CARDINALS.RIGHT,
        hp:          1
      }
    }
  ],
  name: 'Detention',
  neutrals: [],
  obstacles: [
    {
      type: OBSTACLES.DESKS,
      x: 75,
      y: 50
    }
  ],
  password: undefined,
  textColor: 'black'
};

const tractorBeam = {
  bg: 'dark',
  bosses: [
    {
      character: CHARACTERS.darthvader,
      details: {
        bounceLimit: undefined,
        delay:       0,
        dir:         undefined,
        hp:          5
      }
    }
  ],
  character: CHARACTERS.ben,
  cutscenes: [],
  enemiesOptional: [],
  enemiesRequiredTemplate: {
    bounceLimit:   undefined,
    character:     CHARACTERS.stormtrooper,
    count:         10,
    delayInterval: 2 * FPS,
    dir:           CARDINALS.RIGHT,
    hp:            1
  },
  friendlies: [],
  name: 'Tractor Beam',
  neutrals: [],
  obstacles: [
    {
      type: OBSTACLES.GENERATOR,
      x: 50,
      y: 0
    }
  ],
  password: undefined,
  textColor: 'black'
};

const showdown4 = {
  bg: 'dark',
  bosses: [
    {
      character: CHARACTERS.ben,
      details: {
        bounceLimit: undefined,
        delay:       0,
        dir:         undefined,
        hp:          1
      }
    }
  ],
  character: CHARACTERS.darthvader,
  cutscenes: [],
  enemiesOptional: [],
  enemiesRequiredTemplate: {
    bounceLimit:   undefined,
    character:     undefined,
    count:         0,
    delayInterval: undefined,
    dir:           undefined,
    hp:            undefined
  },
  friendlies: [],
  name: 'Showdown',
  neutrals: [],
  obstacles: [],
  password: undefined,
  textColor: 'black'
};

const escapeFromDeathStar = {
  bg: 'dark',
  bosses: [
    {
      character: CHARACTERS.tiepilot,
      details: {
        bounceLimit: undefined,
        delay:       0,
        dir:         undefined,
        hp:          2
      }
    }
  ],
  character: CHARACTERS.leia,
  cutscenes: [],
  enemiesOptional: [],
  enemiesRequiredTemplate: {
    bounceLimit:   undefined,
    character:     CHARACTERS.stormtrooper,
    count:         10,
    delayInterval: 2 * FPS,
    dir:           undefined,
    hp:            1
  },
  friendlies: [
    {
      character: CHARACTERS.hansolo,
      details: {
        bounceLimit: 0,
        delay:       5.5 * FPS,
        dir:         undefined,
        hp:          1
      }
    },
    {
      character: CHARACTERS.luke,
      details: {
        bounceLimit: 0,
        delay:       10.5 * FPS,
        dir:         undefined,
        hp:          1
      }
    },
    {
      character: CHARACTERS.chewbacca,
      details: {
        bounceLimit: 0,
        delay:       15.5 * FPS,
        dir:         undefined,
        hp:          1
      }
    }
  ],
  name: 'Escape',
  neutrals: [],
  obstacles: [
    {
      type: OBSTACLES.FALCONBIG,
      x: 100,
      y: 0
    }
  ],
  password: undefined,
  textColor: 'black'
};

const battleOfYavin = {
  bg: 'space',
  bosses: [
    {
      character: SHIPS.TIE_ADVANCED,
      details: {
        bounceLimit: undefined,
        delay:       0,
        dir:         undefined,
        hp:          2
      }
    }
  ],
  character: SHIPS.FALCON,
  cutscenes: [],
  enemiesOptional: [],
  enemiesRequiredTemplate: {
    bounceLimit:   undefined,
    character:     SHIPS.TIE,
    count:         3,
    delayInterval: 1 * FPS,
    dir:           CARDINALS.DOWN,
    hp:            1
  },
  friendlies: [
    {
      character: SHIPS.XWING,
      details: {
        bounceLimit: 0,
        delay:       5 * FPS,
        dir:         CARDINALS.UP,
        hp:          1
      }
    },
    {
      character: SHIPS.XWING,
      details: {
        bounceLimit: 0,
        delay:       5 * FPS,
        dir:         CARDINALS.UP,
        hp:          1
      }
    },
    {
      character: SHIPS.XWING,
      details: {
        bounceLimit: 0,
        delay:       5 * FPS,
        dir:         CARDINALS.UP,
        hp:          1
      }
    }
  ],
  name: 'The Battle of Yavin',
  neutrals: [],
  obstacles: [],
  password: undefined,
  textColor: COLORS.YELLOW
};

const assaultOnDeathStar = {
  bg: 'space',
  bosses: [
    {
      character: SHIPS.DEATHSTAR,
      details: {
        bounceLimit: undefined,
        delay:       0,
        dir:         undefined,
        hp:          10
      }
    }
  ],
  character: SHIPS.XWING,
  cutscenes: [],
  enemiesOptional: [],
  enemiesRequiredTemplate: {
    bounceLimit:   undefined,
    character:     undefined,
    count:         0,
    delayInterval: undefined,
    dir:           undefined,
    hp:            undefined
  },
  friendlies: [],
  name: 'Death Star',
  neutrals: [],
  obstacles: [],
  password: undefined,
  textColor: COLORS.YELLOW
};

//Episode V levels
const hoth = {
  bg: 'snow',
  bosses: [
    {
      character: CHARACTERS.mousedroid, // add wampa
      details: {
        bounceLimit: undefined,
        delay:       0,
        dir:         undefined,
        hp:          2
      }
    }
  ],
  character: CHARACTERS.luke5,
  cutscenes: [],
  enemiesOptional: [],
  enemiesRequiredTemplate: {
    bounceLimit:   undefined,
    character:     CHARACTERS.tauntaun, // add probe droid
    count:         10,
    delayInterval: 2 * FPS,
    dir:           undefined,
    hp:            1
  },
  friendlies: [],
  name: 'Hoth',
  neutrals: [],
  obstacles: [],
  password: undefined,
  textColor: 'black',
};

//Episode VI levels
const endor = {
  bg: 'grass',
  bosses: [
    {
      character: CHARACTERS.atst,
      details: {
        bounceLimit: undefined,
        delay:       0,
        dir:         undefined,
        hp:          2
      }
    }
  ],
  character: CHARACTERS.ewok,
  cutscenes: [],
  enemiesOptional: [],
  enemiesRequiredTemplate: {
    bounceLimit:   undefined,
    character:     CHARACTERS.stormtrooper,
    count:         10,
    delayInterval: 2 * FPS,
    dir:           undefined,
    hp:            1
  },
  friendlies: [
    {
      character: CHARACTERS.threepio,
      details: {
        bounceLimit: 0,
        delay:       5 * FPS,
        dir:         undefined,
        hp:          1
      }
    }
  ],
  name: 'Endor',
  neutrals: [],
  obstacles: [],
  password: undefined,
  textColor: 'black',
};

const test = {
  bg: 'metal',
  bosses: [
    {
      character: CHARACTERS.darthvader,
      details: {
        bounceLimit: undefined,
        delay:       0,
        dir:         CARDINALS.DOWN,
        hp:          2
      }
    },
    {
      character: CHARACTERS.darthvader6,
      details: {
        bounceLimit: undefined,
        delay:       0,
        dir:         CARDINALS.UP,
        hp:          3
      }
    }
  ],
  character: CHARACTERS.artoo,
  cutscenes: [],
  enemiesOptional: [
    {
      character: CHARACTERS.deathstartrooper,
      details: {
        bounceLimit: 1,
        delay:       5 * FPS,
        dir:         undefined,
        hp:          1
      }
    }
  ],
  enemiesRequiredTemplate: {
    bounceLimit:   undefined,
    character:     CHARACTERS.officerblack,
    count:         3,
    delayInterval: 2 * FPS,
    dir:           CARDINALS.LEFT,
    hp:            1
  },
  friendlies: [
    {
      character: CHARACTERS.bb8,
      details: {
        bounceLimit: undefined,
        delay:       2 * FPS,
        dir:         CARDINALS.RIGHT,
        hp:          2
      }
    }
  ],
  name: 'Test Kitchen',
  neutrals: [
    {
      character: CHARACTERS.mousedroid,
      details: {
        bounceLimit: undefined,
        delay:       10 * FPS,
        dir:         undefined,
        hp:          1
      }
    }
  ],
  obstacles: [
    {
      type: OBSTACLES.DRAGON,
      x: 50,
      y: 66
    }
  ],
  password: '',
  textColor: COLORS.BLACK
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
