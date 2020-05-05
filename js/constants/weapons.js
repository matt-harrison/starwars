import { MAGNIFICATION } from '/js/constants/config.js';

const GUNGAN_BALL = {
  name: 'gunganBall',
  width: 30 * MAGNIFICATION,
  height: 6 * MAGNIFICATION,
  frameWidth: 6 * MAGNIFICATION,
  frameHeight: 6 * MAGNIFICATION,
  frameCount: 5,
  speed: 20
};

const ROCK = {
  name: 'rock',
  width: 20 * MAGNIFICATION,
  height: 5 * MAGNIFICATION,
  frameWidth: 5 * MAGNIFICATION,
  frameHeight: 5 * MAGNIFICATION,
  frameCount: 4,
  speed: 20
};

const STUN = {
  name: 'stun',
  width: 60 * MAGNIFICATION,
  height: 10 * MAGNIFICATION,
  frameWidth: 10 * MAGNIFICATION,
  frameHeight: 10 * MAGNIFICATION,
  frameCount: 6,
  speed: 20
};

export const PROJECTILES = {
  GUNGAN_BALL,
  LASER: 'laser',
  ROCK,
  STUN
};

export const WEAPON_TYPES = {
  ATTACK: 'attack',
  BOMB: 'bomb',
  LIGHTSABER: 'lightsaber',
  PROJECTILE: 'projectile'
};
