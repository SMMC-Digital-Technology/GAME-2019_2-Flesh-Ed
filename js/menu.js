/**
 * Displays a game menu
 * use game.state.start('level') to go levelState
 */
var menuState = {
   create: function() {
      game.add.sprite(0,0, 'blue');
      //  if(space.isDown) {
        //game.state.start('level');
        space = game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
      }

   ,
   update: function() {
     if(space.isDown) {
       game.state.start('level');
     }
   }

   // this is how you write a function
   // note the comma after the } above
   // see that variables go in the brackets still
   // to use this function in collision detection, write this.exampleFunction
   // to call it manually, write this.exampleFunction(1, 2)
   //exampleFunction: function(something, somethingElse) {

   }
