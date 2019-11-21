/**
 * Use this state to load all of your assets
 */
var loadState = {
   preload: function() {
      loadingLabel = game.add.text(80, 150, 'loading...', {
         font: '30px Courier',
         fill: '#ffffff'
      });
      game.load.image('green', 'assets/green.png');
      game.load.image('ed', 'assets/ed.png');
      game.load.image('blue', 'assets/blue.png');
      game.load.image('door', 'assets/dor.png');
      game.load.image('iwall', 'assets/iwall.png');
      game.load.image('health', 'assets/cross.png');

      // load all assets
   },

   create: function() {
      game.state.start('menu');
      //w = game.input.keyboard.addKey(Phaser.KeyCode.W);
      //s = game.input.keyboard.addKey(Phaser.KeyCode.S);
      space = game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
      cursors = game.input.keyboard.createCursorKeys();
   }

};
