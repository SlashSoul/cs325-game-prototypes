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
	game.state.add('LevelOne', BasicGame.LevelOne);
	game.state.add('LevelTwo', BasicGame.LevelTwo);
	game.state.add('LevelThree', BasicGame.LevelThree);
	game.state.add('LevelFour', BasicGame.LevelFour);
	game.state.add('LevelFive', BasicGame.LevelFive);
	game.state.add('LevelSix', BasicGame.LevelSix);
	game.state.add('LevelSeven', BasicGame.LevelSeven);
	game.state.add('LevelEight', BasicGame.LevelEight);
	game.state.add('LevelNine', BasicGame.LevelNine);
	game.state.add('LevelTen', BasicGame.LevelTen);
	game.state.add('LevelEleven', BasicGame.LevelEleven);
	game.state.add('LevelTwelve', BasicGame.LevelTwelve);
	game.state.add('LevelThirteen', BasicGame.LevelThirteen);
	game.state.add('LevelFourteen', BasicGame.LevelFourteen);
	game.state.add('LevelFifteen', BasicGame.LevelFifteen);
	game.state.add('LevelSixteen', BasicGame.LevelSixteen);

	// Now start the Boot state.
	game.state.start('Boot');
};
