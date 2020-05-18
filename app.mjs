import {
  adaptCoords,
  add,
  collision,
  crossPaths,
  getRandom,
  initEnemies,
  preload
} from './js/utils.js';

import * as CHARACTERS          from './js/constants/characters.js';
import { ATTRACTION, EPISODES } from './js/constants/episodes.js';
import { WEAPON_TYPES }         from './js/constants/weapons.js';
import {
  ACTOR_TYPES,
  BUTTON_NAMES,
  CARDINALS,
  COLORS,
  FPS,
  HUD_OPACITY,
  IS_MOBILE,
  MODES,
  NUMERALS
} from './js/constants/config.js';

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
  animations   : [],
  counter      : 0,
  cutsceneCount: 0,
  enemies      : [],
  episode      : 3,
  friendlies   : [],
  height       : IS_MOBILE ? window.innerHeight : 500,
  hud          : null,
  isGameOver   : false,
  isInvincible : false,
  isPaused     : false,
  keys         : [],
  level        : 0,
  mode         : MODES.TITLE,
  neutrals     : [],
  obstacles    : [],
  player       : null,
  promptClick  : IS_MOBILE ? 'Tap to begin' : 'Press Enter',
  promptStart  : IS_MOBILE ? 'Press Start'  : 'Press Enter',
  props        : [],
  selector     : null,
  stage        : null,
  width        : IS_MOBILE ? window.innerWidth  : 500
};

(function() {
  game.selector = new Game(game);
  game.hud      = new Hud({ game });

  initInterface();
  initMenu(MODES.TITLE);

  loop();
})();

// Temporarily expose game object to the global scope to make cheats accessible from console.
window.game = game;

function advanceStage() {
  if (game.level === game.episode.length) {
    reset();
  } else {
    if (game.hud.score === 0 || EPISODES[game.episode][game.level].cutscenes.length > 0) {
      clearStage();
      initLevel();
    } else {
      game.cutsceneCount = 0;
      initMenu(MODES.CUTSCENE);
    }
  }
}

function buttonPush(key, id) {
  if (game.mode === MODES.GAMEPLAY || game.mode === MODES.RESET) {
    if (!game.player.attacking) {
      if (game.keys.indexOf(key) === -1) {
        game.keys.push(key);
      }
    }
  } else if (game.mode === MODES.EPISODE && Object.values(CARDINALS).indexOf(key) !== -1) {
    NUMERALS.forEach(numeral => {
      document.getElementById('btnEpisode' + numeral).style.color = COLORS.BLACK;
    });

    if (key === 'left') {
      game.episode -= 1;
    } else if (key === 'right') {
      game.episode += 1;
    } else if (key === 'up') {
      game.episode -= 3;
    } else if (key === 'down') {
      game.episode += 3;
    }

    game.episode = (game.episode < 0) ? 6 + game.episode : (game.episode % 6);

    document.getElementById('btnEpisode' + NUMERALS[game.episode]).style.color = COLORS.WHITE;
  }

  if (Object.values(BUTTON_NAMES).indexOf(id) > -1) {
    document.getElementById(id).style.opacity = '1';
  }
}

function buttonUpdate(event) {
  Object.values(CARDINALS).forEach(cardinal => {
    const previousButton = document.querySelector('[data-key="' + game.player.dir + '"]');
    const button         = document.querySelector('[data-key="' + cardinal + '"]');
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

function buttonRelease(key, id) {
  if (key === 'enter') {
    if (game.mode === MODES.RESET) {
      reset();
    } else if (game.mode === MODES.TITLE) {
      game.level         = 0;
      game.cutsceneCount = 0;

      initMenu(MODES.CUTSCENE);
    } else if (game.mode === MODES.CUTSCENE) {
      game.mode = MODES.GAMEPLAY;

      if (++game.cutsceneCount < EPISODES[game.episode][game.level].cutscenes.length) {
        initMenu(MODES.CUTSCENE);
      } else {
        if (game.stage.defeated) {
          initLevel();
        } else {
          initGame();
        }
      }
    } else if (game.isGameOver) {
      initGame();
      advanceStage();
    } else if (game.stage.defeated) {
      advanceStage();
    } else {
      pause();
    }
    game.keys.splice(0);
  } else if (key === 'escape') {
    reset();
  }

  const position = game.keys.indexOf(key);

  if (position !== -1) {
    if (key === 'space') {
      game.player.attacking = false;
    } else if (key === 'Z') {
    } else {
      game.player.running = false;
      game.player.spriteColumn = 0;
    }
    game.keys.splice(position, 1);
  }

  if (Object.values(BUTTON_NAMES).indexOf(id) > -1) {
    document.getElementById(id).style.opacity = HUD_OPACITY;
  }
}

function clearStage() {
  game.selector.removeChild(game.stage.selector);
  game.enemies.splice(0);
  game.friendlies.splice(0);
  game.obstacles.splice(0);
  game.props.splice(0);
  game.animations.splice(0);
  game.keys.splice(0);

  game.hud.scoreText.innerHTML  = game.hud.score;
  game.hud.victimText.innerHTML = '';
}

function initGame() {
  game.mode                        = MODES.GAMEPLAY;
  game.isGameOver                  = false;
  game.isPaused                    = false;
  game.hud.scoreText.innerHTML = game.hud.score;

  clearStage();
  initLevel();
}

function initInterface() {
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
        const button = document.querySelector('[data-key="' + cardinal + '"]');
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
            key = 'left';
            break;
          case 38:
            key = 'up';
            break;
          case 39:
            key = 'right';
            break;
          case 40:
            key = 'down';
            break;
          case 90:
            key = 'Z';
            break;
        }
      }

      switch (event.keyCode) {
        case 13:
          key = 'enter';
          break;
        case 27:
          key = 'escape';
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
        key = 'space';
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
            key = 'left';
            break;
          case 38:
            key = 'up';
            break;
          case 39:
            key = 'right';
            break;
          case 40:
            key = 'down';
            break;
          case 32:
            key = 'space';
            break;
          case 90:
            key = 'Z';
            break;
        }
      }

      switch (event.keyCode) {
        case 13:
          key = 'enter';
          break;
        case 27:
          key = 'escape';
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

function initLevel() {
  game.stage = new Stage({
    data: EPISODES[game.episode][game.level],
    game
  });

  game.player = new Player({
    data: game.character || game.stage.character,
    game
  });

  game.bossesReached                 = false;
  game.counter                       = 0;
  game.hud.scoreText.style.color = game.stage.textColor;

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

  game.hud.selector.setAttribute('data-key', '');

  game.hud.title.innerHTML          = '';
  game.hud.directions.innerHTML     = '';
  game.hud.scoreboard.style.display = '';

  if (IS_MOBILE) {
    buttons.style.display = '';
  }
}

function initMenu(mode) {
  game.counter    = 0;
  game.isGameOver = true;
  game.isPaused   = false;
  game.mode       = mode;

  if (game.mode === MODES.TITLE) {
    game.cutsceneCount = 0;
    game.hud.score     = 0;

    game.stage = new Stage({
      data: ATTRACTION,
      game
    });

    if (EPISODES[game.episode][game.level].obstacles.length > 0) {
      game.stage.obstacles?.forEach(obstacle => {
        const data = Object.assign({
          x: obstacle.x,
          y: obstacle.y
        }, obstacle.type);

        new Obstacle({ data, game });
      });
    }

    initEnemies(game);

    game.hud.selector.setAttribute('data-key', 'enter');
    game.hud.title.innerHTML = 'Star Wars';
    game.hud.directions.innerHTML = game.promptClick;
    game.hud.scoreText.innerHTML = '';
    game.hud.victimText.innerHTML = '';

    if (IS_MOBILE) {
      buttons.style.display = 'none';
    }
  } else if (game.mode === MODES.CUTSCENE) {
    scoreboard.style.display = 'none';
    game.hud.selector.setAttribute('data-key', 'enter');
    title.innerHTML = '';
    directions.innerHTML = '';
    directions.style.pointerEvents = 'none';

    if (EPISODES[game.episode][game.level].cutscenes.length > 0) {
      clearStage();

      game.stage = new Cutscene({
        img: EPISODES[game.episode][game.level].cutscenes[game.cutsceneCount],
        game
      })
    } else {
      initGame();
    }
  }
}

function levelLose() {
  game.isGameOver = true;
  game.hud.score = 0;
  title.innerHTML = 'Game Over';
  directions.innerHTML = `${game.promptStart}<br/>to restart level.`;
  game.keys.splice(0);
}

function levelWin() {
  game.stage.defeated = true;
  directions.innerHTML      = game.promptStart;

  if (++game.level === EPISODES[game.episode].length) {
    game.isGameOver   = true;
    game.isInvincible = false;
    game.mode         = MODES.RESET;
    title.innerHTML     = 'You win!';
  } else {
    title.innerHTML = 'Next:<br/>' + EPISODES[game.episode][game.level].name;
  }
}

function loop() {
  if (
    (game.mode === MODES.GAMEPLAY && !game.isPaused) ||
    game.mode === MODES.TITLE ||
    game.mode === MODES.RESET
  ) {
    if (game.mode !== MODES.TITLE) {
      if (game.player.active && !game.player.attacking) {
        game.keys.forEach(key => {
          if (Object.values(CARDINALS).indexOf(key) !== -1) {
            game.player.dir     = key;
            game.player.running = true;
          }

          if (key === 'space' || key === 'Z') {
            game.player.attack(key);
          }
        });
      }

      game.enemies.forEach(enemy => {
        if (game.player.active) {
          if (collision(game.player, enemy)) {
            if (enemy.active && !game.isInvincible) {
              game.player.kill();
            }

            enemy.kill();
          } else if (enemy.active && enemy.weaponType === WEAPON_TYPES.PROJECTILE && enemy.weaponReady && crossPaths(enemy, game.player)) {
            const chance = 500 + EPISODES[game.episode].length - game.level;
            const random = getRandom(chance);

            if (random === 0) {
              new Projectile({
                game,
                origin: enemy
              });
            }
          }
        }
      });

      game.friendlies.forEach(friendly => {
        if (friendly.ship) {
          if (game.player.active && collision(game.player, friendly)) {
            if (!game.isInvincible) {
              game.player.kill();
            }

            friendly.kill();
          }
        }
      });

      game.props.forEach(prop => {
        if (game.player.active && collision(game.player, prop)) {
          if (!game.isInvincible && prop.active && prop.origin !== game.player) {
            game.player.kill();
            prop.kill();
          }

          if (prop.type === 'lightsaber' && prop.speed > 0) {
            if (prop.active) {
              game.player.attacking = false;
            } else {
              prop.active = true;
            }
          }
        }

        game.enemies.forEach(enemy => {
          if (prop.origin !== enemy && enemy.active && collision(enemy, prop)) {
            enemy.hit();

            if (prop.type !== 'lightsaber') {
              prop.kill();
            }
          }
        });

        game.friendlies.forEach(friendly => {
          if (prop.origin !== friendly && friendly.active && collision(friendly, prop)) {
            friendly.hit();

            if (prop.type !== 'lightsaber') {
              prop.kill();
            }
          }
        });

        game.neutrals.forEach(neutral => {
          if (prop.origin !== neutral && neutral.active && collision(neutral, prop)) {
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
        game.stage.enemiesKilled === add(game.stage.enemies.length - game.stage.enemiesOptional.length, game.stage.bosses.length) &&
        !game.stage.defeated
      ) {
        levelWin();
      }

      //Check for level failure
      if (!game.player.active) {
        levelLose();
      }

      //Check victim identification interval
      if (game.hud.victimCount > 0) {
        game.hud.victimCount--;
      } else {
        game.hud.victimText.innerHTML = '';
      }

      game.player.update();
      game.player.draw();
    }

    // Add actors.
    game.stage.bosses?.forEach(boss => {
      if (
        game.stage.enemiesKilled === game.stage.enemies.length - game.stage.enemiesOptional.length &&
        !game.bossesReached
      ) {
        const data = Object.assign({}, boss);

        data.details.type = ACTOR_TYPES.ENEMY;

        new Actor({
          data,
          game
        });

        game.bossesReached = true;
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

    game.hud.update();
    game.hud.draw();
  }

  if (!game.isPaused) {
    game.counter++;
  }

  setTimeout(loop, 1000 / FPS);
}

function pause() {
  game.isPaused      = !game.isPaused;
  directions.innerHTML = game.isPaused ? game.promptStart : '';
  title.innerHTML      = game.isPaused ? 'Pause'            : '';
}

function reset() {
  clearStage();
  initMenu(MODES.TITLE);
}

function resizeGame(width, height) {
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
  game.selector.style.width  = game.width + 'px';
  game.selector.style.height = game.height + 'px';

  if (game.mode === MODES.CUTSCENE) {
    game.stage.resize();
  }

  game.obstacles.forEach(obstacle => {
    adaptCoords({
      actor: obstacle,
      game
    });
  });

  btnStart.style.left = ((game.width - 75) / 2) + 'px';
}
