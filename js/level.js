/**
 * A single level of the game.
 * You will need multiple copies of this for each level you
 * want to include.
 * Make sure they have different file names and different state names.
 * level2State etc will work fine
 */
var levelState = {

  //render: function() {
  //  game.debug.body(ed);
  //  game.debug.body(door);
  //  },

  create: function() {
    game.add.sprite(0, 0, 'room');
    ed = game.add.sprite(650, 300, 'ed');
    door = game.add.sprite(717, 265, 'door');
    iwall = game.add.sprite(82, 82, 'iwall');
    iwall2 = game.add.sprite(82, 518, 'iwall');
    iwall3 = game.add.sprite(82, 82, 'iwall');
    iwall4 = game.add.sprite(718, 82, 'iwall');

    // health = game.add.sprite(680, 30, 'health');

    health = 6;
    healthIcon = game.add.sprite(680, 30, 'health');
    healthIcon.scale.setTo(1.2, 1.2);
    healthText = game.add.text(650, 30, health, {
      font: '25px Arial',
      fill: '#ffffff'
    });


    iwall.width = 636;
    iwall2.width = 636;
    iwall3.height = 436;
    iwall4.height = 436;

    //wall = game.add.group();
    //wall.add(iwall);
    //wall.add(iwall2);
    //wall.add(iwall3);
    // wall.add(iwall4);

    game.physics.arcade.enable(ed);
    game.physics.arcade.enable(door);
    game.physics.arcade.enable(iwall);
    game.physics.arcade.enable(iwall2);
    game.physics.arcade.enable(iwall3);
    game.physics.arcade.enable(iwall4);

    ed.body.collideWorldBounds = true;


    door.body.immovable = true;
    iwall.body.immovable = true;
    iwall2.body.immovable = true;
    iwall3.body.immovable = true;
    iwall4.body.immovable = true;

    pencils = game.add.group();

    pencils.enableBody = true;

    pencils.physicsBodyType = Phaser.Physics.ARCADE;

    pencils.createMultiple(20, 'pencil');

    pencils.callAll('events.onOutOfBounds.add', 'events.onOutOfBounds', this.resetPencil);
    pencils.callAll('anchor.setTo', 'anchor', 0.5, 1.0);
    pencils.setAll('checkWorldBounds', true);

    ed.anchor.setTo(0.5, 1.0);
  },

  update: function() {

    // do things on the game loop
    if (a.isDown) {
      //  Move to the left
      ed.body.velocity.x = -150;
      //ed.animations.play('left');
    } else if (d.isDown) {
      //  Move to the right
      ed.body.velocity.x = 150;
      //ed.animations.play('right');
    } else {
      //  Stand still
      ed.body.velocity.x = 0;
    }

    if (w.isDown) {
      ed.body.velocity.y = -150;
    } else if (s.isDown) {
      ed.body.velocity.y = 150;
    } else {
      ed.body.velocity.y = 0;
    }

    game.physics.arcade.collide(ed, door, () => {
      game.state.start('level2');
    });
    game.physics.arcade.collide(ed, zombieT, this.removeHealth);

    game.physics.arcade.collide(ed, iwall);
    game.physics.arcade.collide(ed, iwall2);
    game.physics.arcade.collide(ed, iwall3);
    game.physics.arcade.collide(ed, iwall4);

    iwall.alpha = 0
    iwall2.alpha = 0
    iwall3.alpha = 0
    iwall4.alpha = 0

    door.alpha = 0

    // how to ( ͡° ͜ʖ ͡°) ▄︻ ̿┻̿═━一

    //up fire
    // Game.input.activePointer is either the first finger touched, or the mouse
    if (cursors.up.isDown) {
      // We'll manually keep track if the pointer wasn't already down
      if (!mouseTouchDown) {
        this.touchDown();
      }
    } else {
      if (mouseTouchDown) {
        this.touchUp();
      }
    }
  },

  removeHealth: function(a, b) {
    health -= 1;
    healthText.text = health;
  },

  resetPencil: function(pencil) {
    pencil.kill();
  },

  touchDown: function() {
    // Set touchDown to true, so we only trigger this once
    mouseTouchDown = true;
    this.firePencil();
  },

  touchUp: function() {
    // Set touchDown to false, so we can trigger touchDown on the next click
    mouseTouchDown = false;
  },

  firePencil: function() {
    // Get the first laser that's inactive, by passing 'false' as a parameter
    var pencil = pencils.getFirstExists(false);

    if (pencil) {
      // If we have a laser, set it to the starting position
      pencil.reset(ed.x, ed.y - 20);
      // Give it a velocity of -500 so it starts shooting
      pencil.body.velocity.y = -500;
    }
  }

  //right fire


};
// this is how you write a function
// note the comma after the } above
// see that variables go in the brackets still
// to use this function in collision detection, write this.exampleFunction
// to call it manually, write this.exampleFunction(1, 2)
