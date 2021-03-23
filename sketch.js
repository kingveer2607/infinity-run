var ground, groundImg;
var runner, runnerImg;
var obstacleImg, coinImg;
var gameState = "PLAY";
var obstacleGrp, coinGrp;

function preload(){
groundImg = loadImage("ground.png");
runnerImg = loadImage("runner.png");
obstacleImg = loadImage("obstacle.png");
}

function setup() {
 createCanvas(600,600);
 ground = createSprite(300,300,20,20);
ground.addImage("ground1",groundImg);
ground.scale = 2;
ground.velocityY = 5;
  
 runner = createSprite(310,500,20,20);
runner.addImage("runner1",runnerImg);
runner.scale = 0.5;
  runner.debug = true;
  runner.setCollider("rectangle",10,5)
  
obstacleGrp = new Group();
}

function draw() {
if(gameState === "PLAY"){
  background("white");
if(ground.y > 600){
  ground.y = 300;
}
 if(keyDown(RIGHT_ARROW)){
   runner.x = runner.x+10
 }
   if(keyDown(LEFT_ARROW)){
   runner.x = runner.x-10
 }
  if(obstacleGrp.isTouching(runner)){
    gameState = "END";
  }
if(gameState === "END"){
 background("black") ;
  stroke("yellow");
    fill("yellow");
    textSize(30);
    text("GameOver",230,250);
  
   obstacleGrp.destroyEach();
   ground.destroy();
  runner.destroy();
}
  obstacles();
    drawSprites()
}
}
function obstacles(){
  if(frameCount%Math.round(random(100,500)) === 0){
  var obstacle = createSprite(r,10,20,20);
  obstacle.addImage("obstacle1",obstacleImg);
  obstacle.scale = 0.6;
  obstacle.velocityY = 4;
     obstacle.debug = true;
   var r = Math.round(random(1,3));
  if(r === 1){
    obstacle.x = 130;
  }else if(r === 2){
    obstacle.x = 300;
  }else if (r === 3){
    obstacle.x = 480;
  }
   obstacleGrp.add(obstacle);
  }
}
