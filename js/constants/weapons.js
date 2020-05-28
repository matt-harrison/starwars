import { MAGNIFICATION } from '/js/constants/config.js';

export const WEAPON_TYPES = {
  BOMB      : 'bomb',
  PROJECTILE: 'projectile',
  LIGHTSABER: 'lightsaber'
};

const BOMB = {
  name: 'bomb',
  type: WEAPON_TYPES.BOMB
};

const GUNGAN_BALL = {
  frameCount : 8,
  frameHeight: 6 * MAGNIFICATION,
  frameWidth : 6 * MAGNIFICATION,
  name       : 'gunganBall',
  type       : WEAPON_TYPES.PROJECTILE,
  speed      : 10
};

const LASER = {
  name : 'laser',
  speed: 30,
  type : WEAPON_TYPES.PROJECTILE
};

const LIGHTSABER = {
  name : 'lightsaber',
  speed: 30,
  type : WEAPON_TYPES.LIGHTSABER
};

const ROCK = {
  frameCount : 4,
  frameHeight: 5 * MAGNIFICATION,
  frameWidth : 5 * MAGNIFICATION,
  name       : 'rock',
  type       : WEAPON_TYPES.PROJECTILE,
  speed      : 10
};

const STUN = {
  frameCount : 6,
  frameHeight: 10 * MAGNIFICATION,
  frameWidth : 10 * MAGNIFICATION,
  name       : 'stun',
  type       : WEAPON_TYPES.PROJECTILE,
  speed      : 20
};

export const WEAPONS = {
  BOMB,
  GUNGAN_BALL,
  LASER,
  LIGHTSABER,
  ROCK,
  STUN
};
