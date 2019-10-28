/**
 * The very first stage of opening the game.
 * Use this to set game wide settting (eg physics.)
 */
var bootState = {
   create: function() {
      //game.physics.startSystem(Phaser.Physics.ARCADE);
      game.state.start('load');
   }
};