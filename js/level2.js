var level2State = {
  render: function() {
   game.debug.body(ed);
   game.debug.body(door);
  },
  create: function() {
    game.add.sprite(0, 0, 'green');
    ed = game.add.sprite(100, 265, 'ed');
    door = game.add.sprite(12, 265, 'door');
    zombieT = game.add.sprite(64, 64, 'zombieT');

     // create the lev
     iwall = game.add.sprite(82, 82, 'iwall');
     iwall2 = game.add.sprite(82, 518, 'iwall');
     iwall3 = game.add.sprite(82, 82, 'iwall');
     iwall4 = game.add.sprite(718, 82, 'iwall');

     iwall.width = 636;
     iwall2.width = 636;
     iwall3.height = 436;
     iwall4.height = 436;

     health = 6;
     healthIcon = game.add.sprite(680, 30, 'health');
     healthIcon.scale.setTo(1.2, 1.2);
     healthText = game.add.text(650, 30, health, {font: '25px Arial', fill: '#ffffff'});

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

    game.physics.arcade.enable(ed);
    game.physics.arcade.enable(door);
    game.physics.arcade.enable(zombieT);
    ed.body.collideWorldBounds = true;

    door.body.immovable = true;
    zombieT.body.immovable = true;
    iwall.body.immovable = true;
    iwall2.body.immovable = true;
    iwall3.body.immovable = true;
    iwall4.body.immovable = true;
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
       }
       else {
         ed.body.velocity.y = 0;
       }

         game.physics.arcade.collide(ed, door, () => {game.state.start('level');});
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

        // game.physics.arcade.collide(ed, zombieT, () => {healthIcons = -1);});
     },

     removeHealth: function(a,b) {
      health -= 1;
      healthText.text = health;
     }
  };
