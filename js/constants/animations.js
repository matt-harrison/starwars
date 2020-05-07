import { MAGNIFICATION } from '/js/constants/config.js';

const DETONATION = {
  name: 'detonation',
  frameWidth: 9 * MAGNIFICATION,
  frameHeight: 5 * MAGNIFICATION,
  frameCount: 5,
  remove: true
};

const EXPLOSION = {
  name: 'explosion',
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 12 * MAGNIFICATION,
  frameCount: 9,
  remove: true
};

const EXPLOSION_SMALL = {
  name: 'explosionsmall',
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 10 * MAGNIFICATION,
  frameCount: 7,
  remove: true
};

const SPRITZ = {
  name: 'spritz',
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 12 * MAGNIFICATION,
  frameCount: 5,
  remove: true
};

export const ANIMATIONS = {
  DETONATION,
  EXPLOSION,
  EXPLOSION_SMALL,
  SPRITZ
};
