
var corT = 5;
var corG = 255;
var charCod = 1;



function setup(){
	createCanvas(1024,768);
	background(0);
}

function draw(){
	move(10);
}

function move(mod){
	isometricGrid(mod);
	drawCharacter(mod);
}

function isometricGrid(mod){
	background(0);
	colorGrid();	
	var ver = 400/mod;
	var hor = 200/mod;
	for(var i = 0; i <= mod; i++){		
		line(width/2 + i*ver, height/2 - 200 + i*hor, width/2 - 400 + i*ver, height/2 + i*hor);
		line(width/2 - i*ver, height/2 - 200 + i*hor, width/2 + 400 - i*ver, height/2 + i*hor);
	}	
}

function colorGrid(){
	if((corG > 255) || (corG < 125))
		corT = -corT;
	corG += corT;	
		stroke(0,corG,255);	
}

function drawCharacter(mod){
	var dim = 200/mod;
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
	switch(charCod){
		case 1:
			triangle(width/2 - dim, height/2, width/2, height/2 + dim/2, width/2 + dim/2, height/2 - dim/4);
			break;
		case 2:
			triangle(width/2, height/2 + dim/2, width/2 - mod/2, height/2 - dim/4, width/2 + dim, height/2);
			break;
		case 3:
			triangle(width/2 - dim/2, height/2 + dim/4, width/2, height/2 - dim/2, width/2 + dim, height/2);
			break;
		case 4:
			triangle(width/2 - dim, height/2, width/2, height/2 - dim/2, width/2 + dim/2, height/2 + dim/4);
			break;

	}
	
}

