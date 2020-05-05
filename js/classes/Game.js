import { IS_MOBILE } from '/js/constants/config.js';

export const Game = function() {
  this.width  = IS_MOBILE ? window.innerWidth : 500;
  this.height = IS_MOBILE ? window.innerHeight : 500;

  //Attach to document
  this.selector = document.createElement('div');
  this.selector.id = 'game';
  this.selector.style.position = 'relative';
  this.selector.style.margin = IS_MOBILE ? '0' : '10px auto 0';
  this.selector.style.width = this.width + 'px';
  this.selector.style.height = this.height + 'px';
  this.selector.style.overflow = 'hidden';
  this.selector.style.zIndex = '1';

  document.body.appendChild(this.selector);

  this.counter = 0;
};
