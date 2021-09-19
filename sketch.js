var bg , sleep , brush , gym , eat , drink , move
var astronaut
var background1
var edges



function preload(){

bg= loadImage("iss.png")
sleep= loadAnimation("sleep.png")
brush= loadAnimation("brush.png")
gym= loadAnimation("gym1.png","gym2.png")
eat= loadAnimation("eat1.png","eat2.png")
drink= loadAnimation("drink1.png","drink2.png")
move= loadAnimation("move.png","move1.png")

}

function setup() {
createCanvas(windowWidth, windowHeight);
 
 astronaut = createSprite(750, 400);
 astronaut.addAnimation("sleeping", sleep);
 astronaut.scale = 0.1; 

 edges = createEdgeSprites();

 
}

function draw() {
  background(bg);  
  astronaut.bounceOff(edges)

  if (keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing")
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
    }

    if (keyDown("DOWN_ARROW")){
      astronaut.addAnimation("gymming", gym);
      astronaut.changeAnimation("gymming")
      astronaut.y = 350;
      astronaut.velocityX = 0;
      astronaut.velocityY = 0;
      }
  
      if (keyDown("LEFT_ARROW")){
        astronaut.addAnimation("eating", eat);
        astronaut.changeAnimation("eating")
        astronaut.y = 350;
        astronaut.velocityX = 0;
        astronaut.velocityY = 0;
        }

        if (keyDown("RIGHT_ARROW")){
          astronaut.addAnimation("drinking", drink);
          astronaut.changeAnimation("drinking")
          astronaut.y = 350;
          astronaut.velocityX = 0;
          astronaut.velocityY = 0;
          }

          if (keyDown("M")){
            
            astronaut.addAnimation("moving", move);
            astronaut.changeAnimation("moving");
            astronaut.y = 350;
            astronaut.velocityX = 0;
            astronaut.velocityY = 0;
            }
  

  drawSprites();  

}

