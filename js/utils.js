import { Player } from '/js/classes/Player.js';

import * as CHARACTERS          from  '/js/constants/characters.js';
import {
  ACTOR_TYPES,
  CARDINALS,
  COLORS,
  MAGNIFICATION,
  MODES
} from '/js/constants/config.js';
import { EPISODES }             from '/js/constants/episodes.js';

export const adaptCoords = ({ actor, game }) => {
  if (typeof(actor.leftPercent) !== 'undefined' && typeof(actor.topPercent) !== 'undefined') {
    if (actor.leftPercent === 0) {
      actor.x = 0;
    } else if (actor.leftPercent === 100) {
      actor.x = game.gameWidth - actor.frameWidth;
    } else {
      actor.x = Math.floor(game.gameWidth * (actor.leftPercent / 100) - (actor.frameWidth / 2));
    }

    if (actor.topPercent === 0) {
      actor.y = 0;
    } else if (actor.leftPercent === 100) {
      actor.y = game.gameHeight - actor.frameHeight;
    } else {
      actor.y = Math.floor(game.gameHeight * (actor.topPercent / 100) - (actor.frameHeight / 2));
    }
  } else {
    const offsetX = actor.x / (game.gameWidth - actor.frameWidth);
    const offsetY = actor.y / (game.gameHeight - actor.frameHeight);

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

export const changeDirection = ({ actor, game }) => {
  if (actor !== game.player && inBounds({ actor, game })) {
    const cardinals = Object.values(CARDINALS);
    const position = getRandom(cardinals.length);

    if (cardinals[position] === actor.dir) {
      changeDirection({ actor, game });
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

export const getCoords = ({ actor, game }) => {
  if (actor.dir === CARDINALS.LEFT) {
    actor.x         = game.gameWidth;
    actor.y         = getRandom(game.gameHeight - actor.frameHeight);
    actor.spriteRow = 1;
  } else if (actor.dir === CARDINALS.UP) {
    actor.x         = getRandom(game.gameWidth - actor.frameWidth);
    actor.y         = game.gameHeight;
    actor.spriteRow = 3;
  } else if (actor.dir === CARDINALS.RIGHT) {
    actor.x         = 0 - actor.frameWidth;
    actor.y         = getRandom(game.gameHeight - actor.frameHeight);
    actor.spriteRow = 0;
  } else if (actor.dir === CARDINALS.DOWN) {
    actor.x         = getRandom(game.gameWidth - actor.frameWidth);
    actor.y         = 0 - actor.frameHeight;
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
              changeDirection({ actor, game });
            }

            isObstructed = true;
          }
        } else if (actor.dir === CARDINALS.RIGHT) {
          if (actorRight + actor.speed > obstacleLeft && actorLeft < obstacleRight) {
            if (actor.type === ACTOR_TYPES.PLAYER) {
              actor.spriteRow = 0;
              actor.x = obstacleLeft - actor.frameWidth;
            } else {
              changeDirection({ actor, game });
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
              changeDirection({ actor, game });
            }

            isObstructed = true;
          }
        } else if (actor.dir === CARDINALS.DOWN) {
          if (actorBottom + actor.speed > obstacleTop && actorBottom < obstacleBottom) {
            if (actor.type === ACTOR_TYPES.PLAYER) {
              actor.spriteRow = 2;
              actor.y = obstacleTop - actor.frameHeight;
            } else {
              changeDirection({ actor, game });
            }

            isObstructed = true;
          }
        }
      }
    }
  });

  return isObstructed;
}

export const getPosition = ({ actor, game }) => {
  const actorLeft        = actor.x;
  const actorRight       = actor.x + actor.frameWidth;
  const actorTop         = actor.y;
  const actorBottom      = actor.y + actor.frameHeight;
  const isBounceLimitMet = typeof(actor.bounceLimit) !== 'undefined' && actor.bounceCount >= actor.bounceLimit;
  const isInBounds       = inBounds({ actor, game });
  const isObstructed     = getIsObstructed({
    actor,
    obstacles: game.obstacles
  });

  let hasClearedStage = false;

  switch (actor.dir) {
    case CARDINALS.DOWN:
      if (actorTop + actor.speed >= game.gameHeight) {
        hasClearedStage = true;
      }
      break;
    case CARDINALS.LEFT:
      if (actorRight - actor.speed <= 0) {
        hasClearedStage = true;
      }
      break;
    case CARDINALS.RIGHT:
      if (actorLeft + actor.speed >= game.gameWidth) {
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
      getCoords({ actor, game });
    }
  } else {
    switch (actor.dir) {
      case CARDINALS.DOWN:
        if (isBounceLimitMet || actorBottom + actor.speed < game.gameHeight) {
          actor.spriteRow = 2;
          actor.y        += actor.speed;
        } else {
          actor.dir = CARDINALS.UP;
          actor.y   = game.gameHeight - actor.frameHeight;

          actor.bounceCount++;
        }
        break;
      case CARDINALS.LEFT:
        if (isBounceLimitMet || actorLeft - actor.speed > 0) {
          actor.spriteRow = 1;
          actor.x        -= actor.speed;
        } else {
          actor.dir = CARDINALS.RIGHT;
          actor.x   = 0;

          actor.bounceCount++;
        }
        break;
      case CARDINALS.RIGHT:
        if (isBounceLimitMet || actorRight + actor.speed < game.gameWidth) {
          actor.spriteRow = 0;
          actor.x        += actor.speed;
        } else {
          actor.dir = CARDINALS.LEFT;
          actor.x   = game.gameWidth - actor.frameWidth;

          actor.bounceCount++;
        }
        break;
      case CARDINALS.UP:
        if (isBounceLimitMet || actorTop - actor.speed > 0) {
          actor.spriteRow = 3;
          actor.y        -= actor.speed;
        } else {
          actor.dir = CARDINALS.DOWN;
          actor.y   = 0;

          actor.bounceCount++;
        }
        break;
    }
  }
}

export const getRandom = (max) => {
  return Math.floor(Math.random() * max);
}

export const inBounds = ({ actor, game }) => {
  const actorLeft   = actor.x;
  const actorRight  = actor.x + actor.frameWidth;
  const actorTop    = actor.y;
  const actorBottom = actor.y + actor.frameHeight;

  return (
    actorRight  > 0 &&
    actorBottom > 0 &&
    actorLeft   < game.gameWidth &&
    actorTop    < game.gameHeight
  );
}

export const initEnemies = (game) => {
  const {
    enemiesOptional,
    enemiesRequiredData
  } = game.stage;

  game.stage.enemies = [];

  enemiesOptional.forEach(enemy => {
    enemy.details.isOptional = true;
    enemy.details.type       = ACTOR_TYPES.ENEMY;
  });

  if (enemiesOptional) {
    game.stage.enemies.push(...enemiesOptional);
  }

  if (enemiesRequiredData) {
    const {
      bounceLimit,
      count,
      character,
      delayInterval,
      dir,
      hp
    } = enemiesRequiredData;

    for (let i = 0; i < count; i++) {
      const enemy = {
        character: character,
        details: {
          bounceLimit: bounceLimit,
          delay:       delayInterval * i,
          dir:         dir,
          hp:          hp,
          isOptional:  false,
          type:        ACTOR_TYPES.ENEMY
        }
      };

      game.stage.enemies.push(enemy);
    }
  }
};

export const preload = (url) => {
  const image = new Image();
  image.src = url;
}

export const updateHud = ({ game, victim }) => {
  const scoreDelta = victim.type === ACTOR_TYPES.FRIENDLY ? 0 - 100 : 100;
  let   color      = game.stage.textColor;

  switch (victim.type) {
    case ACTOR_TYPES.NEUTRAL:
      color = COLORS.BLUE_DARK;
      break;
    case ACTOR_TYPES.FRIENDLY:
      color = COLORS.RED;
      break;
    default:
    case ACTOR_TYPES.ENEMY:
      color = game.stage.textColor;
      break;
  }

  // rename scoreText   to scoreSelector?
  // rename victimText  to victimSelector?
  // rename victimCount to victimIdInterval?

  game.hud.score                  = game.hud.score + scoreDelta;
  game.hud.scoreText.innerHTML    = game.hud.score;
  game.hud.scoreText.style.color  = color;
  game.hud.victimCount            = 16;
  game.hud.victimText.innerHTML   = victim.name;
  game.hud.victimText.style.color = color;
}

// Cheats
const playAs = (character) => {
  if (character) {
    window.game.character = character;

    if (game.mode === MODES.GAMEPLAY) {
      window.game.stage.selector.removeChild(window.game.player.selector);

      window.game.player = new Player({
        data: window.game.character,
        game: window.game
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
    if (game.mode !== MODES.GAMEPLAY) {
      initGame();
    }

    window.game.level = skipToLevel;
    clearStage();
    initLevel();

    window.game.isPaused = false;
    pause();
  }

  return `Greetings from ${EPISODES[3][skipToLevel]}.`;
}

const useTheForce = () => {
  window.game.isInvincible             = true;
  window.game.isPaused                 = true;
  window.game.hud.title.innerHTML      = 'Pause';
  window.game.hud.directions.innerHTML = `May the force be with you.<br/></br/>${window.game.promptStart}`;

  return 'May the force be with you.';
}

Object.values(CHARACTERS).forEach(character => {
  window[character.code] = character;
});

window.playAs      = playAs;
window.useTheForce = useTheForce;
