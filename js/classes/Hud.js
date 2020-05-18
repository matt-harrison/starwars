import { BUTTON_NAMES, HUD_OPACITY, IS_MOBILE } from '/js/constants/config.js';

export const Hud = function({
  game
}) {
  const { promptClick } = game;
  const directionSize   = IS_MOBILE ? '14px' : '25px';
  const lineHeight      = IS_MOBILE ? '1' : '1.5';
  const titleSize       = IS_MOBILE ? '25px' : '40px';

  this.selector                = document.createElement('div');
  this.selector.id             = 'hud';
  this.selector.style.position = 'absolute';
  this.selector.style.width    = '100%';
  this.selector.style.height   = '100%';
  this.selector.style.zIndex   = '99';

  game.selector.appendChild(this.selector);

  //Add title text
  this.title                     = document.createElement('h1');
  this.title.id                  = 'title';
  this.title.innerHTML           = 'Star Wars';
  this.title.style.fontSize      = titleSize;
  this.title.style.margin        = '0';
  this.title.style.pointerEvents = 'none';
  this.title.style.position      = 'absolute';
  this.title.style.textAlign     = 'center';
  this.title.style.top           = '30%';
  this.title.style.width         = '100%';
  this.title.style.zIndex        = '10';

  //Add directions text
  this.directions                     = document.createElement('h2');
  this.directions.id                  = 'directions';
  this.directions.innerHTML           = promptClick;
  this.directions.style.bottom        = '30%';
  this.directions.style.fontSize      = directionSize;
  this.directions.style.lineHeight    = lineHeight;
  this.directions.style.margin        = '0';
  this.directions.style.pointerEvents = 'none';
  this.directions.style.position      = 'absolute';
  this.directions.style.textAlign     = 'center';
  this.directions.style.width         = '100%';
  this.directions.style.zIndex        = '10';

  //Add score
  this.scoreboard                 = document.createElement('h2');
  this.scoreboard.id              = 'scoreboard';
  this.scoreboard.innerHTML       = '';
  this.scoreboard.style.boxSizing = 'border-box';
  this.scoreboard.style.margin    = '0';
  this.scoreboard.style.padding   = '5px';
  this.scoreboard.style.position  = 'absolute';
  this.scoreboard.style.width     = '100%';
  this.scoreboard.style.zIndex    = '10';

  //Add score
  this.score                    = 0;
  this.scoreText                = document.createElement('span');
  this.scoreText.id             = 'score';
  this.scoreText.innerHTML      = '';
  this.scoreText.style.cssFloat = 'left';

  //Add victim id
  this.victimCount               = 0;
  this.victimText                = document.createElement('span');
  this.victimText.id             = 'victim';
  this.victimText.innerHTML      = '';
  this.victimText.style.cssFloat = 'right';

  this.selector.appendChild(this.title);
  this.selector.appendChild(this.directions);
  this.selector.appendChild(this.scoreboard);
  this.scoreboard.appendChild(this.scoreText);
  this.scoreboard.appendChild(this.victimText);

  if (IS_MOBILE) {
    //Disable swipe to bounce.
    document.ontouchmove = function(event) {
      event.preventDefault();
      window.scrollTo(0, 0);
    }

    //Add container for all buttons
    this.buttons                = document.createElement('div');
    this.buttons.id             = 'buttons';
    this.buttons.style.bottom   = '0';
    this.buttons.style.display  = '';
    this.buttons.style.height   = '165px';
    this.buttons.style.left     = '0';
    this.buttons.style.position = 'absolute';
    this.buttons.style.width    = '100%';
    this.buttons.style.zIndex   = '100';

    //Add middle of D-pad
    this.dpad                       = document.createElement('div');
    this.dpad.style.backgroundImage = 'url("img/hud/middle.png")';
    this.dpad.style.bottom          = '50px';
    this.dpad.style.height          = '65px';
    this.dpad.style.left            = '50px';
    this.dpad.style.opacity         = HUD_OPACITY;
    this.dpad.style.position        = 'absolute';
    this.dpad.style.width           = '65px';

    //Add buttons to DOM
    this.btnLeft                       = document.createElement('div');
    this.btnLeft.id                    = BUTTON_NAMES.LEFT;
    this.btnLeft.style.backgroundImage = 'url("img/hud/btnLeft.png")';
    this.btnLeft.style.bottom          = '55px';
    this.btnLeft.style.height          = '55px';
    this.btnLeft.style.left            = '5px';
    this.btnLeft.style.opacity         = HUD_OPACITY;
    this.btnLeft.style.position        = 'absolute';
    this.btnLeft.style.width           = '45px';
    this.btnLeft.setAttribute('data-key', 'left');

    this.btnUp                       = document.createElement('div');
    this.btnUp.id                    = BUTTON_NAMES.UP;
    this.btnUp.style.backgroundImage = 'url("img/hud/btnUp.png")';
    this.btnUp.style.bottom          = '115px';
    this.btnUp.style.height          = '45px';
    this.btnUp.style.left            = '55px';
    this.btnUp.style.opacity         = HUD_OPACITY;
    this.btnUp.style.position        = 'absolute';
    this.btnUp.style.width           = '55px';
    this.btnUp.setAttribute('data-key', 'up');

    this.btnRight                       = document.createElement('div');
    this.btnRight.id                    = BUTTON_NAMES.RIGHT;
    this.btnRight.style.backgroundImage = 'url("img/hud/btnRight.png")';
    this.btnRight.style.bottom          = '55px';
    this.btnRight.style.height          = '55px';
    this.btnRight.style.left            = '115px';
    this.btnRight.style.opacity         = HUD_OPACITY;
    this.btnRight.style.position        = 'absolute';
    this.btnRight.style.width           = '45px';
    this.btnRight.setAttribute('data-key', 'right');

    this.btnDown                       = document.createElement('div');
    this.btnDown.id                    = BUTTON_NAMES.DOWN;
    this.btnDown.style.backgroundImage = 'url("img/hud/btnDown.png")';
    this.btnDown.style.bottom          = '5px';
    this.btnDown.style.height          = '45px';
    this.btnDown.style.left            = '55px';
    this.btnDown.style.opacity         = HUD_OPACITY;
    this.btnDown.style.position        = 'absolute';
    this.btnDown.style.width           = '55px';
    this.btnDown.setAttribute('data-key', 'down');

    this.btnAttack                       = document.createElement('div');
    this.btnAttack.id                    = BUTTON_NAMES.ATTACK;
    this.btnAttack.style.backgroundImage = 'url("img/hud/btnAttack.png")';
    this.btnAttack.style.bottom          = '50px';
    this.btnAttack.style.height          = '65px';
    this.btnAttack.style.opacity         = HUD_OPACITY;
    this.btnAttack.style.position        = 'absolute';
    this.btnAttack.style.right           = '5px';
    this.btnAttack.style.width           = '65px';
    this.btnAttack.setAttribute('data-key', 'space');

    this.btnAttack2                       = document.createElement('div');
    this.btnAttack2.id                    = BUTTON_NAMES.ATTACK2;
    this.btnAttack2.style.backgroundImage = 'url("img/hud/btnAttack.png")';
    this.btnAttack2.style.bottom          = '50px';
    this.btnAttack2.style.height          = '65px';
    this.btnAttack2.style.opacity         = HUD_OPACITY;
    this.btnAttack2.style.position        = 'absolute';
    this.btnAttack2.style.right           = '75px';
    this.btnAttack2.style.width           = '65px';
    this.btnAttack2.setAttribute('data-key', 'Z');

    this.btnStart                       = document.createElement('div');
    this.btnStart.id                    = BUTTON_NAMES.START;
    this.btnStart.style.backgroundImage = 'url("img/hud/btnStart.png")';
    this.btnStart.style.bottom          = '5px';
    this.btnStart.style.height          = '40px';
    this.btnStart.style.left            = ((game.gameWidth - 75) / 2) + 'px';
    this.btnStart.style.opacity         = HUD_OPACITY;
    this.btnStart.style.position        = 'absolute';
    this.btnStart.style.width           = '75px';
    this.btnStart.setAttribute('data-key', 'enter');

    this.selector.appendChild(this.buttons);
    this.buttons.appendChild(this.dpad);
    this.buttons.appendChild(this.btnLeft);
    this.buttons.appendChild(this.btnUp);
    this.buttons.appendChild(this.btnRight);
    this.buttons.appendChild(this.btnDown);
    this.buttons.appendChild(this.btnAttack);
    this.buttons.appendChild(this.btnAttack2);
    this.buttons.appendChild(this.btnStart);
  }

  this.update = () => {};

  this.draw = () => {
    if (game.counter % 8 === 0) {
      this.directions.style.display = this.directions.style.display === 'block' ? 'none' : 'block';
    }
  };
};
