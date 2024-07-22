import { attachNode } from '@/js/utils.js';

import { COLORS, KEYS } from '@/js/constants/index.js';

export const Cutscene = function({
  img,
  game
}) {
  this.selector = attachNode({
    attributes: {
      'data-key': KEYS.ENTER,
      id:         'cutscene-bg'
    },
    parent: game.selector,
    styles: {
      backgroundColor: COLORS.BLACK,
      height         : '100%',
      left           : 0,
      position       : 'absolute',
      top            : 0,
      width          : '100%',
      zIndex         : 1000
    }
  });

  const sideLength = getSideLength(game);
  const cutscene   = attachNode({
    attributes: {
      'data-key': KEYS.ENTER,
      id:         `cutscene${game.cutsceneCount}`
    },
    parent: this.selector,
    styles: {
      backgroundImage: `url('img/cutscenes/${img}.png')`,
      backgroundSize : `${sideLength}px ${sideLength}px`,
      height         : `${sideLength}px`,
      left           : `${(game.width - sideLength) / 2}px`,
      position       : 'absolute',
      top            : `${(game.height - sideLength) / 2}px`,
      width          : `${sideLength}px`
    }
  });

  this.resize = () => {
    const sideLength = getSideLength(game);

    cutscene.style.backgroundSize = `${sideLength}px ${sideLength}px`;
    cutscene.style.left           = `${(game.width - sideLength) / 2}px`;
    cutscene.style.top            = `${(game.height - sideLength) / 2}px`;
  }
};

const getSideLength = (game) => {
  return game.width <= game.height ? game.width : game.height;
};
