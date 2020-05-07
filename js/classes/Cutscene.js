import { COLORS } from '/js/constants/config.js';

export const Cutscene = function({
  game,
  img,
  master
}) {
  this.selector = document.createElement('div');
  this.selector.style.position = 'absolute';
  this.selector.style.top = 0;
  this.selector.style.left = 0;
  this.width = master.gameWidth;
  this.height = master.gameWidth;
  this.selector.style.width = this.width + 'px';
  this.selector.style.height = this.height + 'px';
  this.selector.style.backgroundColor = COLORS.BLACK;
  this.selector.style.zIndex = '101';
  this.selector.setAttribute('data-key', 'enter');

  game.selector.insertBefore(this.selector, game.selector.firstChild);

  const cutscene = document.createElement('div');
  cutscene.style.backgroundImage = "url('img/cutscenes/" + img + ".png')";

  if (master.gameWidth <= master.gameWidth) {
    cutscene.width = master.gameWidth;
    cutscene.height = master.gameWidth;
  } else {
    cutscene.width = master.gameWidth;
    cutscene.height = master.gameWidth;
  }

  cutscene.style.width = cutscene.width + 'px';
  cutscene.style.height = cutscene.height + 'px';
  cutscene.style.position = 'absolute';
  cutscene.style.top = (this.height - cutscene.height) / 2 + 'px';
  cutscene.style.left = (this.width - cutscene.width) / 2 + 'px';
  cutscene.style.backgroundSize = cutscene.width + 'px ' + cutscene.height + 'px';
  cutscene.style.zIndex = '100';
  cutscene.setAttribute('data-key', 'enter');

  this.selector.appendChild(cutscene);

  this.resize = function() {
    this.width = master.gameWidth;
    this.height = master.gameWidth;
    this.selector.style.width = this.width + 'px';
    this.selector.style.height = this.height + 'px';

    cutscene.style.top = (this.height - cutscene.height) / 2 + 'px';
    cutscene.style.left = (this.width - cutscene.width) / 2 + 'px';
    cutscene.style.backgroundSize = cutscene.width + 'px ' + cutscene.height + 'px';
  }
};
