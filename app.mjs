import {
  adaptCoords,
  add,
  changeDirection,
  collision,
  getIsCrossing,
  getIsOnStage,
  getRandom,
  initEnemies,
  preload
} from './js/utils.js';

import {
  ACTOR_TYPES,
  ATTRACTION,
  BUTTON_NAMES,
  CARDINALS,
  CHARACTERS,
  COLORS,
  EPISODES,
  FPS,
  HUD_OPACITY,
  IS_MOBILE,
  KEYS,
  MODES,
  NUMERALS,
  WEAPON_TYPES
} from './js/constants/index.js';

import { Actor }      from './js/classes/Actor.js';
import { Animation }  from './js/classes/Animation.js';
import { Bomb }       from './js/classes/Bomb.js';
import { Cutscene }   from './js/classes/Cutscene.js';
import { Game }       from './js/classes/Game.js';
import { Hud }        from './js/classes/Hud.js';
import { Lightsaber } from './js/classes/Lightsaber.js';
import { Obstacle }   from './js/classes/Obstacle.js';
import { Player }     from './js/classes/Player.js';
import { Projectile } from './js/classes/Projectile.js';
import { Stage }      from './js/classes/Stage.js';

const game = {
  animations     : [],
  counter        : 0,
  cutsceneCount  : 0,
  enemies        : [],
  enemiesKilled  : 0,
  episode        : 3,
  friendlies     : [],
  height         : IS_MOBILE ? window.innerHeight : 500,
  hud            : null,
  isGameOver     : false,
  isInvincible   : false,
  isPaused       : false,
  isLevelDefeated: false,
  keys           : [],
  level          : 0,
  mode           : MODES.TITLE,
  neutrals       : [],
  obstacles      : [],
  player         : null,
  promptClick    : IS_MOBILE ? 'Tap to begin' : 'Press Enter',
  promptStart    : IS_MOBILE ? 'Press Start'  : 'Press Enter',
  props          : [],
  selector       : null,
  stage          : null,
  width          : IS_MOBILE ? window.innerWidth : 500
};

const advanceLevel = () => {
  if (game.level === game.episode.length) {
    reset();
  } else if (game.cutsceneCount < EPISODES[game.episode][game.level].cutscenes.length) {
    initMode(MODES.CUTSCENE);
  } else {
    initLevel();
  }
}

const buttonPush = (key, id) => {
  if (game.mode === MODES.GAMEPLAY || game.mode === MODES.RESET) {
    if (!game.player.isAttacking) {
      if (game.keys.indexOf(key) === -1) {
        game.keys.push(key);
      }
    }
  } else if (game.mode === MODES.EPISODE && Object.values(CARDINALS).indexOf(key) !== -1) {
    NUMERALS.forEach(numeral => {
      document.getElementById(`btnEpisode${numeral}`).style.color = COLORS.BLACK;
    });

    if (key === CARDINALS.LEFT) {
      game.episode -= 1;
    } else if (key === CARDINALS.RIGHT) {
      game.episode += 1;
    } else if (key === CARDINALS.UP) {
      game.episode -= 3;
    } else if (key === CARDINALS.DOWN) {
      game.episode += 3;
    }

    game.episode = (game.episode < 0) ? 6 + game.episode : (game.episode % 6);

    document.getElementById(`btnEpisode${NUMERALS[game.episode]}`).style.color = COLORS.WHITE;
  }

  if (Object.values(BUTTON_NAMES).indexOf(id) > -1) {
    document.getElementById(id).style.opacity = '1';
  }
}

const buttonUpdate = (event) => {
  Object.values(CARDINALS).forEach(cardinal => {
    const previousButton = document.querySelector(`[data-key="${game.player.dir}"]`);
    const button         = document.querySelector(`[data-key="${cardinal}"]`);
    const bounds         = button.getBoundingClientRect();

    if (event.changedTouches[0].pageX > bounds.left && event.changedTouches[0].pageX < bounds.right && event.changedTouches[0].pageY > bounds.top && event.changedTouches[0].pageY < bounds.bottom) {
      if (game.keys.indexOf(cardinal) === -1) {
        buttonRelease(game.player.dir, previousButton.id);
        buttonPush(cardinal, button.id);
      }
    } else if (game.keys.indexOf(cardinal) !== -1) {
      buttonRelease(game.player.dir, button.id);
    }
  });
}

const buttonRelease = (key, id) => {
  if (key === KEYS.ENTER) {
    if (game.mode === MODES.RESET) {
      reset();
    } else if (game.mode === MODES.TITLE) {
      initMode(MODES.CUTSCENE);
    } else if (game.mode === MODES.CUTSCENE) {
      if (++game.cutsceneCount < EPISODES[game.episode][game.level].cutscenes.length) {
        initMode(MODES.CUTSCENE);
      } else {
        initMode(MODES.GAMEPLAY);
      }
    } else if (game.mode === MODES.GAMEPLAY) {
      if (game.isGameOver) {
        initLevel();
      } else if (game.isLevelDefeated) {
        advanceLevel();
      } else {
        pause();
      }
    }

    game.keys.splice(0);
  } else if (key === KEYS.ESCAPE) {
    game.hud.score = 0;
    reset();
  }

  const position = game.keys.indexOf(key);

  if (position !== -1) {
    if (key === KEYS.SPACE) {
      game.player.isAttacking = false;
    } else if (key === KEYS.Z) {
    } else {
      game.player.isRunning    = false;
      game.player.spriteColumn = 0;
    }

    game.keys.splice(position, 1);
  }

  if (Object.values(BUTTON_NAMES).indexOf(id) > -1) {
    document.getElementById(id).style.opacity = HUD_OPACITY;
  }
}

const clearStage = () => {
  game.isLevelDefeated = false;

  game.selector.removeChild(game.stage.selector);
  game.enemies.splice(0);
  game.friendlies.splice(0);
  game.obstacles.splice(0);
  game.props.splice(0);
  game.animations.splice(0);
  game.keys.splice(0);

  game.hud.directions = '';
  game.hud.title      = '';
  game.hud.victimName = '';

  if (game.isGameOver) {
    game.hud.score = 0;
  }

  game.hud.selector.setAttribute('data-key', '');
}

const initInterface = () => {
  if (IS_MOBILE) {
    //Init touchscreen controls
    window.addEventListener('touchstart', function(event) {
      if (typeof(event.target.getAttribute('data-key')) !== 'undefined') {
        buttonPush(event.target.getAttribute('data-key'), event.target.id);
      }
    }, {passive: false});

    window.addEventListener('touchmove', function(event) {
      event.preventDefault();
      //buttonUpdate(event);
    }, {passive: false});

    window.addEventListener('touchend', function(event) {
      if (typeof(event.target.getAttribute('data-key')) !== 'undefined') {
        buttonRelease(event.target.getAttribute('data-key'), event.target.id);
      }

      //Check if touch was released over different d-pad button
      Object.values(CARDINALS).forEach(cardinal => {
        const button = document.querySelector(`[data-key="${cardinal}"]`);
        const bounds = button.getBoundingClientRect();

        if (event.pageX > bounds.left && event.pageX < bounds.right && event.pageY > bounds.top && event.pageY < bounds.bottom) {
          //buttonRelease(game.player.dir, button.id);
        }
      });
    }, {passive: false});

    window.addEventListener('resize', function() {
      if (game.mode === MODES.GAMEPLAY && !game.isGameOver && !game.isPaused) {
        pause();
      }

      resizeGame(window.innerWidth, window.innerHeight);
    });
  } else {
    //Init desktop controls
    window.addEventListener('keydown', function(event) {
      let key = '';
      let id = '';

      if (!game.isPaused) {
        switch (event.keyCode) {
          case 37:
            key = CARDINALS.LEFT;
            break;
          case 38:
            key = CARDINALS.UP;
            break;
          case 39:
            key = CARDINALS.RIGHT;
            break;
          case 40:
            key = CARDINALS.DOWN;
            break;
          case 90:
            key = KEYS.Z;
            break;
        }
      }

      switch (event.keyCode) {
        case 13:
          key = KEYS.ENTER;
          break;
        case 27:
          key = KEYS.ESCAPE;
          break;
        default:
          break;
      }

      if (key !== '') {
        buttonPush(key, null);
      }
    });

    window.addEventListener('keypress', function(event) {
      let key = '';

      if (event.charCode === 32) {
        key = KEYS.SPACE;
      }

      if (key !== '') {
        buttonPush(key, null);
      }
    });

    window.addEventListener('keyup', function(event) {
      let key = '';

      if (!game.isPaused) {
        switch (event.keyCode) {
          case 37:
            key = CARDINALS.LEFT;
            break;
          case 38:
            key = CARDINALS.UP;
            break;
          case 39:
            key = CARDINALS.RIGHT;
            break;
          case 40:
            key = CARDINALS.DOWN;
            break;
          case 32:
            key = KEYS.SPACE;
            break;
          case 90:
            key = KEYS.Z;
            break;
        }
      }

      switch (event.keyCode) {
        case 13:
          key = KEYS.ENTER;
          break;
        case 27:
          key = KEYS.ESCAPE;
          break;
        default:
          break;
      }

      if (key !== '') {
        buttonRelease(key, null);
      }
    });
  }
}

const initLevel = () => {
  clearStage();

  game.stage = new Stage({
    data: EPISODES[game.episode][game.level],
    game
  });

  game.player = new Player({
    data: game.character || game.stage.character,
    game
  });

  game.counter                  = 0;
  game.cutsceneCount            = 0;
  game.enemiesKilled            = 0;
  game.hud.txtScore.style.color = game.stage.textColor;
  game.isBossesReached          = false;
  game.isGameOver               = false;

  if (EPISODES[game.episode][game.level].obstacles.length > 0) {
    game.stage.obstacles.forEach(obstacle => {
      const data = Object.assign({
        x: obstacle.x,
        y: obstacle.y
      }, obstacle.type);

      new Obstacle({ data, game });
    });
  }

  initEnemies(game);

  if (IS_MOBILE) {
    buttons.style.display = '';
  }
}

const initMode = (mode) => {
  game.mode = mode;

  if (game.mode === MODES.TITLE) {
    game.counter       = 0;
    game.cutsceneCount = 0;
    game.episode       = 3;
    game.isPaused      = false;
    game.level         = 0;

    game.stage = new Stage({
      data: ATTRACTION,
      game
    });

    if (game.stage.obstacles.length > 0) {
      game.stage.obstacles?.forEach(obstacle => {
        const data = Object.assign({
          x: obstacle.x,
          y: obstacle.y
        }, obstacle.type);

        new Obstacle({ data, game });
      });
    }

    initEnemies(game);

    game.hud.directions = game.promptClick;
    game.hud.title      = 'Star Wars';
    game.hud.victimName = '';

    game.hud.selector.setAttribute('data-key', KEYS.ENTER);

    if (IS_MOBILE) {
      buttons.style.display = 'none';
    }
  } else if (game.mode === MODES.CUTSCENE) {
    game.counter  = 0;
    game.isPaused = false;

    game.hud.directions = '';
    game.hud.title      = '';

    game.hud.selector.setAttribute('data-key', KEYS.ENTER);

    if (EPISODES[game.episode][game.level].cutscenes.length > 0) {
      clearStage();

      game.stage = new Cutscene({
        img: EPISODES[game.episode][game.level].cutscenes[game.cutsceneCount],
        game
      })
    } else {
      initMode(MODES.GAMEPLAY);
    }
  } else if (game.mode === MODES.GAMEPLAY) {
    game.isGameOver = false;
    game.isPaused   = false;
    game.mode       = MODES.GAMEPLAY;

    initLevel();
  }
}

const levelLose = () => {
  game.hud.counter    = 0;
  game.hud.directions = `${game.promptStart}<br/>to restart level.`;
  game.hud.title      = 'Game Over';
  game.isGameOver     = true;

  game.keys.splice(0);
}

const levelWin = () => {
  game.hud.directions  = game.promptStart;
  game.isLevelDefeated = true;

  if (++game.level === EPISODES[game.episode].length) {
    game.hud.title    = 'You win!';
    game.isInvincible = false;
    game.mode         = MODES.RESET;
  } else {
    game.hud.title = `Next:<br/>${EPISODES[game.episode][game.level].name}`;
  }
}

const loop = () => {
  if (
    (game.mode === MODES.GAMEPLAY && !game.isPaused) ||
    game.mode === MODES.TITLE ||
    game.mode === MODES.RESET
  ) {
    if (game.mode !== MODES.TITLE) {
      if (game.player.isActive && !game.player.isAttacking) {
        game.keys.forEach(key => {
          if (Object.values(CARDINALS).indexOf(key) !== -1) {
            game.player.dir       = key;
            game.player.isRunning = true;
          }

          if (key === KEYS.SPACE || key === KEYS.Z) {
            game.player.attack(key);
          }
        });
      }

      game.enemies.forEach(enemy => {
        if (game.player.isActive) {
          if (collision(game.player, enemy)) {
            if (enemy.isActive && !game.isInvincible) {
              game.player.kill();
            }

            if (enemy.isActive && enemy.isPropulsive) {
              enemy.kill();
            }
          } else if (
            enemy.isActive &&
            game.counter % FPS === 0 &&
            enemy.weaponType === WEAPON_TYPES.PROJECTILE &&
            getIsCrossing(enemy, game.player) &&
            getIsOnStage({ actor: enemy, game })
          ) {
            if (getRandom(EPISODES[game.episode].length - game.level) === 0) {
              new Projectile({
                game,
                origin: enemy
              });
            }
          }
        }
      });

      game.friendlies.forEach(friendly => {
        if (friendly.isActive && friendly.isPropulsive) {
          if (game.player.isActive && collision(game.player, friendly)) {
            if (!game.isInvincible) {
              game.player.kill();
            }

            friendly.kill();
          }
        }
      });

      game.props.forEach(prop => {
        if (game.player.isActive && collision(game.player, prop)) {
          if (!game.isInvincible && prop.isActive && prop.origin !== game.player) {
            game.player.kill();
            prop.kill();
          }

          if (prop.type === 'lightsaber' && prop.speed > 0) {
            if (prop.isActive) {
              game.player.isAttacking = false;
            } else {
              prop.isActive = true;
            }
          }
        }

        game.enemies.forEach(enemy => {
          if (
            enemy.isActive &&
            enemy.code !== 'asteroid' &&
            game.counter % (FPS / 2) === 0 &&
            getIsCrossing(prop, enemy) &&
            getRandom(EPISODES[game.episode].length - game.level) === 0
          ) {
            changeDirection({ actor: enemy, game });
          }

          if (enemy.isActive && prop.origin !== enemy && collision(enemy, prop)) {
            enemy.hit();

            if (prop.type !== 'lightsaber') {
              prop.kill();
            }
          }
        });

        game.friendlies.forEach(friendly => {
          if (friendly.isActive && prop.origin !== friendly && collision(friendly, prop)) {
            friendly.hit();

            if (prop.type !== 'lightsaber') {
              prop.kill();
            }
          }
        });

        game.neutrals.forEach(neutral => {
          if (neutral.isActive && prop.origin !== neutral && collision(neutral, prop)) {
            neutral.hit();

            if (prop.type !== 'lightsaber') {
              prop.kill();
            }
          }
        });

        prop.update();
        prop.draw();
      });

      //Check for level completion
      if (
        game.enemiesKilled === add(game.stage.enemies.length - game.stage.enemiesOptional.length, game.stage.bosses.length) &&
        game.player.isActive &&
        !game.isLevelDefeated
      ) {
        levelWin();
      }

      //Check for level failure
      if (!game.player.isActive && !game.isGameOver) {
        levelLose();
      }

      game.player.update();
      game.player.draw();
    }

    // Add actors.
    game.stage.bosses?.forEach(boss => {
      if (
        game.enemiesKilled === game.stage.enemies.length - game.stage.enemiesOptional.length &&
        !game.isBossesReached
      ) {
        const data = Object.assign({}, boss);

        data.details.type = ACTOR_TYPES.ENEMY;

        new Actor({
          data,
          game
        });

        game.isBossesReached = true;
      }
    });

    game.stage.enemies?.forEach(enemy => {
      if (game.counter === enemy.details.delay) {
        new Actor({
          data: enemy,
          game
        });
      }
    });

    game.stage.friendlies?.forEach(friendly => {
      if (game.counter === friendly.details.delay) {
        const data = Object.assign({}, friendly);

        data.details.type = ACTOR_TYPES.FRIENDLY;

        new Actor({ data, game });
      }
    });

    game.stage.neutrals?.forEach(neutral => {
      if (game.counter === neutral.details.delay) {
        const data = Object.assign({}, neutral);

        data.details.type = ACTOR_TYPES.NEUTRAL;

        new Actor({ data, game });
      }
    });

    // Update and draw.
    game.animations.forEach(animation => {
      animation.update();
      animation.draw();
    });

    game.enemies.forEach(enemy => {
      enemy.update();
      enemy.draw();
    });

    game.friendlies.forEach(friendly => {
      friendly.update();
      friendly.draw();
    });

    game.neutrals.forEach(neutral => {
      neutral.update();
      neutral.draw();
    });

    game.obstacles.forEach(obstacle => {
      obstacle.update();
      obstacle.draw();
    });
  }

  game.hud.update();
  game.hud.draw();

  if (!game.isPaused) {
    game.counter++;
  }

  setTimeout(loop, 1000 / FPS);
}

const pause = () => {
  game.isPaused = !game.isPaused;

  game.hud.counter    = 0;
  game.hud.directions = game.isPaused ? game.promptStart : '';
  game.hud.title      = game.isPaused ? 'Pause' : '';
}

const reset = () => {
  clearStage();
  initMode(MODES.TITLE);
}

const resizeGame = (width, height) => {
  if (game.mode === MODES.GAMEPLAY) {
    adaptCoords({
      actor: game.player,
      game
    });

    game.enemies.forEach(enemy => {
      adaptCoords({
        actor: enemy,
        game
      });
    });

    game.props.forEach(prop => {
      adaptCoords({
        actor: game.props,
        game
      });
    });
  }

  game.width                 = width;
  game.height                = height;
  game.selector.style.width  = `${game.width}px`;
  game.selector.style.height = `${game.height}px`;

  if (game.mode === MODES.CUTSCENE) {
    game.stage.resize();
  }

  game.obstacles.forEach(obstacle => {
    adaptCoords({
      actor: obstacle,
      game
    });
  });

  btnStart.style.left = `${(game.width - 75) / 2}px`;
}

(function() {
  game.selector = new Game(game);
  game.hud      = new Hud({ game });

  initInterface();
  initMode(MODES.TITLE);

  loop();
})();

// Temporarily expose game object to the global scope to enable debugging from browser.
window.game = game;
