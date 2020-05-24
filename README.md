# cd /Volumes/THUMB/code/starwars
# http-server .

REFACTOR:
* code formatting
  * explicitly map all objects (instead of Object.assign) for readability?
  * distribute functions to relevant class or move to utils
  * migrate all functions from app to utils? (game as arg?)
  * share common logic across actor, player, etc as utils?
* performance improvements
  * audit each function
  * audit each class
  * audit each constant

FEATURES:
* add increasing chance of enemies turning toward player as levels progress?
* delay before boss(es)
* multiple bosses
* password menu!
* episode menu...
* reward menu: reveal password for random character
* how can user win with a character lacking any attack?
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
* overlapping d-pad buttons to include center in opacity change
* replace low-detail cutscenes
* cutscenes for every level
* post-game cutscenes (hallway, medals)
* bloodless death frame w/ only animated death bloody?
* gunganBall projectile splat animation
* recolor backgrounds and/or characters not to conflict?
  * choose tier 1 colors (pure white, pure black) to use in sprites and hud, then never use them (or clashing) in BGs

BUGS:
* projectiles (and lightsaber attacks) zIndex?
* directions don't blink when paused bc counter doesn't increment while paused (so that actors don't spawn during pause)...
* fix playLevel() cheat
* duplicate IDs on actors spawned with same delay
* prevent friendly ship crash after isLevelDefeated.
* adaptCoords(laser) bug
* mobile magnification
