
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var invisibleGround

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}


function setup() {
createCanvas(600,200);  
  
  
monkey=createSprite(80,100,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(600,150,950,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
    invisibleGround = createSprite(150,150,400,10);
  invisibleGround.visible = false;
  

  foodGroup= createGroup();
  obstacleGroup= createGroup();
  
  score=0;
  
}


function draw() {
  background("white");
  
    if (ground.x < 600){
      ground.x = ground.width/2;
    }  
  
      if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
      }
  
      monkey.velocityY = monkey.velocityY + 0.8
    monkey.collide(invisibleGround);
  
  text("Surrvival time:"+score, 500,50);
  
  if(monkey.isTouching(foodGroup)){
    score=score+1;
  }
  
  
spawnBanana();
  spawnObstacles();


  drawSprites();
}

function spawnBanana() {

  if (frameCount % 200=== 0) {
    var banana = createSprite(600,200,40,10);
    banana.y = 50;
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    

    banana.lifetime = 200;
    

    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    foodGroup.add(banana)

  }
}

function spawnObstacles(){
 if (frameCount % 200 === 0){
   obstacle = createSprite(300,130,10,40);
   obstacle.velocityX = -(6 + score/100);
     obstacle.addImage(obstacleImage);  

   
       
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
   
obstacleGroup.add(obstacle);

 }
}



