import {
  CARDINALS,
  COLORS,
  FPS,
  INFINITY
} from '/js/constants/config.js';
import * as CHARACTERS from '/js/constants/characters.js';
import { OBSTACLES }   from '/js/constants/obstacles.js';
import { SHIPS }       from '/js/constants/ships.js';

const isQuickTest = true;

export const ATTRACTION = {
  bg: 'metal',
  bosses: [],
  character: CHARACTERS.rebel,
  cutscenes: [],
  enemiesOptional: [],
  enemiesRequiredData: {
    character    : CHARACTERS.stormtrooper,
    count        : 3,
    delayInterval: 1 * FPS,
    dir          : CARDINALS.RIGHT,
    hp           : 1
  },
  friendlies: [
    {
      character: CHARACTERS.rebel,
      details: {
        bounceLimit: INFINITY,
        delay      : 0.5 * FPS,
        dir        : CARDINALS.LEFT,
        hp         : 1
      }
    },
    {
      character: CHARACTERS.rebel,
      details: {
        bounceLimit: INFINITY,
        delay      : 1.5 * FPS,
        dir        : CARDINALS.LEFT,
        hp         : 1
      }
    },
    {
      character: CHARACTERS.rebel,
      details: {
        bounceLimit: INFINITY,
        delay      : 2.5 * FPS,
        dir        : CARDINALS.LEFT,
        hp         : 1
      }
    },
    {
      character: CHARACTERS.threepio,
      details: {
        bounceLimit: 0,
        delay      : 2 * FPS,
        dir        : CARDINALS.DOWN,
        hp         : 1
      }
    },
    {
      character: CHARACTERS.artoo,
      details: {
        bounceLimit: 0,
        delay      : 4 * FPS,
        dir        : CARDINALS.DOWN,
        hp         : 1
      }
    }
  ],
  name: 'Star Wars',
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
        delay: 0,
        dir  : null,
        hp   : isQuickTest ? 1 : 2
      }
    }
  ],
  character: CHARACTERS.rebel,
  cutscenes: [
    'preface',
    'episode4-destroyer'
  ],
  enemiesOptional: [],
  enemiesRequiredData: {
    character    : CHARACTERS.stormtrooper,
    count        : isQuickTest ? 1 : 10,
    delayInterval: 2 * FPS,
    dir          : CARDINALS.RIGHT,
    hp           : isQuickTest ? 1 : 1
  },
  friendlies: [
    {
      character: CHARACTERS.threepio,
      details: {
        bounceLimit: 0,
        delay      : 3 * FPS,
        dir        : CARDINALS.DOWN,
        hp         : isQuickTest ? 1 : 1
      }
    },
    {
      character: CHARACTERS.artoo,
      details: {
        bounceLimit: 0,
        delay      : 5 * FPS,
        dir        : CARDINALS.DOWN,
        hp         : isQuickTest ? 1 : 1
      }
    }
  ],
  name: 'Tantive IV',
  neutrals: [],
  obstacles: [],
  password: undefined,
  textColor: COLORS.BLACK
};

const ambassador = {
  bg: 'metal',
  bosses: [
    {
      character: CHARACTERS.leia,
      details: {
        delay: 0,
        dir  : null,
        hp   : isQuickTest ? 1 : 1
      }
    }
  ],
  character: CHARACTERS.stuntrooper,
  cutscenes: [
    'episode4-antilles'
  ],
  enemiesOptional: [],
  enemiesRequiredData: {
    character    : CHARACTERS.rebel,
    count        : isQuickTest ? 1 : 3,
    delayInterval: 2 * FPS,
    dir          : CARDINALS.LEFT,
    hp           : isQuickTest ? 1 : 1
  },
  friendlies: [],
  name: 'Ambassador',
  neutrals: [
    {
      character: CHARACTERS.protocolwhite,
      details: {
        bounceLimit: 0,
        delay      : 5.5 * FPS,
        dir        : CARDINALS.DOWN,
        hp         : isQuickTest ? 1 : 1
      }
    }
  ],
  obstacles: [],
  password: undefined,
  textColor: COLORS.BLACK
};

const tatooine = {
  bg: 'sand',
  bosses: [
    {
      character: CHARACTERS.artoo,
      details: {
        delay: 0,
        dir  : CARDINALS.UP,
        hp   : isQuickTest ? 1 : 1
      }
    }  ],
  character: CHARACTERS.jawa,
  cutscenes: [
    'episode4-pod',
    'episode4-crash'
  ],
  enemiesOptional: [],
  enemiesRequiredData: {
    character    : CHARACTERS.threepio,
    count        : isQuickTest ? 1 : 1,
    delayInterval: 0,
    dir          : CARDINALS.DOWN,
    hp           : isQuickTest ? 1 : 1
  },
  friendlies: [
    {
      character: CHARACTERS.jawa,
      details: {
        bounceLimit: INFINITY,
        delay      : 1.5 * FPS,
        dir        : null,
        hp         : isQuickTest ? 1 : 1
      }
    },
    {
      character: CHARACTERS.jawa,
      details: {
        bounceLimit: INFINITY,
        delay      : 2.5 * FPS,
        dir        : null,
        hp         : isQuickTest ? 1 : 1
      }
    },
    {
      character: CHARACTERS.jawa,
      details: {
        bounceLimit: INFINITY,
        delay      : 3.5 * FPS,
        dir        : null,
        hp         : isQuickTest ? 1 : 1
      }
    }
  ],
  name: 'Tatooine',
  neutrals: [],
  obstacles: [
    {
      type: OBSTACLES.DRAGON,
      x   : 50,
      y   : 66
    }
  ],
  password: undefined,
  textColor: COLORS.BLACK
};

const search = {
  bg: 'sand',
  bosses: [
    {
      character: CHARACTERS.bantha,
      details: {
        delay: 0,
        dir  : null,
        hp   : isQuickTest ? 1 : 2
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
  enemiesRequiredData: {
    character    : CHARACTERS.tusken,
    count        : isQuickTest ? 1 : 10,
    delayInterval: 1.5 * FPS,
    dir          : CARDINALS.RIGHT,
    hp           : isQuickTest ? 1 : 1
  },
  friendlies: [
    {
      character: CHARACTERS.threepio,
      details: {
        bounceLimit: 0,
        delay      : 10.5 * FPS,
        dir        : CARDINALS.DOWN,
        hp         : isQuickTest ? 1 : 1
      }
    },
    {
      character: CHARACTERS.artoo,
      details: {
        bounceLimit: 0,
        delay      : 12.5 * FPS,
        dir        : CARDINALS.DOWN,
        hp         : isQuickTest ? 1 : 1
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
  textColor: COLORS.BLACK
};

const sandcrawler = {
  bg: 'rust',
  bosses: [
    {
      character: CHARACTERS.threebee,
      details: {
        delay: 0,
        dir  : null,
        hp   : isQuickTest ? 1 : 2
      }
    }
  ],
  character: CHARACTERS.sandtrooper,
  cutscenes: [
    'episode4-tusken'
  ],
  enemiesOptional: [],
  enemiesRequiredData: {
    character    : CHARACTERS.jawa,
    count        : isQuickTest ? 1 : 10,
    delayInterval: 2 * FPS,
    dir          : null,
    hp           : isQuickTest ? 1 : 1
  },
  friendlies: [],
  name: 'Sandcrawler',
  neutrals: [
    {
      character: CHARACTERS.arfive,
      details: {
        bounceLimit: 0,
        delay      : 5.5 * FPS,
        dir        : null,
        hp         : isQuickTest ? 1 : 1
      }
    },
    {
      character: CHARACTERS.gonkdroid,
      details: {
        bounceLimit: 0,
        delay      : 10.5 * FPS,
        dir        : CARDINALS.LEFT,
        hp         : isQuickTest ? 1 : 1
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
        delay: 0,
        dir  : null,
        hp   : isQuickTest ? 1 : 1
      }
    }
  ],
  character: CHARACTERS.sandtrooper,
  cutscenes: [],
  enemiesOptional: [],
  enemiesRequiredData: {
    character    : CHARACTERS.uncleowen,
    count        : isQuickTest ? 1 : 1,
    delayInterval: 0,
    dir          : null,
    hp           : isQuickTest ? 1 : 1
  },
  friendlies: [],
  name: 'Moisture Farm',
  neutrals: [],
  obstacles: [
    {
      type: OBSTACLES.IGLOO,
      x   : 66,
      y   : 33
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
        delay: 0,
        dir  : null,
        hp   : isQuickTest ? 1 : 1
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
        delay      : 30 * FPS,
        dir        : null,
        hp         : isQuickTest ? 1 : 1
      }
    }
  ],
  enemiesRequiredData: {
    character    : CHARACTERS.sandtrooper,
    count        : isQuickTest ? 1 : 10,
    delayInterval: 2 * FPS,
    dir          : null,
    hp           : isQuickTest ? 1 : 1
  },
  friendlies: [
    {
      character: CHARACTERS.chewbacca,
      details: {
        bounceLimit: 0,
        delay      : 10.5 * FPS,
        dir        : CARDINALS.LEFT,
        hp         : isQuickTest ? 1 : 1
      }
    },
    {
      character: CHARACTERS.hansolo,
      details: {
        bounceLimit: 0,
        delay      : 10.5 * FPS,
        dir        : CARDINALS.LEFT,
        hp         : isQuickTest ? 1 : 1
      }
    }
  ],
  name: 'Mos Eisley',
  neutrals: [],
  obstacles: [
    {
      type: OBSTACLES.BAR,
      x   : 0,
      y   : 50
    },
    {
      type: OBSTACLES.TABLE,
      x   : 25,
      y   : 25
    },
    {
      type: OBSTACLES.TABLE,
      x   : 50,
      y   : 25
    },
    {
      type: OBSTACLES.TABLE,
      x   : 75,
      y   : 25
    },
    {
      type: OBSTACLES.TABLE,
      x   : 75,
      y   : 50
    },
    {
      type: OBSTACLES.TABLE,
      x   : 25,
      y   : 75
    },
    {
      type: OBSTACLES.TABLE,
      x   : 50,
      y   : 75
    },
    {
      type: OBSTACLES.TABLE,
      x   : 75,
      y   : 75
    },
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
        delay: 0,
        dir  : null,
        hp   : isQuickTest ? 1 : 2
      }
    }
  ],
  character: CHARACTERS.hansolo,
  cutscenes: [],
  enemiesOptional: [
    {
      character: CHARACTERS.jabba,
      details: {
        bounceLimit: INFINITY,
        delay      : 30 * FPS,
        dir        : null,
        hp         : isQuickTest ? 1 : 5
      }
    }
  ],
  enemiesRequiredData: {
    character    : CHARACTERS.sandtrooper,
    count        : isQuickTest ? 1 : 10,
    delayInterval: 2 * FPS,
    dir          : null,
    hp           : isQuickTest ? 1 : 1
  },
  friendlies: [],
  name: 'Docking Bay 94',
  obstacles: [
    {
      type: OBSTACLES.FALCON,
      x   : 100,
      y   : 0
    }
  ],
  password: undefined,
  textColor: COLORS.BLACK
};

const alderaan = {
  bg: 'space',
  bosses: [
    {
      character: SHIPS.TIE,
      details: {
        delay: 0,
        dir  : null,
        hp   : isQuickTest ? 1 : 2
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
  enemiesRequiredData: {
    character    : SHIPS.ASTEROID,
    count        : isQuickTest ? 1 : 10,
    delayInterval: 3 * FPS,
    dir          : null,
    hp           : isQuickTest ? 1 : 1
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
        delay: 0,
        dir  : null,
        hp   : isQuickTest ? 1 : 2
      }
    }
  ],
  character: CHARACTERS.chewbacca,
  cutscenes: [],
  enemiesOptional: [],
  enemiesRequiredData: {
    character    : CHARACTERS.deathstartrooper,
    count        : isQuickTest ? 1 : 10,
    delayInterval: 2 * FPS,
    dir          : null,
    hp           : isQuickTest ? 1 : 1
  },
  friendlies: [
    {
      character: CHARACTERS.stormtrooperhan,
      details: {
        bounceLimit: 0,
        delay      : 1.5 * FPS,
        dir        : CARDINALS.RIGHT,
        hp         : isQuickTest ? 1 : 1
      }
    },
    {
      character: CHARACTERS.stormtrooperluke,
      details: {
        bounceLimit: 0,
        delay      : 1.75 * FPS,
        dir        : CARDINALS.RIGHT,
        hp         : isQuickTest ? 1 : 1
      }
    }
  ],
  name: 'Detention',
  neutrals: [],
  obstacles: [
    {
      type: OBSTACLES.DESKS,
      x   : 75,
      y   : 50
    }
  ],
  password: undefined,
  textColor: COLORS.BLACK
};

const tractorBeam = {
  bg: 'dark',
  bosses: [
    {
      character: CHARACTERS.darthvader,
      details: {
        delay: 0,
        dir  : null,
        hp   : isQuickTest ? 1 : 5
      }
    }
  ],
  character: CHARACTERS.ben,
  cutscenes: [],
  enemiesOptional: [],
  enemiesRequiredData: {
    character    : CHARACTERS.stormtrooper,
    count        : isQuickTest ? 1 : 10,
    delayInterval: 2 * FPS,
    dir          : CARDINALS.RIGHT,
    hp           : isQuickTest ? 1 : 1
  },
  friendlies: [],
  name: 'Tractor Beam',
  neutrals: [],
  obstacles: [
    {
      type: OBSTACLES.GENERATOR,
      x   : 50,
      y   : 0
    }
  ],
  password: undefined,
  textColor: COLORS.BLACK
};

const showdown4 = {
  bg: 'dark',
  bosses: [
    {
      character: CHARACTERS.ben,
      details: {
        delay: 0,
        dir  : null,
        hp   : isQuickTest ? 1 : 1
      }
    }
  ],
  character: CHARACTERS.darthvader,
  cutscenes: [],
  enemiesOptional: [],
  enemiesRequiredData: {
    character    : null,
    count        : 0,
    delayInterval: null,
    dir          : null,
    hp           : null
  },
  friendlies: [],
  name: 'Showdown',
  neutrals: [],
  obstacles: [],
  password: undefined,
  textColor: COLORS.BLACK
};

const escapeFromDeathStar = {
  bg: 'dark',
  bosses: [
    {
      character: CHARACTERS.tiepilot,
      details: {
        delay: 0,
        dir  : null,
        hp   : isQuickTest ? 1 : 2
      }
    }
  ],
  character: CHARACTERS.leia,
  cutscenes: [],
  enemiesOptional: [],
  enemiesRequiredData: {
    character    : CHARACTERS.stormtrooper,
    count        : isQuickTest ? 1 : 10,
    delayInterval: 2 * FPS,
    dir          : null,
    hp           : isQuickTest ? 1 : 1
  },
  friendlies: [
    {
      character: CHARACTERS.hansolo,
      details: {
        bounceLimit: 0,
        delay      : 5.5 * FPS,
        dir        : null,
        hp         : isQuickTest ? 1 : 1
      }
    },
    {
      character: CHARACTERS.luke,
      details: {
        bounceLimit: 0,
        delay      : 10.5 * FPS,
        dir        : null,
        hp         : isQuickTest ? 1 : 1
      }
    },
    {
      character: CHARACTERS.chewbacca,
      details: {
        bounceLimit: 0,
        delay      : 15.5 * FPS,
        dir        : null,
        hp         : isQuickTest ? 1 : 1
      }
    }
  ],
  name: 'Escape',
  neutrals: [],
  obstacles: [
    {
      type: OBSTACLES.FALCON,
      x   : 100,
      y   : 0
    }
  ],
  password: undefined,
  textColor: COLORS.BLACK
};

const battleOfYavin = {
  bg: 'space',
  bosses: [
    {
      character: SHIPS.TIE_ADVANCED,
      details: {
        delay: 0,
        dir  : null,
        hp   : isQuickTest ? 1 : 5
      }
    }
  ],
  character: SHIPS.FALCON,
  cutscenes: [],
  enemiesOptional: [],
  enemiesRequiredData: {
    character    : SHIPS.TIE,
    count        : isQuickTest ? 1 : 3,
    delayInterval: 0.25 * FPS,
    dir          : CARDINALS.DOWN,
    hp           : isQuickTest ? 1 : 2
  },
  friendlies: [
    {
      character: SHIPS.XWING,
      details: {
        bounceLimit: 0,
        delay      : 5 * FPS,
        dir        : CARDINALS.UP,
        hp         : isQuickTest ? 1 : 1
      }
    },
    {
      character: SHIPS.XWING,
      details: {
        bounceLimit: 0,
        delay      : 5 * FPS,
        dir        : CARDINALS.UP,
        hp         : isQuickTest ? 1 : 1
      }
    },
    {
      character: SHIPS.XWING,
      details: {
        bounceLimit: 0,
        delay      : 5 * FPS,
        dir        : CARDINALS.UP,
        hp         : isQuickTest ? 1 : 1
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
        delay: 0,
        dir  : null,
        hp   : isQuickTest ? 1 : 10
      }
    }
  ],
  character: SHIPS.XWING,
  cutscenes: [],
  enemiesOptional: [],
  enemiesRequiredData: {
    character    : null,
    count        : 0,
    delayInterval: null,
    dir          : null,
    hp           : null
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
        delay: 0,
        dir  : null,
        hp   : isQuickTest ? 1 : 2
      }
    }
  ],
  character: CHARACTERS.luke5,
  cutscenes: [],
  enemiesOptional: [],
  enemiesRequiredData: {
    character    : CHARACTERS.tauntaun, // add probe droid
    count        : isQuickTest ? 1 : 10,
    delayInterval: 2 * FPS,
    dir          : null,
    hp           : isQuickTest ? 1 : 1
  },
  friendlies: [],
  name: 'Hoth',
  neutrals: [],
  obstacles: [],
  password: undefined,
  textColor: COLORS.BLACK
};

//Episode VI levels
const endor = {
  bg: 'grass',
  bosses: [
    {
      character: CHARACTERS.atst,
      details: {
        delay: 0,
        dir  : null,
        hp   : isQuickTest ? 1 : 2
      }
    }
  ],
  character: CHARACTERS.ewok,
  cutscenes: [],
  enemiesOptional: [],
  enemiesRequiredData: {
    character    : CHARACTERS.stormtrooper,
    count        : isQuickTest ? 1 : 10,
    delayInterval: 2 * FPS,
    dir          : null,
    hp           : isQuickTest ? 1 : 1
  },
  friendlies: [
    {
      character: CHARACTERS.threepio,
      details: {
        bounceLimit: 0,
        delay      : 5 * FPS,
        dir        : null,
        hp         : isQuickTest ? 1 : 1
      }
    }
  ],
  name: 'Endor',
  neutrals: [],
  obstacles: [],
  password: undefined,
  textColor: COLORS.BLACK
};

const test = {
  bg: 'metal',
  bosses: [
    // {
    //   character: CHARACTERS.darthvader,
    //   details: {
    //     delay: 0 * FPS,
    //     dir  : CARDINALS.DOWN,
    //     hp   : isQuickTest ? 1 : 1
    //   }
    // },
    // {
    //   character: CHARACTERS.darthvader6,
    //   details: {
    //     delay: 0 * FPS,
    //     dir  : CARDINALS.UP,
    //     hp   : isQuickTest ? 1 : 3
    //   }
    // }
  ],
  character: CHARACTERS.artoo,
  cutscenes: [],
  enemiesOptional: [
    // {
    //   character: CHARACTERS.deathstartrooper,
    //   details: {
    //     bounceLimit: 0,
    //     delay      : 0 * FPS,
    //     dir        : CARDINALS.RIGHT,
    //     hp         : isQuickTest ? 1 : 1
    //   }
    // }
  ],
  enemiesRequiredData: {
    character    : CHARACTERS.officerblack,
    count        : isQuickTest ? 1 : 1,
    delayInterval: 30 * FPS,
    dir          : CARDINALS.LEFT,
    hp           : isQuickTest ? 1 : 1
  },
  friendlies: [
    // {
    //   character: CHARACTERS.bb8,
    //   details: {
    //     bounceLimit: 1,
    //     delay      : 0 * FPS,
    //     dir        : CARDINALS.RIGHT,
    //     hp         : isQuickTest ? 1 : 2
    //   }
    // }
  ],
  name: 'Test Kitchen',
  neutrals: [
    {
      character: CHARACTERS.arfive,
      details: {
        bounceLimit: INFINITY,
        delay      : 0 * FPS,
        dir        : null,
        hp         : isQuickTest ? 1 : 1
      }
    },
    {
      character: CHARACTERS.auntberu,
      details: {
        bounceLimit: INFINITY,
        delay      : 0 * FPS,
        dir        : null,
        hp         : isQuickTest ? 1 : 1
      }
    },
    {
      character: CHARACTERS.ben,
      details: {
        bounceLimit: INFINITY,
        delay      : 0 * FPS,
        dir        : null,
        hp         : isQuickTest ? 1 : 1
      }
    },
    {
      character: CHARACTERS.darthvader6,
      details: {
        bounceLimit: INFINITY,
        delay      : 0 * FPS,
        dir        : null,
        hp         : isQuickTest ? 1 : 1
      }
    },
    {
      character: CHARACTERS.uncleowen,
      details: {
        bounceLimit: INFINITY,
        delay      : 0 * FPS,
        dir        : null,
        hp         : isQuickTest ? 1 : 1
      }
    },
    {
      character: CHARACTERS.threebee,
      details: {
        bounceLimit: INFINITY,
        delay      : 0 * FPS,
        dir        : null,
        hp         : isQuickTest ? 1 : 1
      }
    },
    {
      character: SHIPS.DEATHSTAR,
      details: {
        bounceLimit: INFINITY,
        delay      : 0 * FPS,
        dir        : null,
        hp         : isQuickTest ? 1 : 1
      }
    }
  ],
  obstacles: [
    {
      type: OBSTACLES.TABLE,
      x   : 75,
      y   : 75
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
  [endor],
  [test],
  [test],
  [test]
];
