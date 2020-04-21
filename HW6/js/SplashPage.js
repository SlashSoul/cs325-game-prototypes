"use strict";

BasicGame.SplashPage = function(game) {

};

BasicGame.SplashPage.prototype = {
  create: function() {
    this.add.sprite(0, 0, 'mountains-bg');
    this.add.text(16, 16, 'Hero v2.0', {font: '24px Verdana', fill: '#9999FF'});

    //this.add.text(303, 200, 'Levels', {font: '24px Verdana', fill: '#9999FF'});

    //this.add.sprite(150, 150, 'stageButton');
    this.add.button(150, 150, 'stageButton', this.startStageOne, this, '1');
    this.add.button(300, 150, 'stageButton', this.startStageTwo, this, '2');
    this.add.button(450, 150, 'stageButton', this.startStageThree, this, '3');
    this.add.button(600, 150, 'stageButton', this.startStageFour, this, '4');
  },

  update: function() {

  },

  startStageOne: function(pointer) {
    this.state.start('Game');
  },

  startStageTwo: function(pointer) {
    //this.state.start('Level 1s');
  },

  startStageThree: function(pointer) {
    //this.state.start('Level 1s');
  },

  startStageFour: function(pointer) {
    //this.state.start('Level 1s');
  }
};
