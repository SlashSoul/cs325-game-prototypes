"use strict";

window.onload = function() {
    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', {preload: preload, create: create, update: update});

    function preload() {
        game.load.image('pixel-mountains-back', 'assets/pixel-mountains-back.png');
        game.load.image('pixel-mountains-mid1', 'assets/pixel-mountains-mid1.png');
        game.load.image('pixel-mountains-mid2', 'assets/pixel-mountains-mid2.png');
        //game.load.audio('GhostPain', ['assets/GhostPain.mp3', 'assets/GhostPain.ogg', 'assets/GhostPain.wav', 'assets/GhostPain.flac']);
        //game.load.image('ghost', 'assets/ghost.png');
        //game.load.image('fireball', 'assets/fireball.png');
        /*game.load.image('tile', 'assets/tile.png');
        game.load.image('enemy', 'assets/enemy.png');
        game.load.image('enemy2', 'assets/enemy2.png');*/
    }

    function create() {
        /*game.stage.backgroundColor = 0xC2C3C7;
        var instructions = game.add.text(game.world.centerX, game.world.centerY, 'Click to Kill all the Ghosts!', {font: '32px Arial', fill: '#FFFFFF', align: 'center'});
        instructions.anchor.set(0.5);

        var walls = game.add.group();
        walls.enableBody = true;

        for (var i = 16; x < game.world.width; x+= 32) {

        }*/

        // Enable Aracde Physics
        game.physics.startSystem(Phaser.Physics.ARCADE);

        // Set the Background Color
        game.stage.backgroundColor = '#697e96';

        // Create the Background
        mountainsBack = game.add.tileSprite(0, game.height - game.cache.getImage('pixel-mountains-back').height, game.width, game.cache.getImage('pixel-mountains-back').height, 'pixel-mountains-back');
        mountainsMid1 = game.add.tileSprite(0, game.height - game.cache.getImage('pixel-mountains-mid1').height, game.width, game.cache.getImage('pixel-mountains-mid1').height, 'pixel-mountains-mid1');
        mountainsMid2 = game.add.tileSprite(0, game.height - game.cache.getImage('pixel-mountains-mid2').height, game.width, game.cache.getImage('pixel-mountains-mid2').height, 'pixel-mountains-mid2');



    }

    function update() {

    }
};
