export const ACTOR_TYPES = {
  ENEMY   : 'enemy',
  FRIENDLY: 'friendly',
  NEUTRAL : 'neutral',
  PLAYER  : 'player'
};

export const BUTTON_NAMES = {
  ATTACK : 'btnAttack',
  ATTACK2: 'btnAttack2',
  DOWN   : 'btnDown',
  LEFT   : 'btnLeft',
  RIGHT  : 'btnRight',
  START  : 'btnStart',
  UP     : 'btnUp'
};

export const CARDINALS = {
  RIGHT: 'right',
  LEFT : 'left',
  DOWN : 'down',
  UP   : 'up'
};

export const COLORS = {
  BLACK    : '#000',
  BLUE     : '#0ff',
  GRAY     : '#ccc',
  GREEN    : '#0f0',
  PURPLE   : '#f0f',
  RED      : '#f00',
  YELLOW   : '#ff0',
  WHITE    : '#fff'
};

export const FPS = 16;

export const HUD_OPACITY = '0.5';

export const INFINITY = 'infinity';

export const IS_MOBILE = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/).test(navigator.userAgent);

export const KEYS = {
  ENTER : 'enter',
  ESCAPE: 'escape',
  SPACE : 'space',
  Z     : 'z'
};

const shorterScreenSide = window.innerWidth > window.innerHeight ? window.innerHeight : window.innerWidth;

export const MAGNIFICATION = IS_MOBILE ? Math.floor(shorterScreenSide / 500 * 5) : 5;

export const MODES = {
  CUTSCENE: 'cutscene',
  EPISODE : 'episode',
  GAMEPLAY: 'gameplay',
  RESET   : 'reset',
  TITLE   : 'title'
};

export const NUMERALS = [
  'I',
  'II',
  'III',
  'IV',
  'V',
  'VI',
  'VII',
  'VIII',
  'IX'
];

export const WEAPON_TYPES = {
  BOMB      : 'bomb',
  PROJECTILE: 'projectile',
  LIGHTSABER: 'lightsaber'
};
