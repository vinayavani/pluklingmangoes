
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,stoneObj;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1 =new mango(1100,100,30);
    mango2 =new mango(1000,100,30);
    mango3=new mango (900,200,30);
    mango4 =new mango(1110,210,30);
    mango5 =new mango(1000,200,30);
    mango6 =new mango(1090,40,30);
    mango7 =new mango(1220,210,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stoneobj=new stone(230,410,30);
	Engine.run(engine);

}

function draw() {

  background(230);
  
  image(boy ,200,340,200,300);
  

  treeObj.display();
  stoneobj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  groundObject.display();

  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);


  detectollision();
  
}

function detectollision(stone,mango){
 mangoBodyPosition=mango.body.position
 stoneobjBodyPosition=stoneobj.body.position

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

if(distance<=mango.r+stone.r){
Matter.Body.setStatic(mango.body,false)
}
}

function keypressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stoneobj.body,{x:235,y:420})
    launcherObject.attach(stoneObj.body);

  }
}