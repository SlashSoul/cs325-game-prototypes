"use strict";

window.onload = function() {
    var game = new Phaser.Game(1000, 800, Phaser.AUTO, 'game', {preload: preload, create: create, update: update});

    function preload() {
        game.load.image('mountains-back', 'assets/mountains-back.png');
        game.load.image('mountains-mid1', 'assets/mountains-mid1.png');
        game.load.image('mountains-mid2', 'assets/mountains-mid2.png');
        game.load.image('platform', 'assets/ground.png');
        //game.load.audio('GhostPain', ['assets/GhostPain.mp3', 'assets/GhostPain.ogg', 'assets/GhostPain.wav', 'assets/GhostPain.flac']);
        game.load.image('player', 'assets/reaper1.png');
        game.load.image('ghost', 'assets/ghost.png');
        game.load.image('fireball', 'assets/orange_fireball.png');
        game.load.spritesheet('enemy', 'assets/dude.png');
        //game.load.image('fireball', 'assets/fireball.png');
    }

    var mountainsBack;
    var mountainsMid1;
    var mountainsMid2;
    var ground;
    var player;
    var enemies;
    var fireball;
    var cursors;
    var fireballKey;

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
        ground = game.add.group();
        ground.enableBody = true;

        var platform = ground.create(0, game.world.height - 64, 'platform');
        platform.scale.setTo(2,2);
        platform.body.immovable = true;

        // Create the Player
        player = game.add.sprite(32, game.world.height - 100, 'player'); /* 150 */
        game.physics.arcade.enable(player);
        player.body.bounce.y = 0.2;
        player.body.gravity.y = 300;
        player.body.collideWorldBounds = true;

        // Create the enemies
        /*enemies = game.add.group();
        enemies.enableBody = true;
        enemies.physicsBodyType = Phaser.Physics.ARCADE;*/

        fireball = game.add.weapon(1000, 'fireball');
        fireball.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
        fireball.bulletSpeed = 1000;
        fireball.fireRate = 100;

        //game.time.desiredFps = 30;
        //game.physics.arcade.gravity.y = 250;
        fireball.trackSprite(player, 15, 15, true);

        cursors = game.input.keyboard.createCursorKeys();
        fireballKey = game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);

    }

    function update() {
        // Simulate a Parallax Background
        mountainsBack.tilePosition.x -= 0.05;
        mountainsMid1.tilePosition.x -= 0.30;
        mountainsMid2.tilePosition.x -= 0.75;

        // Handling collisions
        game.physics.arcade.collide(player, ground);

        // Controls
        if (cursors.left.isDown) {
            player.body.velocity.x = -100;
            //player.animations.play('left');
        }
        else if (cursors.right.isDown) {
            player.body.velocity.x = 100;
            //player.animations.play('right');
        }
        else if (cursors.up.isDown && player.body.touching.down) {
            player.body.velocity.y = -100;
            // jump = game.time.now + 750;

        }
        else if (fireballKey.isDown) {
            fireball.fire();
        }


        /*if(newEnemy.x === 0) {
            this.newEnemy.kill();
        }*/
    }
};
