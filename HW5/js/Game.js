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

var bricks;

BasicGame.Game.prototype = {
    create: function () {
        //  Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!
        this.add.sprite(0, 0, 'mountains-bg');
        this.add.text(16, 16, 'Level 1', {font: '24px Verdana', fill: '#9999FF'});

        //bricks = this.game.add.group();

        //this.game.world.bounds = new Phaser.Rectangle(0, 0, 800, 600);
        //this.game.physics.startSystem(Phaser.Physics.P2JS);
        //this.game.physics.p2.setImpactEvents(true);
        //this.game.physics.p2.gravity.y = 250;

        var ground = this.add.sprite(0, 436, 'ground');
        ground.enableBody = true;

        var player = this.add.sprite(16, 350, 'player');
        //ground.body.immovable = true;
        //ground.enableBody = true;
        //ground.name = "ground";
        //this.game.physics.p2.enable(ground);
        //ground.body.static = true;


        /*brickCounter = 0;
    		levelFailed = false;
    		refresh.visible = true;
    		var currentMap = 'map'+ BasicGame.level;
    		var mapname = eval(currentMap);
    		for(var i=0; i < mapname.length;i++)
    		{
    			if(mapname[i][2] == "totem"){
    							totem = this.game.add.sprite(mapname[i][0],mapname[i][1], "totem");
    							totem.unbreakable=true;

    							this.game.physics.p2.enable(totem);

    							totem.body.onBeginContact.add(this.checkTotemCollision, this);
    						    totem.checkWorldBounds = true;
    						    totem.events.onOutOfBounds.add(this.totemOut, this);
    						}else{
    			var brick = bricks.create(mapname[i][0],mapname[i][1], mapname[i][2]);
    			this.game.physics.p2.enable(brick);


    			if(mapname[i][2] == "4x2_solid" || mapname[i][2] == "1x1_solid"|| mapname[i][2] == "1x2_solid" || mapname[i][2] == "1x3_solid" || mapname[i][2] == "1x4_solid" || mapname[i][2] == "2x1_solid" || mapname[i][2] == "3x1_solid"|| mapname[i][2] == "4x1_solid" || mapname[i][2] == "1x1_solid_circle")
    			{
    				brick.unbreakable=true;
    				brick.name = "bricksoild";
    				this.game.physics.p2.enable(brick);
    				if( mapname[i][2] == "1x1_solid_circle"){
    					 brick.body.setCircle(34);
    				}
    			}else{
    				brick.name = "brick";
    				brick.dead = false;
    				brickCounter++;
    				this.game.physics.p2.enable(brick);
    				if( mapname[i][2] == "1x1_destroy_circle"){
    					 brick.body.setCircle(34);
    				}
    			}

    			brick.body.onBeginContact.add(this.checkBrickCollision, this);
    		    brick.checkWorldBounds = true;
    		    brick.events.onOutOfBounds.add(this.brickOut, this);

    		}

    		this.game.input.onDown.add(this.destroyBlock, this);*/

        //this.buildMap(BasicGame.level);


        // Create a sprite at the center of the screen using the 'logo' image.
        //this.bouncy = this.game.add.sprite( this.game.world.centerX, this.game.world.centerY, 'logo' );
        // Anchor the sprite at its center, as opposed to its top-left corner.
        // so it will be truly centered.
        //this.bouncy.anchor.setTo( 0.5, 0.5 );

        // Turn on the arcade physics engine for this sprite.
        //this.game.physics.enable( this.bouncy, Phaser.Physics.ARCADE );
        // Make it bounce off of the world bounds.
        //this.bouncy.body.collideWorldBounds = true;

        // Add some text using a CSS style.
        // Center it in X, and position its top 15 pixels from the top of the world.
        //var style = { font: "25px Verdana", fill: "#9999ff", align: "center" };
        //var text = this.game.add.text( this.game.world.centerX, 15, "Build something amazing.", style );
        //text.anchor.setTo( 0.5, 0.0 );

        // When you click on the sprite, you go back to the MainMenu.
        //this.bouncy.inputEnabled = true;
        //this.bouncy.events.onInputDown.add( function() { this.quitGame(); }, this );
    },

    update: function() {
        //  Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!

        // Accelerate the 'logo' sprite towards the cursor,
        // accelerating at 500 pixels/second and moving no faster than 500 pixels/second
        // in X or Y.
        // This function returns the rotation angle that makes it visually match its
        // new trajectory.
        //this.bouncy.rotation = this.game.physics.arcade.accelerateToPointer( this.bouncy, this.game.input.activePointer, 500, 500, 500 );
    },

    quitGame: function() {
        //  Here you should destroy anything you no longer need.
        //  Stop music, delete sprites, purge caches, free resources, all that good stuff.

        //  Then let's go back to the main menu.
        this.state.start('MainMenu');
    },

    destroyBlock: function(pointer) {

    },



};
