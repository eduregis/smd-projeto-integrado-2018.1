class Portal{
	constructor(x,y){
		this.positionGrid = createVector(x,y); // recebe a posição no grid que o bloco será inicialmente colocado.
		this.position = createVector(centerGridX,centerGridY); // posição do bloco. 
		this.drawController = true;
	}			

	drawPortal(){		
		if(this.drawController){
			if(this.positionGrid.x > int(sizeStageX/2)){ // verifica a posição do bloco e faz os ajustes necessários. 
				for(var i = this.positionGrid.x ; i > int(sizeStageX/2); i--){ 
					this.position.x += 50; // ajuste horizontal.
					this.position.y += 25; // ajuste vertical.
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
			this.drawController = false; // alterando a drawController para que não entre de novo na função e tire o prop do seu lugar., até ele ser reposicionado pelo jogador.
		}		
		// Os desenhos entram aqui.
		rect(this.position.x,this.position.y,50,50);		
	}
}

function addPortal(x,y,id){
	if ((x >= 0) && (x <= sizeStageX) && (y >= 0) && (y <= sizeStageY)){ // impede que props fora do grid sejam criados.
		if((x != character.positionGrid.x) || (y != character.positionGrid.y)){ // impede que props sejam criados em cima do personagem.
			portal = new Portal(x, y); // cria um prop na posição especificada.
			gridPortal[x][y] = portal; // insere o prop criado acima no grid.
		}			
	}		
}	


function drawPortals(){ // percorre a matriz do grid e desenha os props que lá existem.	
	for(var i = 0; i <= sizeStageX; i++){
		for(var j = 0; j <= sizeStageY; j++){
			if(gridPortal[i][j] != null){ // checa se o prop é nulo, se não, ele desenha o bloco.
				gridPortal[i][j].drawPortal(); 		
			}		
		}
	}
}
