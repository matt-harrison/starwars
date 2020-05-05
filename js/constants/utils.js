import { MAGNIFICATION } from '/js/constants/config.js';
import { EPISODES }      from '/js/constants/episodes.js';

export function add(num1, num2) {
  return Number(num1) + Number(num2);
}

export function collision(obj1, obj2) {
  var overlap = false;
  var rect1 = obj1.selector.getBoundingClientRect();
  var rect2 = obj2.selector.getBoundingClientRect();
  if (rect1.right > rect2.left && rect1.left < rect2.right) {
    if (rect1.bottom > rect2.top && rect1.top < rect2.bottom) {
      overlap = true;
    }
  }
  return overlap;
}

export function getObstruction({
  obj,
  obstacles
}) {
  var obstruction = '';
  var charLeft = obj.x;
  var charTop = obj.y + obj.frameHeight - MAGNIFICATION;
  var charRight = obj.x + obj.frameWidth;
  var charBottom = obj.y + obj.frameHeight;

  //Iterate over all obstacles
  for (var obstacle in obstacles) {
    if (obstacles[obstacle].impassable) {
      var obsLeft = obstacles[obstacle].x;
      var obsTop = obstacles[obstacle].y;
      var obsRight = obstacles[obstacle].x + obstacles[obstacle].frameWidth;
      var obsBottom = obstacles[obstacle].y + obstacles[obstacle].frameHeight;

      if (obj.dir === 'left' || obj.dir === 'right') {
        if (charBottom > obsTop && charTop < obsBottom) {
          if (obj.dir === 'left') {
            if (charLeft - obj.speed < obsRight && charRight > obsLeft) {
              obstruction = obstacles[obstacle];
            }
          } else if (obj.dir === 'right') {
            if (charRight + obj.speed > obsLeft && charLeft < obsRight) {
              obstruction = obstacles[obstacle];
            }
          }
        }
      } else if (obj.dir === 'up' || obj.dir === 'down') {
        if (charRight > obsLeft && charLeft < obsRight) {
          if (obj.dir === 'up') {
            if (charTop - obj.speed < obsBottom && charBottom > obsTop) {
              obstruction = obstacles[obstacle];
            }
          } else if (obj.dir === 'down') {
            if (charBottom + obj.speed > obsTop && charBottom < obsBottom) {
              obstruction = obstacles[obstacle];
            }
          }
        }
      }
    }
  }
  return obstruction;
}

export function getRandom(max) {
  return Math.floor(Math.random() * max);
}

export function inBounds({
  game,
  obj
}) {
  return (
    obj.x > 0 && add(obj.x, obj.frameWidth) < game.width &&
    obj.y > 0 && add(obj.y, obj.frameHeight) < game.height
  );
}

export function preload(url) {
  var image = new Image();
  image.src = url;
}

export function updateScore({
  hud,
  points
}) {
  hud.score += points;
  hud.scoreText.innerHTML = hud.score;
}

export function updateVictim({
  color,
  hud,
  victim
}) {
  hud.victimText.style.color = color;
  hud.victimText.innerHTML = victim.name;
  hud.victimCount = 16;
}

// Cheats
export function playAs(obj) {
  if (master.mode !== MODES.GAMEPLAY) {
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

export function playLevel(obj) {
  let skipToLevel;

  if (typeof(obj) === 'number') {
    if (obj > 0 && obj < EPISODES[3].length) {
      skipToLevel = obj;
    }
  } else {
    for (var i = 0; i < EPISODES[3].length; i++) {
      if (obj === EPISODES[3][i]) {
        skipToLevel = i;
      }
    }
  }

  if (typeof(skipToLevel) === 'number') {
    if (master.mode !== MODES.GAMEPLAY) {
      initGame();
    }

    level = skipToLevel;
    clearStage();
    initLevel();

    isPaused = false;
    pause();
  }
}

export function useTheForce() {
  isInvincible = true;
  isPaused = true;
  directions.innerHTML = 'May the force be with you.<br/></br/>Press Start';
}
