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
  BLUE_DARK: '#003471',
  GRAY     : '#ccc',
  GREEN    : '#0f0',
  PURPLE   : '#f0f',
  RED      : '#f00',
  YELLOW   : '#ff0',
  WHITE    : '#fff'
};

export const FPS = 16;

export const HUD_OPACITY = '0.5';

export const IS_MOBILE = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/).test(navigator.userAgent);

export const MAGNIFICATION = IS_MOBILE ? Math.floor(window.innerWidth / 100) : 5;

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
