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

          //text
        game.add.sprite(150, 0,'bg1');

        title = game.add.text(game.world.centerX, game.world.centerY-100, 'Mage Defense', {font: '50px Arial', fill: '#C70039'});
        title.anchor.setTo(0.5, 0.5);
    
        help = game.add.text(80, game.world.centerY+50, '', {font: '25px Arial', fill: '#ffffff'});
        helpText = 'Use the mouse to aim the mage towers and \n';
        helpText += 'protect the kingdom from the meteors';
        help.text = helpText;

        instructions = game.add.text(80, game.world.height-80, 'Hit "BEGIN" if you think you are ready', {font: '25px Arial', fill: '#ffffff'});

        button = game.add.button(game.world.centerX, game.world.centerY, 'button');
        button.anchor.setTo(0.5,0.5);
        button.onInputUp.add(this.start);
        text = game.add.text(button.x,button.y,'BEGIN');
        text.anchor.setTo(0.5,0.5);

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
