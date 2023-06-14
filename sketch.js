let sprite_sheet;
let firework;

function preload(){
  firework = loadAnimation("Firework.png",{ frameSize: [256,256], frames: 30})
  //mysheet = loadAnimation("myspritesheet.png",{ frameSize: [32,32], frames: 11})
  mysheet2 = loadAnimation("spritesheet2.png",{ frameSize: [100,100], frames: 16})
}
function setup() {
  new Canvas();

}//end setup function

function draw() {
  background(0);


}//end draw function
function mousePressed(){
  let s = createSprite(mouseX, mouseY, 100)
  s.addAnimation(mysheet2)
  s.velocity.x = random(-5,5)
  s.rotationSpeed = 2
  s.life=200 //num frames to live for
}
