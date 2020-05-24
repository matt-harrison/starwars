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
* let player be killed by own bomb after active?
* how can user win with a character lacking any attack?
* add optional X or Y percentage-based coordinate for actors to spawn (like obstacles)?
* add increasing chance of enemies turning toward player as levels progress?
  * make some enemies chase player?
* password menu!
* episode menu...
* reward menu: reveal password for random character
* neutrals who stand still but can be killed? bartender? han & chewie in mos eisley?
* obstacles that can take damage?
* obstacles and/or dead bodies stop projectiles?
* make lightsabers bounce off obstacles?
* sliding touch?
* npm lint?
* npm test?
* add high score board via CRUD, with defensive coding to hide (anticipating legacy issues)
* overlapping d-pad buttons to include center in opacity change
* gunganBall projectile splat animation
* bloodless death frame w/ only animated death bloody?
* replace low-detail cutscenes
* cutscenes for every level
* post-game cutscenes (hallway, medals)
* recolor backgrounds and/or characters not to conflict?
  * choose tier 1 colors (pure white, pure black) to use in sprites and hud, then never use them (or clashing) in BGs

BUGS:
* projectiles (and lightsaber attacks) zIndex?
* duplicate IDs on actors spawned with same delay
* prevent friendly ship crash after isLevelDefeated.
* adaptCoords(laser) bug
* mobile magnification
