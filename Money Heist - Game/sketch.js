var bg
var bgImage 
var game
var gameState=0
var playerCount
var player
var welcome 
var greeting
var greetingImage 

function preload(){
  bgImage=loadImage("2.jpg")
  greetingImage=loadImage("welcome.png")
}

function setup() {
  database=firebase.database()
  createCanvas(1000,600);
 bg= createSprite(500, 300, 50, 50);
 bg.addImage(bgImage)
 bg.scale=0.6

 greeting = createSprite(500, 300, 50, 50);
 greeting.addImage(greetingImage)
 greeting.scale=0.6
 greeting.visible=false
 
 game=new Game()
 game.start()
}

function draw() {
  background("black"); 
  if(playerCount===6){
game.update(1)
  }
  if(gameState===1){
    game.play()
    
  }
  drawSprites();
}