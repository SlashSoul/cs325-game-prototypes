"use strict";

BasicGame.LevelThree = function(game) {
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
};

var blockCounter;
var blocks;
var bricks;
var blockfx;
var brickfx;
var player;

BasicGame.LevelThree.prototype = {
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

    bricks.inputEnableChildren = true;
    bricks.create(500, 550, 'brick');
    bricks.create(450, 550, 'brick');
    bricks.create(400, 550, 'brick');
    bricks.create(350, 550, 'brick');
    bricks.create(300, 550, 'brick');

    blocks.inputEnableChildren = true;
    blocks.create(400, 500, 'block');
    blocks.create(400, 450, 'block');
    blocks.create(400, 400, 'block');
    blocks.create(400, 350, 'block');
    blocks.create(400, 300, 'block');
    blockCounter = 5;

    this.game.physics.p2.enable([blocks, bricks, player]);

    blocks.onChildInputDown.add(this.destroyBlock, this);
    bricks.onChildInputDown.add(this.hitBrick, this);

    player.inputEnabled = true;
    player.events.onInputDown.add(function() { brickfx.play(); });
    player.body.onBeginContact.add(this.checkDeath, this);

  },

  update: function() {

  },

  destroyBlock: function(block) {
    blockfx.play();
    block.kill();
    blockCounter -= 1;

    if (blockCounter == 0) {
      player.paused = true;
      this.add.text(288, 288, 'Level Completed!', {font: '24px Verdana', fill: '#9999FF'});
      this.add.button(584, 534, 'next', this.nextStage, this);
    }
  },

  hitBrick: function(brick) {
    brickfx.play();
  },

  checkDeath: function() {
    player.checkWorldBounds = true;
    if (player.inWorld == false) {
      this.setDeath();
    }
    //player.events.onOutOfBounds.add(this.setDeath, this);
  },

  setDeath: function() {
    player.paused = true;
    blocks.inputEnableChildren = false;
    this.add.text(288, 288, 'Game Over!', {font: '24px Verdana', fill: '#9999FF'});
  },

  nextStage: function() {
    this.state.start('LevelFour');
  },

  restartStage: function() {
    this.state.start('LevelThree');
  },

  quitGame: function() {
    this.state.start('MainMenu');
  }

};
