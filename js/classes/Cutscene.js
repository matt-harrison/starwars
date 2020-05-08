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

  const cutsceneImg = document.createElement('div');

  cutsceneImg.style.backgroundImage = "url('img/cutscenes/" + img + ".png')";

  if (master.gameWidth <= master.gameWidth) {
    cutsceneImg.width = master.gameWidth;
    cutsceneImg.height = master.gameWidth;
  } else {
    cutsceneImg.width = master.gameWidth;
    cutsceneImg.height = master.gameWidth;
  }

  cutsceneImg.style.width = cutsceneImg.width + 'px';
  cutsceneImg.style.height = cutsceneImg.height + 'px';
  cutsceneImg.style.position = 'absolute';
  cutsceneImg.style.top = (this.height - cutsceneImg.height) / 2 + 'px';
  cutsceneImg.style.left = (this.width - cutsceneImg.width) / 2 + 'px';
  cutsceneImg.style.backgroundSize = cutsceneImg.width + 'px ' + cutsceneImg.height + 'px';
  cutsceneImg.style.zIndex = '100';
  cutsceneImg.setAttribute('data-key', 'enter');

  this.selector.appendChild(cutsceneImg);

  this.resize = function() {
    this.width = master.gameWidth;
    this.height = master.gameWidth;
    this.selector.style.width = this.width + 'px';
    this.selector.style.height = this.height + 'px';

    cutsceneImg.style.top = (this.height - cutsceneImg.height) / 2 + 'px';
    cutsceneImg.style.left = (this.width - cutsceneImg.width) / 2 + 'px';
    cutsceneImg.style.backgroundSize = cutsceneImg.width + 'px ' + cutsceneImg.height + 'px';
  }
};
