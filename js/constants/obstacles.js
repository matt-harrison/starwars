import { MAGNIFICATION } from '/js/constants/config.js';

const BAR = {
  img: 'bar',
  width: 23 * MAGNIFICATION,
  height: 14 * MAGNIFICATION,
  frameWidth: 23 * MAGNIFICATION,
  frameHeight: 14 * MAGNIFICATION,
  frameCount: 1,
  speed: 0,
  impassable: true
};

const DESKS = {
  img: 'desks',
  width: 13 * MAGNIFICATION,
  height: 40 * MAGNIFICATION,
  frameWidth: 13 * MAGNIFICATION,
  frameHeight: 40 * MAGNIFICATION,
  frameCount: 1,
  speed: 0,
  impassable: true
};

const DRAGON = {
  img: 'dragon',
  width: 62 * MAGNIFICATION,
  height: 13 * MAGNIFICATION,
  frameWidth: 62 * MAGNIFICATION,
  frameHeight: 13 * MAGNIFICATION,
  frameCount: 1,
  speed: 0,
  impassable: true
};

const FALCON = {
  img: 'falconbig',
  width: 76 * MAGNIFICATION,
  height: 39 * MAGNIFICATION,
  frameWidth: 76 * MAGNIFICATION,
  frameHeight: 39 * MAGNIFICATION,
  frameCount: 1,
  speed: 0,
  impassable: true
};

const IGLOO = {
  img: 'igloo',
  width: 28 * MAGNIFICATION,
  height: 17 * MAGNIFICATION,
  frameWidth: 28 * MAGNIFICATION,
  frameHeight: 17 * MAGNIFICATION,
  frameCount: 1,
  speed: 0,
  impassable: true
};

const SPEEDER = {
  img: 'speeder',
  width: 120 * MAGNIFICATION,
  height: 12 * MAGNIFICATION,
  frameWidth: 30 * MAGNIFICATION,
  frameHeight: 12 * MAGNIFICATION,
  frameCount: 4,
  speed: 0,
  impassable: true
};

const TABLE = {
  img: 'table',
  width: 16 * MAGNIFICATION,
  height: 11 * MAGNIFICATION,
  frameWidth: 16 * MAGNIFICATION,
  frameHeight: 11 * MAGNIFICATION,
  frameCount: 1,
  speed: 0,
  impassable: true
};

const GENERATOR = {
  img: 'tractorBeamGenerator',
  width: 80 * MAGNIFICATION,
  height: 42 * MAGNIFICATION,
  frameWidth: 20 * MAGNIFICATION,
  frameHeight: 42 * MAGNIFICATION,
  frameCount: 4,
  speed: 0,
  impassable: true
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
