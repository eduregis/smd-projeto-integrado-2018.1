var corT = 5;
var corG = 255;
var charCod = 1;
var character;
var sizeStage;
var block;

function setup(){
	createCanvas(1024,768);
	sizeStage = 6;
	background(0);
	block = new Block(1, 5);
	if(sizeStage%2 == 0){
		character = new Character(width/2,height/2,sizeStage);	
	}else{
		character = new Character(width/2,height/2 - 200/sizeStage,sizeStage);
	}
	
}

function draw(){
	isometricGrid(sizeStage);
	character.drawCharacter();
	block.drawBlock();
}

function isometricGrid(mod){
	background(0);
	colorGrid();	
	var ver = 200/mod;
	var hor = 400/mod;
	for(var i = 0; i <= mod; i++){		
		line(width/2+ i*hor, height/2 - 200 + i*ver, width/2 - 400 + i*hor, height/2 + i*ver);
		line(width/2- i*hor, height/2 - 200 + i*ver, width/2 + 400 - i*hor, height/2 + i*ver);
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
		this.positionGrid = createVector(int(sizeStage/2),int(sizeStage/2));
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
		}
		if(this.stayMove){
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
		this.moveCharacter();	
	}

	moveCharacter(){
		switch(charCod){
			case 1:
				triangle(this.position.x - this.dim, this.position.y, this.position.x, this.position.y + this.dim/2, this.position.x + this.dim/2, this.position.y - this.dim/4);
				if(this.move) {
					if(this.positionGrid.x > 0){
						this.position.x+=2;
						this.position.y--;
						if (this.i == 1) this.positionGrid.x--;
					}else{

					}
					
				}
				break;
			case 2:
				triangle(this.position.x, this.position.y + this.dim/2, this.position.x - this.dim/2, this.position.y - this.dim/4, this.position.x + this.dim, this.position.y);
				if(this.move) {
					if(this.positionGrid.y > 0){
						this.position.x-=2;
						this.position.y--; 
						if (this.i == 1) this.positionGrid.y--;
					}else{

					}					 
				}
				break;
			case 3:
				triangle(this.position.x - this.dim/2, this.position.y + this.dim/4, this.position.x, this.position.y - this.dim/2, this.position.x + this.dim, this.position.y);
				if(this.move) {
					if(this.positionGrid.x < sizeStage){
						this.position.x-=2;
						this.position.y++;	
						if (this.i == 1) this.positionGrid.x++;
					}else{

					}				  
				}
				break;
			case 4:
				triangle(this.position.x - this.dim, this.position.y, this.position.x, this.position.y - this.dim/2, this.position.x + this.dim/2, this.position.y + this.dim/4);
				if(this.move) {
					if(this.positionGrid.y < sizeStage){
						this.position.x+=2;
						this.position.y++; 	
						if (this.i == 1) this.positionGrid.y++;
					}else{

					}				 
				}
				break;
		}
		fill(255);
		text(this.positionGrid.x + " , " + this.positionGrid.y,40,40);	
	}
}

class Block{
	constructor(x,y){
		this.positionGrid = createVector(x,y);
		this.position = createVector(width/2,height/2);
		print(this.positionGrid.x + " , " + this.positionGrid.y);
		if(this.positionGrid.x > sizeStage/2){
			for(var i = this.positionGrid.x; i > sizeStage/2; i--){
				this.position.x += int(400/sizeStage);
				this.position.y += int(200/sizeStage);
			}			
		}else{
			for(var i = this.positionGrid.x; i < sizeStage/2; i++){
				this.position.x -= int(400/sizeStage);
				this.position.y -= int(200/sizeStage);
			}
		}
		if(this.positionGrid.y > sizeStage/2){
			for(var i = this.positionGrid.y; i > sizeStage/2; i--){
				this.position.x -= int(400/sizeStage);
				this.position.y += int(200/sizeStage);
			}			
		}else{
			for(var i = this.positionGrid.y; i < sizeStage/2; i++){
				this.position.x += int(400/sizeStage);
				this.position.y -= int(200/sizeStage);
			}
		}
	}			

	drawBlock(){
		var mod = 200/sizeStage;
		fill(100);
		quad(this.position.x + mod, this.position.y - mod, this.position.x + mod, this.position.y, this.position.x, this.position.y + mod/2, this.position.x, this.position.y - mod/2);
		fill(150);
		quad(this.position.x - mod, this.position.y - mod, this.position.x - mod, this.position.y, this.position.x, this.position.y + mod/2, this.position.x, this.position.y - mod/2);
		fill(200);
		quad(this.position.x, this.position.y - mod/2, this.position.x - mod, this.position.y - mod, this.position.x, this.position.y - 3*mod/2, this.position.x + mod, this.position.y - mod);
	}
}

function keyReleased(){
	if((keyCode == 87) || (keyCode == 65) || (keyCode == 83) || (keyCode == 68)){
		if((character.i == 0) && (!character.move)){
			character.i = int(200/sizeStage);	
			character.move = true;	
			character.stayMove = true;
		}	
	}	
}