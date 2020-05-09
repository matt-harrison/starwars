# cd /Volumes/THUMB/code/starwars
# http-server .

REFACTOR:
* handle death and remove outside classes from loop?
* migrate all public vars from classes to master object? (ex. hud.title)
* migrate all functions from app to utils? (master as arg?)
* reimplement kill() as a util?
* share common logic across friendlies, enemies, and player as utils
* separate Friendlies from NPCs?
* all values based on HP? including negative values for friendlies? update score on hit?
* merge looping arrays into one? https://codepen.io/rootbeercomics/pen/XWmEYeo?editors=0012example)
* implement attachNode from classes
* implement x & y positioning as util
* implement reverse() as util
* code formatting
  * adapt string concats to template literals
  * alphabetize args
  * distribute functions to relevant class or move to utils
  * prefix level names for sortability
* performance improvements
  * audit each function

FEATURES:
* password menu!
* episode menu
* overlapping d-pad buttons to include center in opacity change
* recolor backgrounds and/or characters not to conflict?
* post-game cutscenes (hallway, medals)
* sliding touch?
* how can user win with a character with no attack?
* make shoot projectile rate a property of the level
* multiple bosses? (dr evazan)
* do not clear score after winning game
* add high score board via CRUD, with defensive coding to hide (anticipating legacy issues)

BUGS:
* trying to remove already removed Projectile: dedupe expiredObjects before looping?
* character frame sometimes redundant to Lighsaber instance
* concurrent boss and player death results in Game Over + next level
* friendlies remain on stage after !inBounds ?
* projectiles remain on stage after !inBounds ? (why enemies in level 2 die before stage)
