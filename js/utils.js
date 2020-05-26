import { Player } from '/js/classes/Player.js';

import {
  ACTOR_TYPES,
  CARDINALS,
  CHARACTERS,
  COLORS,
  EPISODES,
  INFINITY,
  MAGNIFICATION,
  MODES,
} from '/js/constants/index.js';

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
  if (actor !== game.player && getIsOnStage({ actor, game })) {
    const cardinals = Object.values(CARDINALS);
    const position  = getRandom(cardinals.length);

    if (cardinals[position] === actor.dir) {
      changeDirection({ actor, game });
    } else {
      actor.spriteRow = position;
      actor.dir       = cardinals[position];
    }
  }
}

export const collision = (actor1, actor2) => {
  const rectangle1 = actor1.selector.getBoundingClientRect();
  const rectangle2 = actor2.selector.getBoundingClientRect();

  return (
    (rectangle1.right > rectangle2.left && rectangle1.left < rectangle2.right) &&
    (rectangle1.bottom > rectangle2.top && rectangle1.top < rectangle2.bottom)
  );
}

export const getIsCrossing = (actor1, actor2) => {
  let isCrossing = false;
  const rectangle1 = actor1.selector.getBoundingClientRect();
  const rectangle2 = actor2.selector.getBoundingClientRect();

  if (rectangle1.right > rectangle2.left && rectangle1.left < rectangle2.right) {
    if (rectangle2.bottom < rectangle1.top && actor1.dir === CARDINALS.UP) {
      isCrossing = true;
    } else if (rectangle2.top > rectangle1.bottom && actor1.dir === CARDINALS.DOWN) {
      isCrossing = true;
    }
  } else if ((rectangle1.bottom > rectangle2.top && rectangle1.top < rectangle2.bottom)) {
    if (rectangle2.right < rectangle1.left && actor1.dir === CARDINALS.LEFT) {
      isCrossing = true;
    } else if (rectangle2.left > rectangle1.right && actor1.dir === CARDINALS.RIGHT) {
      isCrossing = true;
    }
  }

  return isCrossing;
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

export const getIsOffStage = ({ actor, game }) => {
  const actorBottom = actor.y + actor.frameHeight;
  const actorLeft   = actor.x;
  const actorRight  = actor.x + actor.frameWidth;
  const actorTop    = actor.y;

  return (
    actorRight  <= 0 ||
    actorBottom <= 0 ||
    actorLeft   >= game.width ||
    actorTop    >= game.height
  );
}

export const getIsOnStage = ({ actor, game }) => {
  const actorBottom = actor.y + actor.frameHeight;
  const actorLeft   = actor.x;
  const actorRight  = actor.x + actor.frameWidth;
  const actorTop    = actor.y;

  return (
    actorLeft   > 0 &&
    actorTop    > 0 &&
    actorRight  < game.width &&
    actorBottom < game.height
  );
}

export const getRandom = (max) => {
  return Math.floor(Math.random() * max);
}

export const preload = (url) => {
  const image = new Image();
  image.src = url;
}

export const setCoordinates = ({ actor, game }) => {
  if (actor.dir === CARDINALS.LEFT) {
    actor.x         = game.width;
    actor.y         = 10 + getRandom(game.height - 20 - actor.frameHeight);
    actor.spriteRow = 1;
  } else if (actor.dir === CARDINALS.UP) {
    actor.x         = 10 + getRandom(game.width - 20 - actor.frameWidth);
    actor.y         = game.height;
    actor.spriteRow = 3;
  } else if (actor.dir === CARDINALS.RIGHT) {
    actor.x         = 0 - actor.frameWidth;
    actor.y         = 10 + getRandom(game.height - 20 - actor.frameHeight);
    actor.spriteRow = 0;
  } else if (actor.dir === CARDINALS.DOWN) {
    actor.x         = 10 + getRandom(game.width - 20 - actor.frameWidth);
    actor.y         = 0 - actor.frameHeight;
    actor.spriteRow = 2;
  }
}

export const setPosition = ({ actor, game }) => {
  const actorBottom      = actor.y + actor.frameHeight;
  const actorLeft        = actor.x;
  const actorRight       = actor.x + actor.frameWidth;
  const actorTop         = actor.y;
  const isBounceLimitMet = actor.bounceLimit !== INFINITY && actor.bounceCount >= actor.bounceLimit;
  const isOffStage       = getIsOffStage({ actor, game });
  const isObstructed     = getIsObstructed({
    actor,
    obstacles: game.obstacles
  });

  let hasClearedStage = false;

  switch (actor.dir) {
    case CARDINALS.DOWN:
      if (actorTop + actor.speed >= game.height) {
        hasClearedStage = true;
      }
      break;
    case CARDINALS.LEFT:
      if (actorRight - actor.speed <= 0) {
        hasClearedStage = true;
      }
      break;
    case CARDINALS.RIGHT:
      if (actorLeft + actor.speed >= game.width) {
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
    if (isOffStage) {
      setCoordinates({ actor, game });
    }
  } else {
    switch (actor.dir) {
      case CARDINALS.DOWN:
        if (isBounceLimitMet || actorBottom + actor.speed < game.height) {
          actor.spriteRow = 2;
          actor.y        += actor.speed;
        } else {
          actor.dir = CARDINALS.UP;
          actor.y   = game.height - actor.frameHeight;

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
        if (isBounceLimitMet || actorRight + actor.speed < game.width) {
          actor.spriteRow = 0;
          actor.x        += actor.speed;
        } else {
          actor.dir = CARDINALS.LEFT;
          actor.x   = game.width - actor.frameWidth;

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

  game.hud.score          = game.hud.score + scoreDelta;
  game.hud.victimColor    = color;
  game.hud.victimInterval = game.counter + 16;
  game.hud.victimName     = victim.name;
}
