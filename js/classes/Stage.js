export const Stage = function({
  data,
  game
}) {
  Object.assign(this, data);

  this.selector                       = document.createElement('div');
  this.selector.id                    = 'stage';
  this.selector.style.backgroundImage = `url('img/backgrounds/${this.bg}.png')`;
  this.selector.style.height          = '100%';
  this.selector.style.left            = 0;
  this.selector.style.position        = 'absolute';
  this.selector.style.top             = 0;
  this.selector.style.width           = '100%';
  this.selector.style.zIndex          = '1';

  game.selector.appendChild(this.selector, game.selector.firstChild);

  game.hud.textColor   = this.textColor;
  game.hud.victimColor = this.textColor;
};
