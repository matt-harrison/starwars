import {
  adaptCoords,
  collision,
  crossPaths,
  getRandom,
  preload
} from './js/utils.js';

import * as CHARACTERS  from './js/constants/characters.js';
import { EPISODES }     from './js/constants/episodes.js';
import { WEAPON_TYPES } from './js/constants/weapons.js';
import {
  BUTTON_NAMES,
  CARDINALS,
  COLORS,
  FPS,
  HUD_OPACITY,
  IS_MOBILE,
  MODES,
  NUMERALS
}                       from './js/constants/config.js';

import { Animation }  from './js/classes/Animation.js';
import { Bomb }       from './js/classes/Bomb.js';
import { Cutscene }   from './js/classes/Cutscene.js';
import { Enemy }      from './js/classes/Enemy.js';
import { Friendly }   from './js/classes/Friendly.js';
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
    obstacles:  [],
    props:      []
  },
  actorCount: 0,
  counter: 0,
  cutsceneCount: 0,
  episode: 0,
  gameHeight: IS_MOBILE ? window.innerHeight : 500,
  gameWidth:  IS_MOBILE ? window.innerWidth : 500,
  hud: null,
  isGameOver: false,
  isInvincible: false,
  isPaused: false,
  keys: [],
  level: 0,
  mode: MODES.TITLE,
  player: null,
  promptClick: IS_MOBILE ? 'Tap to begin' : 'Press Enter',
  promptStart: IS_MOBILE ? 'Press Start'  : 'Press Enter',
  stage: null
};

//DOM nodes
let game;
let cutscene;
let hilt;

//Initialize game
(function() {
  game = new Game(master);
  master.hud = new Hud({
    game,
    master
  });

  initInterface();
  initMenu(MODES.TITLE);

  loop();
})();

window.master = master;

function advanceStage() {
  if (master.level === master.episode.length) {
    reset();
  } else {
    if (master.hud.score === 0 || typeof(EPISODES[master.episode][master.level].cutscene) === 'undefined') {
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
    if (!master.player.attacking) {
      if (master.keys.indexOf(key) === -1) {
        master.keys.push(key);
      }
    }
  } else if (master.mode === MODES.EPISODE && CARDINALS.indexOf(key) !== -1) {
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
  CARDINALS.forEach(cardinal => {
    const previousButton = document.querySelector('[data-key="' + master.player.dir + '"]');
    const button = document.querySelector('[data-key="' + cardinal + '"]');
    const bounds = button.getBoundingClientRect();

    if (event.changedTouches[0].pageX > bounds.left && event.changedTouches[0].pageX < bounds.right && event.changedTouches[0].pageY > bounds.top && event.changedTouches[0].pageY < bounds.bottom) {
      if (master.keys.indexOf(cardinal) === -1) {
        buttonRelease(master.player.dir, previousButton.id);
        buttonPush(cardinal, button.id);
      }
    } else if (master.keys.indexOf(cardinal) !== -1) {
      buttonRelease(master.player.dir, button.id);
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

      if (++master.cutsceneCount < EPISODES[master.episode][master.level].cutscene.length) {
        initMenu(MODES.CUTSCENE);
      } else {
        if (master.stage.defeated) {
          initLevel();
        } else {
          initGame();
        }
      }
    } else if (master.isGameOver) {
      initGame();
      advanceStage();
    } else if (master.stage.defeated) {
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
      master.player.attacking = false;
    } else if (key === 'Z') {
    } else {
      master.player.running = false;
      master.player.spriteColumn = 0;
    }
    master.keys.splice(position, 1);
  }

  if (Object.values(BUTTON_NAMES).indexOf(id) > -1) {
    document.getElementById(id).style.opacity = HUD_OPACITY;
  }
}

function clearStage() {
  game.selector.removeChild(master.stage.selector);
  master.actors.enemies.splice(0);
  master.actors.friendlies.splice(0);
  master.actors.obstacles.splice(0);
  master.actors.props.splice(0);
  master.actors.animations.splice(0);
  master.keys.splice(0);

  master.actorCount               = 0;
  master.hud.scoreText.innerHTML  = master.hud.score;
  master.hud.victimText.innerHTML = '';
}

function initGame() {
  clearStage();
  master.mode = MODES.GAMEPLAY;
  master.isGameOver = false;
  master.isPaused = false;
  master.hud.scoreText.innerHTML = master.hud.score;
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
      CARDINALS.forEach(cardinal => {
        const button = document.querySelector('[data-key="' + cardinal + '"]');
        const bounds = button.getBoundingClientRect();

        if (event.pageX > bounds.left && event.pageX < bounds.right && event.pageY > bounds.top && event.pageY < bounds.bottom) {
          //buttonRelease(master.player.dir, button.id);
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
  master.stage = new Stage({
    data: EPISODES[master.episode][master.level],
    game,
    hud: master.hud
  });

  master.player = new Player({
    data: master.character || master.stage.character,
    master
  });

  master.counter = 0;

  if (typeof(EPISODES[master.episode][master.level].obstacles) !== 'undefined') {
    master.stage.obstacles.forEach(obstacle =>{
      new Obstacle({
        data: obstacle['type'],
        master,
        stage: master.stage,
        x: obstacle['x'],
        y: obstacle['y']
      });
    });
  }

  master.hud.selector.setAttribute('data-key', '');
  master.hud.title.innerHTML = '';
  master.hud.directions.innerHTML = '';
  master.hud.scoreboard.style.display = '';

  if (IS_MOBILE) {
    buttons.style.display = '';
  }
}

function initMenu(mode) {
  master.mode = mode;
  master.isGameOver = true;
  master.isPaused = false;
  master.actorCount = 0;

  master.isInvincible = false;

  if (master.mode === MODES.TITLE) {
    master.episode = 3;
    master.level = 0;
    master.hud.score = 0;
    master.cutsceneCount = 0;

    master.stage = new Stage({
      data: EPISODES[3][0],
      game,
      hud: master.hud
    });

    new Enemy({
      data: CHARACTERS.artoo,
      master,
      stage: master.stage
    });

    new Enemy({
      data: CHARACTERS.threepio,
      master,
      stage: master.stage
    });

    for (let i = 0; i < 5; i++) {
      setTimeout(function() {
        if (master.mode === MODES.TITLE) {
          new Enemy({
            data: CHARACTERS.stormtrooper,
            master,
            stage: master.stage
          });
        }
      }, i * 1000);
    }

    master.hud.selector.setAttribute('data-key', 'enter');
    master.hud.title.innerHTML = 'Star Wars';
    master.hud.directions.innerHTML = master.promptClick;
    master.hud.scoreText.innerHTML = '';
    master.hud.victimText.innerHTML = '';

    if (IS_MOBILE) {
      buttons.style.display = 'none';
    }
  } else if (master.mode === MODES.CUTSCENE) {
    scoreboard.style.display = 'none';
    master.hud.selector.setAttribute('data-key', 'enter');
    title.innerHTML = '';
    directions.innerHTML = '';
    directions.style.pointerEvents = 'none';

    if (typeof(EPISODES[master.episode][master.level].cutscene) !== 'undefined') {
      clearStage();

      master.stage = new Cutscene({
        game,
        img: EPISODES[master.episode][master.level].cutscene[master.cutsceneCount],
        master
      })
    } else {
      initGame();
    }
  }
}

function levelLose() {
  master.isGameOver = true;
  master.hud.score = 0;
  title.innerHTML = 'Game Over';
  directions.innerHTML = `${master.promptStart}<br/>to restart level.`;
  master.keys.splice(0);
}

function levelWin() {
  master.stage.defeated = true;
  directions.innerHTML = master.promptStart;

  if (++master.level === EPISODES[master.episode].length) {
    master.isGameOver = true;
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
      if (!master.player.attacking) {
        master.keys.forEach(key => {
          if (CARDINALS.indexOf(key) !== -1) {
            master.player.dir = key;
            master.player.running = true;
          }
          if (key === 'space' || key === 'Z') {
            master.player.attack(key);
          }
        });
      }
    }

    master.actors.enemies.forEach(enemy => {
      if (enemy.active) {
        if (!master.player.dead) {
          if (collision(master.player, enemy)) {
            if (!master.isInvincible) {
              master.player.dead = true;
            }

            enemy.collide();
          } else if (enemy.weaponType === WEAPON_TYPES.PROJECTILE && enemy.weaponReady && crossPaths(enemy, master.player)) {
            const chance = 500 + EPISODES[master.episode].length - master.level;
            const random = getRandom(chance);

            if (random === 0) {
              new Projectile({
                master,
                origin: enemy,
                stage: master.stage
              });
            }
          }
        }
        enemy.update();
        enemy.draw();
      }
    });

    master.actors.friendlies.forEach(friendly => {
      if (friendly.ship) {
        if (!master.player.dead && collision(master.player, friendly)) {
          if (!master.isInvincible) {
            master.player.dead = true;
          }

          friendly.kill();
        }
      }

      friendly.update();
      friendly.draw();
    });

    master.actors.obstacles.forEach(obstacle => {
      obstacle.update();
      obstacle.draw();
    });

    master.actors.props.forEach(prop => {
      if (!master.player.dead && collision(master.player, prop)) {
        if (!master.isInvincible && prop.active && prop.origin !== master.player) {
          master.player.dead = true;
          prop.dead = true;
        }

        if (prop.type === 'lightsaber' && prop.speed > 0) {
          if (prop.active) {
            master.player.attacking = false;
          } else {
            prop.active = true;
          }
        }
      }

      master.actors.enemies.forEach(enemy =>{
        if (!prop.dead && !enemy.dead && prop.origin !== enemy && collision(enemy, prop)) {
          enemy.hit();

          if (prop.type !== 'lightsaber') {
            expiredObjects.push(prop)
          }
        }
      });

      master.actors.friendlies.forEach(friendly =>{
        if (!prop.dead && !friendly.dead && collision(friendly, prop)) {
          friendly.kill();

          if (prop.type !== 'lightsaber') {
            prop.dead = true;
          }
        }
      });

      prop.update();
      prop.draw();
    });

    master.actors.animations.forEach(animation => {
      animation.update();
      animation.draw();
    });

    expiredObjects.forEach(expiredObject => {
      if (master.stage.selector.contains(expiredObject.selector)) {
        expiredObject.kill();
      }
    });

    master.player.update();
    master.player.draw();

    //Check for level completion
    if (master.stage.enemiesKilled === (master.stage.enemyCount + 1) && master.actors.animations.length === 0 && !master.stage.defeated) {
      levelWin();
    }

    //Check for level failure
    if (!master.player.active && master.actors.animations.length === 0) {
      levelLose();
    }

    //Check enemy interval
    if (master.counter % master.stage.enemyInterval === 0) {
      if (master.actors.enemies.length < master.stage.enemyCount) {
        new Enemy({
          data: master.stage.enemy,
          master,
          stage: master.stage
        });
      } else {
        if (master.stage.enemiesKilled === master.stage.enemyCount && !master.stage.bossReached) {
          new Enemy({
            data: master.stage.boss,
            master,
            stage: master.stage
          });
          master.stage.bossReached = true;
        }
      }
    }

    master.stage.friendlies?.forEach(friendly =>{
      if (master.counter === friendly.details.delay) {
        new Friendly({
          data: friendly.character,
          details: friendly.details,
          master,
          stage: master.stage
        });
      }
    });

    //Check victim identification interval
    if (master.hud.victimCount > 0) {
      master.hud.victimCount--;
    } else {
      master.hud.victimText.innerHTML = '';
    }

    master.counter++;
  } else if (master.mode === MODES.TITLE) {
    master.actors.enemies.forEach(enemy => {
      enemy.update();
      enemy.draw();
    });
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
      actor: master.player,
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
  game.selector.style.width = master.gameWidth + 'px';
  game.selector.style.height = master.gameHeight + 'px';

  if (master.mode === MODES.CUTSCENE) {
    master.stage.resize();
  }

  master.actors.obstacles.forEach(obstacle => {
    adaptCoords({
      actor: obstacle,
      master
    });
  });

  btnStart.style.left = ((master.gameWidth - 75) / 2) + 'px';
}
