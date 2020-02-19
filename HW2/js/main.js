"use strict";

window.onload = function() {
    var game = new Phaser.Game(1200, 400, Phaser.AUTO, 'game', {preload: preload, create: create, update: update});

    function preload() {
        game.load.image('mountains-back', 'assets/mountains-back.png');
        game.load.image('mountains-mid1', 'assets/mountains-mid1.png');
        game.load.image('mountains-mid2', 'assets/mountains-mid2.png');
        game.load.image('platform', 'assets/ground.png');
        game.load.audio('GhostPain', ['assets/GhostPain.mp3', 'assets/GhostPain.ogg', 'assets/GhostPain.wav', 'assets/GhostPain.flac']);
        game.load.image('reaper1', 'assets/reaper1.png');
        game.load.image('ghost', 'assets/ghost.png');
        game.load.image('fireball', 'assets/orange_fireball.png');
        game.load.spritesheet('dude', 'assets/dude.png', 32, 32);
    }

    var mountainsBack;
    var mountainsMid1;
    var mountainsMid2;
    var ground;
    var player;
    var weapon;
    //var enemy;
    //var enemies;
    //var fireball;
    var scoreText;
    var cursors;
    //var fireballKey;

    function create() {
        // Enable Aracde Physics
        game.physics.startSystem(Phaser.Physics.ARCADE);

        // Set the Background Color
        game.stage.backgroundColor = '#697e96';

        // Create the Background
        mountainsBack = game.add.tileSprite(0, game.height - game.cache.getImage('mountains-back').height, game.width, game.cache.getImage('mountains-back').height, 'mountains-back');
        mountainsMid1 = game.add.tileSprite(0, game.height - game.cache.getImage('mountains-mid1').height, game.width, game.cache.getImage('mountains-mid1').height, 'mountains-mid1');
        mountainsMid2 = game.add.tileSprite(0, game.height - game.cache.getImage('mountains-mid2').height, game.width, game.cache.getImage('mountains-mid2').height, 'mountains-mid2');

        // Create the Ground/Platform
        ground = game.add.group();
        ground.enableBody = true;

        var platform = ground.create(0, game.world.height - 64, 'platform');
        platform.scale.setTo(2);
        platform.body.immovable = true;

        // Create the Player
        player = game.add.sprite(32, game.world.height - 150, 'reaper1');
        player.scale.setTo(0.20);
        game.physics.arcade.enable(player);
        player.body.gravity.y = 200;
        player.body.collideWorldBounds = true;

        // Add the Weapon
        weapon = game.add.weapon(1000, 'fireball');
        weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
        weapon.bulletSpeed = 1000;
        weapon.fireRate = 100;
        weapon.trackSprite(player, 65, 25, true);

        // Create the Enemies

        // Create the enemies
        /*enemies = game.add.group();
        enemies.enableBody = true;
        enemies.physicsBodyType = Phaser.Physics.ARCADE;*/


        //game.time.desiredFps = 30;
        //game.physics.arcade.gravity.y = 250;
        //fireball.trackSprite(player, 55, 25, true);

        // Score Tracking
        scoreText = game.add.text(16, 16, 'Score: 0', {font: '25px Arial', fill: '#000000'});

        // Cursors
        cursors = game.input.keyboard.createCursorKeys();

        //fireballKey = game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);

    }

    function update() {
        // Simulate a Parallax Background
        mountainsBack.tilePosition.x -= 0.05;
        mountainsMid1.tilePosition.x -= 0.30;
        mountainsMid2.tilePosition.x -= 0.75;

        // Handling collisions
        game.physics.arcade.collide(player, ground);

        // Player Controls
        if (cursors.left.isDown) {
            player.body.velocity.x = -100;
        }
        else if (cursors.right.isDown) {
            player.body.velocity.x = 100;
        }
        else if (cursors.up.isDown) {
            player.body.velocity.y = -100;
        }
        else if (cursors.down.isDown) {
            player.body.velocity.y = 100;
        }
        else if (game.input.activePointer.leftButton.isDown) {
            weapon.fire();
        }
        else {
            player.body.velocity.x = 0;
            player.body.velocity.y = 0;
        }



    }

    //function spawn(number) {

    //}



    function death(player, enemy) {
        music = game.add.audio('GhostPain');
        music.play();
        player.kill();
        var gameover = game.add.text(game.world.centerX, game.world.centerY, 'Game Over!', {font: '25px Arial', fill: '#000000'});
    }
};
