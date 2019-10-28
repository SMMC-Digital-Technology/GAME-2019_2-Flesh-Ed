var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game-world');

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('level', levelState);
// remember to add in additional levels as they are made
game.state.add('gameover', gameoverState);

game.global = {
   // set variables that travel between the states here
   // eg score = 0;
   // access using game.global
   // eg game.gloabl.score
};

game.state.start('boot');