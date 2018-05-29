class Obstacle{
	constructor(x,y,id){
		this.id = id;
		this.positionGrid = createVector(x,y); // recebe a posição no grid que o bloco será inicialmente colocado.
		this.position = createVector(centerGridX,centerGridY); // posição do bloco. 
		this.drawController = true;	// variável de controle para ajustar a posição do bloco.
		this.status = 0;
		
	}			

	drawObject(){
		if(this.drawController){
			if(this.positionGrid.x > int(sizeStageX/2)){ // verifica a posição do bloco e faz os ajustes necessários. 
				for(var i = this.positionGrid.x ; i > int(sizeStageX/2); i--){ 
					this.position.x += 50; 
					this.position.y += 25;
				}			
			}else if(this.positionGrid.x < int(sizeStageX/2)){
				for(var i = this.positionGrid.x ; i < int(sizeStageX/2); i++){
					this.position.x -= 50;
					this.position.y -= 25;
				}
			}
			if(this.positionGrid.y > int(sizeStageY/2)){
				for(var i = this.positionGrid.y; i > int(sizeStageY/2); i--){
					this.position.x -= 50;
					this.position.y += 25;
				}			
			}else if(this.positionGrid.y < int(sizeStageY/2)){
				for(var i = this.positionGrid.y; i < int(sizeStageY/2); i++){
					this.position.x += 50;
					this.position.y -= 25;
				}
			}
			this.drawController = false; // alterando a drawController para que não entre de novo na função e tire o bloco do seu lugar., até ele ser reposicionado pelo jogador.
		}
		switch(this.id){
			case 0:
				image(spr_block,this.position.x - 30,this.position.y - 45);
				break;
			case 1:
				image(spr_enemy_idle,this.position.x - 40,this.position.y - 60,85,85);
				break;
			case 2:
				if(this.status == 0) image(spr_press_btn_0,this.position.x - 15,this.position.y - 75);
				else image(spr_press_btn_1,this.position.x - 15,this.position.y - 75);
				break;		
		}		
	}
}

function addBlock(x,y){
	if ((x >= 0) && (x <= sizeStageX) && (y >= 0) && (y <= sizeStageY)){ // impede que blocos fora do grid sejam criados.
		if((x != character.positionGrid.x) || (y != character.positionGrid.y)){ // impede que blocos sejam criados em cima do personagem.
			block = new Obstacle(x, y, 0); // cria um bloco na posição especificada.
			grid[x][y] = block; // insere o bloco criado acima no grid.
		}
		
	}	
}

function addEnemy(x,y){
	if ((x >= 0) && (x <= sizeStageX) && (y >= 0) && (y <= sizeStageY)){ // impede que blocos fora do grid sejam criados.
		if((x != character.positionGrid.x) || (y != character.positionGrid.y)){ // impede que blocos sejam criados em cima do personagem.
			block = new Obstacle(x, y, 1); // cria um bloco na posição especificada.
			grid[x][y] = block; // insere o bloco criado acima no grid.
		}
		
	}	
}

function addPressButton(x,y){
	if ((x >= 0) && (x <= sizeStageX) && (y >= 0) && (y <= sizeStageY)){ // impede que blocos fora do grid sejam criados.
		if((x != character.positionGrid.x) || (y != character.positionGrid.y)){ // impede que blocos sejam criados em cima do personagem.
			block = new Obstacle(x, y, 2); // cria um bloco na posição especificada.
			grid[x][y] = block; // insere o bloco criado acima no grid.
		}
		
	}	
}

function drawObjects(){ // percorre a matriz do grid e desenha os blocos que lá existem.
	for(var i = 0; i <= sizeStageX; i++){
		for(var j = 0; j <= sizeStageY; j++){
			if(grid[i][j] != null){ // checa se o objeto é nulo, se não, ele desenha o bloco.
				grid[i][j].drawObject(); 		
			}		
		}
	}
}