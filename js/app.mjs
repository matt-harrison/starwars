import { detonation } from './constants/animations.js';
import {
  artoo,
  stormtrooper,
  threepio
} from './constants/characters.js';
import { COLORS } from './constants/colors.js';
import {
  cardinals,
  fps,
  isMobile,
  magnification
} from './constants/config.js';
import episodes from './constants/episodes.js';
import {
  collision,
  getRandom,
  getObstruction,
  importJSON,
  preload
} from './constants/utils.js';

import { Animation }  from './classes/Animation.js';
import { Bomb }       from './classes/Bomb.js';
import { Cutscene }   from './classes/Cutscene.js';
import { Enemy }      from './classes/Enemy.js';
import { Friendly }   from './classes/Friendly.js';
import { Game }       from './classes/Game.js';
import { Hud }        from './classes/Hud.js';
import { Lightsaber } from './classes/Lightsaber.js';
import { Obstacle }   from './classes/Obstacle.js';
import { Player }     from './classes/Player.js';
import { Projectile } from './classes/Projectile.js';
import { Stage }      from './classes/Stage.js';

//Initialize global vars
let hudOpacity    = '0.5';
let hudStatus     = '';
let cutsceneCount = 0;

let clickPrompt = isMobile ? 'Tap to begin' : 'Press Enter';
let startPrompt = isMobile ? 'Press Start'  : 'Press Enter';

let buttonNames = ['btnRight', 'btnLeft', 'btnDown', 'btnUp', 'btnStart', 'btnAttack', 'btnAttack2'];
let numerals    = ['I', 'II', 'III', 'IV', 'V', 'VI'];

let enemyCount;
let propCount;
let invincible;
let menuMode;
let resetMode;
let gameOver;
let isPaused;
let episode;
let level;

let animations = [];
let enemies    = [];
let friendlies = [];
let keys       = [];
let obstacles  = [];
let props      = [];

//DOM nodes
let game;
let stage;
let hud;
let player;
let cutscene;
let hilt;

//Initialize game
(function() {
  game = new Game();
  hud = new Hud({
    clickPrompt,
    game,
    startPrompt
  });

  initInterface();
  initMenu('title');

  loop();
})();

function adaptCoords(obj) {
  if (typeof(obj.leftPercent) !== 'undefined' && typeof(obj.topPercent) !== 'undefined') {
    if (obj.leftPercent === 0) {
      obj.x = 0;
    } else if (obj.leftPercent === 100) {
      obj.x = game.width - obj.frameWidth;
    } else {
      obj.x = Math.floor(game.width * (obj.leftPercent / 100) - (obj.frameWidth / 2));
    }
    if (obj.topPercent === 0) {
      obj.y = 0;
    } else if (obj.leftPercent === 100) {
      obj.y = game.height - obj.frameHeight;
    } else {
      obj.y = Math.floor(game.height * (obj.topPercent / 100) - (obj.frameHeight / 2));
    }
  } else {
    var offsetX = obj.x / (game.width - obj.frameWidth);
    var offsetY = obj.y / (game.height - obj.frameHeight);
    obj.x = Math.floor((window.innerWidth - obj.frameWidth) * offsetX);
    obj.y = Math.floor((window.innerHeight - obj.frameHeight) * offsetY);
  }
  obj.draw();
}

function advanceStage() {
  if (level === episode.length) {
    reset();
  } else {
    if (hud.score === 0 || typeof(episodes[episode][level].cutscene) === 'undefined') {
      clearStage();
      initLevel();
    } else {
      cutsceneCount = 0;
      initMenu('cutscene');
    }
  }
}

function buttonPush(key, id) {
  if (menuMode === '') {
    if (!player.attacking) {
      if (keys.indexOf(key) === -1) {
        keys.push(key);
      }
    }
  } else if (menuMode === 'episode' && cardinals.indexOf(key) !== -1) {
    for (var i=0; i<numerals.length; i++) {
      document.getElementById('btnEpisode' + numerals[i]).style.color = COLORS.BLACK;
    }
    if (key === 'left') {
      episode -= 1;
    } else if (key === 'right') {
      episode += 1;
    } else if (key === 'up') {
      episode -= 3;
    } else if (key === 'down') {
      episode += 3;
    }
    episode = (episode < 0) ? 6 + episode : (episode % 6);
    document.getElementById('btnEpisode' + numerals[episode]).style.color = COLORS.WHITE;
  }
  if (buttonNames.indexOf(id) !== -1) {
    document.getElementById(id).style.opacity = '1';
  }
}

function buttonUpdate(event) {
  for (var i=0; i<cardinals.length; i++) {
    var previousButton = document.querySelector('[data-key="' + player.dir + '"]');
    var button = document.querySelector('[data-key="' + cardinals[i] + '"]');
    var bounds = button.getBoundingClientRect();
    if (event.changedTouches[0].pageX > bounds.left && event.changedTouches[0].pageX < bounds.right && event.changedTouches[0].pageY > bounds.top && event.changedTouches[0].pageY < bounds.bottom) {
      if (keys.indexOf(cardinals[i]) === -1) {
        buttonRelease(player.dir, previousButton.id);
        buttonPush(cardinals[i], button.id);
      }
    } else if (keys.indexOf(cardinals[i]) !== -1) {
      buttonRelease(player.dir, button.id);
    }
  }
}

function buttonRelease(key, id) {
  if (key === 'enter') {
    if (resetMode) {
      reset();
    } else if (menuMode === 'title') {
      level = 0;
      cutsceneCount = 0;
      initMenu('cutscene');
    } else if (menuMode === 'cutscene') {
      menuMode = '';

      if (isMobile) {
        buttons.style.display = hudStatus;
      }

      if (++cutsceneCount < episodes[episode][level].cutscene.length) {
        initMenu('cutscene');
      } else {
        if (stage.defeated) {
          initLevel();
        } else {
          initGame();
        }
      }
    } else if (gameOver) {
      initGame();
      advanceStage();
    } else if (stage.defeated) {
      advanceStage();
    } else {
      pause();
    }
    keys.splice(0);
  } else if (key === 'escape') {
    reset();
  }

  const position = keys.indexOf(key);

  if (position !== -1) {
    if (key === 'space') {
      player.attacking = false;
    } else if (key === 'Z') {
    } else {
      player.running = false;
      player.spriteColumn = 0;
    }
    keys.splice(position, 1);
  }

  if (buttonNames.indexOf(id) !== -1) {
    document.getElementById(id).style.opacity = hudOpacity;
  }
}

function clearStage() {
  game.selector.removeChild(stage.selector);
  enemies.splice(0);
  friendlies.splice(0);
  obstacles.splice(0);
  props.splice(0);
  animations.splice(0);
  keys.splice(0);
  enemyCount = 0;
  propCount = 0;

  hud.scoreText.innerHTML = hud.score;
  hud.victimText.innerHTML = '';
}

function crossPaths(obj1, obj2) {
  var cross = false;
  var rect1 = obj1.selector.getBoundingClientRect();
  var rect2 = obj2.selector.getBoundingClientRect();
  if (rect1.right > rect2.left && rect1.left < rect2.right) {
    if (rect2.bottom < rect1.top && obj1.dir === 'up') {
      cross = true;
    } else if (rect2.top > rect1.bottom && obj1.dir === 'down') {
      cross = true;
    }
  } else if ((rect1.bottom > rect2.top && rect1.top < rect2.bottom)) {
    if (rect2.right < rect1.left && obj1.dir === 'left') {
      cross = true;
    } else if (rect2.left > rect1.right && obj1.dir === 'right') {
      cross = true;
    }
  }
  return cross;
}

function initGame() {
  clearStage();
  menuMode = '';
  gameOver = false;
  isPaused = false;
  hud.scoreText.innerHTML = hud.score;
  initLevel();
}

function initInterface() {
  if (isMobile) {
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
      for (var i=0; i<cardinals.length; i++) {
        var button = document.querySelector('[data-key="' + cardinals[i] + '"]');
        var bounds = button.getBoundingClientRect();

        if (event.pageX > bounds.left && event.pageX < bounds.right && event.pageY > bounds.top && event.pageY < bounds.bottom) {
          //buttonRelease(player.dir, button.id);
        }
      }
    }, {passive: false});

    window.addEventListener('resize', function() {
      if (menuMode === '' && !gameOver && !isPaused) {
        pause();
      }

      resizeGame(window.innerWidth, window.innerHeight);
    });
  } else {
    //Init desktop controls
    window.addEventListener('keydown', function(event) {
      var key = '';
      var id = '';

      if (!isPaused) {
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
      var key = '';

      if (event.charCode === 32) {
        key = 'space';
      }

      if (key !== '') {
        buttonPush(key, null);
      }
    });

    window.addEventListener('keyup', function(event) {
      var key = '';

      if (!isPaused) {
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
  stage = new Stage({
    data: episodes[episode][level],
    game,
    hud
  });

  player = new Player({
    animations,
    data: stage.character,
    enemies,
    game,
    keys,
    level,
    obstacles,
    props,
    stage
  });

  game.counter = 0;

  if (typeof(episodes[episode][level].obstacles) !== 'undefined') {
    for (var obstacle in stage.obstacles) {
      new Obstacle({
        data: stage.obstacles[obstacle]['type'],
        game,
        obstacles,
        stage,
        x: stage.obstacles[obstacle]['x'],
        y: stage.obstacles[obstacle]['y']
      });
    }
  }

  hud.selector.setAttribute('data-key', '');
  hud.title.innerHTML = '';
  hud.directions.innerHTML = '';
  hud.scoreboard.style.display = '';

  if (isMobile) {
    buttons.style.display = hudStatus;
  }
}

function initMenu(mode) {
  menuMode = mode;
  resetMode = false;
  gameOver = true;
  isPaused = false;
  enemyCount = 0;
  propCount = 0;

  invincible = false;

  if (mode === 'title') {
    episode = 3;
    level = 0;
    hud.score = 0;
    cutsceneCount = 0;

    stage = new Stage({
      data: episodes[3][0],
      game,
      hud
    });

    new Enemy({
      animations,
      data: artoo,
      enemies,
      game,
      hud,
      obstacles,
      stage
    });

    new Enemy({
      animations,
      data: threepio,
      enemies,
      game,
      hud,
      obstacles,
      stage
    });

    for (var i = 0; i < 5; i++) {
      setTimeout(function() {
        if (menuMode === 'title') {
          new Enemy({
            animations,
            data:stormtrooper,
            enemies,
            game,
            hud,
            obstacles,
            stage
          });
        }
      }, i * 1000);
    }

    hud.selector.setAttribute('data-key', 'enter');
    hud.title.innerHTML = 'Star Wars';
    hud.directions.innerHTML = clickPrompt;
    hud.scoreText.innerHTML = '';
    hud.victimText.innerHTML = '';

    if (isMobile) {
      hudStatus = buttons.style.display;
      buttons.style.display = 'none';
    }
  } else if (mode === 'cutscene') {
    scoreboard.style.display = 'none';
    hud.selector.setAttribute('data-key', 'enter');
    title.innerHTML = '';
    directions.innerHTML = '';
    directions.style.pointerEvents = 'none';

    if (typeof(episodes[episode][level].cutscene) !== 'undefined') {
      clearStage();
      stage = new Cutscene({
        game,
        img: episodes[episode][level].cutscene[cutsceneCount]
      })
    } else {
      initGame();
    }
  }
}

function levelLose() {
  gameOver = true;
  hud.score = 0;
  title.innerHTML = 'Game Over';
  directions.innerHTML = 'Press Start<br/>to restart level.';
  keys.splice(0);
}

function levelWin() {
  stage.defeated = true;
  directions.innerHTML = startPrompt;
  if (++level === episodes[episode].length) {
    gameOver = true;
    resetMode = true;
    title.innerHTML = 'You win!';
  } else {
    title.innerHTML = 'Next:<br/>' + episodes[episode][level].name;
  }
}

function loop() {
  if (menuMode === '' && !gameOver && !isPaused) {
    const expiredObjects = [];

    if (keys.length > 0) {
      if (!player.attacking) {
        for (var key in keys) {
          if (cardinals.indexOf(keys[key]) !== -1) {
            player.dir = keys[key];
            player.running = true;
          }
          if (keys[key] === 'space' || keys[key] === 'Z') {
            player.attack(keys[key]);
          }
        }
      }
    }

    //Iterate over all enemies
    for (var enemy in enemies) {
      if (enemies[enemy].active) {
        if (!player.dead) {
          if (collision(player, enemies[enemy])) {
            if (!invincible) {
              player.dead = true;
            }

            enemies[enemy].collide();
          } else if (enemies[enemy].weaponType === 'projectile' && enemies[enemy].weaponReady && crossPaths(enemies[enemy], player)) {
            var chance = 500 + episodes[episode].length - level;
            var rand = getRandom(chance);

            if (rand === 0) {
              new Projectile({
                game,
                origin: enemies[enemy],
                props,
                stage
              });
            }
          }
        }
        enemies[enemy].update();
        enemies[enemy].draw();
      }
    }

    //Iterate over all friendlies
    for (var friendly in friendlies) {
      if (friendlies[friendly].ship) {
        if (!player.dead && collision(player, friendlies[friendly])) {
          if (!invincible) {
            player.dead = true;
          }

          friendlies[friendly].kill();
        }
      }

      friendlies[friendly].update();
      friendlies[friendly].draw();
    }

    //Iterate over all obstacles
    for (var obstacle in obstacles) {
      obstacles[obstacle].update();
      obstacles[obstacle].draw();
    }

    //Iterate over all props
    for (var prop in props) {
      if (!player.dead && collision(player, props[prop])) {
        if (!invincible && props[prop].active && props[prop].origin !== player) {
          player.dead = true;
          props[prop].dead = true;
        }

        if (props[prop].type === 'lightsaber' && props[prop].speed > 0) {
          if (props[prop].active) {
            player.attacking = false;
          } else {
            props[prop].active = true;
          }
        }
      }

      //Compare all props to all enemies
      for (var enemy in enemies) {
        if (!props[prop].dead && !enemies[enemy].dead && props[prop].origin !== enemies[enemy] && collision(enemies[enemy], props[prop])) {
          enemies[enemy].hit();

          if (props[prop].type !== 'lightsaber') {
            expiredObjects.push(props[prop])
          }
        }
      }

      //Compare all props to all friendlies
      for (var friendly in friendlies) {
        if (!props[prop].dead && !friendlies[friendly].dead && collision(friendlies[friendly], props[prop])) {
          friendlies[friendly].kill();
          if (props[prop].type !== 'lightsaber') {
            props[prop].dead = true;
          }
        }
      }

      props[prop].update();
      props[prop].draw();
    }

    animations.forEach(animation => {
      animation.update();
      animation.draw();
    });

    expiredObjects.forEach(expiredObject => {
      expiredObject.kill();
    });

    player.update();
    player.draw();

    //Check for level completion
    if (stage.enemiesKilled === (stage.enemyCount + 1) && animations.length === 0 && !stage.defeated) {
      levelWin();
    }

    //Check for level failure
    if (!player.active && animations.length === 0) {
      levelLose();
    }

    //Check enemy interval
    if (game.counter % stage.enemyInterval === 0) {
      if (enemies.length < stage.enemyCount) {
        new Enemy({
          animations,
          data: stage.enemy,
          enemies,
          game,
          hud,
          obstacles,
          stage
        });
      } else {
        if (stage.enemiesKilled === stage.enemyCount && !stage.bossReached) {
          new Enemy({
            animations,
            data: stage.boss,
            enemies,
            game,
            hud,
            obstacles,
            stage
          });
          stage.bossReached = true;
        }
      }
    }

    //Check friendly delay
    for (var friendly in stage.friendlies) {
      if (game.counter === stage.friendlies[friendly].details.delay) {
        new Friendly({
          animations,
          data: stage.friendlies[friendly].character,
          details: stage.friendlies[friendly].details,
          friendlies,
          game,
          hud,
          obstacles,
          stage
        });
      }
    }

    //Check victim identification interval
    if (hud.victimCount > 0) {
      hud.victimCount--;
    } else {
      hud.victimText.innerHTML = '';
    }

    //Update the game counter
    game.counter++;
  } else if (menuMode === 'title') {
    //Iterate over all enemies
    for (var enemy in enemies) {
      enemies[enemy].update();
      enemies[enemy].draw();
    }
  }

  setTimeout(loop, 1000/fps);
}

function pause() {
  isPaused = !isPaused;
  directions.innerHTML = '';
  title.innerHTML = isPaused ? 'Pause' : '';
}

function reset() {
  clearStage();
  initMenu('title');
}

function resizeGame(width, height) {
  if (menuMode === '') {
    adaptCoords(player);
    for (var enemy in enemies) {
      adaptCoords(enemies[enemy]);
    }
    for (var prop in props) {
      adaptCoords(props[prop]);
    }
  }

  game.width = width;
  game.height = height;
  game.selector.style.width = game.width + 'px';
  game.selector.style.height = game.height + 'px';

  if (menuMode === 'cutscene') {
    stage.resize();
  }

  for (var obstacle in obstacles) {
    adaptCoords(obstacles[obstacle]);
  }

  if (game.width > game.height) {
    document.getElementById('buttons').style.bottom = ((game.height - document.getElementById('buttons').clientHeight) / 2) + 'px';
    document.getElementById('buttons').style.opacity = '0.5';
  } else {
    document.getElementById('buttons').style.bottom = '0';
    document.getElementById('buttons').style.opacity = '1';
  }
  btnStart.style.left = ((game.width - 75) / 2) + 'px';
}

//Cheats
function playAs(obj) {
  if (menuMode !== '') {
    initGame();
  }
  stage.selector.removeChild(player.selector);
  player = new Player({
    animations,
    data: stage.character,
    enemies,
    game,
    keys,
    level,
    obstacles,
    props,
    stage
  });
}

function playLevel(obj) {
  let skipToLevel;

  if (typeof(obj) === 'number') {
    if (obj > 0 && obj < episodes[episode].length) {
      skipToLevel = obj;
    }
  } else {
    for (var i=0; i<episodes[episode].length; i++) {
      if (obj === episodes[episode][i]) {
        skipToLevel = i;
      }
    }
  }
  if (typeof(skipToLevel) === 'number') {
    if (menuMode !== '') {
      initGame();
    }
    level = skipToLevel;
    clearStage();
    initLevel();

    isPaused = false;
    pause();
  }
}

function useTheForce() {
  invincible = true;
  isPaused = true;
  directions.innerHTML = 'May the force be with you.<br/></br/>Press Start';
}
