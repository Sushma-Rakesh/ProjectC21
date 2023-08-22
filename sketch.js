var player ,player_flying;
var sky ,sky_bg;

var gamestate = "play";





function preload(){
    player_flying=loadAnimation("flappyBird1.png","flappyBird2.png","flappyBird3.png")
    sky_bg=loadImage("sky.jpg")
}

function setup() {
createCanvas(windowWidth,windowHeight);
 

var player=createSprite(160,windowHeight/2,70,70);
 player.addAnimation("flying",player_flying);
 player.scale=0.1

 var sky=createSprite(windowWidth/2,windowHeight/2)
 sky.addImage("sky1",sky_bg)
 sky.scale=4


 player.depth=sky.depth+1
}

function draw() {
    if(gamestate==="play"){
        if(keyDown("SPACE")){
        player.x = width/2;
        }
    }
    
    
    



 drawSprites()
}