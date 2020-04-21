"use strict";

window.onload = function() {
	// Create your Phaser game and inject it into the 'game' div.
	// We did it in a window.onload event, but you can do it anywhere (requireJS load, anonymous function, jQuery dom ready, - whatever floats your boat)
	var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');

	// Add the States your game has.
	// You don't have to do this in the html, it could be done in your Boot state too, but for simplicity I'll keep it here.
	game.state.add('Boot', BasicGame.Boot);
	game.state.add('Preloader', BasicGame.Preloader);
	game.state.add('MainMenu', BasicGame.MainMenu);
	game.state.add('Stage', BasicGame.Stage);
	game.state.add('NextLevel', BasicGame.NextLevel);
	game.state.add('Game', BasicGame.Game);
	game.state.add('LevelOne', BasicGame.LevelOne);
	game.state.add('LevelTwo', BasicGame.LevelTwo);
	game.state.add('LevelThree', BasicGame.LevelThree);
	game.state.add('GameOver', BasicGame.GameOver);
	//game.state.add('GameUnavailable', Basic.GameUnavailable);

	// Now start the Boot state.
	game.state.start('Boot');
};
