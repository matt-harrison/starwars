# cd /Volumes/THUMB/code/starwars
# http-server .

REFACTOR:
* code formatting
  * rename scoreText   to scoreSelector?
  * rename victimText  to victimSelector?
  * rename victimCount to victimIdInterval?
  * move ship graphics to separate directory
  * import all constants from /js/constants/index.js manifest?
  * migrate all public vars from classes to game object? (ex. hud.title)
  * implement attachNode from classes
  * explicitly map all objects (instead of Object.assign) for readability?
  * distribute functions to relevant class or move to utils
  * migrate all functions from app to utils? (game as arg?)
  * share common logic across actor, player, etc as utils?
  * prefix level names for sortability?
* performance improvements
  * audit each function
  * audit each class
  * audit each constant
* move enemy dodge loop out of Player class
* make enemy projectile rate a property of the level?
  * weaponCount redundant to game.count?
  * isWeaponReady redundant to low shoot probability?
  * (isWeaponReady also used for player max shoot rate)

FEATURES:
* do not clear score after winning game
* delay before boss(es)
* multiple bosses
* password menu!
* episode menu...
* reward menu: reveal password for random character
* how can user win with a character with no attack?
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
* recolor backgrounds and/or characters not to conflict?
  * choose tier 1 colors (pure white, pure black) to use in sprites and hud, then never use them (or clashing) in BGs

BUGS:
* concurrent boss and player death results in game over AND next level
* actor can turn before crossing fully onto stage
* character frame sometimes redundant to Lightsaber instance (press Z and d-pad at same time)
* projectiles (and lightsaber attacks) zIndex?
* directions don't blink when paused bc counter doesn't increment while paused (so that actors don't spawn during pause)...
* fix playLevel() cheat
* duplicate IDs on actors spawned with same delay
* mobile magnification
