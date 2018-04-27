var corT = 5;
var corG = 255;
var charCod = 1;
var character;
var sizeStage;

function setup(){
	createCanvas(1024,768);
	sizeStage = 8;
	background(0);
	character = new Character(width/2,height/2,sizeStage);
}

function draw(){
	isometricGrid(sizeStage);
	character.drawCharacter();
}



function isometricGrid(mod){
	background(0);
	colorGrid();	
	var ver = 400/mod;
	var hor = 200/mod;
	for(var i = 0; i <= mod; i++){		
		line(width/2+ i*ver, height/2 - 200 + i*hor, width/2 - 400 + i*ver, height/2 + i*hor);
		line(width/2- i*ver, height/2 - 200 + i*hor, width/2 + 400 - i*ver, height/2 + i*hor);
	}	
}

function colorGrid(){
	if((corG > 255) || (corG < 125))
		corT = -corT;
	corG += corT;	
		stroke(0,corG,255);	
}

class Character{
	constructor(x,y,dim){
		this.position = createVector(x,y);		
		this.dim = 200/dim;		
		this.move = false;
		this.stayMove = false;
		this.i = 0;		
	}

	drawCharacter(){		
		if (this.i==0){
			this.move = false;	
		}else{
			this.i--;
		}if(this.stayMove){
			switch (keyCode){
				case 87:
					charCod = 1;
					break;
				case 65:
					charCod = 2;
					break;
				case 83:
					charCod = 3;
					break;
				case 68:
					charCod = 4;
					break;				
			}
			this.stayMove = false;	
		}	
		
			
		switch(charCod){
			case 1:
				triangle(this.position.x - this.dim, this.position.y, this.position.x, this.position.y + this.dim/2, this.position.x + this.dim/2, this.position.y - this.dim/4);
				if(this.move) {
					this.position.x+=2;
					this.position.y--; 
				}
				break;
			case 2:
				triangle(this.position.x, this.position.y + this.dim/2, this.position.x - this.dim/2, this.position.y - this.dim/4, this.position.x + this.dim, this.position.y);
				if(this.move) {
					this.position.x-=2;
					this.position.y--; 
				}
				break;
			case 3:
				triangle(this.position.x - this.dim/2, this.position.y + this.dim/4, this.position.x, this.position.y - this.dim/2, this.position.x + this.dim, this.position.y);
				if(this.move) {
					this.position.x-=2;
					this.position.y++; 
				}
				break;
			case 4:
				triangle(this.position.x - this.dim, this.position.y, this.position.x, this.position.y - this.dim/2, this.position.x + this.dim/2, this.position.y + this.dim/4);
				if(this.move) {
					this.position.x+=2;
					this.position.y++; 
				}
				break;
		}		
	}
}

function keyReleased(){
	if((character.i == 0)&&(!character.move)){
		character.i = 25;	
		character.move = true;	
		character.stayMove = true;
	}	
}