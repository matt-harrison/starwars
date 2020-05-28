import { MAGNIFICATION } from '/js/constants/config.js';

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
  DETONATION,
  EXPLOSION,
  EXPLOSION_SMALL,
  SPRITZ
};
