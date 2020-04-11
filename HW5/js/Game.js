"use strict";

BasicGame.Game = function(game) {
    //  When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:
    /*
    this.game;      //  a reference to the currently running game (Phaser.Game)
    this.add;       //  used to add sprites, text, groups, etc (Phaser.GameObjectFactory)
    this.camera;    //  a reference to the game camera (Phaser.Camera)
    this.cache;     //  the game cache (Phaser.Cache)
    this.input;     //  the global input manager. You can access this.input.keyboard, this.input.mouse, as well from it. (Phaser.Input)
    this.load;      //  for preloading assets (Phaser.Loader)
    this.math;      //  lots of useful common math operations (Phaser.Math)
    this.sound;     //  the sound manager - add a sound, play one, set-up markers, etc (Phaser.SoundManager)
    this.stage;     //  the game stage (Phaser.Stage)
    this.time;      //  the clock (Phaser.Time)
    this.tweens;    //  the tween manager (Phaser.TweenManager)
    this.state;     //  the state manager (Phaser.StateManager)
    this.world;     //  the game world (Phaser.World)
    this.particles; //  the particle manager (Phaser.Particles)
    this.physics;   //  the physics manager (Phaser.Physics)
    this.rnd;       //  the repeatable random number generator (Phaser.RandomDataGenerator)

    //  You can use any of these from any function within this State.
    //  But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.
    */

    // For optional clarity, you can initialize
    // member variables here. Otherwise, you will do it in create().
    this.bouncy = null;
};

var ground;
var objects;
var player;
var status = true;
var walls;

BasicGame.Game.prototype = {
    create: function() {
        this.game.world.bounds = new Phaser.Rectangle(0, 0, 800, 600);
        this.game.physics.startSystem(Phaser.Physics.P2JS);
        this.game.physics.p2.setImpactEvents(true);
        this.game.physics.p2.gravity.y = 250;
        this.add.sprite(0, 0, 'mountains-bg');
        this.add.text(16, 16, 'Level 1', {font: '24px Verdana', fill: '#9999FF'});

        // Add the interactive objects (i.e. totem, breakable objects, and unbreakable objects)
        ground = this.add.sprite(0, 550, 'ground');
        ground.enableBody = true;
        player = this.add.sprite(400, 200, 'player');
        objects = this.game.add.group();
        walls = this.game.add.group();

        walls.create(500, 500, 'wall');
        walls.create(450, 500, 'wall');
        walls.create(400, 500, 'wall');
        walls.create(350, 500, 'wall');
        walls.create(300, 500, 'wall');

        objects.inputEnableChildren = true;
        objects.create(400, 450, 'object');
        objects.create(400, 400, 'object');
        objects.create(400, 350, 'object');
        objects.create(400, 300, 'object');
        objects.create(400, 250, 'object');

        // Enable physics on the interactive objects
        this.game.physics.p2.enable([walls, objects, player, ground]);

        // Define controls and interactions
        //objects.events.onChildInputDown.add(function() { this.destroyObject(); }, this);
        objects.onChildInputDown.add(function() { this.destroyObject(); }, this);
        //player.body.onBeginContact.add(setDeath, this);
    },

    update: function() {
        player.collides(ground, setDeath, this);
        //this.game.physics.p2.collides();

        //this.game.physics.p2.collide(player, this.world);

        /*this.game.physics.p2.collide(player, ground);
        this.game.physics.p2.collide(player, objects);
        this.game.physics.p2.collide(player, walls);
        this.game.physics.p2.collide(ground, walls);
        this.game.physics.p2.collide(ground, objects);
        this.game.physics.p2.collide(objects, walls);*/
        // Accelerate the 'logo' sprite towards the cursor,
        // accelerating at 500 pixels/second and moving no faster than 500 pixels/second
        // in X or Y.
        // This function returns the rotation angle that makes it visually match its
        // new trajectory.
        //this.bouncy.rotation = this.game.physics.arcade.accelerateToPointer( this.bouncy, this.game.input.activePointer, 500, 500, 500 );

        //player.body.onBeginContact.add(this.checkPlayerCollision, this);
    },

    destroyObject: function() {
        this.game.add.text(this.game.world.centerX, this.game.world.centerY, 'Click!', {font: '24px Verdana', fill: '#9999ff'});
        //obj.remove();
        //this.state.start('MainMenu');

        // Here you should destroy anything you no longer need.
        // Stop music, delete sprites, purge caches, free resources, all that good stuff.

        // Then let's go back to the main menu.
        //this.state.start('MainMenu');
    }

    function setDeath(body, bodyB, shapeA, shapeB, equation) {
        if (!body) {
            this.game.add.text(this.game.world.centerX, this.game.world.centerY, 'Game Over!', {font: '24px Verdana', fill: '#9999FF'});
            this.game.pause();
        }

    }

    // death, function: pause() restart()


};
