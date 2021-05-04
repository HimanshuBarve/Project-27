
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  bobDiameter=40;
  startBobPostionX=width/2
  startBobPostionY=height/4+400
 
  bob1=new Bob(startBobPostionX-bobDiameter*2,startBobPostionY,bobDiameter/2);
  bob2=new Bob(startBobPostionX-bobDiameter*1,startBobPostionY,bobDiameter/2);
  bob3=new Bob(startBobPostionX,startBobPostionY,bobDiameter/2);
  bob4=new Bob(startBobPostionX+bobDiameter*1,startBobPostionY,bobDiameter/2);
  bob5=new Bob(startBobPostionX+bobDiameter*2,startBobPostionY,bobDiameter/2);
  

    roof = new Roof(width/2,height/4,width/5 ,20);
  chain1= new Chain(bob1.body,roof.body,-bobDiameter*2,0);// two Variables Only 
   chain2= new Chain (bob2.body,roof.body,-bobDiameter*1,0);
  chain3= new Chain(bob3.body,roof.body,0*2,0);
 chain4= new Chain(bob4.body,roof.body,bobDiameter*1,0);
   chain5= new Chain(bob5.body,roof.body,bobDiameter*2,0);
}


function draw() {
  rectMode(CENTER);
  background(255);
  roof.display();
chain1.display();
  chain2.display();
chain3.display();
chain4.display();
chain5.display();
  bob1.display();
  bob2.display();
bob3.display();
bob4.display();
bob5.display();

 
}
function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-10,y:-10});

  }
}



