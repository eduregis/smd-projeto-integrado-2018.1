class ResetButton{
	constructor(x,y,w,h){
		this.position = createVector(x,y);
		this.dimension = createVector(w,h);
		this.status = 0;
	}
	draw(){
		switch(this.status){
			case 0:
				this.basic(); // caso o mouse não esteja em cima do botão.
				if(insideRect(mouseX,mouseY,this.position.x - this.dimension.x/2, this.position.y - this.dimension.y/2, this.dimension.x, this.dimension.y)){
					if(!mouseIsPressed) // impede que ao clicar em um botão, outros ao estarem sob o mouse, mudem de status.
						this.status = 1;
				}
				break;
			case 1:
				this.above(); // caso o mouse estaja em cima do botão.
				if(!insideRect(mouseX,mouseY,this.position.x - this.dimension.x/2, this.position.y - this.dimension.y/2, this.dimension.x, this.dimension.y)){
					this.status = 0;
				}else if(mouseIsPressed){ // caso pressionado o botão, zera todos os vetores com botões.
					reset();
					this.status = 2;
				}							
				break;
			case 2:
				this.click(); // caso o botão seja clicado.
				if(insideRect(mouseX,mouseY,this.position.x - this.dimension.x/2, this.position.y - this.dimension.y/2, this.dimension.x, this.dimension.y)){
					 if (!mouseIsPressed) this.status = 1;
				}else{
					this.status = 0;
				}				
				break;
		}
	}
	basic(){
		fill(100);
		rect(this.position.x, this.position.y, this.dimension.x, this.dimension.y);
		fill(0);
		text("Resetar",this.position.x, this.position.y);
	}
	above(){
		fill(50);
		rect(this.position.x, this.position.y, this.dimension.x, this.dimension.y);
		fill(0);
		text("Resetar",this.position.x, this.position.y);
	}
	click(){
		fill(0);
		rect(this.position.x, this.position.y, this.dimension.x, this.dimension.y);
		fill(0);
		text("Resetar",this.position.x, this.position.y);
	}
}

function reset(){
	grid = [];
	fillGridNull();
	levelController = true; // reseta a fase.
	procedureIndex = 0;
	actionIndex = 0;
	decisionIfIndex = 0;
	decisionElseIndex = 0;
	P_DKey = 0;
	basicButtons = [];
	loadButtons();
}