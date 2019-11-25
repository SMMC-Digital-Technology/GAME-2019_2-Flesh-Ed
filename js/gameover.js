/**
 * A "game over" screen for the end of the game
 */
var gameoverState = {
  create: function() {

    game.add.sprite(0,0, 'qwerty');

    //game.add.sprite(0,0, 'blue');
    //  if(space.isDown) {
    //game.state.start('level');
    space = game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
    game.global.health = 6;

    //text


    title = game.add.text(game.world.centerX, game.world.centerY - 100, 'Flesh Ed', {
      font: '50px Arial',
      fill: '#C70039'
    });
    title.anchor.setTo(0.5, 0.5);

    help = game.add.text(80, game.world.centerY + 50, '', {
      font: '25px Arial',
      fill: '#ffffff'
    });
    helpText = 'lol you lost\n \n \n';
    helpText += 'get better and try and win netx time';
    help.text = helpText;

    instructions = game.add.text(80, game.world.height - 80, 'press space to try again lol', {
      font: '25px Arial',
      fill: '#ffffff'
    });

  },

  update: function() {
    if (space.isDown) {
      game.state.start('level');
    }
  }
}
//use the following to go back to the menu
//game.state.start('menu');
;
