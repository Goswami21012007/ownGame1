var bg
var ground,player,animal1,animal2,animal3,animal4
function setup() {
  createCanvas(windowWidth,windowHeight);
  ground=createSprite(1176,576,windowWidth+1000,10)
  player=createSprite(windowWidth/2,373,50,50)
//bg=createSprite(643,304,500,900)
//bg.shapeColor="black"
}

function draw() {
  background(255,255,255);  
  text ("x"+mouseX+",y"+mouseY,200,100)
  drawSprites();
}