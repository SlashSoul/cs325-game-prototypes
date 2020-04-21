"use strict";

BasicGame.Stage = function(game) {

};

BasicGame.Stage.prototype = {
  create: function() {
    this.add.sprite(0, 0, 'mountains-bg');
    this.add.text(16, 16, 'Stages', {font: '24px Verdana', fill: '#9999FF'});

    this.add.button(150, 150, 'stageOneButton', this.startStageOne, this);
    this.add.button(300, 150, 'stageTwoButton', this.startStageTwo, this);
    this.add.button(450, 150, 'stageThreeButton', this.startStageThree, this);
    this.add.button(600, 150, 'stageFourButton', this.startStageFour, this);
    this.add.sprite(150, 250, 'stageFiveButton', this.startStageFive, this);
    /*this.add.sprite(300, 250, 'stageSixButton', this.startStageSix, this);
    this.add.sprite(450, 250, 'stageSevenButton', this.startStageSeven, this);
    this.add.sprite(600, 250, 'stageEightButton', this.startStageEight, this);
    this.add.sprite(150, 350, 'stageNineButton', this.startStageNine, this);
    this.add.sprite(300, 350, 'stageTenButton', this.startStageTen, this);
    this.add.sprite(450, 350, 'stageElevenButton', this.startStageEleven, this);
    this.add.sprite(600, 350, 'stageTwelveButton', this.startStageTwelve, this);
    this.add.sprite(150, 450, 'stageThirteenButton', this.startStageThirteen, this);
    this.add.sprite(300, 450, 'stageFourteenButton', this.startStageFourteen, this);
    this.add.sprite(450, 450, 'stageFifteenButton', this.startStageFifteen, this);
    this.add.sprite(600, 450, 'stageSixteenButton', this.startStageSixteen, this);*/

    this.add.button(16, 534, 'back', this.returnMainMenu, this);
  },

  update: function() {

  },

  startStageOne: function(pointer) {
    this.state.start('Game');
  },

  startStageTwo: function(pointer) {
    this.state.start('LevelTwo');
  },

  startStageThree: function(pointer) {
    this.state.start('LevelThree');
  },

  startStageFour: function(pointer) {

  },

  startStageFive: function(pointer) {

  },

  startStageSix: function(pointer) {

  },

  startStageSeven: function(pointer) {

  },

  startStageEight: function(pointer) {

  },

  startStageNine: function(pointer) {

  },

  startStageTen: function(pointer) {

  },

  startStageEleven: function(pointer) {

  },

  startStageTwelve: function(pointer) {

  },

  startStageThirteen: function(pointer) {

  },

  startStageFourteen: function(pointer) {

  },

  startStageFifteen: function(pointer) {

  },

  startStageSixteen: function(pointer) {

  },

  returnMainMenu: function(pointer) {
    this.state.start('MainMenu');
  }
};
