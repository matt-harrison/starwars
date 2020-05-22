import {
  BUTTON_NAMES,
  COLORS,
  HUD_OPACITY,
  IS_MOBILE,
  KEYS
} from '/js/constants/config.js';

export const Hud = function({
  game
}) {
  this.counter        = 0;
  this.directions     = '';
  this.flashingStatus = 'display';
  this.score          = 0;
  this.textColor      = COLORS.BLACK;
  this.title          = '';
  this.victimColor    = COLORS.BLACK;
  this.victimInterval = null;
  this.victimName     = '';

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

  this.txtTitle                     = document.createElement('h1');
  this.txtTitle.id                  = 'title';
  this.txtTitle.innerHTML           = 'Star Wars';
  this.txtTitle.style.fontSize      = titleSize;
  this.txtTitle.style.margin        = '0';
  this.txtTitle.style.pointerEvents = 'none';
  this.txtTitle.style.position      = 'absolute';
  this.txtTitle.style.textAlign     = 'center';
  this.txtTitle.style.top           = '30%';
  this.txtTitle.style.width         = '100%';
  this.txtTitle.style.zIndex        = '10';

  this.txtDirections                     = document.createElement('h2');
  this.txtDirections.id                  = 'directions';
  this.txtDirections.innerHTML           = promptClick;
  this.txtDirections.style.bottom        = '30%';
  this.txtDirections.style.fontSize      = directionSize;
  this.txtDirections.style.lineHeight    = lineHeight;
  this.txtDirections.style.margin        = '0';
  this.txtDirections.style.pointerEvents = 'none';
  this.txtDirections.style.position      = 'absolute';
  this.txtDirections.style.textAlign     = 'center';
  this.txtDirections.style.width         = '100%';
  this.txtDirections.style.zIndex        = '10';

  this.txtScore                 = document.createElement('h2');
  this.txtScore.id              = 'score';
  this.txtScore.innerHTML       = '';
  this.txtScore.style.boxSizing = 'border-box';
  this.txtScore.style.margin    = '0';
  this.txtScore.style.padding   = '5px';
  this.txtScore.style.position  = 'absolute';
  this.txtScore.style.textAlign = 'left';
  this.txtScore.style.width     = '100%';
  this.txtScore.style.zIndex    = '10';

  this.txtVictim                 = document.createElement('h2');
  this.txtVictim.id              = 'victim';
  this.txtVictim.innerHTML       = '';
  this.txtVictim.style.boxSizing = 'border-box';
  this.txtVictim.style.margin    = '0';
  this.txtVictim.style.padding   = '5px';
  this.txtVictim.style.position  = 'absolute';
  this.txtVictim.style.textAlign = 'right';
  this.txtVictim.style.width     = '100%';
  this.txtVictim.style.zIndex    = '10';

  this.selector.appendChild(this.txtTitle);
  this.selector.appendChild(this.txtDirections);
  this.selector.appendChild(this.txtScore);
  this.selector.appendChild(this.txtVictim);

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
    this.btnLeft.setAttribute('data-key', CARDINALS.LEFT);

    this.btnUp                       = document.createElement('div');
    this.btnUp.id                    = BUTTON_NAMES.UP;
    this.btnUp.style.backgroundImage = 'url("img/hud/btnUp.png")';
    this.btnUp.style.bottom          = '115px';
    this.btnUp.style.height          = '45px';
    this.btnUp.style.left            = '55px';
    this.btnUp.style.opacity         = HUD_OPACITY;
    this.btnUp.style.position        = 'absolute';
    this.btnUp.style.width           = '55px';
    this.btnUp.setAttribute('data-key', CARDINALS.UP);

    this.btnRight                       = document.createElement('div');
    this.btnRight.id                    = BUTTON_NAMES.RIGHT;
    this.btnRight.style.backgroundImage = 'url("img/hud/btnRight.png")';
    this.btnRight.style.bottom          = '55px';
    this.btnRight.style.height          = '55px';
    this.btnRight.style.left            = '115px';
    this.btnRight.style.opacity         = HUD_OPACITY;
    this.btnRight.style.position        = 'absolute';
    this.btnRight.style.width           = '45px';
    this.btnRight.setAttribute('data-key', CARDINALS.RIGHT);

    this.btnDown                       = document.createElement('div');
    this.btnDown.id                    = BUTTON_NAMES.DOWN;
    this.btnDown.style.backgroundImage = 'url("img/hud/btnDown.png")';
    this.btnDown.style.bottom          = '5px';
    this.btnDown.style.height          = '45px';
    this.btnDown.style.left            = '55px';
    this.btnDown.style.opacity         = HUD_OPACITY;
    this.btnDown.style.position        = 'absolute';
    this.btnDown.style.width           = '55px';
    this.btnDown.setAttribute('data-key', CARDINALS.DOWN);

    this.btnAttack                       = document.createElement('div');
    this.btnAttack.id                    = BUTTON_NAMES.ATTACK;
    this.btnAttack.style.backgroundImage = 'url("img/hud/btnAttack.png")';
    this.btnAttack.style.bottom          = '50px';
    this.btnAttack.style.height          = '65px';
    this.btnAttack.style.opacity         = HUD_OPACITY;
    this.btnAttack.style.position        = 'absolute';
    this.btnAttack.style.right           = '5px';
    this.btnAttack.style.width           = '65px';
    this.btnAttack.setAttribute('data-key', KEYS.SPACE);

    this.btnAttack2                       = document.createElement('div');
    this.btnAttack2.id                    = BUTTON_NAMES.ATTACK2;
    this.btnAttack2.style.backgroundImage = 'url("img/hud/btnAttack.png")';
    this.btnAttack2.style.bottom          = '50px';
    this.btnAttack2.style.height          = '65px';
    this.btnAttack2.style.opacity         = HUD_OPACITY;
    this.btnAttack2.style.position        = 'absolute';
    this.btnAttack2.style.right           = '75px';
    this.btnAttack2.style.width           = '65px';
    this.btnAttack2.setAttribute('data-key', KEYS.Z);

    this.btnStart                       = document.createElement('div');
    this.btnStart.id                    = BUTTON_NAMES.START;
    this.btnStart.style.backgroundImage = 'url("img/hud/btnStart.png")';
    this.btnStart.style.bottom          = '5px';
    this.btnStart.style.height          = '40px';
    this.btnStart.style.left            = `${(game.width - 75) / 2}px`;
    this.btnStart.style.opacity         = HUD_OPACITY;
    this.btnStart.style.position        = 'absolute';
    this.btnStart.style.width           = '75px';
    this.btnStart.setAttribute('data-key', KEYS.ENTER);

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

  this.update = () => {
    if (game.counter >= this.victimInterval) {
      this.victimName = null;
    }

    this.flashingStatus = this.counter > 8 ? 'none' : 'block';

    this.counter = this.counter === 16 ? 0 : this.counter + 1;
  };

  this.draw = () => {
    this.txtDirections.innerHTML     = this.directions;
    this.txtDirections.style.color   = this.textColor;
    this.txtDirections.style.display = this.flashingStatus;
    this.txtScore.innerHTML          = this.score;
    this.txtScore.style.color        = this.victimColor;
    this.txtTitle.innerHTML          = this.title;
    this.txtTitle.style.color        = this.textColor;
    this.txtVictim.innerHTML         = this.victimName;
    this.txtVictim.style.color       = this.victimColor;
  };
};
