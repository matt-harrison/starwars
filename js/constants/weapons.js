import { MAGNIFICATION } from '/js/constants/config.js';

const GUNGAN_BALL = {
  frameCount : 5,
  frameHeight: 6 * MAGNIFICATION,
  frameWidth : 6 * MAGNIFICATION,
  height     : 6 * MAGNIFICATION,
  name       : 'gunganBall',
  speed      : 20,
  width      : 30 * MAGNIFICATION
};

const ROCK = {
  frameCount : 4,
  frameHeight: 5 * MAGNIFICATION,
  frameWidth : 5 * MAGNIFICATION,
  height     : 5 * MAGNIFICATION,
  name       : 'rock',
  speed      : 20,
  width      : 20 * MAGNIFICATION
};

const STUN = {
  frameCount : 6,
  frameHeight: 10 * MAGNIFICATION,
  frameWidth : 10 * MAGNIFICATION,
  height     : 10 * MAGNIFICATION,
  name       : 'stun',
  speed      : 20,
  width      : 60 * MAGNIFICATION
};

export const PROJECTILES = {
  GUNGAN_BALL,
  LASER: 'laser',
  ROCK,
  STUN
};

export const WEAPON_TYPES = {
  ATTACK    : 'attack',
  BOMB      : 'bomb',
  LIGHTSABER: 'lightsaber',
  PROJECTILE: 'projectile'
};
