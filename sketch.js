
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var ground;
var stone1;
var stone2;
var rubber;
var sand1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	hammer = new Hammer(100,100)
	ground = new Ground(600,690,1200,20)
	stone1 = new Stone(900,600,100,100)
	stone2 = new Stone(400,600,60,60)
	rubber = new Rubber()
	// sand1 = new Sand(500,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  hammer.display();
  ground.display();
  stone1.display("black");
  stone2.display("red");
  rubber.display("blue")
//   sand1.display("blue")


  drawSprites();
 
}



