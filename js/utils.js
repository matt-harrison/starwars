import { Player } from '/js/classes/Player.js';

import * as CHARACTERS          from  '/js/constants/characters.js';
import {
  ACTOR_TYPES,
  CARDINALS,
  MAGNIFICATION,
  MODES
} from '/js/constants/config.js';
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

export const advanceFrame = (actor) => {
  if (actor.spriteColumn < actor.moveFrameCount) {
    actor.spriteColumn++;
  } else {
    actor.spriteColumn = 1;
  }
};

export const attachNode = ({
  attributes = {},
  nodeType   = 'div',
  parent     = document,
  styles     = {}
}) => {
  const node = document.createElement(nodeType);

  for (const key in attributes) {
    node.setAttribute(key, attributes[key]);
  };

  for (const key in styles) {
    node.style[key] = styles[key];
  };

  parent.appendChild(node);

  return node;
};

export const changeDirection = ({ actor, master }) => {
  if (actor !== master.dom.player && inBounds({ actor, master })) {
    const cardinals = Object.values(CARDINALS);
    const position = getRandom(cardinals.length);

    if (cardinals[position] === actor.dir) {
      changeDirection({ actor, master });
    } else {
      actor.spriteRow = position;
      actor.dir       = cardinals[position];
    }
  }
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
    if (rect2.bottom < rect1.top && actor1.dir === CARDINALS.UP) {
      cross = true;
    } else if (rect2.top > rect1.bottom && actor1.dir === CARDINALS.DOWN) {
      cross = true;
    }
  } else if ((rect1.bottom > rect2.top && rect1.top < rect2.bottom)) {
    if (rect2.right < rect1.left && actor1.dir === CARDINALS.LEFT) {
      cross = true;
    } else if (rect2.left > rect1.right && actor1.dir === CARDINALS.RIGHT) {
      cross = true;
    }
  }

  return cross;
}

export const getCoords = ({ actor, master }) => {
  if (actor.dir === CARDINALS.LEFT) {
    actor.x = master.gameWidth;
    actor.y = getRandom(master.gameHeight - actor.frameHeight);
    actor.spriteRow = 1;
  } else if (actor.dir === CARDINALS.UP) {
    actor.x = getRandom(master.gameWidth - actor.frameWidth);
    actor.y = master.gameHeight;
    actor.spriteRow = 3;
  } else if (actor.dir === CARDINALS.RIGHT) {
    actor.x = 0 - actor.frameWidth;
    actor.y = getRandom(master.gameHeight - actor.frameHeight);
    actor.spriteRow = 0;
  } else if (actor.dir === CARDINALS.DOWN) {
    actor.x = getRandom(master.gameWidth - actor.frameWidth);
    actor.y = 0 - actor.frameHeight;
    actor.spriteRow = 2;
  }
}

export const getIsObstructed = ({ actor, obstacles }) => {
  const actorBottom = actor.y + actor.frameHeight;
  const actorLeft   = actor.x;
  const actorRight  = actor.x + actor.frameWidth;
  const actorTop    = actor.y + actor.frameHeight - MAGNIFICATION;

  let isObstructed = false;

  obstacles.forEach(obstacle => {
    const obstacleBottom = obstacle.y + obstacle.frameHeight;
    const obstacleLeft   = obstacle.x;
    const obstacleRight  = obstacle.x + obstacle.frameWidth;
    const obstacleTop    = obstacle.y;

    if (actor.dir === CARDINALS.LEFT || actor.dir === CARDINALS.RIGHT) {
      if (actorBottom > obstacleTop && actorTop < obstacleBottom) {
        if (actor.dir === CARDINALS.LEFT) {
          if (actorLeft - actor.speed < obstacleRight && actorRight > obstacleLeft) {
            if (actor.type === ACTOR_TYPES.PLAYER) {
              actor.spriteRow = 1;
              actor.x = obstacleRight;
            } else {
              changeDirection({ actor, master });
            }

            isObstructed = true;
          }
        } else if (actor.dir === CARDINALS.RIGHT) {
          if (actorRight + actor.speed > obstacleLeft && actorLeft < obstacleRight) {
            if (actor.type === ACTOR_TYPES.PLAYER) {
              actor.spriteRow = 0;
              actor.x = obstacleLeft - actor.frameWidth;
            } else {
              changeDirection({ actor, master });
            }

            isObstructed = true;
          }
        }
      }
    } else if (actor.dir === CARDINALS.UP || actor.dir === CARDINALS.DOWN) {
      if (actorRight > obstacleLeft && actorLeft < obstacleRight) {
        if (actor.dir === CARDINALS.UP) {
          if (actorTop - actor.speed < obstacleBottom && actorBottom > obstacleTop) {
            if (actor.type === ACTOR_TYPES.PLAYER) {
              actor.spriteRow = 3;
              actor.y = obstacleBottom - actor.frameHeight + MAGNIFICATION;
            } else {
              changeDirection({ actor, master });
            }

            isObstructed = true;
          }
        } else if (actor.dir === CARDINALS.DOWN) {
          if (actorBottom + actor.speed > obstacleTop && actorBottom < obstacleBottom) {
            if (actor.type === ACTOR_TYPES.PLAYER) {
              actor.spriteRow = 2;
              actor.y = obstacleTop - actor.frameHeight;
            } else {
              changeDirection({ actor, master });
            }

            isObstructed = true;
          }
        }
      }
    }
  });

  return isObstructed;
}

export const getPosition = ({ actor, master }) => {
  const actorLeft        = actor.x;
  const actorRight       = actor.x + actor.frameWidth;
  const actorTop         = actor.y;
  const actorBottom      = actor.y + actor.frameHeight;
  const isBounceLimitMet = typeof(actor.bounceLimit) !== 'undefined' && actor.bounceCount >= actor.bounceCount;
  const isInBounds       = inBounds({ actor, master });
  const isObstructed     = getIsObstructed({
    actor,
    obstacles: master.actors.obstacles
  });

  let hasClearedStage = false;

  switch (actor.dir) {
    case CARDINALS.DOWN:
      if (actorTop + actor.speed >= master.gameHeight) {
        hasClearedStage = true;
      }
      break;
    case CARDINALS.LEFT:
      if (actorRight - actor.speed <= 0) {
        hasClearedStage = true;
      }
      break;
    case CARDINALS.RIGHT:
      if (actorLeft + actor.speed >= master.gameWidth) {
        hasClearedStage = true;
      }
      break;
    case CARDINALS.UP:
      if (actorTop - actor.speed <= 0) {
        hasClearedStage = true;
      }
      break;
  }

  if (isObstructed) {
    if (!isInBounds) {
      actor.respawn();
    }
  } else if (isBounceLimitMet && hasClearedStage) {
    actor.remove();
  } else {
    switch (actor.dir) {
      case CARDINALS.DOWN:
        if (isBounceLimitMet || actorBottom + actor.speed < master.gameHeight) {
          actor.spriteRow = 2;
          actor.y        += actor.speed;
        } else {
          actor.dir = CARDINALS.UP;
          actor.y   = master.gameHeight - actor.frameHeight;

          actor.bouceCount++;
        }
        break;
      case CARDINALS.LEFT:
        if (isBounceLimitMet || actorLeft - actor.speed > 0) {
          actor.spriteRow = 1;
          actor.x        -= actor.speed;
        } else {
          actor.dir = CARDINALS.RIGHT;
          actor.x   = 0;

          actor.bouceCount++;
        }
        break;
      case CARDINALS.RIGHT:
        if (isBounceLimitMet || actorRight + actor.speed < master.gameWidth) {
          actor.spriteRow = 0;
          actor.x        += actor.speed;
        } else {
          actor.dir = CARDINALS.LEFT;
          actor.x   = master.gameWidth - actor.frameWidth;

          actor.bouceCount++;
        }
        break;
      case CARDINALS.UP:
        if (isBounceLimitMet || actorTop - actor.speed > 0) {
          actor.spriteRow = 3;
          actor.y        -= actor.speed;
        } else {
          actor.dir = CARDINALS.DOWN;
          actor.y   = 0;

          actor.bouceCount++;
        }
        break;
    }
  }
}

export const getRandom = (max) => {
  return Math.floor(Math.random() * max);
}

export const inBounds = ({ actor, master }) => {
  const actorLeft   = actor.x;
  const actorRight  = actor.x + actor.frameWidth;
  const actorTop    = actor.y;
  const actorBottom = actor.y + actor.frameHeight;

  return (
    actorRight  > 0 &&
    actorBottom > 0 &&
    actorLeft   < master.gameWidth &&
    actorTop    < master.gameHeight
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
