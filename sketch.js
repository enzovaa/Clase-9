var cuadro;
function setup() {
  createCanvas(400,400);
  cuadro = createSprite(200,200,50,50);
  cuadro.shapeColor = "purple";

}

function draw() 
{
  background("lightblue");
  if (keyIsDown (RIGHT_ARROW)) {
    cuadro.position.x = cuadro.position.x + 5;
  }
  if (keyIsDown (LEFT_ARROW)) {
    cuadro.position.x = cuadro.position.x - 5;
  }
  if (keyIsDown (DOWN_ARROW)) {
    cuadro.position.y = cuadro.position.y + 5;
  }
  if (keyIsDown (UP_ARROW)) {
    cuadro.position.y = cuadro.position.y - 5;
  }
  drawSprites();
}




