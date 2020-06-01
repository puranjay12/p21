var bullet, wall, thickness
var speed, weight

function setup() {
  createCanvas(1600,400);
  speed = random(223,321)
  weight = random(30,52)
  bullet = createSprite(50,200,50,50)
  bullet.velocityX = speed
bullet.shapeColor = "red"
  wall = createSprite(1500,200,thickness,200)
  wall.shapeColor = "yellow"
  thickness = random(22,83)
}

function draw() {
  background(0,0,0); 
   
   if(hasCollided(bullet, wall)){
     bullet.velocityX = 0
     var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
     if (damage>10){
       wall.shapeColor = color (255,0,0)
     }
     if(damage<10){
       wall.shapeColor = color (0,255,0)
     }
   }

  drawSprites();
}
function hasCollided(bullet,wall){
bulletrightedge = bullet.x+bullet.width
wallLeftedge = wall.x
if(bulletrightedge>=wallLeftedge){
  return true
}
else{
  return false
}
}