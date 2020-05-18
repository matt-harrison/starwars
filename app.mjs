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

const master = {
  actors: {
    animations: [],
    enemies:    [],
    friendlies: [],
    neutrals:   [],
    obstacles:  [],
    props:      []
  },
  actorCount: 0,
  counter: 0,
  cutsceneCount: 0,
  dom: {
    game:   null,
    hud:    null,
    player: null,
    stage:  null
  },
  episode: 0,
  gameHeight: IS_MOBILE ? window.innerHeight : 500,
  gameWidth:  IS_MOBILE ? window.innerWidth : 500,
  isGameOver: false,
  isInvincible: false,
  isPaused: false,
  keys: [],
  level: 0,
  mode: MODES.TITLE,
  promptClick: IS_MOBILE ? 'Tap to begin' : 'Press Enter',
  promptStart: IS_MOBILE ? 'Press Start'  : 'Press Enter',
};

(function() {
  master.dom.game = new Game(master);
  master.dom.hud  = new Hud({ master });

  initInterface();
  initMenu(MODES.TITLE);

  loop();
})();

// Temporarily expose master object to the global scope to make cheats accessible from console.
window.master = master;

function advanceStage() {
  if (master.level === master.episode.length) {
    reset();
  } else {
    if (master.dom.hud.score === 0 || EPISODES[master.episode][master.level].cutscenes.length > 0) {
      clearStage();
      initLevel();
    } else {
      master.cutsceneCount = 0;
      initMenu(MODES.CUTSCENE);
    }
  }
}

function buttonPush(key, id) {
  if (master.mode === MODES.GAMEPLAY) {
    if (!master.dom.player.attacking) {
      if (master.keys.indexOf(key) === -1) {
        master.keys.push(key);
      }
    }
  } else if (master.mode === MODES.EPISODE && Object.values(CARDINALS).indexOf(key) !== -1) {
    NUMERALS.forEach(numeral => {
      document.getElementById('btnEpisode' + numeral).style.color = COLORS.BLACK;
    });

    if (key === 'left') {
      master.episode -= 1;
    } else if (key === 'right') {
      master.episode += 1;
    } else if (key === 'up') {
      master.episode -= 3;
    } else if (key === 'down') {
      master.episode += 3;
    }

    master.episode = (master.episode < 0) ? 6 + master.episode : (master.episode % 6);

    document.getElementById('btnEpisode' + NUMERALS[master.episode]).style.color = COLORS.WHITE;
  }

  if (Object.values(BUTTON_NAMES).indexOf(id) > -1) {
    document.getElementById(id).style.opacity = '1';
  }
}

function buttonUpdate(event) {
  Object.values(CARDINALS).forEach(cardinal => {
    const previousButton = document.querySelector('[data-key="' + master.dom.player.dir + '"]');
    const button = document.querySelector('[data-key="' + cardinal + '"]');
    const bounds = button.getBoundingClientRect();

    if (event.changedTouches[0].pageX > bounds.left && event.changedTouches[0].pageX < bounds.right && event.changedTouches[0].pageY > bounds.top && event.changedTouches[0].pageY < bounds.bottom) {
      if (master.keys.indexOf(cardinal) === -1) {
        buttonRelease(master.dom.player.dir, previousButton.id);
        buttonPush(cardinal, button.id);
      }
    } else if (master.keys.indexOf(cardinal) !== -1) {
      buttonRelease(master.dom.player.dir, button.id);
    }
  });
}

function buttonRelease(key, id) {
  if (key === 'enter') {
    if (master.mode === MODES.RESET) {
      reset();
    } else if (master.mode === MODES.TITLE) {
      master.level = 0;
      master.cutsceneCount = 0;
      initMenu(MODES.CUTSCENE);
    } else if (master.mode === MODES.CUTSCENE) {
      master.mode = MODES.GAMEPLAY;

      if (++master.cutsceneCount < EPISODES[master.episode][master.level].cutscenes.length) {
        initMenu(MODES.CUTSCENE);
      } else {
        if (master.dom.stage.defeated) {
          initLevel();
        } else {
          initGame();
        }
      }
    } else if (master.isGameOver) {
      initGame();
      advanceStage();
    } else if (master.dom.stage.defeated) {
      advanceStage();
    } else {
      pause();
    }
    master.keys.splice(0);
  } else if (key === 'escape') {
    reset();
  }

  const position = master.keys.indexOf(key);

  if (position !== -1) {
    if (key === 'space') {
      master.dom.player.attacking = false;
    } else if (key === 'Z') {
    } else {
      master.dom.player.running = false;
      master.dom.player.spriteColumn = 0;
    }
    master.keys.splice(position, 1);
  }

  if (Object.values(BUTTON_NAMES).indexOf(id) > -1) {
    document.getElementById(id).style.opacity = HUD_OPACITY;
  }
}

function clearStage() {
  master.dom.game.selector.removeChild(master.dom.stage.selector);
  master.actors.enemies.splice(0);
  master.actors.friendlies.splice(0);
  master.actors.obstacles.splice(0);
  master.actors.props.splice(0);
  master.actors.animations.splice(0);
  master.keys.splice(0);

  master.actorCount                   = 0;
  master.dom.hud.scoreText.innerHTML  = master.dom.hud.score;
  master.dom.hud.victimText.innerHTML = '';
}

function initGame() {
  master.mode                        = MODES.GAMEPLAY;
  master.isGameOver                  = false;
  master.isPaused                    = false;
  master.dom.hud.scoreText.innerHTML = master.dom.hud.score;

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
          //buttonRelease(master.dom.player.dir, button.id);
        }
      });
    }, {passive: false});

    window.addEventListener('resize', function() {
      if (master.mode === MODES.GAMEPLAY && !master.isGameOver && !master.isPaused) {
        pause();
      }

      resizeGame(window.innerWidth, window.innerHeight);
    });
  } else {
    //Init desktop controls
    window.addEventListener('keydown', function(event) {
      let key = '';
      let id = '';

      if (!master.isPaused) {
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

      if (!master.isPaused) {
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
  master.dom.stage = new Stage({
    data: EPISODES[master.episode][master.level],
    master
  });

  master.dom.player = new Player({
    data: master.character || master.dom.stage.character,
    master
  });

  master.bossesReached                 = false;
  master.counter                       = 0;
  master.dom.hud.scoreText.style.color = master.dom.stage.textColor;

  if (typeof(EPISODES[master.episode][master.level].obstacles) !== 'undefined') {
    master.dom.stage.obstacles.forEach(obstacle => {
      const data = Object.assign({
        x: obstacle.x,
        y: obstacle.y
      }, obstacle.type);

      new Obstacle({ data, master });
    });
  }

  initEnemies(master);

  master.dom.hud.selector.setAttribute('data-key', '');

  master.dom.hud.title.innerHTML          = '';
  master.dom.hud.directions.innerHTML     = '';
  master.dom.hud.scoreboard.style.display = '';

  if (IS_MOBILE) {
    buttons.style.display = '';
  }
}

function initMenu(mode) {
  master.actorCount = 0;
  master.counter    = 0;
  master.isGameOver = true;
  master.isPaused   = false;
  master.mode       = mode;

  if (master.mode === MODES.TITLE) {
    master.cutsceneCount = 0;
    master.dom.hud.score = 0;
    master.episode       = 3;
    master.level         = 0;

    master.dom.stage = new Stage({
      data: ATTRACTION,
      master
    });

    if (typeof(EPISODES[master.episode][master.level].obstacles) !== 'undefined') {
      master.dom.stage.obstacles?.forEach(obstacle => {
        const data = Object.assign({
          x: obstacle.x,
          y: obstacle.y
        }, obstacle.type);

        new Obstacle({ data, master });
      });
    }

    initEnemies(master);

    master.dom.hud.selector.setAttribute('data-key', 'enter');
    master.dom.hud.title.innerHTML = 'Star Wars';
    master.dom.hud.directions.innerHTML = master.promptClick;
    master.dom.hud.scoreText.innerHTML = '';
    master.dom.hud.victimText.innerHTML = '';

    if (IS_MOBILE) {
      buttons.style.display = 'none';
    }
  } else if (master.mode === MODES.CUTSCENE) {
    scoreboard.style.display = 'none';
    master.dom.hud.selector.setAttribute('data-key', 'enter');
    title.innerHTML = '';
    directions.innerHTML = '';
    directions.style.pointerEvents = 'none';

    if (EPISODES[master.episode][master.level].cutscenes.length > 0) {
      clearStage();

      master.dom.stage = new Cutscene({
        img: EPISODES[master.episode][master.level].cutscenes[master.cutsceneCount],
        master
      })
    } else {
      initGame();
    }
  }
}

function levelLose() {
  master.isGameOver = true;
  master.dom.hud.score = 0;
  title.innerHTML = 'Game Over';
  directions.innerHTML = `${master.promptStart}<br/>to restart level.`;
  master.keys.splice(0);
}

function levelWin() {
  master.dom.stage.defeated = true;
  directions.innerHTML = master.promptStart;

  if (++master.level === EPISODES[master.episode].length) {
    master.isGameOver = true;
    master.isInvincible = false;
    master.mode = MODES.RESET;
    title.innerHTML = 'You win!';
  } else {
    title.innerHTML = 'Next:<br/>' + EPISODES[master.episode][master.level].name;
  }
}

function loop() {
  if (master.mode === MODES.GAMEPLAY && !master.isGameOver && !master.isPaused) {
    const expiredObjects = [];

    if (master.keys.length > 0) {
      if (!master.dom.player.attacking) {
        master.keys.forEach(key => {
          if (Object.values(CARDINALS).indexOf(key) !== -1) {
            master.dom.player.dir     = key;
            master.dom.player.running = true;
          }

          if (key === 'space' || key === 'Z') {
            master.dom.player.attack(key);
          }
        });
      }
    }

    master.actors.enemies.forEach(enemy => {
      if (!master.dom.player.dead) {
        if (collision(master.dom.player, enemy)) {
          if (enemy.active && !master.isInvincible) {
            master.dom.player.dead = true;
          }

          enemy.collide();
        } else if (enemy.active && enemy.weaponType === WEAPON_TYPES.PROJECTILE && enemy.weaponReady && crossPaths(enemy, master.dom.player)) {
          const chance = 500 + EPISODES[master.episode].length - master.level;
          const random = getRandom(chance);

          if (random === 0) {
            new Projectile({
              master,
              origin: enemy
            });
          }
        }
      }
    });

    master.actors.friendlies.forEach(friendly => {
      if (friendly.ship) {
        if (!master.dom.player.dead && collision(master.dom.player, friendly)) {
          if (!master.isInvincible) {
            master.dom.player.dead = true;
          }

          friendly.kill();
        }
      }
    });

    // TODO
    master.actors.props.forEach(prop => {
      if (!master.dom.player.dead && collision(master.dom.player, prop)) {
        if (!master.isInvincible && prop.active && prop.origin !== master.dom.player) {
          master.dom.player.dead = true;
          prop.kill();
        }

        if (prop.type === 'lightsaber' && prop.speed > 0) {
          if (prop.active) {
            master.dom.player.attacking = false;
          } else {
            prop.active = true;
          }
        }
      }

      master.actors.enemies.forEach(enemy => {
        if (prop.origin !== enemy && enemy.active && collision(enemy, prop)) {
          enemy.hit();

          if (prop.type !== 'lightsaber') {
            expiredObjects.push(prop)
          }
        }
      });

      master.actors.friendlies.forEach(friendly => {
        if (prop.origin !== friendly && friendly.active && collision(friendly, prop)) {
          friendly.hit();

          if (prop.type !== 'lightsaber') {
            expiredObjects.push(prop)
          }
        }
      });

      master.actors.neutrals.forEach(neutral => {
        if (prop.origin !== neutral && neutral.active && collision(neutral, prop)) {
          neutral.hit();

          if (prop.type !== 'lightsaber') {
            expiredObjects.push(prop)
          }
        }
      });

      prop.update();
      prop.draw();
    });

    // TODO
    master.actors.animations.forEach(animation => {
      animation.update();
      animation.draw();
    });

    expiredObjects.forEach(expiredObject => {
      if (master.dom.stage.selector.contains(expiredObject.selector)) {
        expiredObject.kill();
      }
    });

    master.dom.player.update();
    master.dom.player.draw();

    //Check for level completion
    if (
      master.dom.stage.enemiesKilled === add(master.dom.stage.enemies.length - master.dom.stage.enemiesOptional.length, master.dom.stage.bosses.length) &&
      master.actors.animations.length === 0 && !master.dom.stage.defeated
    ) {
      levelWin();
    }

    //Check for level failure
    if (!master.dom.player.active && master.actors.animations.length === 0) {
      levelLose();
    }

    //Check victim identification interval
    if (master.dom.hud.victimCount > 0) {
      master.dom.hud.victimCount--;
    } else {
      master.dom.hud.victimText.innerHTML = '';
    }
  }

  if (
    (master.mode === MODES.GAMEPLAY && !master.isGameOver && !master.isPaused) ||
    (master.mode === MODES.TITLE)
  ) {
    // Add bosses.
    master.dom.stage.bosses?.forEach(boss => {
      if (
        master.dom.stage.enemiesKilled === master.dom.stage.enemies.length - master.dom.stage.enemiesOptional.length &&
        !master.bossesReached
      ) {
        const data = Object.assign({}, boss);

        data.details.type = ACTOR_TYPES.ENEMY;

        new Actor({
          data,
          master
        });

        master.bossesReached = true;
      }
    });

    // Add enemies.
    master.dom.stage.enemies?.forEach(enemy => {
      if (master.counter === enemy.details.delay) {
        new Actor({
          data: enemy,
          master
        });
      }
    });

    // Add friendlies.
    master.dom.stage.friendlies?.forEach(friendly => {
      if (master.counter === friendly.details.delay) {
        const data = Object.assign({}, friendly);

        data.details.type = ACTOR_TYPES.FRIENDLY;

        new Actor({ data, master });
      }
    });

    // Add neutrals.
    master.dom.stage.neutrals?.forEach(neutral => {
      if (master.counter === neutral.details.delay) {
        const data = Object.assign({}, neutral);

        data.details.type = ACTOR_TYPES.NEUTRAL;

        new Actor({ data, master });
      }
    });

    master.actors.enemies.forEach(enemy => {
      enemy.update();
      enemy.draw();
    });

    master.actors.friendlies.forEach(friendly => {
      friendly.update();
      friendly.draw();
    });

    master.actors.neutrals.forEach(neutral => {
      neutral.update();
      neutral.draw();
    });

    master.actors.obstacles.forEach(obstacle => {
      obstacle.update();
      obstacle.draw();
    });
  }

  if (!master.isPaused) {
    master.counter++;
  }

  setTimeout(loop, 1000 / FPS);
}

function pause() {
  master.isPaused = !master.isPaused;
  directions.innerHTML = '';
  title.innerHTML = master.isPaused ? 'Pause' : '';
}

function reset() {
  clearStage();
  initMenu(MODES.TITLE);
}

function resizeGame(width, height) {
  if (master.mode === MODES.GAMEPLAY) {
    adaptCoords({
      actor: master.dom.player,
      master
    });

    master.actors.enemies.forEach(enemy => {
      adaptCoords({
        actor: enemy,
        master
      });
    });

    master.actors.props.forEach(prop => {
      adaptCoords({
        actor: master.actors.props,
        master
      });
    });
  }

  master.gameWidth = width;
  master.gameHeight = height;
  master.dom.game.selector.style.width = master.gameWidth + 'px';
  master.dom.game.selector.style.height = master.gameHeight + 'px';

  if (master.mode === MODES.CUTSCENE) {
    master.dom.stage.resize();
  }

  master.actors.obstacles.forEach(obstacle => {
    adaptCoords({
      actor: obstacle,
      master
    });
  });

  btnStart.style.left = ((master.gameWidth - 75) / 2) + 'px';
}
