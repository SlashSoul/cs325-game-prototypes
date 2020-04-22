"use strict";

BasicGame.LevelOne = function(game) {

};

/*var blocks;
var blockCounter;
var bricksDestroyed;
var bricks;*/
var blocks;
var bricks;
var blockfx;
var brickfx;
var player;
/*var levelFailed;
var nextLevel;
var playerDead;
var restartButton;*/

BasicGame.LevelOne.prototype = {
  create: function() {
    this.game.world.bounds = new Phaser.Rectangle(0, 0, 800, 600);
    this.game.physics.startSystem(Phaser.Physics.P2JS);
    this.game.physics.p2.setImpactEvents(true);
    this.game.physics.p2.gravity.y = 250;
    this.add.sprite(0, 0, 'mountains-bg');
    this.add.text(16, 16, 'Level 1', {font: '24px Verdana', fill: '#9999FF'});
    this.add.button(16, 534, 'back', this.quitGame, this);
    this.add.button(584, 16, 'restart', this.restartStage, this);

    blockfx = this.game.add.audio('blockfx', 0.5, false);
    brickfx = this.game.add.audio('brickfx', 0.5, false);

    player = this.game.add.sprite(400, 250, 'player');
    blocks = this.game.add.group();
    bricks = this.game.add.group();

    player.unbreakable = true;
    blocks.unbreakable = false;
    bricks.unbreakable = true;

    bricks.create(400, 550, 'brick');

    blocks.create(400, 500, 'block');
    blocks.create(400, 450, 'block');
    blocks.create(400, 400, 'block');
    blocks.create(400, 350, 'block');
    blocks.create(400, 300, 'block');

    this.game.physics.p2.enable([blocks, bricks, player]);

    //this.game.input.onDown.add(this.destroyBlock, this);

    /*
    this.bricks.unbreakable = true;
    this.player.unbreakable = true;
    this.blocks.inputEnabled = true;
    this.blocks.inputEnableChildren = true;

    this.blocks.create(400, 500, 'block');
    this.blocks.create(400, 450, 'block');
    this.blocks.create(400, 400, 'block');
    this.blocks.create(400, 350, 'block');
    this.blocks.create(400, 300, 'block');

    levelFailed = false;
    nextLevel = false;*/

    /*this.game.add.sprite(0, 0, 'mountains-bg');
    this.game.add.text(16, 16, 'Level 1', {font: '24px Verdana', fill: '#9999FF'});

    restartButton = this.game.add.sprite(584, 16, 'restart');
    restartButton.inputEnabled = true;
    restartButton.events.onInputDown.add(this.listener, this);

    playerDead = false;
    bricksDestroyed = false;

    bricks = this.game.add.group();

    Maps

    this.game.world.bounds = new Phaser.Rectangle(0, 0, 800, 600);
    this.game.physics.startSystem(Phaser.Physics.P2JS);
    this.game.physics.p2.setImpactEvents(true);
    this.game.physics.p2.gravity.y = 250;

		// building the totem
		this.buildMap();

		emitter = this.game.add.emitter(0, 0, 200);
		emitter.makeParticles('star');
		emitter.gravity = 20;
		emitter.minParticleScale = 0.25;
		emitter.maxParticleScale = 0.75;
		emitter.setAll('anchor.x', 0.5);
	  emitter.setAll('anchor.y', 0.5);
		emitter.minParticleSpeed.setTo(-400, -400);
	  emitter.maxParticleSpeed.setTo(600, 600);
		emitter.lifespan = 1;*/
  },

  update: function() {

  },

  restartStage: function() {
    this.state.start('LevelOne');
  },

  quitGame: function() {
    this.state.start('MainMenu');
  }

};
