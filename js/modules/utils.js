import { magnification } from '../config.js';

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
  var charTop = obj.y + obj.frameHeight - magnification;
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

export function importJSON(obj, data) {
  for (var prop in data) {
    if (data.hasOwnProperty(prop)) {
      obj[prop] = data[prop];
    }
  }
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
