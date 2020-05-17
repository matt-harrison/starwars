import { attachNode } from '/js/utils.js';

import { COLORS } from '/js/constants/config.js';

export const Cutscene = function({
  img,
  master
}) {
  this.selector = attachNode({
    attributes: {
      'data-key': 'enter',
      id:         'cutscene-bg'
    },
    parent: master.dom.game.selector,
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

  const sideLength = getSideLength(master);
  const cutscene   = attachNode({
    attributes: {
      'data-key': 'enter',
      id:         `cutscene${master.actorCount++}`
    },
    parent: this.selector,
    styles: {
      backgroundImage: `url('img/cutscenes/${img}.png')`,
      backgroundSize : `${sideLength}px ${sideLength}px`,
      height         : `${sideLength}px`,
      left           : `${(master.gameWidth - sideLength) / 2}px`,
      position       : 'absolute',
      top            : `${(master.gameHeight - sideLength) / 2}px`,
      width          : `${sideLength}px`,
      zIndex         : 100
    }
  });

  this.resize = () => {
    const sideLength = getSideLength(master);

    cutscene.style.backgroundSize = `${sideLength}px ${sideLength}px`;
    cutscene.style.left           = `${(master.gameWidth - sideLength) / 2}px`;
    cutscene.style.top            = `${(master.gameHeight - sideLength) / 2}px`;
  }
};

const getSideLength = (master) => {
  return master.gameWidth <= master.gameHeight ? master.gameWidth : master.gameHeight;
};
