class ExitButton{
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
						soundOverButtonMenu();
						this.status = 1;
				}
				break;
			case 1:
				this.above(); // caso o mouse estaja em cima do botão.
				if(!insideRect(mouseX,mouseY,this.position.x - this.dimension.x/2, this.position.y - this.dimension.y/2, this.dimension.x, this.dimension.y)){
					this.status = 0;
				}else if(mouseIsPressed){
					reset();
					pageCode = "menu";
					isLevel = false;
					levelController = true;
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
		image(spr_btn_exit_0,this.position.x - this.dimension.x/2, this.position.y - this.dimension.y/2);
	}
	above(){
		image(spr_btn_exit_1,this.position.x - this.dimension.x/2, this.position.y - this.dimension.y/2);
	}
	click(){
		image(spr_btn_exit_1,this.position.x - this.dimension.x/2, this.position.y - this.dimension.y/2,65,35);
	}
}