var level3State = {

  create: function() {
    game.add.sprite(0, 0, 'room');
    ed = game.add.sprite(120, 336, 'ed');

    zombieT = game.add.sprite(64, 64, 'zombieT');
    door2 = game.add.sprite(717, 265, 'door');

    // create the lev
    iwall = game.add.sprite(82, 82, 'iwall')
    iwall2 = game.add.sprite(82, 518, 'iwall');
    iwall3 = game.add.sprite(82, 82, 'iwall');
    iwall4 = game.add.sprite(718, 82, 'iwall');

    iwall.width = 636;
    iwall2.width = 636;
    iwall3.height = 436;
    iwall4.height = 436;

    game.global.health;
    healthIcon = game.add.sprite(680, 30, 'health');
    healthIcon.scale.setTo(1.2, 1.2);
    healthText = game.add.text(650, 30, game.global.health, {
      font: '25px Arial',
      fill: '#ffffff'
    });

    //wall = game.add.group();
    //wall.add(iwall);
    //wall.add(iwall2);
    //wall.add(iwall3);
    // wall.add(iwall4);

    game.physics.arcade.enable(ed);
    game.physics.arcade.enable(door2);
    game.physics.arcade.enable(iwall);
    game.physics.arcade.enable(iwall2);
    game.physics.arcade.enable(iwall3);
    game.physics.arcade.enable(iwall4);

    game.physics.arcade.enable(zombieT);
    ed.body.collideWorldBounds = true;

    door2.body.immovable = true;
    zombieT.body.immovable = true;
    iwall.body.immovable = true;
    iwall2.body.immovable = true;
    iwall3.body.immovable = true;
    iwall4.body.immovable = true;


    pencils = game.add.group();

    pencils.enableBody = true;

    pencils.physicsBodyType = Phaser.Physics.ARCADE;

    pencils.createMultiple(1, 'pencil');

    pencils.callAll('events.onOutOfBounds.add', 'events.onOutOfBounds', this.resetPencil);
    pencils.callAll('anchor.setTo', 'anchor', 0.5, 1.0);
    pencils.setAll('checkWorldBounds', true);

    ed.anchor.setTo(0.5, 1.0);
    ed.animations.add('left', [5, 6 ], 5, true);
    ed.animations.add('right', [7, 8], 5, true);
    ed.animations.add('up', [3, 4], 5, true);
    ed.animations.add('down', [1,2], 5, true);
  },



  update: function() {

    if (a.isDown) {
      //  Move to the left
      ed.body.velocity.x = -150;
      ed.animations.play('left');
      //ed.animations.play('left');
    } else if (d.isDown) {
      //  Move to the right
      ed.body.velocity.x = 150;
      ed.animations.play('right');
      //ed.animations.play('right');
    } else {
      ed.body.velocity.x = 0;
    }

    if (w.isDown) {
      ed.body.velocity.y = -150;
      ed.animations.play('up')
    } else if (s.isDown) {
      ed.body.velocity.y = 150;
      ed.animations.play('down');
   } else {
     ed.body.velocity.y = 0;
   }


    game.physics.arcade.collide(ed, zombieT, this.removeHealth);

    game.physics.arcade.collide(pencils, zombieT, this.removeZombieT);

    game.physics.arcade.collide(ed, door2   , () => {
      game.state.start('level3');
    });

    game.physics.arcade.collide(ed, iwall);
    game.physics.arcade.collide(ed, iwall2);
    game.physics.arcade.collide(ed, iwall3);
    game.physics.arcade.collide(ed, iwall4);

    iwall.alpha = 0
    iwall2.alpha = 0
    iwall3.alpha = 0
    iwall4.alpha = 0

    door2.alpha = 0

    if (game.global.health == 0) {

      game.state.start('gameover');
    }

    // how to ( ͡° ͜ʖ ͡°) ▄︻ ̿┻̿═━一

    //up fire

    if (cursors.up.isDown) {

      if (!mouseTouchDown) {
        this.touchDown();
      }
    } else {
      if (mouseTouchDown) {
        this.touchUp();
      }
    }

    if (cursors.right.isDown) {
      if(!mouseTouchDown) {
        this.touchRight();
      }
    } else {
      if (mouseTouchDown) {
        this.touchUp();
      }
    }

    if (cursors.left.isDown) {
      if(!mouseTouchDown) {
        this.touchLeft();
      }
    } else {
      if (mouseTouchDown) {
        this.touchUp();
      }
    }

    if (cursors.down.isDown) {
      if(!mouseTouchDown) {
        this.touchBelow();
      }
    } else {
      if (mouseTouchDown) {
        this.touchUp();
      }
    }
    if (zombieT.x < ed.x) {

  }
},

    removeZombieT: function() {
      zombieT.kill();
    },
    resetPencil: function(pencil) {
      pencil.kill();
    },

    touchDown: function() {

      mouseTouchDown = true;
      this.firePencil();
    },

    touchUp: function() {

      mouseTouchDown = false;
    },

    firePencil: function() {

      var pencil = pencils.getFirstExists(false);

      if (pencil) {

        pencil.reset(ed.x, ed.y - 20);

        pencil.body.velocity.y = -500;
      }
      if (!(a.isDown || d.isDown || w.isDown || s.isDown)) {
        ed.animations.stop();
        ed.frame = 0;
      }
    },

    removeHealth: function(a, b) {
      game.global.health -= 1;
      healthText.text = game.global.health;
    },


      resetPencil: function(pencil) {
        pencil.kill();
      },

      touchBelow: function() {
        mouseTouchDown = true;
        this.firePencilDown();
      },

      touchUp: function() {
        mouseTouchDown = false;
      },
      touchRight: function() {
      mouseTouchDown = true;
      this.firePencilRight();
      },
      touchLeft: function() {
        mouseTouchDown = true;
        this.firePencilLeft();
      },
      firePencilUp: function() {
        var pencil = pencils.getFirstExists(false);

        if (pencil) {
          pencil.reset(ed.x, ed.y -20);
          pencil.body.velocity.y = 500;
        }
      },
      firePencilDown: function() {
        var pencil = pencils.getFirstExists(false);

        if (pencil) {
          pencil.reset(ed.x, ed.y -20);
          pencil.body.velocity.y = 500;
        }
      },

      firePencilLeft: function() {
        var pencil = pencils.getFirstExists(false);

        if (pencil) {
          pencil.reset(ed.x, ed.y -20);
          pencil.body.velocity.x = -500;
        }
      },

      firePencilRight: function() {
        var pencil = pencils.getFirstExists(false);

        if (pencil) {
          pencil.reset(ed.x, ed.y -20);
          pencil.body.velocity.x = 500;
        }
      }};
