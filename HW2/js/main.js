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
    var enemy;
    var enemies;
    var scoreText;
    var cursors;

    function create() {
        // Enable aracde physics
        game.physics.startSystem(Phaser.Physics.ARCADE);

        // Set the background color
        game.stage.backgroundColor = '#697e96';

        // Create the background
        mountainsBack = game.add.tileSprite(0, game.height - game.cache.getImage('mountains-back').height, game.width, game.cache.getImage('mountains-back').height, 'mountains-back');
        mountainsMid1 = game.add.tileSprite(0, game.height - game.cache.getImage('mountains-mid1').height, game.width, game.cache.getImage('mountains-mid1').height, 'mountains-mid1');
        mountainsMid2 = game.add.tileSprite(0, game.height - game.cache.getImage('mountains-mid2').height, game.width, game.cache.getImage('mountains-mid2').height, 'mountains-mid2');

        // Create the ground/platform
        ground = game.add.group();
        ground.enableBody = true;

        var platform = ground.create(0, game.world.height - 64, 'platform');
        platform.scale.setTo(2);
        platform.body.immovable = true;

        // Create the player
        player = game.add.sprite(32, game.world.height - 150, 'reaper1');
        player.scale.setTo(0.20);
        game.physics.arcade.enable(player);
        player.body.gravity.y = 200;
        player.body.collideWorldBounds = true;

        // Add the weapon
        weapon = game.add.weapon(1000, 'fireball');
        weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
        weapon.bulletSpeed = 1000;
        weapon.fireRate = 100;
        weapon.trackSprite(player, 65, 25, true);

        // Create enemies
        enemies = game.add.group();
        enemies.enableBody = true;
        enemies.physicsBodyType = Phaser.Physics.ARCADE;
        spawn(Math.floor(Math.random() * 100));

        // Score Tracking
        scoreText = game.add.text(16, 16, 'Score: 0', {font: '25px Arial', fill: '#000000'});

        // Cursors
        cursors = game.input.keyboard.createCursorKeys();

    }

    function update() {
        // Simulate a Parallax Background
        mountainsBack.tilePosition.x -= 0.05;
        mountainsMid1.tilePosition.x -= 0.30;
        mountainsMid2.tilePosition.x -= 0.75;

        // Handling collisions
        game.physics.arcade.collide(player, ground);

        // Handle interactions between objects
        game.physics.arcade.overlap(weapon.bullets, enemies, killEnemies, null, this);
        game.physics.arcade.overlap(player, enemies, death, null, this);

        // Spawn enemies
        var number = Math.floor(Math.random() * 100);
        if (number > 99) {
            spawn(number);
        }

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

        // Enemy Movement
        enemies.forEachAlive(function(enemy) {
            enemy.body.velocity.x = -100;
        });

    }

    function spawn(number) {
        enemy = enemies.create(number*5, number, 'ghost');
        game.physics.enable(enemy, Phaser.Physics.ARCADE);
        enemy.body.collideWorldBounds = true;
    }

    function killEnemies(weapon, enemies) {
        music = game.add.audio('GhostPain');
        music.play();
        enemies.kill();
        //music.stop();
        score += 1;
        scoreText.text = 'Score: ' + score;
    }

    function death(player, enemy) {
        music = game.add.audio('GhostPain');
        music.play();
        player.kill();
        // music.stop();
        var gameover = game.add.text(game.world.centerX, game.world.centerY, 'Game Over!', {font: '25px Arial', fill: '#000000'});
    }
};
