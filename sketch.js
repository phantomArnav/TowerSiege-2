const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground
var box
var slingshot
var stand;
function setup() {
  createCanvas(800,600);
  engine = Engine.create();
    world = engine.world;

    ground =new Ground(600,height,1200,20);
    stand= new Ground(475,265,250,10)
   block16 = new Block(370,240,30,40)
   block15 = new Block(400,240,30,40)
   block14 = new Block(430,240,30,40)
   block13 = new Block(460,240,30,40)
   block12 = new Block(490,240,30,40)
   block11 = new Block(520,240,30,40)
   block10 = new Block(550,240,30,40)
   //level3
   block9 = new Block(400,200,30,40)
   block8 = new Block(430,200,30,40)
   block7 = new Block(460,200,30,40)
   block6 = new Block(490,200,30,40)
   block5 = new Block(520,200,30,40)
  //level2
  block4 = new Block(430,160,30,40)
  block3 = new Block(460,160,30,40)
  block2 = new Block(490,160,30,40)
  //top
  block1 = new Block(460,120,30,40)
  ball = new Ball(150,180,20)
  
  slingshot = new SlingShot(ball.body,{x:150,y:180})
  Engine.run(engine)
}

function draw() {
  background("cyan");  
text(mouseX+","+mouseY,mouseX,mouseY)
text("Press Space To Get Another Chance To Play!!",120,50)


stand.display();  
ground.display();

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
ball.display();
slingshot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
 slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(ball.body);
  }
}
