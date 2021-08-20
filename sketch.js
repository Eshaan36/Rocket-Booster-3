var rocket
var bg1
var bg2
var bg3
var rocketImg
var bgImg
var obstacleImg,birdImg,planeImg
var obstacles
var obstacleGroup
var score = 0
//edges= createEdgeSprites();


function preload(){
    rocketImg = loadImage("Rocket png.png");
    bgImg = loadImage("Background .jpeg");
    bg2Img = loadImage("Background full.jpeg");
    birdImg = loadImage("Object_bird-removebg-preview.png");
   planeImg = loadImage("Object plane.png")
   astroidImg = loadImage("Meteor.png")
}
function setup(){
    createCanvas(1600,1200);
    bg1 = createSprite(600,300,50,50)
    bg1.addImage(bgImg)
    bg1.scale = 1;

    obstacleGroup = new Group();
    
    
    rocket = createSprite(600,500,50,50)
    rocket.addImage(rocketImg)
    rocket.scale = 0.2;
}
function draw(){
    background(0);

    if (keyIsDown(UP_ARROW)){
        rocket.velocityY = -6;
    }
    if (keyIsDown(LEFT_ARROW)){
        rocket.velocityX = -2;
    }
    if (keyIsDown(RIGHT_ARROW)){
        rocket.velocityX = 2;
    }
    console.log(rocket.y)
    if (rocket.y <= -100 ){
        bg1.addImage(bg2Img);
        bg1.scale = 1.35;
        rocket.y = 500;
    }
  

    if (rocket.y <= -30)
    {
    obstacleNew()
    }
    else {
        obstacle()
    }

   camera.position.x = rocket.position.x
   camera.position.y = rocket.position.y


    drawSprites();
}
function obstacle(){
    if (frameCount % 40 === 0 ){ 
        obstackles = createSprite(random(500,1000), 50);
        obstackles.velocityY = 10;
        var rand = Math.round(random(1,2));

switch(rand){
    case 1 : obstackles.addImage(birdImg);
    obstackles.scale = 0.1;
    break;
    case 2 : obstackles.addImage(planeImg);
    obstackles.scale = 0.1;
    break;
    default : break;
}
obstacleGroup.add(obstackles);
    }
}
    
    function obstacleNew(){
        if (frameCount % 20=== 0 ){ 
            var obstackles = createSprite(random(500,800), 50);
            obstackles.velocityY = 5;
            obstackles.scale = 0.1;
            obstackles.addImage(astroidImg);
    
    obstacleGroup.add(obstackles);
        }
    }