import { attachNode } from '/js/utils.js';

import { COLORS } from '/js/constants/config.js';

export const Cutscene = function({
  img,
  game
}) {
  this.selector = attachNode({
    attributes: {
      'data-key': 'enter',
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
      zIndex         : '101'
    }
  });

  const sideLength = getSideLength(game);
  const cutscene   = attachNode({
    attributes: {
      'data-key': 'enter',
      id:         `cutscene${game.cutsceneCount}`
    },
    parent: this.selector,
    styles: {
      backgroundImage: `url('img/cutscenes/${img}.png')`,
      backgroundSize : `${sideLength}px ${sideLength}px`,
      height         : `${sideLength}px`,
      left           : `${(game.gameWidth - sideLength) / 2}px`,
      position       : 'absolute',
      top            : `${(game.gameHeight - sideLength) / 2}px`,
      width          : `${sideLength}px`,
      zIndex         : 100
    }
  });

  this.resize = () => {
    const sideLength = getSideLength(game);

    cutscene.style.backgroundSize = `${sideLength}px ${sideLength}px`;
    cutscene.style.left           = `${(game.gameWidth - sideLength) / 2}px`;
    cutscene.style.top            = `${(game.gameHeight - sideLength) / 2}px`;
  }
};

const getSideLength = (game) => {
  return game.gameWidth <= game.gameHeight ? game.gameWidth : game.gameHeight;
};
