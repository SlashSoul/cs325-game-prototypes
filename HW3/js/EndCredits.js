"use strict";

var endCredits = {
  create: function() {
    game.add.sprite(0, 0, 'creditsPage');
    var instructions = game.add.text(game.world.centerX, game.world.centerY, 'Press W to return to the Main Menu');
    instructions.anchor.setTo(0, 0);

    var cat = game.add.sprite(100, 245, 'cat');
  },

  update: function() {
    if (this.keyboard.isDown(Phaser.Keyboard.W)) {
      game.state.start('MainMenu');
    }
  }


};
