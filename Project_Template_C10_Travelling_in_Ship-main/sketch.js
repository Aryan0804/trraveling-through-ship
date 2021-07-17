var seaImg,sea;
var shipImg,ship;


function preload(){
  seaImg=loadImage("sea.png");
  shipImg1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  sea.addImage(shipImg);
  ship.addAnimation(shipImg);
  
}                                                                     

function setup(){
  createCanvas(400,400);
  background("blue");
  sea = createSprite(170,150,20,10);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  ship = createSprite(200,200,10,10);
  shipImg1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  ship.addAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  ship.scale = 0.4;

  if(sea.x < 0){
    sea.x = sea.width/2;
  }

}

function draw(){
  background(0);
  if(sea.x < 0){
    sea.x = sea.width/2;
  }
  drawSprites();
} 
