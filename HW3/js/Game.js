"use strict";

GameStates.makeGame = function(game, shared) {
  // Create your own variables.
  //var NUMBER_OF_FOLLOWERS = 10;
  //var bouncy = null;
  //var player = null;
  //var cursors = null;
  var bird = null;
  var spaceKey = null;

  function quitGame() {
    // Here you should destroy anything you no longer need.
    // Stop music, delete sprites, purge caches, free resources, all that good stuff.

    // Then let's go back to the main menu.
    game.state.start('MainMenu');

    // Put the "Game Over!" Screen here!
  }

  return {
    create: function() {
      // Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!

      // Change the background color of the game to blue
      game.stage.backgroundColor = '#71c5cf';

      // Set the physics system
      game.physics.startSystem(Phaser.Physics.ARCADE);

      // Display the bird at the position x=100 and y=245
      bird = game.add.sprite(100, 245, 'bird');

      // Add physics to the bird. Needed for: movements, gravity, collisions, etc.
      game.physics.arcade.enable(bird);

      // Add gtavity to the bird to make it fall
      bird.body.gravity.u = 1000;

      // Call the jump function when the spacebar is pressed
      spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
      spaceKey.onDown.add(jump, this);

      //game.stage.backgroundColor = 0x4488cc;

      // Create a sprite
      //player = game.add.sprite(game.world.centerX, game.world.centerY, 'cat');
      //player.animations.add('walk');
      //game.physics.arcade.enable(player);

      // Cursors
      //cursors = game.input.keyboard.createCursorKeys();



      // Create a sprite at the center of the screen using the 'logo' image.
      //bouncy = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');

      // Anchor the sprite at its center, as opposed to its top-left corner so it will be truly centered.
      //bouncy.anchor.setTo(0.5, 0.5);

      // Turn on the arcade physics engine for this sprite.
      //game.physics.enable(bouncy, Phaser.Physics.ARCADE);

      // Make it bounce off of the world bounds.
      //bouncy.body.collideWorldBounds = true;

      // Add some text using a CSS style.
      // Center it in X, and position its top 15 pixels from the top of the world.
      //var style = { font: "25px Verdana", fill: "#9999ff", align: "center" };
      //var text = game.add.text(game.world.centerX, 15, "Build something amazing.", style);
      //text.anchor.setTo(0.5, 0.0);

      // When you click on the sprite, you go back to the MainMenu.
      //bouncy.inputEnabled = true;
      //bouncy.events.onInputDown.add(function() { quitGame(); }, this);
    },

    update: function() {
      // Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!

      // Accelerate the 'logo' sprite towards the cursor, accelerating at 500 pixels/second and moving no faster than 500 pixels/second in X or Y.
      // This function returns the rotation angle that makes it visually match its new trajectory.
      //bouncy.rotation = game.physics.arcade.accelerateToPointer(bouncy, game.input.activePointer, 500, 500, 500);

      /*if (cursors.right.isDown) {
        player.body.velocity.x = 100;
        player.animations.play('walk');
      }
      else {
        player.animations.stop();
        player.frame = 0;
      }*/

      // If the bird is out of screen, then call quitGame() function.
      if (bird.y < 0 || bird.y > 600) {
        quitGame();
      }

    },

    jump: function() {
      bird.body.velocity.y = -350;
    }


  };
};
