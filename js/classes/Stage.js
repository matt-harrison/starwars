export const Stage = function({
  data,
  game,
  hud
}) {
  Object.assign(this, data);

  this.selector = document.createElement('div');
  this.selector.id = 'stage';
  this.selector.style.position = 'absolute';
  this.selector.style.top = 0;
  this.selector.style.left = 0;
  this.selector.style.width = '100%';
  this.selector.style.height = '100%';

  if (this.bg !== null) {
    this.selector.style.backgroundImage = "url('img/backgrounds/" + this.bg + ".png')";
  } else {
    this.selector.style.backgroundColor = this.bgColor;
  }

  this.selector.style.zIndex = '1';
  game.selector.insertBefore(this.selector, game.selector.firstChild);

  hud.title.style.color = this.textColor;
  hud.directions.style.color = this.textColor;
  hud.scoreboard.style.color = this.textColor;

  this.enemiesKilled = 0;
  this.bossReached = false;
  this.defeated = false;
};
