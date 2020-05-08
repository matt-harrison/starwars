# cd /Volumes/THUMB/code/starwars
# http-server .

REFACTOR:
* make all mutable vars part of a "master" object
  * move DOM node refs to master object?
  * refactor classes to receive all data from imports and master object
  * refactor classes to store nothing beyond what's needed for draw (hud)
  * reimplement kill() as a util?
  * add unique id attributes to all class instances from master.assetCount
  * remove array slots from main loop?
  * expose master object to console?
  * merge looping arrays into one? https://codepen.io/rootbeercomics/pen/XWmEYeo?editors=0012
  * share common logic across friendlies, enemies, and player as utils (for example)
* code formatting
  * adapt string concats to template literals
  * rename all instances of obj
  * alphabetize args
  * distribute functions to relevant class or move to utils
  * audit performance improvements
  * replace var with let or const

FEATURES:
* password menu!
* episode menu
* overlapping d-pad buttons to include center in opacity change
* recolor backgrounds and/or characters not to conflict?
* post-game cutscenes (hallway, medals)
* sliding touch?
* how can user win with a character with no attack?
* make shoot projectile rate a property of the level
* do not clear score after winning game
* multiple bosses? (dr evazan)

BUGS:
* trying to remove already removed Projectile: dedupe expiredObjects before looping?
* character frame sometimes redundant to Lighsaber instance
* concurrent boss and player death results in Game Over + next level
