const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var myEngine;
var myWorld;

var ground,ball;

function setup() {
  createCanvas(400,400);
  
  myEngine = Engine.create();
  myWorld = myEngine.world;

  ground_options = {
    isStatic : true
  }
  ground = Bodies.rectangle(200,200,400,20,ground_options);

  World.add(myWorld,ground);
  console.log(ground.isStatic);
   
  ball_options = {
    restitution : 1.5
  }
  ball = Bodies.circle(200,100,25,ball_options);
  World.add(myWorld,ball);
}

function draw() {
  background(0);
   
  Engine.update(myEngine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  circle(ball.position.x,ball.position.y,50);
}