
var corT = 5;
var corG = 255;

function setup(){
	createCanvas(1024,768);
	background(0);
}

function draw(){
	isometricGrid(6);
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
	if(keyIsPressed){
		stroke(255,0,0);
	}else{
		stroke(0,corG,255);
	}	
}