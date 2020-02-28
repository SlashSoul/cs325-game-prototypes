"use strict";

GameStates.makeGameOver = function(game, shared) {
  // Create your own variables.
  var cat = null;
  var spaceKey = null;

  return {
    create: function() {
      game.add.sprite(0, 0, 'creditsPage');
      var instructions = game.add.text(game.world.centerX, game.world.centerY, 'Press SPACEBAR to return to the Main Menu');
      instructions.anchor.setTo(0, 0);

      cat = game.add.sprite(100, 245, 'cat');
      spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    },

    update: function() {
      if (spaceKey.isDown) {
        game.state.start('MainMenu');
      }
    }
  }
}
