
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var boy;
var tree;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11, mango12;
var stone;
var launcher;

function preload(){
	boy= loadImage("boy.png");
}

function setup() {
	createCanvas(1400, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2, 680, width, 40);
	tree = new Tree(1050, 680);
	stone = new Stone(235, 520,30);
	launcher = new Launcher(stone.body, {x:235, y:520});

	mango1=new Mango(1100,200,30);
	mango2=new Mango(1170,230,30);
	mango3=new Mango(1010,240,30);
	mango4=new Mango(1000,170,30);
	mango5=new Mango(1055,250,30);
	mango6=new Mango(1000,330,30);
	mango7=new Mango(900,330,40);
	mango8=new Mango(1140,250,40);
	mango9=new Mango(1100,330,40);
	mango10=new Mango(1200,300,40);
	mango11=new Mango(1120,150,40);
	mango12=new Mango(900,260,40);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  textSize(30);
  textAlign(CENTER);
  fill(0);
  text("PLUCKING MANGOES", 700, 40);
  textSize(20);
  fill("red");
  text("Drag the stone and release it to pluck as many Mangoes as you can!", 700, 80);
  fill("blue");
  textSize(25);
  text("Press SPACE for playing another chance!", 300, 120);

  ground.display();
  tree.display();
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
  image(boy, 200, 450, 200, 300);
  launcher.display();
  stone.display();

  detectollision(stone, mango1);
  detectollision(stone, mango2);
  detectollision(stone, mango3);
  detectollision(stone, mango4);
  detectollision(stone, mango5);
  detectollision(stone, mango6);
  detectollision(stone, mango7);
  detectollision(stone, mango8);
  detectollision(stone, mango9);
  detectollision(stone, mango10);
  detectollision(stone, mango11);
  detectollision(stone, mango12);

  drawSprites();
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
	launcher.fly();
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body, {x:235, y: 520});
		launcher.attach(stone.body);
	}
}

function detectollision(lstone, lmango){
	mangoPos = lmango.body.position;
	stonePos = lstone.body.position;

	var distance = dist(stonePos.x, stonePos.y, mangoPos.x, mangoPos.y);

	if(distance<=lmango.radius + lstone.radius){
		Matter.Body.setStatic(lmango.body, false);
	}
}



