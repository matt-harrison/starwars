REFACTOR:
* performance improvements
  * audit each function
  * audit each class
  * audit each constant

CODE FEATURES:
* preload all stage graphics? when?
* preload all mobile button graphics? when?
* add optional X or Y percentage-based coordinate for actors to spawn (like obstacles).
* make obstacles and/or dead bodies stop projectiles?
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
* improve mousedroid sprite
* bloodless death frame w/ only animated death bloody?
* gunganBall projectile splat animation
* blood splat animation? blood code?
* add optional bantha shit sprite to Bomb class?
*
* recolor backgrounds and/or characters not to conflict?
  * power of 2 sizes?
  * choose tier 1 colors (pure white, pure black) to use in sprites and hud, then never use them (or clashing) in BGs
* rework falcon obstacle to match top-down angle?
* replace low-detail cutscenes
* cutscenes for every level
* post-game cutscenes (hallway, medals)?
*
* neutrals who stand still but can be killed? bartender? han & chewie in mos eisley?
* obstacles that can take damage?
* add high score board via CRUD, with defensive coding to hide (anticipating legacy issues)

BUGS:
* only delay projectile.remove() if first frame is ALSO last frame
* show full animation before showing hud
* more accurate names for txtTitle and txtDirections?
