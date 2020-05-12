export const Stage = function({
  data,
  master
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

  master.dom.game.selector.insertBefore(this.selector, master.dom.game.selector.firstChild);

  master.dom.hud.title.style.color      = this.textColor;
  master.dom.hud.directions.style.color = this.textColor;
  master.dom.hud.scoreboard.style.color = this.textColor;

  this.enemiesKilled = 0;
  this.bossReached   = false;
  this.defeated      = false;
};
