"use strict";

BasicGame.SplashPage = function(game) {

};

BasicGame.SplashPage.prototype = {
  create: function() {
    this.add.sprite(0, 0, 'mountains-bg');
    this.add.text(16, 16, 'Hero v2.0', {font: '24px Verdana', fill: '#9999FF'});

    //this.add.text(303, 200, 'Levels', {font: '24px Verdana', fill: '#9999FF'});

    this.add.sprite(150, 150, 'stageButton');
  },

  update: function() {

  },

  startGame: function(pointer) {
    //this.state.start('Level 1s');
  }
};
