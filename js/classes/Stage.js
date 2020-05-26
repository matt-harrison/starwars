import { attachNode } from '/js/utils.js';

export const Stage = function({
  data,
  game
}) {
  Object.assign(this, {
    bg                 : data.bg,
    bosses             : data.bosses,
    character          : data.character,
    cutscenes          : data.cutscenes,
    enemiesOptional    : data.enemiesOptional,
    enemiesRequiredData: data.enemiesRequiredData,
    friendlies         : data.friendlies,
    name               : data.name,
    neutrals           : data.neutrals,
    obstacles          : data.obstacles,
    password           : data.password,
    textColor          : data.textColor
  });

  this.selector = attachNode({
    attributes: {
      id: 'stage'
    },
    parent: game.selector,
    styles: {
      backgroundImage: `url('img/backgrounds/${this.bg}.png')`,
      height         : '100%',
      left           : 0,
      position       : 'absolute',
      top            : 0,
      width          : '100%',
      zIndex         : 2
    }
  });

  game.hud.textColor   = this.textColor;
  game.hud.victimColor = this.textColor;
};
