"use strict";

BasicGame.Preloader = function(game) {
	this.background = null;
	this.preloadBar = null;
	this.ready = false;
};

BasicGame.Preloader.prototype = {
	preload: function() {
		// These are the assets we loaded in Boot.js
		// A nice sparkly background and a loading progress bar
		this.background = this.add.sprite(0, 0, 'preloaderBackground');
		this.preloadBar = this.add.sprite(300, 400, 'preloaderBar');

		// This sets the preloadBar sprite as a loader sprite.
		// What that does is automatically crop the sprite from 0 to full-width
		// as the files below are loaded in.
		this.load.setPreloadSprite(this.preloadBar);

		// Here we load the rest of the assets our game needs.
		// As this is just a Project Template I've not provided these assets, swap them for your own.
		this.load.image('titlePage', 'assets/title.jpg');
		this.load.atlas('playButton', 'assets/play_button.png', 'assets/play_button.json');
		this.load.image('stageOneButton', 'assets/1.png');
		this.load.image('stageTwoButton', 'assets/2.png');
		this.load.image('stageThreeButton', 'assets/3.png');
		this.load.image('stageFourButton', 'assets/4.png');
		this.load.image('stageFiveButton', 'assets/5.png');
		this.load.image('stageSixButton', 'assets/6.png');
		this.load.image('stageSevenButton', 'assets/7.png');
		this.load.image('stageEightButton', 'assets/8.png');
		this.load.image('stageNineButton', 'assets/9.png');
		this.load.image('stageTenButton', 'assets/10.png');
		this.load.image('stageElevenButton', 'assets/11.png');
		this.load.image('stageTwelveButton', 'assets/12.png');
		this.load.image('stageThirteenButton', 'assets/13.png');
		this.load.image('stageFourteenButton', 'assets/14.png');
		this.load.image('stageFifteenButton', 'assets/15.png');
		this.load.image('stageSixteenButton', 'assets/16.png');
		//this.load.atlas('stageButton', 'assets/stages_button.png', 'assets/stages_button.json');
		this.load.audio('titleMusic', ['assets/Poppers and Prosecco.mp3']);
		// + lots of other required assets here
			this.load.image('logo', 'assets/phaser.png');
			this.load.image('mountains-bg', 'assets/mountains-bg.png');
			this.load.image('ground', 'assets/new-ground.png');
			this.load.image('player', 'assets/player.png');
			this.load.image('wall', 'assets/wall.png');
			this.load.image('object', 'assets/object.png');

	},

	create: function() {
		// Once the load has finished we disable the crop because we're going to sit in the update loop for a short while as the music decodes
		this.preloadBar.cropEnabled = false;
	},

	update: function() {
		// You don't actually need to do this, but I find it gives a much smoother game experience.
		// Basically it will wait for our audio file to be decoded before proceeding to the MainMenu.
		// You can jump right into the menu if you want and still play the music, but you'll have a few
		// seconds of delay while the mp3 decodes - so if you need your music to be in-sync with your menu
		// it's best to wait for it to decode here first, then carry on.

		// If you don't have any music in your game then put the game.state.start line into the create function and delete
		// the update function completely.

		if (this.cache.isSoundDecoded('titleMusic') && this.ready == false)
		{
			this.ready = true;
			this.state.start('MainMenu');
		}
	}
};
