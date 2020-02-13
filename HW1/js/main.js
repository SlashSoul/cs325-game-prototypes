"use strict";

window.onload = function() {
    var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );

    function preload() {
        // Load all the assets
        game.load.image('sky', 'assets/sky.jpg');
        game.load.image('ground', 'assets/platform.png');
        game.load.image('star', 'assets/star.png');
        game.load.image('diamond', 'assets/diamond.png');
        game.load.image('firstaid', 'assets/firstaid.png');
        game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
        game.load.spritesheet('baddie', 'assets/baddie.png', 32, 32);
    }

    var player;
    var platforms;
    var cursors;
    var stars;
    var diamonds;
    var firstaids;
    var baddie;
    var score = 0;
    var health = 100;
    var scoreText;
    var healthText;

    function create() {
        /* Worldbuilding */
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.add.sprite(0, 0, 'sky');
        platforms = game.add.group()
        platforms.enableBody = true;

        var ground = platforms.create(0, game.world.height - 64, 'ground');
        ground.scale.setTo(2,2);
        ground.body.immovable = true;

        var ledge = platforms.create(400, 400, 'ground');
        ledge.body.immovable = true;
        ledge = platforms.create(-150, 250, 'ground');
        ledge.body.immovable = true;
        /*ledge = platforms.create(200, 400, 'ground');
        ledge.body.immovable = true;*/

        /* Player */
        player = game.add.sprite(32, game.world.height - 150, 'dude');
        game.physics.arcade.enable(player);
        player.body.bounce.y = 0.2;
        player.body.gravity.y = 300;
        player.body.collideWorldBounds = true;

        player.animations.add('left', [0, 1, 2, 3], 10, true);
        player.animations.add('right', [5, 6, 7, 8], 10, true);

        /* Baddie */
        baddie = game.add.sprite(568, game.world.height - 150, 'baddie');
        game.physics.arcade.enable(baddie);
        baddie.body.bounce.y = 0.2;
        baddie.body.gravity.y = 300;
        baddie.body.collideWorldBounds = true;

        baddie.animations.add('baddie-left', [0, 1], 10, true);
        baddie.animations.add('baddie-right', [2, 3], 10, true);

        /* Stars */
        stars = game.add.group();
        stars.enableBody = true;

        for (var i = 0; i < 12; i++) {
            var star = stars.create(i * 70, 0, 'star');
            star.body.gravity.y = 300;
            star.body.bounce.y = 0.7 + Math.random() * 0.2;
        }

        /* Diamonds */
        diamonds = game.add.group();
        diamonds.enableBody = true;

        for (var i = 0; i < 12; i++) {
          var diamond = diamonds.create(i * 120, 0, 'diamond');
          diamond.body.gravity.y = 300;
          diamond.body.bounce.y = 0.7 + Math.random() * 0.2;
        }

        /* First Aid */
        firstaids = game.add.group();
        firstaids.enableBody = true;

        for (var i = 0; i < 2; i++) {
            var firstaid = firstaids.create(i * 60, 0, 'firstaid');
            firstaid.body.gravity.y = 300;
            firstaid.body.bounce.y = 0.7 + Math.random() * 0.2;
        }

        /* Score */
        scoreText = game.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });

        /* Health */
        healthText = game.add.text(584, 16, 'Health: 100', { fontSize: '32px', fill: '#000' });

        /* Cursors */
        cursors = game.input.keyboard.createCursorKeys();

    }

    function update() {
        /* Physics - Collisions */
        var hitPlatform = game.physics.arcade.collide(player, platforms);
        game.physics.arcade.collide(stars, platforms);
        game.physics.arcade.collide(diamonds, platforms);
        game.physics.arcade.collide(firstaids, platforms);
        game.physics.arcade.collide(baddie, platforms);

        /* Collect Stars */
        game.physics.arcade.overlap(player, stars, collectStar, null, this);

        /* Collect Diamonds */
        game.physics.arcade.overlap(player, diamonds, collectDiamond, null, this);

        /* Collect First Aid */
        game.physics.arcade.overlap(player, firstaids, collectFirstAid, null, this);

        /* Baddie Kills Player */
        game.physics.arcade.overlap(player, baddie, killPlayer, null, this);

        /* Player Movement */
        player.body.velocity.x = 0;

        if (cursors.left.isDown) {
            //  Move to the left
            player.body.velocity.x = -150;
            player.animations.play('left');
        }
        else if (cursors.right.isDown) {
            //  Move to the right
            player.body.velocity.x = 150;
            player.animations.play('right');
        }
        else {
            // Stand still
            player.animations.stop();
            player.frame = 4;
        }

        //  Allow the player to jump if they are touching the ground.
        if (cursors.up.isDown && player.body.touching.down) {
            player.body.velocity.y = -350;
        }

        baddie.x += 10;

    }

    function collectStar(player, star) {
        star.kill();
        score += 10;
        scoreText.text = 'Score: ' + score;
    }

    function collectDiamond(player, diamond) {
        diamond.kill();
        score += 100;
        scoreText.text = 'Score: ' + score;

    }

    function collectFirstAid(player, firstaid) {
        firstaid.kill();
        health += 50;
        healthText.text = 'Health: ' + health;
    }

    function killPlayer(player, baddie) {
        player.kill();
        health -= 0;
        healthText.text = 'Health: ' + health;
    }
};
