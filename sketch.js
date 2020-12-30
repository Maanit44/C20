var a,b;

function setup() {
 createCanvas(800,800);
a = createSprite(400, 200, 50, 50);
a.shapeColor = "cyan";
b = createSprite(400, 400, 30, 30);
b.shapeColor = "cyan";
}

function draw() {
background("green");  
console.log(a.y - b.y);
if(a.x - b.x < a.width/2 && b.x - a.x <a.width/2 && a.y - b.y < a.height/2 && b.y - a.y <a.height/2  ){
  a.shapeColor = "red";
  b.shapeColor = "red";
}
else{ 
a.shapeColor = "cyan";
b.shapeColor = "cyan";

}
a.x = World.mouseX;
a.y = World.mouseY;

  drawSprites();
}