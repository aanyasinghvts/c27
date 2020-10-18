
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5,rope1,rope2,rope3,rope4,rope5,roof1;

function setup() {
	createCanvas(800, 800);
	engine = Engine.create();
	world = engine.world;

	roof1= new roof(400,150,400,20);

	bob1= new bob(200,300,100);
	rope1= new rope(bob1.body,roof1.body,bobDiameter*2,0);
	bob2= new bob(300,300,100);
	rope2= new rope(bob2.body,roof1.body,bobDiameter*2,0);
	bob3= new bob(400,300,100);
	rope3= new rope(bob3.body,roof1.body,bobDiameter*2,0);
	bob4= new bob(500,300,100);
	rope4= new rope(bob4.body,roof1.body,bobDiameter*2,0);
	bob5= new bob(600,300,100);
	rope5= new rope(bob5.body,roof1.body,bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof1.display();
  bob1.display();
  rope1.display();
  bob2.display();
  rope2.display();
  bob3.display();
  rope3.display();
  bob4.display();
  rope4.display();
  bob5.display();
  rope5.display();

}



