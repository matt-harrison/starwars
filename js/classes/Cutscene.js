import { COLORS } from '/js/constants/config.js';

export const Cutscene = function({
  game,
  img
}) {
  this.selector = document.createElement('div');
  this.selector.style.position = 'absolute';
  this.selector.style.top = 0;
  this.selector.style.left = 0;
  this.width = game.width;
  this.height = game.height;
  this.selector.style.width = this.width + 'px';
  this.selector.style.height = this.height + 'px';
  this.selector.style.backgroundColor = COLORS.BLACK;
  this.selector.style.zIndex = '101';
  this.selector.setAttribute('data-key', 'enter');

  game.selector.insertBefore(this.selector, game.selector.firstChild);

  const cutscene = document.createElement('div');
  cutscene.style.backgroundImage = "url('img/cutscenes/" + img + ".png')";

  if (game.width <= game.height) {
    cutscene.width = game.width;
    cutscene.height = game.width;
  } else {
    cutscene.width = game.height;
    cutscene.height = game.height;
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
    this.width = game.width;
    this.height = game.height;
    this.selector.style.width = this.width + 'px';
    this.selector.style.height = this.height + 'px';

    cutscene.style.top = (this.height - cutscene.height) / 2 + 'px';
    cutscene.style.left = (this.width - cutscene.width) / 2 + 'px';
    cutscene.style.backgroundSize = cutscene.width + 'px ' + cutscene.height + 'px';
  }
};
