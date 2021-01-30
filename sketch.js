var cat;
var mouse;
var bg;
function preload() {
    catImage = loadAnimation("images/cat1.png");
    catImage2 = loadAnimation("images/cat2.png", "images/cat3.png");
    catImage3 = loadAnimation("images/cat4.png");
    mouseImage = loadAnimation("images/mouse1.png");
    mouseImage2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImage3 = loadAnimation("images/mouse4.png");
    bgImage = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    cat = createSprite(870,600);
    cat.addAnimation("catSleeping", catImage);
    cat.scale = 0.2;
    mouse = createSprite(200,600);
    mouse.addAnimation("mouseStanding", mouseImage);
    mouse.scale = 0.15;
}

function draw() {

    background(bgImage);
   if (cat.x - mouse.x < (cat.width-mouse.width)/2 ){
cat.velocityX = 0;
cat.addAnimation("catLastimg",catImage3);
cat.x = 300;
cat.scale = 0.2;
cat.changeAnimation("catLastimg");
mouse.addAnimation("mouseLastimg", mouseImage3);
mouse.scale = 0.15;
mouse.changeAnimation("mouseLastimg");
   }
    drawSprites();
}


function keyPressed(){

 if (keyCode === LEFT_ARROW){
     cat.velocityX = -5;
     cat.addAnimation("catRunning", catImage2);
     cat.changeAnimation("catRunning");
     mouse.addAnimation("mouseTeasing", mouseImage2);
     mouse.changeAnimation("mouseTeasing");
 }


}
