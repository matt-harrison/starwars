import { IS_MOBILE } from '@/js/constants/index.js';
import { attachNode } from '@/js/utils.js';

export const Game = function({ game }) {
  this.selector = attachNode({
    attributes: {
      id: 'game'
    },
    parent: document.body,
    styles: {
      height  : `${game.height}px`,
      margin  : IS_MOBILE ? '0' : '10px auto 0',
      overflow: 'hidden',
      position: 'relative',
      width   : `${game.width}px`,
      zIndex  : 1
    }
  });

  return this.selector;
};
