import {
  BUTTON_NAMES,
  CARDINALS,
  COLORS,
  HUD_OPACITY,
  IS_MOBILE,
  KEYS,
  MODES
} from '/js/constants/index.js';
import { attachNode } from '/js/utils.js';

export const Hud = function({
  game
}) {
  this.counter              = 0;
  this.directions           = '';
  this.directionsVisibility = 'display';
  this.score                = 0;
  this.scoreVisibility      = 'none';
  this.textColor            = COLORS.BLACK;
  this.title                = '';
  this.victimColor          = COLORS.BLACK;
  this.victimInterval       = null;
  this.victimName           = '';

  const directionSize   = IS_MOBILE ? '14px' : '25px';
  const lineHeight      = IS_MOBILE ? '1' : '1.5';
  const titleSize       = IS_MOBILE ? '25px' : '40px';

  this.selector = attachNode({
    attributes: {
      id: 'hud'
    },
    parent: game.selector,
    styles: {
      height  : '100%',
      position: 'absolute',
      width   : '100%',
      zIndex  : 900
    }
  });

  this.txtTitle = attachNode({
    attributes: {
      id: 'title',
      innerHTML: 'Star Wars'
    },
    nodeType: 'h1',
    parent: this.selector,
    styles: {
      fontSize     : titleSize,
      margin       : '0',
      pointerEvents: 'none',
      position     : 'absolute',
      textAlign    : 'center',
      top          : '30%',
      width        : '100%'
    }
  });

  this.txtDirections = attachNode({
    attributes: {
      id: 'directions',
      innerHTML: game.promptClick
    },
    nodeType: 'h2',
    parent: this.selector,
    styles: {
      bottom       : '30%',
      fontSize     : directionSize,
      lineHeight   : lineHeight,
      margin       : '0',
      pointerEvents: 'none',
      position     : 'absolute',
      textAlign    : 'center',
      width        : '100%'
    }
  });

  this.txtScore = attachNode({
    attributes: {
      id: 'score'
    },
    nodeType: 'h2',
    parent: this.selector,
    styles: {
      boxSizing: 'border-box',
      margin   : '0',
      padding  : '5px',
      position : 'absolute',
      textAlign: 'left',
      width    : '100%'
    }
  });

  this.txtVictim = attachNode({
    attributes: {
      id: 'victim'
    },
    nodeType: 'h2',
    parent: this.selector,
    styles: {
      boxSizing: 'border-box',
      margin   : '0',
      padding  : '5px',
      position : 'absolute',
      textAlign: 'right',
      width    : '100%'
    }
  });

  if (IS_MOBILE) {
    //Disable swipe to bounce.
    document.ontouchmove = function(event) {
      event.preventDefault();
      window.scrollTo(0, 0);
    }

    this.buttons = attachNode({
      attributes: {
        id: 'buttons'
      },
      parent: this.selector,
      styles: {
        bottom  : '0',
        display : '',
        height  : '165px',
        left    : '0',
        position: 'absolute',
        width   : '100%'
      }
    });

    this.dpad = attachNode({
      attributes: {
        id: 'dpad'
      },
      parent: this.buttons,
      styles: {
        backgroundImage: 'url("img/hud/middle.png")',
        bottom         : '50px',
        height         : '65px',
        left           : '50px',
        opacity        : HUD_OPACITY,
        position       : 'absolute',
        width          : '65px'
      }
    });

    this.btnAttack = attachNode({
      attributes: {
        id: BUTTON_NAMES.ATTACK
      },
      parent: this.buttons,
      styles: {
        backgroundImage: 'url("img/hud/btnAttack.png")',
        bottom         : '50px',
        height         : '65px',
        opacity        : HUD_OPACITY,
        position       : 'absolute',
        right          : '5px',
        width          : '65px'
      }
    });

    this.btnAttack2 = attachNode({
      attributes: {
        id: BUTTON_NAMES.ATTACK2
      },
      parent: this.buttons,
      styles: {
        backgroundImage: 'url("img/hud/btnAttack.png")',
        bottom         : '50px',
        height         : '65px',
        opacity        : HUD_OPACITY,
        position       : 'absolute',
        right          : '75px',
        width          : '65px'
      }
    });

    this.btnDown = attachNode({
      attributes: {
        id: BUTTON_NAMES.DOWN
      },
      parent: this.buttons,
      styles: {
        backgroundImage: 'url("img/hud/btnDown.png")',
        bottom         : '5px',
        height         : '45px',
        left           : '55px',
        opacity        : HUD_OPACITY,
        position       : 'absolute',
        width          : '55px'
      }
    });

    this.btnLeft = attachNode({
      attributes: {
        id: BUTTON_NAMES.LEFT
      },
      parent: this.buttons,
      styles: {
        backgroundImage: 'url("img/hud/btnLeft.png")',
        bottom         : '55px',
        height         : '55px',
        left           : '5px',
        opacity        : HUD_OPACITY,
        position       : 'absolute',
        width          : '45px'
      }
    });

    this.btnRight = attachNode({
      attributes: {
        id: BUTTON_NAMES.RIGHT
      },
      parent: this.buttons,
      styles: {
        backgroundImage: 'url("img/hud/btnRight.png")',
        bottom         : '55px',
        height         : '55px',
        left           : '115px',
        opacity        : HUD_OPACITY,
        position       : 'absolute',
        width          : '45px'
      }
    });

    this.btnUp = attachNode({
      attributes: {
        id: BUTTON_NAMES.UP
      },
      parent: this.buttons,
      styles: {
        backgroundImage: 'url("img/hud/btnUp.png")',
        bottom         : '115px',
        height         : '45px',
        left           : '55px',
        opacity        : HUD_OPACITY,
        position       : 'absolute',
        width          : '55px'
      }
    });

    this.btnStart = attachNode({
      attributes: {
        id: BUTTON_NAMES.START
      },
      parent: this.buttons,
      styles: {
        backgroundImage: 'url("img/hud/btnStart.png")',
        bottom         : '5px',
        height         : '40px',
        left           : `${(game.width - 75) / 2}px`,
        opacity        : HUD_OPACITY,
        position       : 'absolute',
        width          : '75px'
      }
    });

    this.btnAttack.setAttribute('data-key',  KEYS.SPACE);
    this.btnAttack2.setAttribute('data-key', KEYS.Z);
    this.btnDown.setAttribute('data-key',    CARDINALS.DOWN);
    this.btnLeft.setAttribute('data-key',    CARDINALS.LEFT);
    this.btnRight.setAttribute('data-key',   CARDINALS.RIGHT);
    this.btnStart.setAttribute('data-key',   KEYS.ENTER);
    this.btnUp.setAttribute('data-key',      CARDINALS.UP);
  }

  this.update = () => {
    if (game.counter >= this.victimInterval) {
      this.victimName = null;
    }

    this.directionsVisibility = this.counter > 8 ? 'none' : 'block';
    this.scoreVisibility      = game.mode === MODES.TITLE ? 'none' : 'block';

    this.counter = this.counter === 16 ? 0 : this.counter + 1;
  };

  this.draw = () => {
    this.txtDirections.innerHTML     = this.directions;
    this.txtDirections.style.color   = this.textColor;
    this.txtDirections.style.display = this.directionsVisibility;
    this.txtScore.innerHTML          = this.score;
    this.txtScore.style.color        = this.victimColor;
    this.txtScore.style.display      = this.scoreVisibility;
    this.txtTitle.innerHTML          = this.title;
    this.txtTitle.style.color        = this.textColor;
    this.txtVictim.innerHTML         = this.victimName;
    this.txtVictim.style.color       = this.victimColor;
  };
};
