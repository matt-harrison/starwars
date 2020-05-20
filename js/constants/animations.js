import { MAGNIFICATION } from '/js/constants/config.js';

const DEATH_ARFIVE = {
  frameCount : 6,
  frameHeight: 9 * MAGNIFICATION,
  frameWidth : 5 * MAGNIFICATION,
  name       : 'arfivedeath',
  isRemove   : false
}

const DEATH_AUNT_BERU = {
  frameCount : 10,
  frameHeight: 12 * MAGNIFICATION,
  frameWidth : 10 * MAGNIFICATION,
  name       : 'auntberudeath',
  isRemove   : false
};

const DEATH_BEN = {
  frameCount : 6,
  frameHeight: 12 * MAGNIFICATION,
  frameWidth : 10 * MAGNIFICATION,
  name       : 'bendeath',
  isRemove   : false
};

const DEATH_DARTH_VADER6 = {
  frameCount : 12,
  frameHeight: 12 * MAGNIFICATION,
  frameWidth : 10 * MAGNIFICATION,
  name       : 'darthvader6death',
  isRemove   : false
};

const DEATH_TIE_ADVANCED = {
  frameCount : 8,
  frameHeight: 7 * MAGNIFICATION,
  frameWidth : 7 * MAGNIFICATION,
  name       : 'vadertiedeath',
  isRemove   : true
};

const DEATH_UNCLE_OWEN = {
  frameCount:  10,
  frameHeight: 12 * MAGNIFICATION,
  frameWidth:  10 * MAGNIFICATION,
  name:        'uncleowendeath',
  isRemove:    false
};

const DETONATION = {
  frameCount : 5,
  frameHeight: 5 * MAGNIFICATION,
  frameWidth : 9 * MAGNIFICATION,
  name       : 'detonation',
  isRemove   : true
};

const EXPLOSION = {
  frameCount : 9,
  frameHeight: 12 * MAGNIFICATION,
  frameWidth : 10 * MAGNIFICATION,
  name       : 'explosion',
  isRemove   : true
};

const EXPLOSION_SMALL = {
  frameCount : 7,
  frameHeight: 10 * MAGNIFICATION,
  frameWidth : 10 * MAGNIFICATION,
  name       : 'explosionsmall',
  isRemove   : true
};

const SPRITZ = {
  frameCount : 5,
  frameHeight: 12 * MAGNIFICATION,
  frameWidth : 10 * MAGNIFICATION,
  name       : 'spritz',
  isRemove   : true
};

export const ANIMATIONS = {
  DEATHS: {
    ARFIVE      : DEATH_ARFIVE,
    AUNT_BERU   : DEATH_AUNT_BERU,
    BEN         : DEATH_BEN,
    DARTH_VADER6: DEATH_DARTH_VADER6,
    TIE_ADVANCED: DEATH_TIE_ADVANCED,
    UNCLE_OWEN  : DEATH_UNCLE_OWEN
  },
  DETONATION,
  EXPLOSION,
  EXPLOSION_SMALL,
  SPRITZ
};
