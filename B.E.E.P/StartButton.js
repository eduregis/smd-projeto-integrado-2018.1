class StartButton{
	constructor(x,y,w,h){
		this.position = createVector(x,y);
		this.dimension = createVector(w,h);
		this.status = 0;
		this.count = 0;
	}
	draw(){
		if(this.count != 0) this.count--;
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
				}else if(mouseIsPressed){
					if(this.count == 0){
						starter = true; // libera uma ação da tabela de ações.
						stayIndex = false; // ajuda a manter a variável que percorre a tabela de ações no lugar.
						this.status = 2;
						this.count = 26;
					}					
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
	} // placeholder
	basic(){
		image(spr_btn_start,this.position.x - this.dimension.x/2, this.position.y - this.dimension.y/2);
	} // placeholder
	above(){
		fill(50);
		rect(this.position.x, this.position.y, this.dimension.x, this.dimension.y);
		fill(0);
		text("Ação",this.position.x, this.position.y);
	} // placeholder
	click(){
		fill(0);
		rect(this.position.x, this.position.y, this.dimension.x, this.dimension.y);
		fill(0);
		text("Ação",this.position.x, this.position.y);
	}
}