
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ground
var wal1,wall2,wall3

function preload()
{
	dustBinImage=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1200,500);


	engine = Engine.create();
	world = engine.world;


	Engine.run(engine);
  
	ball= new Paper(200,50,30)

	ground= new Ground(600,490,1200,20)

	wall1=new Box(950,420,20,100)

	wall2= new Box(1050,420,20,100)

	wall3= new Box(1000,470,100,20)
}


function draw() {
  rectMode(CENTER);
  background("white");
  


ground.display();



wall1.display();
wall2.display();
wall3.display()

image(dustBinImage,1000,400,150,150)

ball.display();

}
 function keyPressed(){
	if(keyCode=== UP_ARROW){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:200,y:-150})
	}
 }





