var car, wall;
var speed, weight;
function setup() {
  createCanvas(800,400);
 car= createSprite(50, 200, 50, 50);
speed=random(55,90);
weight=random(400,1500);
wall=createSprite(600,200,20, height/2);
car.velocityX=speed;

}

function draw() {
  background(255,255,255);  
  drawSprites();
  if (wall.x-car.x <(car.width+wall.width)/2){
    car.velocityX=0;
var deformation =0.5*weight*speed*speed/22509

if (deformation>180){
car.shapeColor=color(255,0,0);
}
if (deformation>100&&deformation<180){
  car.shapeColor=color(230,230,0);
  }
  if (deformation<100){
    car.shapeColor=color(0,255,0);
    }
  }

}