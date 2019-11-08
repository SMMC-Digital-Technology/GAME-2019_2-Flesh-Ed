/**
 * A single level of the game.
 * You will need multiple copies of this for each level you
 * want to include.
 * Make sure they have different file names and different state names.
 * level2State etc will work fine
 */
var levelState = {

   create: function() {
     game.add.sprite(0, 0, 'green');
     ed = game.add.sprite(64, 64, 'ed');

     game.add.sprite(400,0, 'door');



     game.physics.arcade.enable(ed);

      // create the level
   },

   update: function() {

      // do things on the game loop
      if (cursors.left.isDown) {
         //  Move to the left
         ed.body.velocity.x = -150;
         //ed.animations.play('left');
      } else if (cursors.right.isDown) {
         //  Move to the right
         ed.body.velocity.x = 150;
         //ed.animations.play('right');
      } else {
         //  Stand still
        ed.body.velocity.x = 0;
      }

      if (cursors.up.isDown) {
        ed.body.velocity.y = -150;
      } else if (cursors.down.isDown) {
        ed.body.velocity.y = 150;
        }
        else {
          ed.body.velocity.y = 0;
        }
        ed.body.collideWorldBounds = true;
      }
      //game.physics.arcade.collide(ed, )
   };

   // this is how you write a function
   // note the comma after the } above
   // see that variables go in the brackets still
   // to use this function in collision detection, write this.exampleFunction
   // to call it manually, write this.exampleFunction(1, 2)
