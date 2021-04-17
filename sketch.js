
const Engine= Matter.Engine;
const World=  Matter.World;
const Bodies=  Matter.Bodies;
const Constraint= Matter.Constraint;
var bg,bgs;
function preload() {
  bg = loadImage("bg.png");
  
  }
function setup() {
  createCanvas(3000, 900);
  engine = Engine.create();
  world = engine.world;
  
  superman1=new Superman(200,280,30,30);
  sling1=new Sling(superman1.body,{x: 200, y: 120})
  block1=new Block(600,100,40,40);
  block2=new Block(600,100,40,40);
  block3=new Block(600,100,40,40);
  block4=new Block(600,100,40,40);
  block5=new Block(600,100,40,40);
  block6=new Block(600,100,40,40);
  block7=new Block(550,100,40,40);
  
  block8=new Block(450,100,40,40);
  block9=new Block(450,100,40,40);
  block10=new Block(450,100,40,40);
  block11=new Block(500,100,40,40);
  block12=new Block(500,100,40,40);
  block13=new Block(500,100,40,40);
  block14=new Block(500,100,40,40);

  block15=new Block(550,100,40,40);
  block16=new Block(550,100,40,40);
  block17=new Block(550,100,40,40);
  block18=new Block(550,100,40,40);
  block19=new Block(550,100,40,40);
  block20=new Block(550,100,40,40);
  block21=new Block(550,100,40,40);

  ground1=new Ground(450,500,500,10);
  ground2=new Ground(850,450,100,20);
  monster1=new Monster(850,0,50,50);
}

function draw() {
  background(bg);
  Engine.update(engine);

  superman1.display();
  sling1.display();
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
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  ground1.display();

  monster1.display();
  //drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(superman1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  sling1.fly();

}

