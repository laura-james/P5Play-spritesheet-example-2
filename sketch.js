let sprite_sheet;
let firework;

function preload(){

  mysheet2 = loadAnimation("spritesheet2.png",{ frameSize: [100,100], frames: 16})
}
function setup() {
  new Canvas();
  //world.gravity.y = 10;
  monster = new Sprite();
	monster.img = 'monster.png';
	monster.diameter = 32;
  msgbox = new Sprite(300,100,500,50,"static");
  msgbox.color = "magenta";
  msgbox.textSize = 14;
}//end setup function

function draw() {
  background(0);

  secs = Math.floor(millis()/1000)
  msgbox.text = secs;
  if (secs >= 10){
    msgbox.text = "GAME OVER";
    msgbox.color = "cyan"
  }
  if (secs%10 == 0){
    new Sprite(300,300,10)

  }
  
  monster.speed = 5;
  if (kb.pressing('up')) {
		monster.direction = -90;
	} else if (kb.pressing('down')) {
		monster.direction = 90;
	} else if (kb.pressing('left')) {
		monster.direction = 180;
	} else if (kb.pressing('right')) {
		monster.direction = 0;
	} else {
	  monster.speed = 0;
	}
	
	

}//end draw function


