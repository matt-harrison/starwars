# cd /Volumes/THUMB/code/starwars
# http-server .

REFACTOR:
* code formatting
  * distribute functions to relevant class or move to utils
  * migrate all functions from app to utils? (game as arg?)
  * share common logic across actor, player, etc as utils?
* performance improvements
  * audit each function
  * audit each class
  * audit each constant
* mobile magnification

CODE FEATURES:
* add optional X or Y percentage-based coordinate for actors to spawn (like obstacles)?
* add increasing chance of enemies turning toward player as levels progress?
  * make some enemies chase player?
* obstacles and/or dead bodies stop projectiles?
* password menu!
* episode menu...
* reward menu: reveal password for random character
* npm lint?
* npm test?
* sliding touch?

SPRITE FEATURES:
* neutrals who stand still but can be killed? bartender? han & chewie in mos eisley?
* obstacles that can take damage?
* make lightsabers bounce off obstacles?
* add shadow under falcon obstacle (like speeder).
* overlapping d-pad buttons to include center in opacity change
* bloodless death frame w/ only animated death bloody?
  * artoo: add death animation and trim whitespace in sprite
  * add more frame to gungan ball
* gunganBall projectile splat animation
* blood splat animation? hidden?
* add optional bantha shit sprite to Bomb class?
* replace low-detail cutscenes
* cutscenes for every level
* post-game cutscenes (hallway, medals)?
* recolor backgrounds and/or characters not to conflict?
  * choose tier 1 colors (pure white, pure black) to use in sprites and hud, then never use them (or clashing) in BGs
* add high score board via CRUD, with defensive coding to hide (anticipating legacy issues)

BUGS:
* only delay projectile.remove() if first frame is ALSO last frame
