# cd /Volumes/THUMB/code/starwars
# http-server .

TO DO (refactor):
* /constants vs. /config
  * config.js?
  * utils.js?
* all constants should be in CONSTANT_NOTATION
  * animations
  * characters
  * obstacles
  * ships
* separate levels from episodes (for readability)?
* make all mutable vars part of a "master" object
  * refactor classes to receive all data from constants and master object
  * expose master object to console?
* code formatting
  * adapt string concats to template literals
  * adapt for loops to ES6
  * rename obs to obstruction
  * rename projectile to projectileType
  * rename all instances of obj
  * alphabetize args
  * distribute functions to relevant class or move to utils
  * audit performance improvements
* how can user win with a character with no attack?
* deathstar doesn't shoot often enough
* preserve projectile for an extra frame in case it hits a victim immediately
* trying to remove already removed Projectile: dedupe expiredObjects before looping?

TO DO (features):
* password menu!
* episode menu
* overlapping d-pad buttons to include center in opacity change
* recolor backgrounds and/or characters not to conflict?
* post-game cutscenes (hallway, medals)
* sliding touch?
