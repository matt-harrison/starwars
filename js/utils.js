import { Player } from '/js/classes/Player.js';

import * as CHARACTERS          from  '/js/constants/characters.js';
import { MAGNIFICATION, MODES } from '/js/constants/config.js';
import { EPISODES }             from '/js/constants/episodes.js';

export const adaptCoords = ({ actor, master }) => {
  if (typeof(actor.leftPercent) !== 'undefined' && typeof(actor.topPercent) !== 'undefined') {
    if (actor.leftPercent === 0) {
      actor.x = 0;
    } else if (actor.leftPercent === 100) {
      actor.x = master.gameWidth - actor.frameWidth;
    } else {
      actor.x = Math.floor(master.gameWidth * (actor.leftPercent / 100) - (actor.frameWidth / 2));
    }

    if (actor.topPercent === 0) {
      actor.y = 0;
    } else if (actor.leftPercent === 100) {
      actor.y = master.gameHeight - actor.frameHeight;
    } else {
      actor.y = Math.floor(master.gameHeight * (actor.topPercent / 100) - (actor.frameHeight / 2));
    }
  } else {
    const offsetX = actor.x / (master.gameWidth - actor.frameWidth);
    const offsetY = actor.y / (master.gameHeight - actor.frameHeight);

    actor.x = Math.floor((window.innerWidth - actor.frameWidth) * offsetX);
    actor.y = Math.floor((window.innerHeight - actor.frameHeight) * offsetY);
  }

  actor.draw();
}

export const add = (num1, num2) => {
  return Number(num1) + Number(num2);
}

export const collision = (actor1, actor2) => {
  const rect1 = actor1.selector.getBoundingClientRect();
  const rect2 = actor2.selector.getBoundingClientRect();

  return (
    (rect1.right > rect2.left && rect1.left < rect2.right) &&
    (rect1.bottom > rect2.top && rect1.top < rect2.bottom)
  );
}

export const crossPaths = (actor1, actor2) => {
  let cross = false;
  const rect1 = actor1.selector.getBoundingClientRect();
  const rect2 = actor2.selector.getBoundingClientRect();

  if (rect1.right > rect2.left && rect1.left < rect2.right) {
    if (rect2.bottom < rect1.top && actor1.dir === 'up') {
      cross = true;
    } else if (rect2.top > rect1.bottom && actor1.dir === 'down') {
      cross = true;
    }
  } else if ((rect1.bottom > rect2.top && rect1.top < rect2.bottom)) {
    if (rect2.right < rect1.left && actor1.dir === 'left') {
      cross = true;
    } else if (rect2.left > rect1.right && actor1.dir === 'right') {
      cross = true;
    }
  }

  return cross;
}

export const getObstruction = ({ character, obstacles }) => {
  let obstruction = '';
  const characterLeft   = character.x;
  const characterTop    = character.y + character.frameHeight - MAGNIFICATION;
  const characterRight  = character.x + character.frameWidth;
  const characterBottom = character.y + character.frameHeight;

  obstacles.forEach(obstacle => {
    if (obstacle.impassable) {
      const obstructionLeft = obstacle.x;
      const obstructionTop = obstacle.y;
      const obstructionRight = obstacle.x + obstacle.frameWidth;
      const obstructionBottom = obstacle.y + obstacle.frameHeight;

      if (character.dir === 'left' || character.dir === 'right') {
        if (characterBottom > obstructionTop && characterTop < obstructionBottom) {
          if (character.dir === 'left') {
            if (characterLeft - character.speed < obstructionRight && characterRight > obstructionLeft) {
              obstruction = obstacle;
            }
          } else if (character.dir === 'right') {
            if (characterRight + character.speed > obstructionLeft && characterLeft < obstructionRight) {
              obstruction = obstacle;
            }
          }
        }
      } else if (character.dir === 'up' || character.dir === 'down') {
        if (characterRight > obstructionLeft && characterLeft < obstructionRight) {
          if (character.dir === 'up') {
            if (characterTop - character.speed < obstructionBottom && characterBottom > obstructionTop) {
              obstruction = obstacle;
            }
          } else if (character.dir === 'down') {
            if (characterBottom + character.speed > obstructionTop && characterBottom < obstructionBottom) {
              obstruction = obstacle;
            }
          }
        }
      }
    }
  });

  return obstruction;
}

export const getRandom = (max) => {
  return Math.floor(Math.random() * max);
}

export const inBounds = ({ actor, master }) => {
  return (
    actor.x > 0 && add(actor.x, actor.frameWidth) < master.gameWidth &&
    actor.y > 0 && add(actor.y, actor.frameHeight) < master.gameHeight
  );
}

export const preload = (url) => {
  const image = new Image();
  image.src = url;
}

export const updateScore = ({ hud, points }) => {
  hud.score += points;
  hud.scoreText.innerHTML = hud.score;
}

export const updateVictim = ({ color, hud, victim }) => {
  hud.victimText.style.color = color;
  hud.victimText.innerHTML = victim.name;
  hud.victimCount = 16;
}

// Cheats
const playAs = (character) => {
  if (character) {
    window.master.character = character;

    if (master.mode === MODES.GAMEPLAY) {
      window.master.dom.stage.selector.removeChild(window.master.dom.player.selector);

      window.master.dom.player = new Player({
        data: window.master.character,
        master: window.master
      });
    }

    return `Welcome, ${character.name}.`;
  }
}

const playLevel = (level) => {
  let skipToLevel;

  if (typeof(level) === 'number') {
    if (level > 0 && level < EPISODES[3].length) {
      skipToLevel = level;
    }
  } else {
    for (const i = 0; i < EPISODES[3].length; i++) {
      if (level === EPISODES[3][i]) {
        skipToLevel = i;
      }
    }
  }

  if (typeof(skipToLevel) === 'number') {
    if (master.mode !== MODES.GAMEPLAY) {
      initGame();
    }

    window.master.level = skipToLevel;
    clearStage();
    initLevel();

    window.master.isPaused = false;
    pause();
  }

  return `Greetings from ${EPISODES[3][skipToLevel]}.`;
}

const useTheForce = () => {
  window.master.isInvincible                 = true;
  window.master.isPaused                     = true;
  window.master.dom.hud.title.innerHTML      = 'Pause';
  window.master.dom.hud.directions.innerHTML = `May the force be with you.<br/></br/>${window.master.promptStart}`;

  return 'May the force be with you.';
}

Object.values(CHARACTERS).forEach(character => {
  window[character.code] = character;
});

window.playAs      = playAs;
window.useTheForce = useTheForce;
