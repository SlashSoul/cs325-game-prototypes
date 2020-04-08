"use strict";

BasicGame.MainMenu = function (game) {

	this.music = null;
	this.playButton = null;

};

BasicGame.MainMenu.prototype = {

	create: function () {

		//	We've already preloaded our assets, so let's kick right into the Main Menu itself.
		//	Here all we're doing is playing some music and adding a picture and button
		//	Naturally I expect you to do something significantly better :)

		this.music = this.add.audio('titleMusic');
		this.music.play();

		this.stage.backgroundColor = '#697e96';
		var mountainsBack = this.add.tileSprite(0, this.height - this.cache.getImage('mountains-back').height, this.width, this.cache.getImage('mountains-back').height, 'mountains-back');
    var mountainsMid1 = this.add.tileSprite(0, this.height - this.cache.getImage('mountains-mid1').height, this.width, this.cache.getImage('mountains-mid1').height, 'mountains-mid1');
    var mountainsMid2 = this.add.tileSprite(0, this.height - this.cache.getImage('mountains-mid2').height, this.width, this.cache.getImage('mountains-mid2').height, 'mountains-mid2');

		//this.add.sprite(0, 0, 'titlePage');

		this.playButton = this.add.button( 303, 400, 'playButton', this.startGame, this, 'over', 'out', 'down');

	},

	update: function () {

		//	Do some nice funky main menu effect here

	},

	startGame: function (pointer) {

		//	Ok, the Play Button has been clicked or touched, so let's stop the music (otherwise it'll carry on playing)
		this.music.stop();

		//	And start the actual game
		this.state.start('Game');

	}

};
