import * as CHARACTERS from './characters.js';
import {
  CARDINALS,
  COLORS,
  FPS,
  INFINITY
} from '/js/constants/config.js';
import { BACKGROUNDS } from './backgrounds.js';
import { OBSTACLES } from './obstacles.js';
import { SHIPS } from './ships.js';

const isQuickTest = false;

export const ATTRACTION = {
  bg: BACKGROUNDS.TANTIVE,
  bosses: [],
  character: CHARACTERS.rebel,
  cutscenes: [],
  enemiesOptional: [],
  enemiesRequiredData: {
    character    : CHARACTERS.stormtrooper,
    count        : 3,
    dir          : CARDINALS.RIGHT,
    hp           : 1,
    spawnInterval: 1 * FPS
  },
  friendlies: [
    {
      character: CHARACTERS.rebel,
      details: {
        bounceLimit: INFINITY,
        dir        : CARDINALS.LEFT,
        hp         : 1,
        spawnFrame : 0.5 * FPS
      }
    },
    {
      character: CHARACTERS.rebel,
      details: {
        bounceLimit: INFINITY,
        dir        : CARDINALS.LEFT,
        hp         : 1,
        spawnFrame : 1.5 * FPS
      }
    },
    {
      character: CHARACTERS.rebel,
      details: {
        bounceLimit: INFINITY,
        dir        : CARDINALS.LEFT,
        hp         : 1,
        spawnFrame : 2.5 * FPS
      }
    },
    {
      character: CHARACTERS.threepio,
      details: {
        bounceLimit: 0,
        dir        : CARDINALS.DOWN,
        hp         : 1,
        spawnFrame : 2 * FPS
      }
    },
    {
      character: CHARACTERS.artoo,
      details: {
        bounceLimit: 0,
        dir        : CARDINALS.DOWN,
        hp         : 1,
        spawnFrame : 4 * FPS
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
const IV_01_TANTIVE_IV = {
  bg: BACKGROUNDS.TANTIVE,
  bosses: [
    {
      character: CHARACTERS.officerblack,
      details: {
        dir       : null,
        hp        : isQuickTest ? 1 : 2,
        spawnDelay: 1 * FPS
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
    dir          : CARDINALS.RIGHT,
    hp           : isQuickTest ? 1 : 1,
    spawnInterval: 2 * FPS
  },
  friendlies: [
    {
      character: CHARACTERS.threepio,
      details: {
        bounceLimit: 0,
        dir        : CARDINALS.DOWN,
        hp         : isQuickTest ? 1 : 1,
        spawnFrame : 3 * FPS
      }
    },
    {
      character: CHARACTERS.artoo,
      details: {
        bounceLimit: 0,
        dir        : CARDINALS.DOWN,
        hp         : isQuickTest ? 1 : 1,
        spawnFrame : 5 * FPS
      }
    }
  ],
  name: 'Tantive IV',
  neutrals: [],
  obstacles: [],
  password: undefined,
  textColor: COLORS.BLACK
};

const IV_02_AMBASSADOR = {
  bg: BACKGROUNDS.TANTIVE,
  bosses: [
    {
      character: CHARACTERS.leia,
      details: {
        dir       : null,
        hp        : isQuickTest ? 1 : 1,
        spawnDelay: 1 * FPS
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
    dir          : CARDINALS.LEFT,
    hp           : isQuickTest ? 1 : 1,
    spawnInterval: 2 * FPS
  },
  friendlies: [],
  name: 'Ambassador',
  neutrals: [
    {
      character: CHARACTERS.protocolwhite,
      details: {
        bounceLimit: 0,
        dir        : CARDINALS.DOWN,
        hp         : isQuickTest ? 1 : 1,
        spawnFrame : 5.5 * FPS
      }
    }
  ],
  obstacles: [],
  password: undefined,
  textColor: COLORS.BLACK
};

const IV_03_TATOOINE = {
  bg: BACKGROUNDS.SAND,
  bosses: [
    {
      character: CHARACTERS.artoo,
      details: {
        dir       : CARDINALS.UP,
        hp        : isQuickTest ? 1 : 1,
        spawnDelay: 1 * FPS
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
    dir          : CARDINALS.DOWN,
    hp           : isQuickTest ? 1 : 1,
    spawnInterval: 0
  },
  friendlies: [
    {
      character: CHARACTERS.jawa,
      details: {
        bounceLimit: INFINITY,
        dir        : null,
        hp         : isQuickTest ? 1 : 1,
        spawnFrame : 1.5 * FPS
      }
    },
    {
      character: CHARACTERS.jawa,
      details: {
        bounceLimit: INFINITY,
        dir        : null,
        hp         : isQuickTest ? 1 : 1,
        spawnFrame : 2.5 * FPS
      }
    },
    {
      character: CHARACTERS.jawa,
      details: {
        bounceLimit: INFINITY,
        dir        : null,
        hp         : isQuickTest ? 1 : 1,
        spawnFrame : 3.5 * FPS
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

const IV_04_SEARCH = {
  bg: BACKGROUNDS.SAND,
  bosses: [
    {
      character: CHARACTERS.bantha,
      details: {
        dir       : null,
        hp        : isQuickTest ? 1 : 2,
        spawnDelay: 1 * FPS
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
    dir          : CARDINALS.RIGHT,
    hp           : isQuickTest ? 1 : 1,
    spawnInterval: 1.5 * FPS
  },
  friendlies: [
    {
      character: CHARACTERS.threepio,
      details: {
        bounceLimit: 0,
        dir        : CARDINALS.DOWN,
        hp         : isQuickTest ? 1 : 1,
        spawnFrame : 10.5 * FPS
      }
    },
    {
      character: CHARACTERS.artoo,
      details: {
        bounceLimit: 0,
        dir        : CARDINALS.DOWN,
        hp         : isQuickTest ? 1 : 1,
        spawnFrame : 12.5 * FPS
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

const IV_05_SANDCRAWLER = {
  bg: BACKGROUNDS.SANDCRAWLER,
  bosses: [
    {
      character: CHARACTERS.threebee,
      details: {
        dir       : null,
        hp        : isQuickTest ? 1 : 1,
        spawnDelay: 1 * FPS
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
    dir          : null,
    hp           : isQuickTest ? 1 : 1,
    spawnInterval: 2 * FPS
  },
  friendlies: [],
  name: 'Sandcrawler',
  neutrals: [
    {
      character: CHARACTERS.arfive,
      details: {
        bounceLimit: 0,
        dir        : null,
        hp         : isQuickTest ? 1 : 1,
        spawnFrame : 5.5 * FPS
      }
    },
    {
      character: CHARACTERS.gonkdroid,
      details: {
        bounceLimit: 0,
        dir        : CARDINALS.LEFT,
        hp         : isQuickTest ? 1 : 1,
        spawnFrame : 10.5 * FPS
      }
    }
  ],
  obstacles: [],
  password: undefined,
  textColor: COLORS.BLACK
};

const IV_06_MOISTURE_FARM = {
  bg: BACKGROUNDS.SAND,
  bosses: [
    {
      character: CHARACTERS.auntberu,
      details: {
        dir  : null,
        hp   : isQuickTest ? 1 : 1,
        spawnDelay: 1 * FPS
      }
    }
  ],
  character: CHARACTERS.sandtrooper,
  cutscenes: [],
  enemiesOptional: [],
  enemiesRequiredData: {
    character    : CHARACTERS.uncleowen,
    count        : isQuickTest ? 1 : 1,
    dir          : null,
    hp           : isQuickTest ? 1 : 1,
    spawnInterval: 0
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

const IV_07_MOS_EISLEY = {
  bg: BACKGROUNDS.MARBLE,
  bosses: [
    {
      character: CHARACTERS.pondababa,
      details: {
        dir  : null,
        hp   : isQuickTest ? 1 : 1,
        spawnDelay: 1 * FPS
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
        dir        : null,
        hp         : isQuickTest ? 1 : 1,
        spawnFrame : 30 * FPS
      }
    }
  ],
  enemiesRequiredData: {
    character    : CHARACTERS.sandtrooper,
    count        : isQuickTest ? 1 : 10,
    dir          : null,
    hp           : isQuickTest ? 1 : 1,
    spawnInterval: 2 * FPS
  },
  friendlies: [
    {
      character: CHARACTERS.chewbacca,
      details: {
        bounceLimit: 0,
        dir        : CARDINALS.LEFT,
        hp         : isQuickTest ? 1 : 1,
        spawnFrame : 10.5 * FPS
      }
    },
    {
      character: CHARACTERS.hansolo,
      details: {
        bounceLimit: 0,
        dir        : CARDINALS.LEFT,
        hp         : isQuickTest ? 1 : 1,
        spawnFrame : 10.5 * FPS
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

const IV_08_DOCKING_BAY = {
  bg: BACKGROUNDS.DUST,
  bosses: [
    {
      character: CHARACTERS.garindan,
      details: {
        dir       : null,
        hp        : isQuickTest ? 1 : 2,
        spawnDelay: 1 * FPS
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
        dir        : null,
        hp         : isQuickTest ? 1 : 5,
        spawnFrame : 30 * FPS
      }
    }
  ],
  enemiesRequiredData: {
    character    : CHARACTERS.sandtrooper,
    count        : isQuickTest ? 1 : 10,
    dir          : null,
    hp           : isQuickTest ? 1 : 1,
    spawnInterval: 2 * FPS
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

const IV_09_ALDERAAN = {
  bg: BACKGROUNDS.SPACE,
  bosses: [
    {
      character: SHIPS.TIE,
      details: {
        dir       : null,
        hp        : isQuickTest ? 1 : 1,
        spawnDelay: 1 * FPS
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
    dir          : null,
    hp           : isQuickTest ? 1 : 1,
    spawnInterval: 1 * FPS
  },
  friendlies: [],
  name: 'Alderaan',
  neutrals: [],
  obstacles: [],
  password: undefined,
  textColor: COLORS.YELLOW
};

const IV_10_DETENTION = {
  bg: BACKGROUNDS.DEATH_STAR,
  bosses: [
    {
      character: CHARACTERS.mousedroid,
      details: {
        dir       : null,
        hp        : isQuickTest ? 1 : 1,
        spawnDelay: 1 * FPS
      }
    }
  ],
  character: CHARACTERS.chewbacca,
  cutscenes: [],
  enemiesOptional: [],
  enemiesRequiredData: {
    character    : CHARACTERS.deathstartrooper,
    count        : isQuickTest ? 1 : 10,
    dir          : null,
    hp           : isQuickTest ? 1 : 1,
    spawnInterval: 2 * FPS
  },
  friendlies: [
    {
      character: CHARACTERS.stormtrooperhan,
      details: {
        bounceLimit: 0,
        dir        : CARDINALS.RIGHT,
        hp         : isQuickTest ? 1 : 1,
        spawnFrame : 1.5 * FPS
      }
    },
    {
      character: CHARACTERS.stormtrooperluke,
      details: {
        bounceLimit: 0,
        dir        : CARDINALS.RIGHT,
        hp         : isQuickTest ? 1 : 1,
        spawnFrame : 1.75 * FPS
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

const IV_11_TRACTOR_BEAM = {
  bg: BACKGROUNDS.DEATH_STAR,
  bosses: [
    {
      character: CHARACTERS.darthvader,
      details: {
        dir       : null,
        hp        : isQuickTest ? 1 : 3,
        spawnDelay: 1 * FPS
      }
    }
  ],
  character: CHARACTERS.ben,
  cutscenes: [],
  enemiesOptional: [],
  enemiesRequiredData: {
    character    : CHARACTERS.stormtrooper,
    count        : isQuickTest ? 1 : 10,
    dir          : CARDINALS.RIGHT,
    hp           : isQuickTest ? 1 : 1,
    spawnInterval: 2 * FPS
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

const IV_12_SHOWDOWN = {
  bg: BACKGROUNDS.DEATH_STAR,
  bosses: [
    {
      character: CHARACTERS.ben,
      details: {
        dir       : null,
        hp        : isQuickTest ? 1 : 1,
        spawnDelay: 1 * FPS
      }
    }
  ],
  character: CHARACTERS.darthvader,
  cutscenes: [],
  enemiesOptional: [],
  enemiesRequiredData: {
    character    : null,
    count        : 0,
    dir          : null,
    hp           : null,
    spawnInterval: null
  },
  friendlies: [],
  name: 'Showdown',
  neutrals: [],
  obstacles: [],
  password: undefined,
  textColor: COLORS.BLACK
};

const IV_13_ESCAPE_FROM_DEATH_STAR = {
  bg: BACKGROUNDS.DEATH_STAR,
  bosses: [
    {
      character: CHARACTERS.tiepilot,
      details: {
        dir       : null,
        hp        : isQuickTest ? 1 : 2,
        spawnDelay: 1 * FPS
      }
    }
  ],
  character: CHARACTERS.leia,
  cutscenes: [],
  enemiesOptional: [],
  enemiesRequiredData: {
    character    : CHARACTERS.stormtrooper,
    count        : isQuickTest ? 1 : 10,
    dir          : null,
    hp           : isQuickTest ? 1 : 1,
    spawnInterval: 2 * FPS
  },
  friendlies: [
    {
      character: CHARACTERS.hansolo,
      details: {
        bounceLimit: 0,
        dir        : CARDINALS.RIGHT,
        hp         : isQuickTest ? 1 : 1,
        spawnFrame : 5.5 * FPS
      }
    },
    {
      character: CHARACTERS.luke,
      details: {
        bounceLimit: 0,
        dir        : CARDINALS.RIGHT,
        hp         : isQuickTest ? 1 : 1,
        spawnFrame : 10.5 * FPS
      }
    },
    {
      character: CHARACTERS.chewbacca,
      details: {
        bounceLimit: 0,
        dir        : CARDINALS.RIGHT,
        hp         : isQuickTest ? 1 : 1,
        spawnFrame : 15.5 * FPS
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

const IV_14_BATTLE_OF_YAVIN = {
  bg: BACKGROUNDS.SPACE,
  bosses: [
    {
      character: SHIPS.TIE,
      details: {
        dir       : CARDINALS.DOWN,
        hp        : isQuickTest ? 1 : 1,
        spawnDelay: 2 * FPS
      }
    },
    {
      character: SHIPS.TIE,
      details: {
        dir       : CARDINALS.DOWN,
        hp        : isQuickTest ? 1 : 1,
        spawnDelay: 2 * FPS
      }
    },
    {
      character: SHIPS.TIE_ADVANCED,
      details: {
        dir       : CARDINALS.DOWN,
        hp        : isQuickTest ? 1 : 3,
        spawnDelay: 2.25 * FPS
      }
    }
  ],
  character: SHIPS.FALCON,
  cutscenes: [],
  enemiesOptional: [],
  enemiesRequiredData: {
    character    : null,
    count        : 0,
    dir          : null,
    hp           : null,
    spawnInterval: null
  },
  friendlies: [
    {
      character: SHIPS.XWING,
      details: {
        bounceLimit: 0,
        dir        : CARDINALS.UP,
        hp         : isQuickTest ? 1 : 1,
        spawnFrame : 10 * FPS
      }
    },
    {
      character: SHIPS.XWING,
      details: {
        bounceLimit: 0,
        dir        : CARDINALS.UP,
        hp         : isQuickTest ? 1 : 1,
        spawnFrame : 10 * FPS
      }
    },
    {
      character: SHIPS.XWING,
      details: {
        bounceLimit: 0,
        dir        : CARDINALS.UP,
        hp         : isQuickTest ? 1 : 1,
        spawnFrame : 10 * FPS
      }
    }
  ],
  name: 'The Battle of Yavin',
  neutrals: [],
  obstacles: [],
  password: undefined,
  textColor: COLORS.YELLOW
};

const IV_15_ASSAULT_ON_DEATH_STAR = {
  bg: BACKGROUNDS.SPACE,
  bosses: [
    {
      character: SHIPS.DEATHSTAR,
      details: {
        dir       : null,
        hp        : isQuickTest ? 1 : 10,
        spawnDelay: 1 * FPS
      }
    }
  ],
  character: SHIPS.XWING,
  cutscenes: [],
  enemiesOptional: [],
  enemiesRequiredData: {
    character    : null,
    count        : 0,
    dir          : null,
    hp           : null,
    spawnInterval: null
  },
  friendlies: [],
  name: 'Death Star',
  neutrals: [],
  obstacles: [],
  password: undefined,
  textColor: COLORS.YELLOW
};

//Episode V levels
const HOTH = {
  bg: BACKGROUNDS.SNOW,
  bosses: [
    {
      character: CHARACTERS.mousedroid, // add wampa
      details: {
        dir       : null,
        hp        : isQuickTest ? 1 : 2,
        spawnDelay: 1 * FPS
      }
    }
  ],
  character: CHARACTERS.luke5,
  cutscenes: [],
  enemiesOptional: [],
  enemiesRequiredData: {
    character    : CHARACTERS.tauntaun, // add probe droid
    count        : isQuickTest ? 1 : 10,
    dir          : null,
    hp           : isQuickTest ? 1 : 1,
    spawnInterval: 2 * FPS
  },
  friendlies: [],
  name: 'Hoth',
  neutrals: [],
  obstacles: [],
  password: undefined,
  textColor: COLORS.BLACK
};

//Episode VI levels
const ENDOR = {
  bg: BACKGROUNDS.GRASS,
  bosses: [
    {
      character: CHARACTERS.atst,
      details: {
        dir       : null,
        hp        : isQuickTest ? 1 : 2,
        spawnDelay: 1 * FPS
      }
    }
  ],
  character: CHARACTERS.ewok,
  cutscenes: [],
  enemiesOptional: [],
  enemiesRequiredData: {
    character    : CHARACTERS.stormtrooper,
    count        : isQuickTest ? 1 : 10,
    dir          : null,
    hp           : isQuickTest ? 1 : 1,
    spawnInterval: 2 * FPS
  },
  friendlies: [
    {
      character: CHARACTERS.threepio,
      details: {
        bounceLimit: 0,
        dir        : null,
        hp         : isQuickTest ? 1 : 1,
        spawnFrame : 5 * FPS
      }
    }
  ],
  name: 'Endor',
  neutrals: [],
  obstacles: [],
  password: undefined,
  textColor: COLORS.BLACK
};

const TEST = {
  bg: BACKGROUNDS.TANTIVE,
  bosses: [
    {
      character: CHARACTERS.darthvader,
      details: {
        dir       : CARDINALS.DOWN,
        hp        : isQuickTest ? 1 : 1,
        spawnDelay: 1 * FPS
      }
    },
    {
      character: CHARACTERS.darthvader6,
      details: {
        dir       : CARDINALS.UP,
        hp        : isQuickTest ? 1 : 3,
        spawnDelay: 1.5 * FPS
      }
    }
  ],
  character: CHARACTERS.ackbar,
  cutscenes: [],
  enemiesOptional: [
    // {
    //   character: CHARACTERS.deathstartrooper,
    //   details: {
    //     bounceLimit: 0,
    //     dir        : CARDINALS.RIGHT,
    //     hp         : isQuickTest ? 1 : 1,
    //     spawnFrame : 0 * FPS
    //   }
    // }
  ],
  enemiesRequiredData: {
    character    : CHARACTERS.stormtrooper,
    count        : isQuickTest ? 1 : 1,
    dir          : CARDINALS.LEFT,
    hp           : isQuickTest ? 1 : 1,
    spawnInterval: 1 * FPS
  },
  friendlies: [
    // {
    //   character: CHARACTERS.bb8,
    //   details: {
    //     bounceLimit: 1
    //     dir        : CARDINALS.RIGHT,
    //     hp         : isQuickTest ? 1 : 2,
    //     spawnFrame : 0 * FPS,
    //   }
    // }
  ],
  name: 'Test Kitchen',
  neutrals: [
    // {
    //   character: CHARACTERS.arfive,
    //   details: {
    //     bounceLimit: INFINITY,
    //     dir        : null,
    //     hp         : isQuickTest ? 1 : 1,
    //     spawnFrame : 0 * FPS
    //   }
    // },
    // {
    //   character: CHARACTERS.auntberu,
    //   details: {
    //     bounceLimit: INFINITY,
    //     dir        : null,
    //     hp         : isQuickTest ? 1 : 1,
    //     spawnFrame : 0 * FPS
    //   }
    // },
    // {
    //   character: CHARACTERS.ben,
    //   details: {
    //     bounceLimit: INFINITY,
    //     dir        : null,
    //     hp         : isQuickTest ? 1 : 1,
    //     spawnFrame : 0 * FPS
    //   }
    // },
    // {
    //   character: CHARACTERS.darthvader6,
    //   details: {
    //     bounceLimit: INFINITY,
    //     dir        : null,
    //     hp         : isQuickTest ? 1 : 1,
    //     spawnFrame : 0 * FPS
    //   }
    // },
    // {
    //   character: CHARACTERS.uncleowen,
    //   details: {
    //     bounceLimit: INFINITY,
    //     dir        : null,
    //     hp         : isQuickTest ? 1 : 1,
    //     spawnFrame : 0 * FPS
    //   }
    // },
    // {
    //   character: CHARACTERS.threebee,
    //   details: {
    //     bounceLimit: INFINITY,
    //     dir        : null,
    //     hp         : isQuickTest ? 1 : 1,
    //     spawnFrame : 0 * FPS
    //   }
    // },
    // {
    //   character: SHIPS.DEATHSTAR,
    //   details: {
    //     bounceLimit: INFINITY,
    //     dir        : null,
    //     hp         : isQuickTest ? 1 : 1,
    //     spawnFrame : 0 * FPS
    //   }
    // }
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
  [TEST],
  [TEST],
  [TEST],
  [
    IV_01_TANTIVE_IV,
    IV_02_AMBASSADOR,
    IV_03_TATOOINE,
    IV_04_SEARCH,
    IV_05_SANDCRAWLER,
    IV_06_MOISTURE_FARM,
    IV_07_MOS_EISLEY,
    IV_08_DOCKING_BAY,
    IV_09_ALDERAAN,
    IV_10_DETENTION,
    IV_11_TRACTOR_BEAM,
    IV_12_SHOWDOWN,
    IV_13_ESCAPE_FROM_DEATH_STAR,
    IV_14_BATTLE_OF_YAVIN,
    IV_15_ASSAULT_ON_DEATH_STAR
  ],
  [HOTH],
  [ENDOR],
  [TEST],
  [TEST],
  [TEST]
];
