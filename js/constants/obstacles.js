import { MAGNIFICATION } from '/js/constants/config.js';

const BAR = {
  frameCount : 1,
  frameHeight: 14 * MAGNIFICATION,
  frameWidth : 23 * MAGNIFICATION,
  height     : 14 * MAGNIFICATION,
  img        : 'bar',
  width      : 23 * 1 * MAGNIFICATION
};

const DESKS = {
  frameCount : 1,
  frameHeight: 40 * MAGNIFICATION,
  frameWidth : 13 * MAGNIFICATION,
  height     : 40 * MAGNIFICATION,
  img        : 'desks',
  width      : 13 * 1 * MAGNIFICATION
};

const DRAGON = {
  frameCount : 1,
  frameHeight: 13 * MAGNIFICATION,
  frameWidth : 62 * MAGNIFICATION,
  height     : 13 * MAGNIFICATION,
  img        : 'dragon',
  width      : 62 * 1 * MAGNIFICATION
};

const FALCON = {
  frameCount : 1,
  frameHeight: 42 * MAGNIFICATION,
  frameWidth : 76 * MAGNIFICATION,
  height     : 42 * MAGNIFICATION,
  img        : 'falconbig',
  width      : 76 * 1 * MAGNIFICATION
};

const IGLOO = {
  frameCount : 1,
  frameHeight: 17 * MAGNIFICATION,
  frameWidth : 28 * MAGNIFICATION,
  height     : 17 * MAGNIFICATION,
  img        : 'igloo',
  width      : 28 * 1 * MAGNIFICATION
};

const SPEEDER = {
  frameCount : 4,
  frameHeight: 12 * MAGNIFICATION,
  frameWidth : 30 * MAGNIFICATION,
  height     : 12 * MAGNIFICATION,
  img        : 'speeder',
  width      : 30 * 4 * MAGNIFICATION
};

const TABLE = {
  frameCount : 1,
  frameHeight: 11 * MAGNIFICATION,
  frameWidth : 16 * MAGNIFICATION,
  height     : 11 * MAGNIFICATION,
  img        : 'table',
  width      : 16 * 1 * MAGNIFICATION
};

const GENERATOR = {
  frameCount : 4,
  frameHeight: 42 * MAGNIFICATION,
  frameWidth : 20 * MAGNIFICATION,
  height     : 42 * MAGNIFICATION,
  img        : 'tractorBeamGenerator',
  width      : 20 * 4 * MAGNIFICATION
};

export const OBSTACLES = {
  BAR,
  DESKS,
  DRAGON,
  FALCON,
  GENERATOR,
  IGLOO,
  SPEEDER,
  TABLE
};
