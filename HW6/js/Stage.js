"use strict";

BasicGame.Stage = function(game) {

};

BasicGame.Stage.prototype = {
  create: function() {
    this.add.sprite(0, 0, 'mountains-bg');
    this.add.text(16, 16, 'Stages', {font: '24px Verdana', fill: '#9999FF'});

    //this.add.text(303, 200, 'Levels', {font: '24px Verdana', fill: '#9999FF'});

    //this.add.sprite(150, 150, 'stageButton');
    this.add.button(150, 150, 'stageOneButton', this.startStageOne, this, '1');
    this.add.button(300, 150, 'stageTwoButton', this.startStageTwo, this, '2');
    this.add.button(450, 150, 'stageThreeButton', this.startStageThree, this, '3');
    this.add.button(600, 150, 'stageFourButton', this.startStageFour, this, '4');
    this.add.sprite(150, 250, 'stageFiveButton');
    this.add.sprite(300, 250, 'stageSixButton');
    this.add.sprite(450, 250, 'stageSevenButton');
    this.add.sprite(600, 250, 'stageEightButton');
    this.add.sprite(150, 350, 'stageNineButton');
    this.add.sprite(300, 350, 'stageTenButton');
    this.add.sprite(450, 350, 'stageElevenButton');
    this.add.sprite(600, 350, 'stageTwelveButton');
    this.add.sprite(150, 450, 'stageThirteenButton');
    this.add.sprite(300, 450, 'stageFourteenButton');
    this.add.sprite(450, 450, 'stageFifteenButton');
    this.add.sprite(600, 450, 'stageSixteenButton');
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
