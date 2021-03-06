var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game-world');

var ed;
var zombieS;
var zscience;
var zpe;
var zlibrarian;
var zjock;
var zprincipal;
var cursors;
var door;
var zombieT;
var health = 10;
var healthIcons;
var pencils;
var mouseTouchDown = false;

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('level', levelState);
// remember to add in additional levels as they are made
game.state.add('gameover', gameoverState);
game.state.add('level2', level2State);
game.state.add('level3', level3State);
game.state.add('level4', level4State);
game.state.add('level5', level5State);
game.state.add('level6', level6State);
game.state.add('level7', level7State);
game.state.add('level8', level8State);

game.global = {
  // set variables that travel between the states here
  // eg score = 0;
  // access using game.global
  // eg game.gloabl.score
  health: 10
};

game.state.start('boot');
