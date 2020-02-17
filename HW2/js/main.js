"use strict";

window.onload = function() {
    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', {preload: preload, create: create, update: update});

    function preload() {
        game.load.audio('GhostPain', ['assets/GhostPain.mp3', 'assets/GhostPain.ogg', 'assets/GhostPain.wav', 'assets/GhostPain.flac']);
        game.load.image('ghost', 'assets/ghost.png');
        game.load.image('fireball', 'assets/fireball.png');
        game.load.image('tile', 'assets/tile.png');
        game.load.image('enemy', 'assets/enemy.png');
        game.load.image('enemy2', 'assets/enemy2.png');
    }

    function create() {
        game.stage.backgroundColor = 0xC2C3C7;
        var instructions = game.add.text(game.world.centerX, game.world.centerY, 'Click to Kill all the Ghosts!', {font: '98px Arial', fill: '#FFFFFF', align: 'center'});
        instructions.anchor.set(0.5);

    }

    function update() {

    }
};
