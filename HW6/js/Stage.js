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
    this.add.button(150, 250, 'stageFiveButton', this.startStageFive, this);
    this.add.button(300, 250, 'stageSixButton', this.startStageSix, this);
    this.add.button(450, 250, 'stageSevenButton', this.startStageSeven, this);
    this.add.button(600, 250, 'stageEightButton', this.startStageEight, this);
    this.add.button(150, 350, 'stageNineButton', this.startStageNine, this);
    this.add.button(300, 350, 'stageTenButton', this.startStageTen, this);
    this.add.button(450, 350, 'stageElevenButton', this.startStageEleven, this);
    this.add.button(600, 350, 'stageTwelveButton', this.startStageTwelve, this);
    this.add.button(150, 450, 'stageThirteenButton', this.startStageThirteen, this);
    this.add.button(300, 450, 'stageFourteenButton', this.startStageFourteen, this);
    this.add.button(450, 450, 'stageFifteenButton', this.startStageFifteen, this);
    this.add.button(600, 450, 'stageSixteenButton', this.startStageSixteen, this);

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
    //this.state.start('GameUnavailable');
  },

  startStageFive: function(pointer) {
    //this.state.start('GameUnavailable');
  },

  startStageSix: function(pointer) {
    //this.state.start('GameUnavailable');
  },

  startStageSeven: function(pointer) {
    //this.state.start('GameUnavailable');
  },

  startStageEight: function(pointer) {
    //this.state.start('GameUnavailable');
  },

  startStageNine: function(pointer) {
    //this.state.start('GameUnavailable');
  },

  startStageTen: function(pointer) {
    //this.state.start('GameUnavailable');
  },

  startStageEleven: function(pointer) {
    //this.state.start('GameUnavailable');
  },

  startStageTwelve: function(pointer) {
    //this.state.start('GameUnavailable');
  },

  startStageThirteen: function(pointer) {
    //this.state.start('GameUnavailable');
  },

  startStageFourteen: function(pointer) {
    //this.state.start('GameUnavailable');
  },

  startStageFifteen: function(pointer) {
    //this.state.start('GameUnavailable');
  },

  startStageSixteen: function(pointer) {
    //this.state.start('GameUnavailable');
  },

  returnMainMenu: function(pointer) {
    this.state.start('MainMenu');
  }
};
