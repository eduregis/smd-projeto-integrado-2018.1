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
		this.x = x;
		this.y = y;
		this.dim = 200/dim;		
		this.move = false;
		this.i = 0;		
	}

	drawCharacter(){		
		if (this.i==0){
			this.move = false;
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
		}else{
			this.i--;
		}		
		switch(charCod){
			case 1:
				triangle(this.x - this.dim, this.y, this.x, this.y + this.dim/2, this.x + this.dim/2, this.y - this.dim/4);
				if(this.move) {
					this.x+=2;
					this.y--; 
				}
				break;
			case 2:
				triangle(this.x, this.y + this.dim/2, this.x - this.dim/2, this.y - this.dim/4, this.x + this.dim, this.y);
				if(this.move) {
					this.x-=2;
					this.y--; 
				}
				break;
			case 3:
				triangle(this.x - this.dim/2, this.y + this.dim/4, this.x, this.y - this.dim/2, this.x + this.dim, this.y);
				if(this.move) {
					this.x-=2;
					this.y++; 
				}
				break;
			case 4:
				triangle(this.x - this.dim, this.y, this.x, this.y - this.dim/2, this.x + this.dim/2, this.y + this.dim/4);
				if(this.move) {
					this.x+=2;
					this.y++; 
				}
				break;
		}		
	}
}

function keyReleased(){
	if((character.i == 0)&&(!character.move)){
		character.i = 25;	
		character.move = true;
	}	
}