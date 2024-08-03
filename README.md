REFACTOR:

- performance improvements
  - audit each function
  - audit each class
  - audit each constant
  - implement eslint on save?
  - convert to TypeScript?
  - convert data objects to classes with abstract?
  - LASER extends PROJECTILE extends WEAPON
  - all character constants to UPPERCASE

CODE FEATURES:

- preload all stage graphics? when?
- add optional X or Y percentage-based coordinate for actors to spawn (like obstacles).
- make obstacles and/or dead bodies stop projectiles?
- continuously shoot when mobile???
  - what about jedi? auto attack on dpad release? no saber throw?
  - what about bombers?
- throw lightsaber based on hold duration (spacebar)!
- password menu!
- episode menu...
- reward menu: reveal password for random character?
- death animations don't have to match sprite dimensions if implemented as Animation

SPRITE FEATURES:

- dr evazan
- use improved running animations
- streamline non-episode 4 character colors
- bloodless death frame w/ only animated death bloody?
- gunganBall projectile splat animation
- blood splat animation? blood code?
- add optional bantha shit sprite to Bomb class?
- animate death scene for each character?
- recolor backgrounds and/or characters not to conflict?
- rework falcon obstacle to match top-down angle?
- replace low-detail cutscenes
- cutscenes for every level
- post-game cutscenes (hallway, medals)?
- neutrals who stand still but can be killed? bartender? han & chewie in mos eisley?
- obstacles that can take damage?
- add high score board via CRUD, with defensive coding to hide (anticipating legacy issues)?

BUGS:

- only delay projectile.remove() if first frame is ALSO last frame
- show full animation before showing hud
- more accurate names for txtTitle and txtDirections?
