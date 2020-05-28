# cd /Volumes/THUMB/code/starwars
# http-server .

REFACTOR:
* performance improvements
  * audit each function
  * audit each class
  * audit each constant

CODE FEATURES:
* add optional X or Y percentage-based coordinate for actors to spawn (like obstacles).
* make obstacles and/or dead bodies stop projectiles?
* preload all stage graphics? when?
* preload all mobile button graphics? when?
* continuously shoot when mobile???
  * what about jedi? auto attack on dpad release? no saber throw?
  * what about bombers?
*
* password menu!
* episode menu...
* reward menu: reveal password for random character?
* npm lint?
* npm test?

SPRITE FEATURES:
* import sprites at actual size and stretch?
* add shadow under falcon obstacle (like speeder).
  * rework graphics to match top-down angle???
* bloodless death frame w/ only animated death bloody?
* gunganBall projectile splat animation
* blood splat animation? blood code?
* add optional bantha shit sprite to Bomb class?
*
* replace low-detail cutscenes
* cutscenes for every level
* post-game cutscenes (hallway, medals)?
* recolor backgrounds and/or characters not to conflict?
  * power of 2 sizes?
  * choose tier 1 colors (pure white, pure black) to use in sprites and hud, then never use them (or clashing) in BGs
*
* neutrals who stand still but can be killed? bartender? han & chewie in mos eisley?
* obstacles that can take damage?
* add high score board via CRUD, with defensive coding to hide (anticipating legacy issues)

BUGS:
* only delay projectile.remove() if first frame is ALSO last frame
