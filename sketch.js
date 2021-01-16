var bullet;
var wall;
var speed;
var weight;
var rect;
var thickness;


function setup() {
  createCanvas(1600,400);
 bullet=createSprite(50,200,25,50);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80);
  speed=Math.round(random(55,90));
  weight=Math.round(random(400,1500));
  bullet.velocityX=speed;
  thickness=random(22,83);
}

function draw() {
  background(255,255,255);  
  
 
  //speed=random(223,321);
 // weight=random(30,52);

  if (bullet.x-wall.x< (bullet.width+wall.width)/2&&wall.x-bullet.x<(bullet.width/2+wall.width/2)){
    bullet.velocityX=0;
    var deformation=(0.5* weight* speed* speed)/22509;
    if (deformation<100)
    {
      bullet.shapeColor="green";
    }
    if (deformation<180 && deformation>100)
    {
      bullet.shapeColor="yellow";
    }
    if (deformation>180)
    {
      bullet.shapeColor="red";
    }
  }

  drawSprites();
}


