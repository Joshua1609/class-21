var fixedRect, movingRect;
var ball1,ball2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  ball1=createSprite(10,100,50,50);
  ball1.velocityX=5;
ball1.shapeColor="blue";
ball1.debug=true;
ball2=createSprite(500,100,50,50);
  ball2.velocityX=-5;
ball2.shapeColor="blue";
ball2.debug=true;
ball3=createSprite(600,60,50,50);
  ball3.velocityY=5;
ball3.shapeColor="yellow";
ball3.debug=true;
ball4=createSprite(600,700,50,50);
  ball4.velocityY=-5;
ball4.shapeColor="yellow";
ball4.debug=true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 
 if (isTouching(movingRect,fixedRect)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
 }
 else {
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
 }
 bounce (ball1,ball2);
 bounce (ball3,ball4);
  drawSprites();
}

