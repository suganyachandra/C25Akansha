
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
//var ball;
//var ball1;\
var paperObject;
var box1,box2,box3;
//var bin;
var dustbinObj;

function preload()
{
  binImg = loadImage("dustbingreen.png");
}

function setup() {
    createCanvas(1600, 700);


    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    ground = new Ground(width/2,670,width,20);

    //ball1 = new Ball(200,460,70);
    paperObject = new Ball (200,460,80)
   // dustbinObj = new Box (750,640);
    bin = createSprite(964,560,20,20);
    bin.addImage(binImg);
    bin.scale = 0.6;
    box1 = new Box(902,590,10,120);
    box2 = new Box(962,650,130,10);

    box3 = new Box(1024,590,10,120);
    //this . image = new Box(950,640);
    Engine.run(engine);
  
}


function draw() {
    rectMode(CENTER);
    background("grey");

    //ball1.display();
    paperObject.display();
    ground.display();
   //dustbinObj.display();

    box1.display();
    box2.display();
    box3.display();
    // ellipseMode(RADIUS);
      // ellipse(ball1.position.x,ball1.position.y,20,20);
    // keyPressed();
    drawSprites();
 
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
   Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:100,y:-50});
  }
}



