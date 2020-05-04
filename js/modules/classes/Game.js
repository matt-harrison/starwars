import { isMobile } from '../../config.js';

export const Game = function() {
  this.width  = isMobile ? window.innerWidth : 500;
  this.height = isMobile ? window.innerHeight : 500;

  //Attach to document
  this.selector = document.createElement('div');
  this.selector.id = 'game';
  this.selector.style.position = 'relative';
  this.selector.style.margin = isMobile ? '0' : '10px auto 0';
  this.selector.style.width = this.width + 'px';
  this.selector.style.height = this.height + 'px';
  this.selector.style.overflow = 'hidden';
  this.selector.style.zIndex = '1';

  document.body.appendChild(this.selector);

  this.counter = 0;
};
