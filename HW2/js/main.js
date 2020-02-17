"use strict";

window.onload = function() {
    var game = new Phaser.Game(1000, 800, Phaser.AUTO, 'game', {preload: preload, create: create, update: update});

    function preload() {
        game.load.image('mountains-back', 'assets/mountains-back.png');
        game.load.image('mountains-mid1', 'assets/mountains-mid1.png');
        game.load.image('mountains-mid2', 'assets/mountains-mid2.png');
        game.load.image('ground', 'assets/ground.png');
        //game.load.audio('GhostPain', ['assets/GhostPain.mp3', 'assets/GhostPain.ogg', 'assets/GhostPain.wav', 'assets/GhostPain.flac']);
        //game.load.image('ghost', 'assets/ghost.png');
        //game.load.image('fireball', 'assets/fireball.png');
    }

    var mountainsBack;
    var mountainsMid1;
    var mountainsMid2;
    var ground;
    var player;

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
        mountainsBack = game.add.tileSprite(0, game.height - game.cache.getImage('mountains-back').height, game.width, game.cache.getImage('mountains-back').height, 'mountains-back');
        mountainsMid1 = game.add.tileSprite(0, game.height - game.cache.getImage('mountains-mid1').height, game.width, game.cache.getImage('mountains-mid1').height, 'mountains-mid1');
        mountainsMid2 = game.add.tileSprite(0, game.height - game.cache.getImage('mountains-mid2').height, game.width, game.cache.getImage('mountains-mid2').height, 'mountains-mid2');

        // Create the Ground/Platform
        ground.enableBody = true;
        ground.create(0, game.world.height - 64, 'ground');
        ground.body.immovable = true;

        // Create the Player
        player = game.add.sprite(32, game.world.height - 150, 'ghost');
        game.physics.arcade.enable(player);
        player.body.bounce.y = 0.2;
        player.body.gravity.y = 300;
        player.body.collideWorldBounds = true;


    }

    function update() {
        // Simulate a Parallax Background
        mountainsBack.tilePosition.x -= 0.05;
        mountainsMid1.tilePosition.x -= 0.30;
        mountainsMid2.tilePosition.x -= 0.75;

        // Handling collisions
        game.physics.arcade.collide(player, ground);
    }
};
