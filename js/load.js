/**
 * Use this state to load all of your assets
 */
var loadState = {
  preload: function() {
    loadingLabel = game.add.text(80, 150, 'be patient loading...', {
      font: '30px Courier',
      fill: '#ffffff'
    });
    //ed
    game.load.image('ed', 'assets/ed.png');
    //game.load.image('edleft', 'assets/Ed a.png');
    //game.load.image('edright', 'assets/Ed d.png');
    //game.load.image('edfront', 'assets/Ed s.png');
    //game.load.image('edback', 'assets/Ed w.png');

    //enemies
    game.load.image('zombieT', 'assets/zombie teacher.png');
    game.load.image('zombieS', 'assets/zombie student.png');

    //environment
    game.load.image('room', 'assets/room.png');
    game.load.image('door', 'assets/dor.png');
    game.load.image('iwall', 'assets/iwall.png');

    //player
    game.load.image('health', 'assets/cross.png');
    game.load.image('pencil', 'assets/pencil.png');

    //anything else that we dont know where to input
    game.load.image('qwerty', 'assets/menu.png');

    // loads all assets
  },

  create: function() {
    game.state.start('menu');
    w = game.input.keyboard.addKey(Phaser.KeyCode.W);
    a = game.input.keyboard.addKey(Phaser.KeyCode.A);
    d = game.input.keyboard.addKey(Phaser.KeyCode.D);
    s = game.input.keyboard.addKey(Phaser.KeyCode.S);
    space = game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
    cursors = game.input.keyboard.createCursorKeys();
  }

};
