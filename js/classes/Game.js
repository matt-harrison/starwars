import { IS_MOBILE } from '/js/constants/config.js';

export const Game = function({
  height,
  width
}) {
  this.selector                = document.createElement('div');
  this.selector.id             = 'game';
  this.selector.style.position = 'relative';
  this.selector.style.margin   = IS_MOBILE ? '0' : '10px auto 0';
  this.selector.style.width    = width + 'px';
  this.selector.style.height   = height + 'px';
  this.selector.style.overflow = 'hidden';
  this.selector.style.zIndex   = '1';

  document.body.appendChild(this.selector);

  return this.selector;
};
