class Button{
	constructor(x,y,w,h,text){
		this.position = createVector(x,y);
		this.dimension = createVector(w,h);
		this.text = text;
		this.estado = 0;
	}
	draw(){
		rectMode(CENTER);
		textAlign(CENTER);
		textSize(16);
		switch(this.estado){
			case 0:
				this.basico();
				if(noRetangulo(mouseX,mouseY,this.position.x - this.dimension.x/2, this.position.y - this.dimension.y/2, this.dimension.x, this.dimension.y)){
					this.estado = 1;
				}
				break;
			case 1:
				this.emcima();
				if(!noRetangulo(mouseX,mouseY,this.position.x - this.dimension.x/2, this.position.y - this.dimension.y/2, this.dimension.x, this.dimension.y)){
					this.estado = 0;
				}else if(mouseIsPressed){
					this.estado = 2;
				}							
				break;
			case 2:
				this.click();				
				if(noRetangulo(mouseX,mouseY,this.position.x - this.dimension.x/2, this.position.y - this.dimension.y/2, this.dimension.x, this.dimension.y)){
					 if (!mouseIsPressed) this.estado = 1;
				}else{
					this.estado = 0;
				}				
				break;
		}
	}
	basico(){
		stroke(0);
		fill(200);
		rect(this.position.x, this.position.y, this.dimension.x, this.dimension.y);
		fill(30);
		text(this.text, this.position.x, this.position.y);
	}
	emcima(){
		stroke(0);
		fill(100);
		rect(this.position.x, this.position.y, this.dimension.x, this.dimension.y);
		fill(30);
		text(this.text, this.position.x, this.position.y);
	}
	click(){
		stroke(0);
		fill(0);
		rect(this.position.x, this.position.y, this.dimension.x,this.dimension.y);
		fill(200);		
		text(this.text, this.position.x, this.position.y);
	}
}

/*function setup(){
	createCanvas(800,600);
	b = new Botao(100,100,100,30,"ok");
}

function draw(){
	background(255);
	b.draw();

}*/

function between(max, min, val){
	if(val <= max){
		if(val >= min){
			return true;
		}
	}
	return false;
}

function noRetangulo(mx,my,x,y,w,h){
	if(between(x+w,x,mx)){
		if(between(y+h,y,my)){
			return true;
		}
	}
	return false;
}

function loadButtons(){ // placeholders?
	button1 = new Button(100,700,80,80,"teste 1");
	basicButtons.push(button1);
	button2 = new Button(200,700,80,80,"teste 2");
	basicButtons.push(button2);
	button3 = new Button(300,700,80,80,"teste 3");
	basicButtons.push(button3);
	button4 = new Button(400,700,80,80,"teste 4");
	basicButtons.push(button4);
	button5 = new Button(500,700,80,80,"teste 5");
	basicButtons.push(button5);
	button6 = new Button(600,700,80,80,"teste 6");
	basicButtons.push(button6);
}

function drawButtons(){
	for(var i = 0; i < 6; i++){
		basicButtons[i].draw();
	}	
}