# cd /Volumes/THUMB/code/starwars
# http-server .

REFACTOR:
* code formatting
  * adapt gameWidth and gameHeight to dimensions.width and dimensions.height?
  * migrate all public vars from classes to game object? (ex. hud.title)
  * adapt string concats to template literals
  * implement attachNode from classes
  * always use full objects even if null OR explicitly map all objects (instead of Object.assign) for readability?
    * purge always falsy properties from episodes?
    * replace typeof () == 'undefined' etc
  * distribute functions to relevant class or move to utils
  * migrate all functions from app to utils? (game as arg?)
  * share common logic across actor, player, etc as utils?
  * prefix level names for sortability?
* performance improvements
  * audit each function
  * audit each class
  * audit each constant
* move enemy dodge loop out of Player class
* handle death and remove outside classes from loop?
* make enemy projectile rate a property of the level?
  * is weaponReady redundant to low shoot probability?

FEATURES:
* do not clear score after winning game
* delay before boss(es)
* multiple bosses
* password menu!
* episode menu...
* overlapping d-pad buttons to include center in opacity change
* recolor backgrounds and/or characters not to conflict?
  * choose tier 1 colors (pure white, pure black) to use in sprites and hud, then never use them (or clashing) in BGs
* replace low-detail cutscenes
* cutscenes for every level
* post-game cutscenes (hallway, medals)
* how can user win with a character with no attack?
* bloodless death frame w/ only animated death bloody?
* neutrals who stand still but can be killed? bartender? han & chewie in mos eisley?
* obstacles that can take damage?
* obstacles and/or dead bodies stop projectiles?
* let player be killed by own bomb after active?
* make lightsabers bounce off obstacles?
* make some enemies chase player?
* sliding touch?
* npm lint?
* npm test?
* add high score board via CRUD, with defensive coding to hide (anticipating legacy issues)

BUGS:
* actor can turn before crossing fully onto stage
* character frame sometimes redundant to Lightsaber instance (press Z and d-pad at same time)
* concurrent boss and player death results in game over AND next level
* projectiles zIndex?
* directions don't blink when paused bc counter doesn't increment while paused (so that actors don't spawn during pause)...
