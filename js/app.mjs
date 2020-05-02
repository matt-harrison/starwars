import { fps, isMobile, magnification } from './config.js';

// Config
import { detonation } from './modules/animations.js';
import { artoo, stormtrooper, threepio } from './modules/characters.js';
import { black, blueDark, gray, red, white } from './modules/colors.js';
import episodes from './modules/episodes.js';
import { collision } from './modules/utils.js';

import { Bomb } from './modules/classes/Bomb.js';

//Initialize global vars
let isDebug = window.location.search.indexOf('debug') !== -1;

let hudOpacity    = '0.5';
let hudStatus     = '';
let cutsceneCount = 0;
let victimCount   = 0;
let victimDelay   = 16;

let titleSize     = isMobile ? '25px' : '40px';
let directionSize = isMobile ? '14px' : '25px';
let lineHeight    = isMobile ? '1' : '1.5';
let clickPrompt   = isMobile ? 'Tap to begin' : 'Press Enter';
let startPrompt   = isMobile ? 'Press Start'  : 'Press Enter';

let cardinals   = ['right', 'left', 'down', 'up'];
let buttonNames = ['btnRight', 'btnLeft', 'btnDown', 'btnUp', 'btnStart', 'btnAttack', 'btnAttack2'];
let numerals    = ['I', 'II', 'III', 'IV', 'V', 'VI'];

let enemyCount;
let propCount;
let invincible;
let score;
let menuMode;
let resetMode;
let gameOver;
let paused;
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
let title;
let directions;
let scoreboard;
let scoreText;
let victimText;
let player;
let cutscene;
let hilt;
let buttons;
let dpad;
let btnLeft;
let btnRight;
let btnUp;
let btnDown;
let btnAttack;
let btnAttack2;
let btnStart;

const Animation = function(obj, origin) {
  importJSON(this, obj);

  this.origin = origin;
  this.count = propCount++;
  this.dead = false;

  animations.push(this);

  this.width = this.frameWidth * this.frameCount;
  this.height = this.frameHeight;
  this.spriteColumn = 0;

  this.x = Math.floor(origin.x + (origin.frameWidth - this.frameWidth) / 2);
  this.y = Math.floor(origin.y + (origin.frameHeight - this.frameHeight) / 2);

  this.selector = document.createElement('div');
  this.selector.id = 'animation' + this.count;
  this.selector.style.position = 'absolute';
  this.selector.style.left = this.x + 'px';
  this.selector.style.top = this.y + 'px';
  this.selector.style.width = this.frameWidth + 'px';
  this.selector.style.height = this.frameHeight + 'px';
  this.selector.style.backgroundImage = "url('img/animations/" + this.name + ".png')";
  this.selector.style.backgroundSize = this.width + 'px ' + this.height + 'px';
  this.selector.style.zIndex = '2';
  stage.selector.appendChild(this.selector);

  this.kill = function() {
    if (this.remove) {
      stage.selector.removeChild(this.selector);
    }
    const position = animations.indexOf(this);
    animations.splice(position, 1);
  }

  this.update = function() {
    if (this.spriteColumn + 1 < this.frameCount) {
      this.spriteColumn++;
    } else {
      this.dead = true;
    }
  }

  this.draw = function() {
    if (this.dead) {
      this.kill();
    }
    this.selector.style.backgroundPosition = (0 - this.spriteColumn * this.frameWidth) + 'px 0';
  }
};

const Cutscene = function(img) {
  this.selector = document.createElement('div');
  this.selector.id = 'stage';
  this.selector.style.position = 'absolute';
  this.selector.style.top = 0;
  this.selector.style.left = 0;
  this.width = game.width;
  this.height = game.height;
  this.selector.style.width = this.width + 'px';
  this.selector.style.height = this.height + 'px';
  this.selector.style.backgroundColor = black;
  this.selector.style.zIndex = '101';
  this.selector.setAttribute('data-key', 'enter');
  game.selector.insertBefore(this.selector, game.selector.firstChild);

  cutscene = document.createElement('div');
  cutscene.style.backgroundImage = "url('img/cutscenes/" + img + ".png')";
  if (game.width <= game.height) {
    cutscene.width = game.width;
    cutscene.height = game.width;
  } else {
    cutscene.width = game.height;
    cutscene.height = game.height;
  }
  cutscene.style.width = cutscene.width + 'px';
  cutscene.style.height = cutscene.height + 'px';
  cutscene.style.position = 'absolute';
  cutscene.style.top = (this.height - cutscene.height) / 2 + 'px';
  cutscene.style.left = (this.width - cutscene.width) / 2 + 'px';
  cutscene.style.backgroundSize = cutscene.width + 'px ' + cutscene.height + 'px';
  cutscene.style.zIndex = '100';
  cutscene.setAttribute('data-key', 'enter');
  this.selector.appendChild(cutscene);

  this.resize = function() {
    this.width = game.width;
    this.height = game.height;
    this.selector.style.width = this.width + 'px';
    this.selector.style.height = this.height + 'px';

    cutscene.style.top = (this.height - cutscene.height) / 2 + 'px';
    cutscene.style.left = (this.width - cutscene.width) / 2 + 'px';
    cutscene.style.backgroundSize = cutscene.width + 'px ' + cutscene.height + 'px';
  }
};

const Enemy = function(obj) {
  enemies.push(this);
  importJSON(this, obj);

  this.count = enemyCount++;
  this.active = true;
  this.dead = false;
  this.trapped = false;

  this.speed = this.speed * (magnification / 5);

  this.weaponDelay = fps;//Shoot once per second max
  this.weaponReady = true;
  this.weaponCount = 0;

  this.selector = document.createElement('div');
  this.selector.id = 'enemy' + this.count;
  this.selector.style.position = 'absolute';
  this.selector.style.width = this.frameWidth + 'px';
  this.selector.style.height = this.frameHeight + 'px';
  this.selector.style.backgroundImage = "url('img/characters/" + this.sprite + ".png')";
  this.selector.style.backgroundSize = this.width + 'px ' + this.height + 'px';
  this.selector.style.backgroundRepeat = 'no-repeat';
  this.selector.style.zIndex = '2';
  stage.selector.appendChild(this.selector);

  this.spriteColumn = 1;
  this.blinking = false;
  this.blinkCount = 0;

  if (obj === stage.boss) {
    this.isBoss = true;
    this.hp = stage.bossHP;
    this.value = stage.bossHP * 100;
  } else {
    this.isBoss = false;
    this.hp = 1;
    this.value = 100;
  }

  if (typeof(stage.enemyDir) === 'undefined') {
    this.spriteRow = getRandom(4);
    this.dir = cardinals[this.spriteRow];
  } else {
    this.dir = stage.enemyDir;
  }

  if (this.dir === 'left') {
    this.x = game.width;
    this.y = getRandom(game.height - this.frameHeight);
    this.spriteRow = 1;
  } else if (this.dir === 'up') {
    this.x = getRandom(game.width - this.frameWidth);
    this.y = game.height;
    this.spriteRow = 3;
  } else if (this.dir === 'right') {
    this.x = 0 - this.frameWidth;
    this.y = getRandom(game.height - this.frameHeight);
    this.spriteRow = 0;
  } else if (this.dir === 'down') {
    this.x = getRandom(game.width - this.frameWidth);
    this.y = 0 - this.frameHeight;
    this.spriteRow = 2;
  }

  //Preload death animation for smooth transition
  if (typeof(this.death) !== 'undefined') {
    preload('img/animations/' + this.death.name + '.png');
  }

  this.changeDir = function() {
    if (inBounds(this)) {
      this.spriteRow = getRandom(4);
      const randomDir = cardinals[this.spriteRow];
      if (this.dir === randomDir) {
        this.changeDir();
      } else {
        this.dir = randomDir;
      }
    }
  }

  this.reverse = function() {
    if (this.dir === 'left') {
      this.dir = 'right';
      this.spriteRow = 0;
    } else if (this.dir === 'up') {
      this.dir = 'down';
      this.spriteRow = 2;
    } else if (this.dir === 'right') {
      this.dir = 'left';
      this.spriteRow = 1;
    } else if (this.dir === 'down') {
      this.dir = 'up';
      this.spriteRow = 3;
    }
  }

  this.collide = function() {
    if (this.ship && !this.isBoss) {
      this.dead = true;
    }
  }

  this.hit = function() {
    if (!this.blinking) {
      if (--this.hp === 0) {
        this.dead = true;
      } else {
        this.blinking = true;
        this.blinkCount = fps;
        this.changeDir();
      }
    }

    updateVictim(this, stage.textColor);
  }

  this.respawn = function() {
    stage.selector.removeChild(this.selector);
    const position = enemies.indexOf(this);
    enemies.splice(position, 1);
    new Enemy(obj);
  }

  this.kill = function() {
    this.active = false;
    stage.enemiesKilled++;

    if (typeof(this.death) !== 'undefined') {
      this.selector.style.display = 'none';
      new Animation(this.death, this);
    } else {
      this.blinkCount = 0;
      this.spriteColumn = 0;
      this.spriteRow = 4;
    }

    updateScore(this.value);
  }

  this.update = function() {
    if (this.blinking) {
      if (game.counter%2 === 0 || this.dead) {
        this.selector.style.display = '';
      } else {
        this.selector.style.display = 'none';
      }
      if (--this.blinkCount === 0) {
        this.blinking = false;
        this.selector.style.display = '';
      }
    }
    if (this.dead) {
      if (this.active) {
        this.kill();
      }
    } else {
      if (!this.weaponReady) {
        if (this.weaponCount++ === this.weaponDelay) {
          this.weaponReady = true;
          this.weaponCount = 0;
        }
      }
      if (this.spriteColumn < this.moveFrameCount) {
        this.spriteColumn++;
      } else {
        this.spriteColumn = 1;
      }

      var obs = getObstruction(this);
      if (obs !== '' && !inBounds(this)) {
        this.trapped = true;
      } else {
        if (this.dir === 'left') {
          if (this.x - this.speed > 0 && obs === '') {
            this.x -= this.speed;
          } else {
            if (obs !== '') {
              this.x = obs.x + obs.frameWidth;
              this.changeDir();
            } else {
              this.x = 0;
              this.reverse();
            }
          }
        } else if (this.dir === 'up') {
          if (this.y - this.speed > 0 && obs === '') {
            this.y -= this.speed;
          } else {
            if (obs !== '') {
              this.y = obs.y + obs.frameHeight - this.frameHeight + magnification;
              this.changeDir();
            } else {
              this.y = 0;
              this.reverse();
            }
          }
        } else if (this.dir === 'right') {
          if (this.x + this.speed < game.width - this.frameWidth && obs === '') {
            this.x += this.speed;
          } else {
            if (obs !== '') {
              this.x = obs.x - this.frameHeight;
              this.changeDir();
            } else {
              this.x = game.width - this.frameWidth;
              this.reverse();
            }
          }
        } else if (this.dir === 'down') {
          if (this.y + this.speed < game.height - this.frameHeight && obs === '') {
            this.y += this.speed;
          } else {
            if (obs !== '') {
              this.y = obs.y - this.frameHeight;
              this.changeDir();
            } else {
              this.y = game.height - this.frameHeight;
              this.reverse();
            }
          }
        }
      }
    }
  }

  this.draw = function() {
    if (this.trapped) {
      this.respawn();
    } else {
      this.selector.style.backgroundPosition = (0 - this.spriteColumn * this.frameWidth) + 'px ' + (0 - this.spriteRow * this.frameHeight) + 'px';

      this.selector.style.left = this.x + 'px';
      this.selector.style.top = this.y + 'px';
    }
  };

  this.draw();
};

const Friendly = function(obj, details) {
  friendlies.push(this);
  importJSON(this, obj);
  importJSON(this, details);

  this.count = propCount++;
  this.active = true;
  this.dead = false;
  this.trapped = false;

  this.speed = this.speed * (magnification / 5);

  this.selector = document.createElement('div');
  this.selector.id = 'friendly' + this.count;
  this.selector.style.position = 'absolute';
  this.selector.style.width = this.frameWidth + 'px';
  this.selector.style.height = this.frameHeight + 'px';
  this.selector.style.backgroundImage = "url('img/characters/" + this.sprite + ".png')";
  this.selector.style.backgroundSize = this.width + 'px ' + this.height + 'px';
  this.selector.style.backgroundRepeat = 'no-repeat';
  this.selector.style.zIndex = '2';
  stage.selector.appendChild(this.selector);

  if (typeof(this.dir) === 'undefined') {
    this.spriteRow = getRandom(4)
    this.dir = cardinals[this.spriteRow];
  }

  if (this.dir === 'left') {
    this.x = game.width;
    this.y = getRandom(game.height - this.frameHeight);
    this.spriteRow = 1;
  } else if (this.dir === 'up') {
    this.x = getRandom(game.width - this.frameWidth);
    this.y = game.height;
    this.spriteRow = 3;
  } else if (this.dir === 'right') {
    this.x = 0 - this.frameWidth;
    this.y = getRandom(game.height - this.frameHeight);
    this.spriteRow = 0;
  } else if (this.dir === 'down') {
    this.x = getRandom(game.width - this.frameWidth);
    this.y = 0 - this.frameHeight;
    this.spriteRow = 2;
  }

  this.reverse = function() {
    if (this.dir === 'left') {
      this.dir = 'right';
      this.spriteRow = 0;
    } else if (this.dir === 'up') {
      this.dir = 'down';
      this.spriteRow = 2;
    } else if (this.dir === 'right') {
      this.dir = 'left';
      this.spriteRow = 1;
    } else if (this.dir === 'down') {
      this.dir = 'up';
      this.spriteRow = 3;
    }
  }

  this.remove = function() {
    const position = friendlies.indexOf(this);
    friendlies.splice(position, 1);
  }

  this.respawn = function() {
    stage.selector.removeChild(this.selector);
    const position = friendlies.indexOf(this);
    friendlies.splice(position, 1);
    new Friendly(obj, details);
  }

  this.kill = function() {
    this.active = false;

    if (typeof(this.death) !== 'undefined') {
      this.selector.style.display = 'none';
      new Animation(this.death, this);
    } else {
      this.spriteColumn = 0;
      this.spriteRow = 4;
    }

    if (this.value > 0) {
      updateVictim(this, blueDark);
    } else {
      updateVictim(this, red);
    }
    updateScore(this.value);
  }

  this.update = function() {
    if (this.active) {
      if (this.spriteColumn < this.moveFrameCount) {
        this.spriteColumn++;
      } else {
        this.spriteColumn = 1;
      }

      var obs = getObstruction(this);
      if (obs !== '' && !inBounds(this)) {
        this.trapped = true;
      } else {
        if (this.dir === 'left') {
          if (this.x > 0 - this.frameWidth) {
            if (obs === '') {
              this.x -= this.speed;
            } else {
              this.reverse();
            }
          } else {
            this.active = false;
          }
        } else if (this.dir === 'up') {
          if (this.y > 0 - this.frameHeight) {
            if (obs === '') {
              this.y -= this.speed;
            } else {
              this.reverse();
            }
          } else {
            this.active = false;
          }
        } else if (this.dir === 'right') {
          if (this.x < game.width + this.frameWidth) {
            if (obs === '') {
              this.x += this.speed;
            } else {
              this.reverse();
            }
          } else {
            this.active = false;
          }
        } else if (this.dir === 'down') {
          if (this.y < game.height + this.frameHeight) {
            if (obs === '') {
              this.y += this.speed;
            } else {
              this.reverse();
            }
          } else {
            this.active = false;
          }
        }
      }
    }
  }

  this.draw = function() {
    this.selector.style.backgroundPosition = (0 - this.spriteColumn * this.frameWidth) + 'px ' + (0 - this.spriteRow * this.frameHeight) + 'px';
    this.selector.style.left = this.x + 'px';
    this.selector.style.top = this.y + 'px';

    if (!this.active) {
      this.remove();
    } else if (this.trapped) {
      this.respawn();
    }
  };

  this.draw();
};

const Game = function() {
  this.width  = isMobile ? window.innerWidth : 500;
  this.height = isMobile ? window.innerHeight : 500;

  //Attach to document
  this.selector = document.createElement('div');
  this.selector.id = 'game';
  this.selector.style.position = 'relative';
  this.selector.style.margin = isMobile ? '0' : '10px auto 0';
  this.selector.style.width = this.width + 'px';
  this.selector.style.height = this.height + 'px';
  this.selector.style.overflow = 'hidden';
  this.selector.style.zIndex = '1';
  document.body.appendChild(this.selector);

  this.counter = 0;
};

const Hud = function() {
  this.selector = document.createElement('div');
  this.selector.id = 'hud';
  this.selector.style.position = 'absolute';
  this.selector.style.width = '100%';
  this.selector.style.height = '100%';
  this.selector.style.zIndex = '99';
  game.selector.appendChild(this.selector);
};

const Lightsaber = function(origin, isLongRange) {
  props.push(this);

  this.type = 'lightsaber';
  this.count = propCount++;
  this.origin = origin;
  this.dir = origin.dir;
  this.color = origin.weaponColor;
  this.active = !isLongRange;
  this.speed = isLongRange ? 30 * (magnification / 5) : 0;
  this.thrown = isLongRange;

  if (this.dir === 'left') {
    this.frameWidth = 8 * magnification;
    this.frameHeight = 1 * magnification;
    this.hiltWidth = 2 * magnification;
    this.hiltHeight = 1 * magnification;
    this.x = origin.x + (origin.weaponOffsetLeft[0] * magnification) - this.frameWidth;
    this.y = origin.y + (origin.weaponOffsetLeft[1] * magnification);
    this.hiltX = this.frameWidth - this.hiltWidth;
    this.hiltY = 0;
  } else if (this.dir === 'up') {
    this.frameWidth = 1 * magnification;
    this.frameHeight = 8 * magnification;
    this.hiltWidth = 1 * magnification;
    this.hiltHeight = 2 * magnification;
    this.x = origin.x + (origin.weaponOffsetUp[0] * magnification);
    this.y = origin.y + (origin.weaponOffsetUp[1] * magnification) - this.frameHeight;
    this.hiltX = 0;
    this.hiltY = this.frameHeight - this.hiltHeight;;
  } else if (this.dir === 'right') {
    this.frameWidth = 8 * magnification;
    this.frameHeight = 1 * magnification;
    this.hiltWidth = 2 * magnification;
    this.hiltHeight = 1 * magnification;
    this.x = origin.x + (origin.weaponOffsetRight[0] * magnification);
    this.y = origin.y + (origin.weaponOffsetRight[1] * magnification);
    this.hiltX = 0;
    this.hiltY = 0;
  } else if (this.dir === 'down') {
    this.frameWidth = 1 * magnification;
    this.frameHeight = 8 * magnification;
    this.hiltWidth = 1 * magnification;
    this.hiltHeight = 2 * magnification;
    this.x = origin.x + (origin.weaponOffsetDown[0] * magnification);
    this.y = origin.y + (origin.weaponOffsetDown[1] * magnification);
    this.hiltX = 0;
    this.hiltY = 0;
  }

  this.width = this.frameWidth;
  this.height = this.frameHeight;

  //Add container div
  this.selector = document.createElement('div');
  this.selector.id = 'lightsaber' + this.count;
  this.selector.style.position = 'absolute';
  this.selector.style.left = this.x + 'px';
  this.selector.style.top = this.y + 'px';
  this.selector.style.width = this.frameWidth + 'px';
  this.selector.style.height = this.frameHeight + 'px';
  this.selector.style.backgroundColor = this.color;
  this.selector.style.zIndex = '4';
  stage.selector.appendChild(this.selector);

  //Add hilt
  hilt = document.createElement('div');
  hilt.id = 'hilt' + this.count;
  hilt.style.position = 'relative';
  hilt.style.left = this.hiltX + 'px';
  hilt.style.top = this.hiltY + 'px';
  hilt.style.width = this.hiltWidth + 'px';
  hilt.style.height = this.hiltHeight + 'px';
  hilt.style.backgroundColor = gray;
  this.selector.appendChild(hilt);

  this.reverse = function() {
    if (this.dir === 'left') {
      this.dir = 'right';
    } else if (this.dir === 'up') {
      this.dir = 'down';
    } else if (this.dir === 'right') {
      this.dir = 'left';
    } else if (this.dir === 'down') {
      this.dir = 'up';
    }
  }

  this.kill = function() {
    stage.selector.removeChild(this.selector);
    const position = props.indexOf(this);
    props.splice(position, 1);
    origin.lightsaber = '';
    origin.spriteColumn = 0;
  }

  this.update = function() {
    if (!this.active) {
      if (!collision(this, this.origin)) {
        this.active = true;
      }
    }
    if (this.thrown) {
      if (this.dir === 'left') {
        if (this.x - this.speed > 0) {
          this.x -= this.speed;
        } else {
          this.x = 0;
          this.reverse();
        }
      } else if (this.dir === 'up') {
        if (this.y - this.speed > 0) {
          this.y -= this.speed;
        } else {
          this.y = 0;
          this.reverse();
        }
      } else if (this.dir === 'right') {
        if (this.x + this.speed < game.width - this.width) {
          this.x += this.speed;
        } else {
          this.x = game.width - this.frameWidth;
          this.reverse();
        }
      } else if (this.dir === 'down') {
        if (this.y + this.speed < game.height - this.height) {
          this.y += this.speed;
        } else {
          this.y = game.height - this.frameHeight;
          this.reverse();
        }
      }
    }
  }

  this.draw = function() {
    if (player.attacking) {
      this.selector.style.left = this.x + 'px';
      this.selector.style.top = this.y + 'px';
    } else {
      this.kill();
    }
  }
};

const Obstacle = function(obj, objX, objY) {
  obstacles.push(this);
  importJSON(this, obj);

  this.speed = this.speed * (magnification / 5);
  this.count = propCount++;
  this.leftPercent = objX;
  this.topPercent = objY;

  if (this.leftPercent === 0) {
    this.x = 0;
  } else if (this.leftPercent === 100) {
    this.x = game.width - this.frameWidth;
  } else {
    this.x = game.width * (this.leftPercent / 100) - (this.frameWidth / 2);
  }
  if (this.topPercent === 0) {
    this.y = 0;
  } else if (this.topPercent === 100) {
    this.y = game.height - this.frameHeight;
  } else {
    this.y = game.height * (this.topPercent / 100) - (this.frameHeight / 2);
  }

  //Attach to document
  this.selector = document.createElement('div');
  this.selector.id = 'obstacle' + this.count;
  this.selector.style.position = 'absolute';
  this.selector.style.left = this.x + 'px';
  this.selector.style.top = this.y + 'px';
  this.selector.style.width = this.frameWidth + 'px';
  this.selector.style.height = this.frameHeight + 'px';
  this.selector.style.backgroundImage = "url('img/obstacles/" + this.img + ".png')";
  this.selector.style.backgroundSize = this.width + 'px ' + this.height + 'px';
  stage.selector.appendChild(this.selector);

  title.style.color = this.textColor;
  directions.style.color = this.textColor;
  scoreboard.style.color = this.textColor;

  this.update = function() {
    if (this.frameCount > 1) {
      if (this.spriteColumn + 1 < this.frameCount) {
        this.spriteColumn++;
      } else {
        this.spriteColumn = 0;
      }
    }
  }

  this.draw = function() {
    this.selector.style.left = this.x + 'px';
    this.selector.style.top = this.y + 'px';
    this.selector.style.backgroundPosition = (0 - this.spriteColumn * this.frameWidth) + 'px 0';
  }
};

const Projectile = function(origin) {
  props.push(this);
  importJSON(this, origin.projectile);

  origin.weaponReady = false;

  this.type = origin.projectile;
  this.count = propCount++;
  this.origin = origin;
  this.dir = origin.dir;
  this.active = false;//Draw before animating
  this.dead = false;//Draw after collision
  this.spent = false;//Ready to remove
  this.spriteColumn = 0;

  this.selector = document.createElement('div');
  this.selector.id = 'projectile' + this.count;
  this.selector.style.position = 'absolute';

  if (origin.projectile === 'laser') {
    this.selector.style.backgroundColor = origin.weaponColor;
    if (this.dir === 'left' || this.dir === 'right') {
      this.width = 2 * magnification;
      this.height = 1 * magnification;
    } else if (this.dir === 'up' || this.dir === 'down') {
      this.width = 1 * magnification;
      this.height = 2 * magnification;
    }
    this.frameWidth = this.width;
    this.frameHeight = this.height;
    this.speed = 30;
  } else {
    this.selector.style.backgroundImage = "url('img/projectiles/" + this.name + ".png')";
  }
  this.selector.style.backgroundSize = this.width + 'px ' + this.height + 'px';

  this.speed = this.speed * (magnification / 5);

  if (this.dir === 'left') {
    this.x = origin.x + (origin.weaponOffsetLeft[0] * magnification) - this.frameWidth;
    this.y = origin.y + (origin.weaponOffsetLeft[1] * magnification);
  } else if (this.dir === 'up') {
    this.x = origin.x + (origin.weaponOffsetUp[0] * magnification);
    this.y = origin.y + (origin.weaponOffsetUp[1] * magnification) - this.frameHeight;
  } else if (this.dir === 'right') {
    this.x = origin.x + (origin.weaponOffsetRight[0] * magnification);
    this.y = origin.y + (origin.weaponOffsetRight[1] * magnification);
  } else if (this.dir === 'down') {
    this.x = origin.x + (origin.weaponOffsetDown[0] * magnification);
    this.y = origin.y + (origin.weaponOffsetDown[1] * magnification);
  }

  this.selector.style.width = this.frameWidth + 'px';
  this.selector.style.height = this.frameHeight + 'px';
  this.selector.style.zIndex = '4';
  stage.selector.appendChild(this.selector);

  this.kill = function() {
    stage.selector.removeChild(this.selector);
    const position = props.indexOf(this);
    props.splice(position, 1);
  }

  this.update = function() {
    if (this.active) {
      if (this.frameCount > 1) {
        if (++this.spriteColumn > this.frameCount) {
          this.spriteColumn = 0;
        }
      }
      if (this.dir === 'left') {
        if (this.x > 0 - this.frameWidth) {
          this.x -= this.speed;
        } else {
          this.dead = true;
        }
      } else if (this.dir === 'up') {
        if (this.y > 0 - this.frameHeight) {
          this.y -= this.speed;
        } else {
          this.dead = true;
        }
      } else if (this.dir === 'right') {
        if (this.x < game.width) {
          this.x += this.speed;
        } else {
          this.dead = true;
        }
      } else if (this.dir === 'down') {
        if (this.y < game.height) {
          this.y += this.speed;
        } else {
          this.dead = true;
        }
      }
    } else {
      this.active = true;
    }
  }

  this.draw = function() {
    if (this.dead) {
      if (this.spent) {
        this.kill();
      } else {
        this.spent = true;
      }
    } else {
      this.selector.style.left = this.x + 'px';
      this.selector.style.top = this.y + 'px';
      this.selector.style.backgroundPosition = (0 - this.spriteColumn * this.frameWidth) + 'px 0';
    }
  };

  this.draw();
};

const Player = function(obj) {
  importJSON(this, obj);

  this.speed = this.speed * (magnification / 5);

  this.x = Math.floor((game.width - this.frameWidth) / 2);
  this.y = Math.floor((game.height - this.frameHeight) / 2);
  this.dir = 'down';
  this.spriteColumn = 0;
  this.spriteRow = 2;
  this.running = false;
  this.attacking = false;
  this.active = true;
  this.dead = false;
  this.lightsaber = '';

  if (this.weaponType === 'projectile') {
    if (this.projectile === 'laser') {
      this.weaponDelay = fps / 4;
    } else if (typeof(this.weaponDelay) === 'undefined') {
      this.weaponDelay = fps / 2;
    }
  } else if (this.weaponType === 'bomb') {
    this.weaponDelay = 8;
  } else if (this.weaponType === 'lightsaber') {
    this.weaponDelay = 2;
  }
  this.weaponReady = true;
  this.weaponCount = 0;

  //Attach sprite
  this.selector = document.createElement('div');
  this.selector.id = 'player';
  this.selector.style.position = 'absolute';
  this.selector.style.width = this.frameWidth + 'px';
  this.selector.style.height = this.frameHeight + 'px';
  this.selector.style.backgroundImage = "url('img/characters/" + this.sprite + ".png')";
  this.selector.style.backgroundSize = this.width + 'px ' + this.height + 'px';
  this.selector.style.backgroundRepeat = 'no-repeat';
  this.selector.style.zIndex = '3';
  stage.selector.appendChild(this.selector);

  //Preload death animation for smooth transition
  if (typeof(this.death) !== 'undefined') {
    preload('img/animations/' + this.death.name + '.png');
  }

  this.attack = function(key) {
    if (this.weaponReady) {
      if (this.weaponType === 'projectile') {
        new Projectile(this);

        //Sometimes the enemy will try to dodge
        for (var enemy in enemies) {
          if (enemies[enemy].sprite !== 'asteroid') {
            //Dodges will get more likely as game progresses
            if (getRandom(20 - level) === 0) {
              enemies[enemy].changeDir();
            }
          }
        }
      } else if (this.weaponType === 'bomb') {
        const bomb = new Bomb;

        bomb.init(this, propCount++);
        props.push(bomb);
        stage.selector.appendChild(bomb.selector);
      } else if (this.weaponType === 'lightsaber') {
        const isLongRange = (key === 'Z');
        this.lightsaber = new Lightsaber(this, isLongRange);
        keys = [key];

        this.running = false;
        this.attacking = true;
        this.spriteColumn = this.moveFrameCount + 1;
      } else if (this.weaponType === 'attack') {
      }
      this.weaponReady = false;
    }
  }

  this.kill = function() {
    this.active = false;
    if (typeof(this.death) !== 'undefined') {
      this.selector.style.display = 'none';
      new Animation(this.death, this);
      if (this.lightsaber !== '') {
        this.lightsaber.kill();
      }
    } else {
      this.spriteColumn = 0;
      this.spriteRow = 4;
    }
  }

  this.update = function() {
    if (this.dead) {
      if (this.active) {
        this.kill();
      }
    } else {
      if (!this.weaponReady) {
        if (this.weaponCount++ === this.weaponDelay) {
          this.weaponReady = true;
          this.weaponCount = 0;
        }
      }
      if (this.running || this.ship) {
        if (this.spriteColumn < this.moveFrameCount) {
          this.spriteColumn++;
        } else {
          this.spriteColumn = 1;
        }
        var obs = getObstruction(this);
        if (this.dir === 'left') {
          if (this.x - this.speed > 0) {
            if (obs === '') {
              this.x -= this.speed;
            } else {
              this.x = obs.x + obs.frameWidth;
            }
          } else if (this.ship) {
            this.x = 0;
            this.dir = 'right';
          }
          this.spriteRow = 1;
        } else if (this.dir === 'up') {
          if (this.y - this.speed > 0) {
            var obs = getObstruction(this);
            if (obs === '') {
              this.y -= this.speed;
            } else {
              this.y = obs.y + obs.frameHeight - this.frameHeight + magnification;
            }
          } else if (this.ship) {
            this.y = 0;
            this.dir = 'down';
          }
          this.spriteRow = 3;
        } else if (this.dir === 'right') {
          if (this.x + this.speed < game.width - this.frameWidth) {
            var obs = getObstruction(this);
            if (obs === '') {
              this.x += this.speed;
            } else {
              this.x = obs.x - this.frameWidth;
            }
          } else if (this.ship) {
            this.x = game.width - this.frameWidth;
            this.dir = 'left';
          }
          this.spriteRow = 0;
        } else if (this.dir === 'down') {
          if (this.y + this.speed < game.height - this.frameHeight) {
            var obs = getObstruction(this);
            if (obs === '') {
              this.y += this.speed;
            } else {
              this.y = obs.y - this.frameHeight;
            }
          } else if (this.ship) {
            this.y = game.height - this.frameHeight;
            this.dir = 'up';
          }
          this.spriteRow = 2;
        }
      }
    }
  }

  this.draw = function() {
    this.selector.style.backgroundPosition = (0 - this.spriteColumn * this.frameWidth) + 'px ' + (0 - this.spriteRow * this.frameHeight) + 'px';
    this.selector.style.left = this.x + 'px';
    this.selector.style.top = this.y + 'px';
  };

  this.draw();
};

const Stage = function(obj) {
  importJSON(this, obj);

  //Attach to document
  this.selector = document.createElement('div');
  this.selector.id = 'stage';
  this.selector.style.position = 'absolute';
  this.selector.style.top = 0;
  this.selector.style.left = 0;
  this.selector.style.width = '100%';
  this.selector.style.height = '100%';
  if (this.bg !== null) {
    this.selector.style.backgroundImage = "url('img/backgrounds/" + this.bg + ".png')";
  } else {
    this.selector.style.backgroundColor = this.bgColor;
  }
  this.selector.style.zIndex = '1';
  game.selector.insertBefore(this.selector, game.selector.firstChild);

  title.style.color = this.textColor;
  directions.style.color = this.textColor;
  scoreboard.style.color = this.textColor;

  this.enemiesKilled = 0;
  this.bossReached = false;
  this.defeated = false;
};

//Initialize game
(function() {
  game = new Game();

  initHud();
  initMenu('title');

  if (isDebug) {
    initDebug();
  }

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
    if (score === 0 || typeof(episodes[episode][level].cutscene) === 'undefined') {
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
      document.getElementById('btnEpisode' + numerals[i]).style.color = black;
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
    document.getElementById('btnEpisode' + numerals[episode]).style.color = white;
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
      initMenu('episode');
      // cutsceneCount = 0;
      // initMenu('cutscene');
    } else if (menuMode === 'episode') {
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

  scoreText.innerHTML = score;
  victimText.innerHTML = '';
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

function getObstruction(obj) {
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

function inBounds(obj) {
  return obj.x > 0 && add(obj.x, obj.frameWidth) < game.width && obj.y > 0 && add(obj.y, obj.frameHeight) < game.height;
}

function initDebug() {
  episodes[episode][0] = detention;
}

function initGame() {
  clearStage();
  menuMode = '';
  gameOver = false;
  paused = false;
  scoreText.innerHTML = score;
  initLevel();
}

function initHud() {
  //Add container for buttons
  hud = new Hud();

  //Add title text
  title = document.createElement('h1');
  title.id = 'title';
  title.style.position = 'absolute';
  title.style.top = '30%';
  title.style.margin = '0';
  title.style.width = '100%';
  title.style.textAlign = 'center';
  title.style.fontSize = titleSize;
  title.style.zIndex = '10';
  title.style.pointerEvents = 'none';
  title.innerHTML = 'Star Wars';
  hud.selector.appendChild(title);

  //Add directions text
  directions = document.createElement('h2');
  directions.id = 'directions';
  directions.style.position = 'absolute';
  directions.style.bottom = '30%';
  directions.style.margin = '0';
  directions.style.width = '100%';
  directions.style.textAlign = 'center';
  directions.style.fontSize = directionSize;
  directions.style.lineHeight = lineHeight;
  directions.style.zIndex = '10';
  directions.style.pointerEvents = 'none';
  directions.innerHTML = clickPrompt;
  hud.selector.appendChild(directions);

  //Add score text
  scoreboard = document.createElement('h2');
  scoreboard.id = 'scoreboard';
  scoreboard.style.position = 'absolute';
  scoreboard.style.margin = '0';
  scoreboard.style.padding = '5px';
  scoreboard.style.boxSizing = 'border-box';
  scoreboard.style.width = '100%';
  scoreboard.style.zIndex = '10';
  scoreboard.innerHTML = '';
  hud.selector.appendChild(scoreboard);

  //Add score
  scoreText = document.createElement('span');
  scoreText.id = 'score';
  scoreText.style.cssFloat = 'left';
  scoreText.innerHTML = '';
  scoreboard.appendChild(scoreText);

  //Add score
  victimText = document.createElement('span');
  victimText.id = 'victim';
  victimText.style.cssFloat = 'right';
  victimText.innerHTML = '';
  scoreboard.appendChild(victimText);

  if (isMobile) {
    //Disable swipe to bounce.
    document.ontouchmove = function(event) {
      event.preventDefault();
      window.scrollTo(0, 0);
    }

    //Add container for all buttons
    buttons = document.createElement('div');
    buttons.id = 'buttons';
    buttons.style.display = '';
    buttons.style.position = 'absolute';
    buttons.style.left = '0';
    buttons.style.bottom = '0';
    buttons.style.width = '100%';
    buttons.style.height = '165px';
    buttons.style.zIndex = '100';
    hud.selector.appendChild(buttons);

    //Add middle of D-pad
    dpad = document.createElement('div');
    dpad.style.position = 'absolute';
    dpad.style.left = '50px';
    dpad.style.bottom = '50px';
    dpad.style.width = '65px';
    dpad.style.height = '65px';
    dpad.style.backgroundImage = 'url("img/hud/middle.png")';
    dpad.style.opacity = hudOpacity;

    //Add buttons to DOM
    btnLeft = document.createElement('div');
    btnLeft.id = 'btnLeft';
    btnLeft.setAttribute('data-key', 'left');
    btnLeft.style.position = 'absolute';
    btnLeft.style.left = '5px';
    btnLeft.style.bottom = '55px';
    btnLeft.style.width = '45px';
    btnLeft.style.height = '55px';
    btnLeft.style.backgroundImage = 'url("img/hud/btnLeft.png")';
    btnLeft.style.opacity = hudOpacity;

    btnUp = document.createElement('div');
    btnUp.id = 'btnUp';
    btnUp.setAttribute('data-key', 'up');
    btnUp.style.position = 'absolute';
    btnUp.style.left = '55px';
    btnUp.style.bottom = '115px';
    btnUp.style.width = '55px';
    btnUp.style.height = '45px';
    btnUp.style.backgroundImage = 'url("img/hud/btnUp.png")';
    btnUp.style.opacity = hudOpacity;

    btnRight = document.createElement('div');
    btnRight.id = 'btnRight';
    btnRight.setAttribute('data-key', 'right');
    btnRight.style.position = 'absolute';
    btnRight.style.left = '115px';
    btnRight.style.bottom = '55px';
    btnRight.style.width = '45px';
    btnRight.style.height = '55px';
    btnRight.style.backgroundImage = 'url("img/hud/btnRight.png")';
    btnRight.style.opacity = hudOpacity;

    btnDown = document.createElement('div');
    btnDown.id = 'btnDown';
    btnDown.setAttribute('data-key', 'down');
    btnDown.style.position = 'absolute';
    btnDown.style.left = '55px';
    btnDown.style.bottom = '5px';
    btnDown.style.width = '55px';
    btnDown.style.height = '45px';
    btnDown.style.backgroundImage = 'url("img/hud/btnDown.png")';
    btnDown.style.opacity = hudOpacity;

    btnAttack = document.createElement('div');
    btnAttack.id = 'btnAttack';
    btnAttack.setAttribute('data-key', 'space');
    btnAttack.style.position = 'absolute';
    btnAttack.style.right = '5px';
    btnAttack.style.bottom = '50px';
    btnAttack.style.width = '65px';
    btnAttack.style.height = '65px';
    btnAttack.style.backgroundImage = 'url("img/hud/btnAttack.png")';
    btnAttack.style.opacity = hudOpacity;

    btnAttack2 = document.createElement('div');
    btnAttack2.id = 'btnAttack2';
    btnAttack2.setAttribute('data-key', 'Z');
    btnAttack2.style.position = 'absolute';
    btnAttack2.style.right = '75px';
    btnAttack2.style.bottom = '50px';
    btnAttack2.style.width = '65px';
    btnAttack2.style.height = '65px';
    btnAttack2.style.backgroundImage = 'url("img/hud/btnAttack.png")';
    btnAttack2.style.opacity = hudOpacity;

    btnStart = document.createElement('div');
    btnStart.id = 'btnStart';
    btnStart.setAttribute('data-key', 'enter');
    btnStart.style.position = 'absolute';
    btnStart.style.left = ((game.width - 75) / 2) + 'px';
    btnStart.style.bottom = '5px';
    btnStart.style.width = '75px';
    btnStart.style.height = '40px';
    btnStart.style.backgroundImage = 'url("img/hud/btnStart.png")';
    btnStart.style.opacity = hudOpacity;

    hud.selector.appendChild(buttons);
    buttons.appendChild(dpad);
    buttons.appendChild(btnLeft);
    buttons.appendChild(btnUp);
    buttons.appendChild(btnRight);
    buttons.appendChild(btnDown);
    buttons.appendChild(btnAttack);
    buttons.appendChild(btnAttack2);
    buttons.appendChild(btnStart);

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
      if (menuMode === '' && !gameOver && !paused) {
        pause();
      }
      resizeGame(window.innerWidth, window.innerHeight);
    });
  } else {
    //Init desktop controls
    window.addEventListener('keydown', function(event) {
      var key = '';
      var id = '';
      if (!paused) {
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
      if (!paused) {
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
  stage = new Stage(episodes[episode][level]);
  player = new Player(stage.character);
  game.counter = 0;

  if (typeof(episodes[episode][level].obstacles) !== 'undefined') {
    for (var obstacle in stage.obstacles) {
      new Obstacle(stage.obstacles[obstacle]['type'], stage.obstacles[obstacle]['x'], stage.obstacles[obstacle]['y']);
    }
  }

  hud.selector.setAttribute('data-key', '');
  title.innerHTML = '';
  directions.innerHTML = '';
  directions.style.fontSize = directionSize;
  scoreboard.style.display = '';
  if (isMobile) {
    buttons.style.display = hudStatus;
  }
}

function initMenu(mode) {
  menuMode = mode;
  resetMode = false;
  gameOver = true;
  paused = false;
  enemyCount = 0;
  propCount = 0;

  invincible = false;

  if (mode === 'title') {
    episode = 3;
    level = 0;
    score = 0;
    cutsceneCount = 0;

    stage = new Stage(episodes[3][0]);
    new Enemy(artoo);
    new Enemy(threepio);

    for (var i=0; i<5; i++) {
      setTimeout(function() {
        if (menuMode === 'title') {
          new Enemy(stormtrooper);
        }
      }, i * 1000);
    }

    hud.selector.setAttribute('data-key', 'enter');
    title.innerHTML = 'Star Wars';
    directions.innerHTML = clickPrompt;
    scoreText.innerHTML = '';
    victimText.innerHTML = '';

    if (isMobile) {
      hudStatus = buttons.style.display;
      buttons.style.display = 'none';
    }
  } else if (mode === 'episode') {
    /*
    clearStage();
    scoreboard.style.display = '';
    stage = new Stage(tantive4);
    hud.selector.setAttribute('data-key', '');
    title.innerHTML = 'Choose Episode';
    directions.innerHTML = '';
    directions.style.pointerEvents = 'all';
    if (isMobile) {
      directions.style.fontSize = titleSize;
    }
    for (var i=0; i<numerals.length; i++) {
      btnEpisode = document.createElement('span');
      btnEpisode.id = 'btnEpisode' + numerals[i];
      btnEpisode.style.cursor = 'pointer';
      btnEpisode.setAttribute('data-episode', i);
      btnEpisode.innerHTML = numerals[i];
      if (i !== 2 && i !== 5) {
        btnEpisode.style.marginRight = '40px';
      }
      directions.appendChild(btnEpisode);

      if (i === 2) {
        breakTag = document.createElement('br');
        directions.appendChild(breakTag);
      }

      if (i === episode) {
        btnEpisode.style.color = white;
      }

      btnEpisode.addEventListener('click', function(event) {
        episode = Number(this.getAttribute('data-episode'));
        cutsceneCount = 0;
        initMenu('cutscene');
      });

      btnEpisode.addEventListener('touchend', function(event) {
        episode = Number(this.getAttribute('data-episode'));
        cutsceneCount = 0;
        initMenu('cutscene');
      });
    }
    */
    initMenu('cutscene');
  } else if (mode === 'cutscene') {
    scoreboard.style.display = 'none';
    hud.selector.setAttribute('data-key', 'enter');
    title.innerHTML = '';
    directions.innerHTML = '';
    directions.style.pointerEvents = 'none';
    if (typeof(episodes[episode][level].cutscene) !== 'undefined') {
      clearStage();
      stage = new Cutscene(episodes[episode][level].cutscene[cutsceneCount])
    } else {
      initGame();
    }
  }
}

function levelLose() {
  gameOver = true;
  score = 0;
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
  if (menuMode === '' && !gameOver && !paused) {
    const deadProps = [];

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
              new Projectile(enemies[enemy]);
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
        friendlies[friendly].update();
        friendlies[friendly].draw();
      }
      // friendlies[friendly].update();
      // friendlies[friendly].draw();
      // edited with Hayden!
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
            props[prop].kill(Animation);
            deadProps.push(props[prop])
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

    deadProps.forEach(deadProp => {
      const position = props.indexOf(deadProp);

      stage.selector.removeChild(deadProp.selector);
      props.splice(position, 1);
    });

    //Iterate over animations
    for (var animation in animations) {
      animations[animation].update();
      animations[animation].draw();
    }

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
        new Enemy(stage.enemy);
      } else {
        if (stage.enemiesKilled === stage.enemyCount && !stage.bossReached) {
          new Enemy(stage.boss);
          stage.bossReached = true;
        }
      }
    }

    //Check friendly delay
    for (var friendly in stage.friendlies) {
      if (game.counter === stage.friendlies[friendly].details.delay) {
        new Friendly(stage.friendlies[friendly].character, stage.friendlies[friendly].details);
      }
    }

    //Check victim identification interval
    if (victimCount > 0) {
      victimCount--;
    } else {
      victimText.innerHTML = '';
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
  if (!paused) {
    paused = true;
    title.innerHTML = 'Pause';
  } else {
    paused = false;
    title.innerHTML = '';
    directions.innerHTML = '';
  }
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

function updateScore(points) {
  score += points;
  scoreText.innerHTML = score;
}

function updateVictim(victim, color) {
  victimText.style.color = color;
  victimText.innerHTML = victim.name;
  victimCount = victimDelay;
}

//Utilities
function add(num1, num2) {
  return Number(num1) + Number(num2);
}

function getRandom(max) {
  return Math.floor(Math.random() * max);
}

function importJSON(obj, data) {
  for (var prop in data) {
    if (data.hasOwnProperty(prop)) {
      obj[prop] = data[prop];
    }
  }
}

function preload(url) {
  var image = new Image();
  image.src = url;
}

//Cheats
function playAs(obj) {
  if (menuMode !== '') {
    initGame();
  }
  stage.selector.removeChild(player.selector);
  player = new Player(obj);
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

    paused = false;
    pause();
  }
}

function useTheForce() {
  invincible = true;
  paused = true;
  directions.innerHTML = 'May the force be with you.<br/></br/>Press Start';
}
