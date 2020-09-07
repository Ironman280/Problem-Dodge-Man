const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

score = 0;

var engine, world;
var life;
var wall, monster;
var player_img, monster_img, wall_img, background_img;

var PLAY = 1;
var END = 0;

var gameState = PLAY;


function preload() {
  player_img = loadImage("User.png");
  monster_img = loadImage("Monster.png");
  wall_img = loadImage("Wall.png");
  background_img = loadImage("Background.jpg");
}

function setup() {
  createCanvas(1260,700);
  
  background = createSprite(500,400);
  background.addImage("Background", background_img);
  background.scale = 1.5;



  
  

  player = createSprite(500,650);
  player.addImage("Player", player_img);
  player.scale = 0.2;
}

function draw() {
  if(keyDown(RIGHT_ARROW) && player.x < 1125){
    player.x = player.x + 5;

  }

  if(keyDown(LEFT_ARROW) && player.x > 0){
    player.x = player.x - 5;
  }

  if(gameState === PLAY){
    var rand1 = random(50,1000);
    spawnWalls(rand1);

    spawnMonsters();
  }
   else if(gameState === END){
    
  }
  drawSprites();
  textSize(20);
  fill("white");
  text("Your Score: " + score, 20,75);
}
function spawnWalls(rand){
  if(frameCount%60===0){
    wall = createSprite(rand,650);
    wall.addImage("Wall", wall_img);
    wall.scale = 0.3;
    score = score + 2;
    wall.visible = false;  
    }

}

function spawnMonsters(){
  if(frameCount%80===0){
    monster = createSprite(random(50,1000),650);
    monster.addImage("Monster", monster_img);
    monster.scale = 0.2;
    
  }
}