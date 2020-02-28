"use strict";

GameStates.makeGame = function(game, shared) {
  // Create your own variables.
  var cat = null;
  var walls = null;
  var shirts = null;
  var hpbar1 = null;
  var hpbar2 = null;
  var hpbar3 = null;
  var health = null;
  var clothes = null;
  var score = null;
  var labelClothes = null;
  var labelScore = null;
  var spaceKey = null;

  function restartGame() {
    // Add text to tell the player that they had lost the game
    var line1 = game.add.text(game.world.centerX, game.world.centerY, 'Game Over!', {font: '25px Verdana', fill: '#ffffff'});
    var line2 = game.add.text(game.world.centerX, game.world.centerY - 100, 'Press SPACEBAR to restart the game.', {font: '25px Arial', fill: '#ffffff'});
    line1.anchor.setTo(0.5, 0.0);
    line2.anchor.setTo(0.5, 0.6);

    // Restart the game when the SPACEBAR is pressed
    if (spaceKey.isDown) {
      game.state.start('Game');
    }

  }

  function endGame() {
    // Here you should destroy anything you no longer need.
    // Stop music, delete sprites, purge caches, free resources, all that good stuff.

    // Reached the laundromat !!
    // Show the display victory win text
    var win = game.add.text(game.world.centerX, game.world.centerY, 'Win!', {font: '25px Verdana', fill: '#FFFFFF'});
    var blah = game.add.text(game.world.centerX, game.world.centerY, 'Press SPACEBAR to return to the Main Menu.', {font: '25px Verdana', fill: '#FFFFFF'});
    win.anchor.setTo(0.5, 0.0);
    blah.anchor.setTo(0.5, 0.6);

    if (spaceKey.isDown) {
      game.state.start('Main Menu');
    }
    // Then let's go back to the main menu.
    //game.state.start('MainMenu');
  }

  return {
    create: function() {
      // Change the background color of the game to blue
      game.stage.backgroundColor = '#71c5cf';

      // Add some instructions
      var instructions = game.add.text(game.world.centerX, 16, 'Press SPACEBAR.', {font: '25px Verdana', fill: '#ffffff', align: 'center'});
      instructions.anchor.setTo(0.5, 0.0);

      // Set the physics system
      game.physics.startSystem(Phaser.Physics.ARCADE);

      // Display the cat at the position x=100 and y=245
      cat = game.add.sprite(100, 245, 'cat');

      // Add physics to the bird. Needed for: movements, gravity, collisions, etc.
      game.physics.arcade.enable(cat);

      // Add gravity to the cat to make it fall
      cat.body.gravity.y = 1000;

      // Call the jump function when the spacebar is pressed
      spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
      spaceKey.onDown.add(this.jump, this);

      // Create an empty group of walls to stop the cat
      walls = game.add.group();

      // Add a set of walls every 1.5 seconds to the game
      this.timer = game.time.events.loop(1500, this.addRowOfWalls, this);

      // Create an empty group of shirts
      shirts = game.add.group();
      //game.time.events.loop(1500, this.addOneShirt, this);

      // Display the number of lives the player has remaining
      game.add.text(16, 16, 'Lives: ', {font: '25px Arial', fill: '#FF002A'});
      hpbar1 = game.add.sprite(90, 16, 'heart');
      hpbar2 = game.add.sprite(130, 16, 'heart');
      hpbar3 = game.add.sprite(170, 16, 'heart');
      health = 3;

      // Display the number of clothes the player has collected
      game.add.sprite(16, 57, 'shirt');
      game.add.text(52, 57, 'x', {font: '25px Arial', fill: '#FF002A'});
      labelClothes = game.add.text(68, 57, '0', {font: '25px Arial', fill: '#FF002A'});
      clothes = 0;

      // Display the score
      //labelScore = game.add.text(16, 98, '0', {font: '25px Arial', fill: '#FFFFFF'});
      labelScore = game.add.text(16, 559, '0', {font: '25px Arial', fill: '#ffffff'});
      score = 0;

      // Handle animations and sounds for the cat's jumping movement
      cat.anchor.setTo(-0.2, 0.5);
      this.jumpSound = game.add.audio('jump');
    },

    update: function() {
      // If the bird falls out of the screen, restart the game
      if (cat.y < 0 || cat.y > 600) {
        // Go through all the walls, and stop their movements
        walls.forEach(function(w) {
          w.body.velocity.x = 0;
        }, this);

        // Restart the game
        restartGame();
      }

      // Handle collisions
      game.physics.arcade.collide(cat, walls);
      game.physics.arcade.overlap(cat, walls, this.hitWall, null, this);
      game.physics.arcade.overlap(cat, shirts, this.collectShirt, null, this);

      // Add jumping animation
      if (cat.angle < 20) {
        cat.angle += 1;
      }


      // If the bird reaches the destination (overlaps with the laundromat), freeze everything and win the game!

    },

    jump: function() {
      // Stop jump commands if cat is dead
      if (cat.alive == false) {
        return;
      }

      // Play the jump sound
      this.jumpSound.play();

      // Adjust the cat's position
      cat.body.velocity.y = -350;

      // Animate the jump
      game.add.tween(cat).to({angle: -20}, 100).start();
    },

    addOneWall: function(x, y) {
      // Create a wall at the position x and y
      var wall = game.add.sprite(x, y, 'wall');

      // Add the wall to the previously created group
      walls.add(wall);

      // Enable physics on the wall
      game.physics.arcade.enable(wall);
      wall.body.immovable = true;

      // Add velocity to the wall to make it move left
      wall.body.velocity.x = -200;

      // Automatically kill the wall when it is no longer visible
      wall.checkWorldBounds = true;
      wall.outOfBoundsKill = true;
    },

    addRowOfWalls: function() {
      // Randomly pick the position of the hole (between 1 to 5) in a set of walls
      var hole = Math.floor(Math.random() * 5) + 1;

      // Add 8 walls with one big hole at position hole and hole + 1 and hole + 2
      for (var i = 0; i < 12; i++) {
        if (i != hole && i != hole + 1 && i != hole + 2) {
          this.addOneWall(800, i * 60 + 10);
        }
        else if (i == hole + 1){
          if ((Math.floor(Math.random() * 10) + 1) > 1) {
            this.addOneShirt(800, i * 60 + 10);
          }
        }
      }

      // Increment the score by 1
      score += 1;
      labelScore.text = score;

    },

    addOneShirt: function(x, y) {
      var shirt = game.add.sprite(x, y, 'shirt');

      // Add the shirt to the previously created group
      shirts.add(shirt);

      // Enable physics on the shirt
      game.physics.arcade.enable(shirt);

      // Add velocity to the shirt to make it move left
      shirt.body.velocity.x = -200;

      // Automatically kill the shirt hen it is no longer visible
      shirt.checkWorldBounds = true;
      shirt.outOfBoundsKill = true;
    },

    collectShirt: function(cat, shirt) {
      shirt.kill();
      clothes += 1;
      labelClothes.text = clothes;
    },

    hitWall: function() {
      // If the cat has not lost all its lives, then lose a life
      /*if (health > 1) {
          // Decrement lives by 1
          health -= 1;
          if (health == 2) {
            hpbar3.destroy();
          }
          else {
            hpbar2.destroy();
          }
      }*/


      // If the cat has already hit the wall, then let the cat fall off the screen
      if (cat.alive == false) {
        return;
      }

      // Set the cat's alive property to false
      cat.alive = false;

      // Prevent new walls from appearing
      game.time.events.remove(this.timer);

      // Go through all the walls, and stop their movements
      walls.forEach(function(w) {
        w.body.velocity.x = 0;
      }, this);

    }

  };
};
