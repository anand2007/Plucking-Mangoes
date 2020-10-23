
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree;
var ground;
var stone;
var boy, boyImage;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11, mango12, mango13, mango14, mango15;
var bg;
var launcher;
//var lmango, lstone;
//var ground2;

function preload()
{
	boyImage = loadImage("boy.png");
	bg = loadImage("bg.jpg");
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = new Stone(140,500,20,20);
	

	boy = createSprite(200,580,20,20);
	boy.addImage(boyImage);
	boy.scale = 0.11;
	


	tree = new Tree(700,410,200,200);
	ground = new Ground(600,700,1200,120);
	//ground2 = new Ground(100,600,100,100);
	mango1 = new Mango(700,210,15);
	mango2 = new Mango(600,230,15);
	mango3 = new Mango(650,250,15);
	mango4 = new Mango(750,200,15);
	mango5 = new Mango(700,300,15);
	mango6 = new Mango(780,300,15);
    mango7 = new Mango(580,340,15);
    mango8 = new Mango(830,340,15);
	mango9 = new Mango(780,400,15);
    mango10 = new Mango(880,400,15);
    mango11 = new Mango(480,380,15);
    mango12 = new Mango(580,410,15);
    mango13 = new Mango(680,410,15);
    mango14 = new Mango(620,380,15);
	mango15 = new Mango(500,320,15);
	launcher=new Launcher(stone.body,{x:140,y:500});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
  textSize(20);
  fill("red");
  textFont("Algerian");
  text("Press Space to try once more!",490,100);
  tree.display();
  ground.display();
  //ground2.display();
  stone.display();
  
  launcher.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display(); 
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display();
  mango15.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);
  detectCollision(stone,mango12);
  detectCollision(stone,mango13);
  detectCollision(stone,mango14);
  detectCollision(stone,mango15);
  
  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}


function mouseReleased()
{
	launcher.fly();
	//stone.isStatic = false;
}

function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	  if(distance<=lmango.r+lstone.r){
		  Matter.Body.setStatic(lmango.body,false);
	  }
   }
   
   function keyPressed(){
	   if(keyCode===32){
		   Matter.Body.setPosition(stone.body,{x:235,y:420})
		   launcher.attach(stone.body);
	   }
   }

