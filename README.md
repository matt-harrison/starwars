# cd /Volumes/THUMB/code/starwars
# http-server .

REFACTOR:
* code formatting
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
* base all point values on HP, including negative values for friendlies. update score on hit?
* move enemy dodge loop out of Player class
* handle death and remove outside classes from loop?
* separate Friendlies from NPCs? or rename friendlies to nonPlayerCharacters?
* merge looping arrays into one? https://codepen.io/rootbeercomics/pen/XWmEYeo?editors=0012example)
  * OR have friendlies and enemies share looping array called actors?
* performance improvements
  * audit each function
  * audit each class
  * audit each constant

FEATURES:
* NPCs with 1+ HP
* password menu!
* episode menu
* overlapping d-pad buttons to include center in opacity change
* recolor backgrounds and/or characters not to conflict?
* post-game cutscenes (hallway, medals)
* sliding touch?
* how can user win with a character with no attack?
* make enemy projectile rate a property of the level?
  * is weaponReady redundant to low shoot probability?
* multiple bosses? (dr evazan)
* do not clear score after winning game
* add high score board via CRUD, with defensive coding to hide (anticipating legacy issues)
* make "Press Enter" flash in attraction mode

BUGS:
* trying to remove already removed Projectile: dedupe expiredObjects before looping?
* character frame sometimes redundant to Lighsaber instance (press Z and d-pad at same time)
* concurrent boss and player death results in Game Over + next level
* enemy placed with legs off bottom of stage
* enemies stutter before turning away from obstacle?
