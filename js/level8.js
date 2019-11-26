var level8State = {
  create: function() {

    game.add.sprite(0,0, 'win');

    space = game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
    game.global.health = 10;

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
    helpText = 'You escaped the school\n \n \n';
    helpText += 'Good game and thanks for playing';
    help.text = helpText;

    instructions = game.add.text(80, game.world.height - 80, 'Hit space if you wanna play again', {
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
