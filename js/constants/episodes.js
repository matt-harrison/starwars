import { fps }         from '/js/constants/config.js';
import * as characters from '/js/constants/characters.js';
import { COLORS }      from '/js/constants/colors.js';
import * as obstacles  from '/js/constants/obstacles.js';
import * as ships      from '/js/constants/ships.js';

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
  character: characters.rebel,
  enemy: characters.stormtrooper,
  boss: characters.officerblack,
  bossHP: 2
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
  character: characters.stuntrooper,
  enemy: characters.rebel,
  boss: characters.leia,
  bossHP: 1,
  friendlies: [
    {
      character: characters.protocolwhite,
      details: {
        delay: 5.5 * fps,
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
      type: obstacles.dragon,
      x: 50,
      y: 66
    }
  ],
  character: characters.jawa,
  enemy: characters.threepio,
  boss: characters.artoo,
  bossHP: 1,
  friendlies: [
    {
      character: characters.jawa,
      details: {
        delay: 1.5 * fps,
        value: 0 - 500
      }
    },
    {
      character: characters.jawa,
      details: {
        delay: 2.5 * fps,
        value: 0 - 500
      }
    },
    {
      character: characters.jawa,
      details: {
        delay: 3.5 * fps,
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
      type: obstacles.speeder,
      x: 33,
      y: 33
    }
  ],
  character: characters.luke,
  enemy: characters.tusken,
  boss: characters.bantha,
  bossHP: 2,
  friendlies: [
    {
      character: characters.threepio,
      details: {
        delay: 10.5 * fps,
        value: 0 - 500
      }
    },
    {
      character: characters.artoo,
      details: {
        delay: 12.5 * fps,
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
  character: characters.sandtrooper,
  enemy: characters.jawa,
  boss: characters.threebee,
  bossHP: 2,
  friendlies: [
    {
      character: characters.arfive,
      details: {
        delay: 5.5 * fps,
        value: 25
      }
    },
    {
      character: characters.gonkdroid,
      details: {
        delay: 10.5 * fps,
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
  character: characters.sandtrooper,
  enemy: characters.uncleowen,
  boss: characters.auntberu,
  bossHP: 1,
  obstacles: [
    {
      type: obstacles.igloo,
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
      type: obstacles.bar,
      x: 0,
      y: 50
    },
    {
      type: obstacles.table,
      x: 33,
      y: 20
    },
    {
      type: obstacles.table,
      x: 66,
      y: 20
    },
    {
      type: obstacles.table,
      x: 33,
      y: 80
    },
    {
      type: obstacles.table,
      x: 66,
      y: 80
    }
  ],
  character: characters.ben,
  enemy: characters.sandtrooper,
  boss: characters.pondababa,
  bossHP: 1,
  friendlies: [
    {
      character: characters.chewbacca,
      details: {
        delay: 10.5 * fps,
        value: 0 - 500
      }
    },
    {
      character: characters.greedo,
      details: {
        delay: 30 * fps,
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
      type: obstacles.falconbig,
      x: 100,
      y: 0
    }
  ],
  character: characters.hansolo,
  enemy: characters.sandtrooper,
  boss: characters.garindan,
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
  character: ships.falcon,
  enemy: ships.asteroid,
  boss: ships.tie,
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
      type: obstacles.desks,
      x: 75,
      y: 50
    }
  ],
  character: characters.chewbacca,
  enemy: characters.deathstartrooper,
  boss: characters.mousedroid,
  bossHP: 2,
  friendlies: [
    {
      character: characters.stormtrooperhan,
      details: {
        delay: 1.5 * fps,
        value: 0 - 500,
        dir: 'right'
      }
    },
    {
      character: characters.stormtrooperluke,
      details: {
        delay: 1.75 * fps,
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
      type: obstacles.tractorBeamGenerator,
      x: 50,
      y: 0
    }
  ],
  character: characters.ben,
  enemy: characters.stormtrooper,
  boss: characters.darthvader,
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
  character: characters.darthvader,
  enemy: characters.null,
  boss: characters.ben,
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
  character: characters.leia,
  enemy: characters.stormtrooper,
  boss: characters.tiepilot,
  bossHP: 2,
  obstacles: [
    {
      type: obstacles.falconbig,
      x: 100,
      y: 0
    }
  ],
  friendlies: [
    {
      character: characters.hansolo,
      details: {
        delay: 5.5 * fps,
        value: 0 - 500
      }
    },
    {
      character: characters.luke,
      details: {
        delay: 10.5 * fps,
        value: 0 - 500
      }
    },
    {
      character: characters.chewbacca,
      details: {
        delay: 15.5 * fps,
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
  character: ships.falcon,
  enemy: ships.tie,
  boss: ships.vadertie,
  bossHP: 2,
  friendlies: [
    {
      character: ships.xwing,
      details: {
        delay: 5.5 * fps,
        value: 0 - 500,
        dir: 'up'
      }
    },
    {
      character: ships.xwing,
      details: {
        delay: 5.5 * fps,
        value: 0 - 500,
        dir: 'up'
      }
    },
    {
      character: ships.xwing,
      details: {
        delay: 5.5 * fps,
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
  character: ships.xwing,
  enemy: characters.null,
  boss: ships.deathstar,
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
  character: characters.luke5,
  enemy: characters.tauntaun,//probedroid
  boss: characters.mousedroid,//wampa
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
  character: characters.ewok,
  enemy: characters.stormtrooper,
  boss: characters.darthvader,
  bossHP: 2
};

const test = {
  name: 'TEST',
  password: '',
  bg: 'sand',
  textColor: 'black',
  enemyInterval: 16,
  enemyCount: 1,
  character: characters.luke,
  enemy: characters.ben,
  boss: characters.auntberu,
  bossHP: 1,
  obstacles: [
    {
      type: obstacles.igloo,
      x: 66,
      y: 33
    },
  ],
  friendlies: [
    {
      character: characters.jabba,
      details: {
        delay: 1 * fps,
        value: 0
      }
    }
  ]
};

//Master level array
const episodes = [];

episodes[0] = [test];
episodes[1] = [test];
episodes[2] = [test];
episodes[3] = [
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
];
episodes[4] = [hoth];
episodes[5] = [endor];

export default episodes;
