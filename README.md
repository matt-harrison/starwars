# cd /Volumes/THUMB/code/starwars
# http-server .

REFACTOR:
* code formatting
  * always use full objects even if null?
  * explicitly map all objects (instead of Object.assign) for readability?
  * adapt string concats to template literals
  * alphabetize args
  * distribute functions to relevant class or move to utils
  * prefix level names for sortability
  * replace typeof () == 'undefined' etc
  * implement attachNode from classes
  * migrate all public vars from classes to master object? (ex. hud.title)
  * migrate all functions from app to utils? (master as arg?)
  * reimplement kill() as a util?
  * share common logic across friendlies, enemies, and player as utils
* performance improvements
  * audit each function
  * audit each class
  * audit each constant
* move enemy dodge loop out of Player class
* handle death and remove outside classes from loop?
* replace references to "dead" property with "active"
* purge always falsy properties from episodes?
* make enemy projectile rate a property of the level?
  * is weaponReady redundant to low shoot probability?

FEATURES:
* delay before boss(es)
* multiple bosses
* password menu!
* episode menu...
* overlapping d-pad buttons to include center in opacity change
* recolor backgrounds and/or characters not to conflict?
* replace low-detail cutscenes
* cutscenes for every level
* post-game cutscenes (hallway, medals)
* how can user win with a character with no attack?
* do not clear score after winning game
* add high score board via CRUD, with defensive coding to hide (anticipating legacy issues)
* make "Press Enter" flash in attraction mode
* bloodless death frame w/ only animated death bloody?
* neutrals who stand still but can be killed? bartender?
* sliding touch?
* npm lint?
* npm test?

BUGS:
* actor placed off edge of stage?
* trying to remove already removed Projectile: dedupe expiredObjects before looping?
* character frame sometimes redundant to Lighsaber instance (press Z and d-pad at same time)
* concurrent boss and player death results in Game Over + next level
* enemies stutter before turning away from obstacle?
* last boss of last stage doesn't die if no death animation
* sometimes the boss doesn't spawn once all enemies are dead
