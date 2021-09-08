var score =0;
var gun,bluebubble,redbubble, bullet, backBoard;
var gunImg,bubbleImg, bulletImg, blastImg, backBoardImg;
var redBubbleGroup, redBubbleGroup, bulletGroup;

var life =3;
var score=0;
var gameState=1

function preload(){
  gunImg = loadImage("gun1.png")
  blastImg = loadImage("blast.png")
  bulletImg = loadImage("bullet1.png")
  blueBubbleImg = loadImage("waterBubble.png")
  redBubbleImg = loadImage("redbubble.png")
  backBoardImg= loadImage("back.jpg")
}
function setup() {
  createCanvas(800, 800);

  backBoard= createSprite(50, width/2, 100,height);
  backBoard.addImage(backBoardImg)
  
  gun= createSprite(100, height/2, 50,50);
  gun.addImage(gunImg)
  gun.scale=0.2
  
  bulletGroup = createGroup();   
  blueBubbleGroup = createGroup();   
  redBubbleGroup = createGroup();
  
  heading= createElement("h1");
  scoreboard= createElement("h1");
  
  
}

function draw() {
  background("#BDA297");

  //display Score and number of lifes
  scoreboard.html("Score: "+score);
  scoreboard.style("color:red");
  scoreboard.position(width-200,20);
  if(gameState===1){
    gun.y=mouseY  


    if(keyDown("space")){

   shootbullets();

    }
    bluebubblespawn();
    redbubblespawn();
    handleBubbleColision(redBubbleGroup);
    handleBubbleColision(blueBubbleGroup);
    drawSprites();
  }
     
}

function shootbullets(){
bullet=createSprite(gun.x+110,gun.y-35);
bullet.addImage(bulletImg);
bullet.velocityX=10;
bullet.scale=0.1;
bullet.lifetime=100;
bulletGroup.add(bullet);
}

function bluebubblespawn(){
  if(frameCount%100===0){
  bluebubble=createSprite(800,random(50,750));
  bluebubble.addImage(blueBubbleImg);
  bluebubble.velocityX=-5;
  bluebubble.scale=0.1;
  bluebubble.lifetime=100;
  blueBubbleGroup.add(bluebubble);
}
  }
  
  function redbubblespawn(){
    if(frameCount%200===0){
    redbubble=createSprite(800,random(50,750));
    redbubble.addImage(redBubbleImg);
    redbubble.velocityX=-5;
    redbubble.scale=0.1;
    redbubble.lifetime=100;
    redBubbleGroup.add(redbubble);
  }
    }

function handleBubbleColision(BubbleGroup){
  if(life>0){
  
    score=score+1;




  }

  for(var i =0;i<BubbleGroup.length;i++){
   if(BubbleGroup.get(i).isTouching(bulletGroup)){
    BubbleGroup.get(i).addImage(blastImg);
     
          
     
       }
     

  }
  
 


}