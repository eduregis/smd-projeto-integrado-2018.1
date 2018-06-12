class Prop{
	constructor(x,y,id){
		this.id = id;
		this.positionGrid = createVector(x,y); // recebe a posição no grid que o bloco será inicialmente colocado.
		this.position = createVector(centerGridX,centerGridY); // posição do bloco. 
		this.drawController = true;
	}			

	drawProp(){		
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
		switch(this.id){
			case 0:
				image(spr_prop_00,this.position.x - 20,this.position.y - 45, 40, 40); // desenha o prop.
				break;
			case 1:
				image(spr_prop_01,this.position.x - 20,this.position.y - 45, 40, 40); // desenha o prop.
				break;
			case 2:
				image(spr_prop_02,this.position.x - 20,this.position.y - 45, 40, 40); // desenha o prop.
				break;
			case 3:
				image(spr_prop_03,this.position.x - 20,this.position.y - 45, 40, 40); // desenha o prop.
				break;
			case 4:
				image(spr_prop_04,this.position.x - 20,this.position.y - 45, 40, 40); // desenha o prop.
				break;
			case 5:
				image(spr_prop_05,this.position.x - 20,this.position.y - 45, 40, 40); // desenha o prop.
				break;
			case 6:
				image(spr_prop_06,this.position.x - 20,this.position.y - 45, 40, 40); // desenha o prop.
				break;			
			default:
				break;		
		}		
	}
}

function addProp(x,y){
	if ((x >= 0) && (x <= sizeStageX) && (y >= 0) && (y <= sizeStageY)){ // impede que props fora do grid sejam criados.
		if((x != character.positionGrid.x) || (y != character.positionGrid.y)){ // impede que props sejam criados em cima do personagem.
			prop = new Prop(x, y, 0); // cria um prop na posição especificada.
			gridProp[x][y] = prop; // insere o prop criado acima no grid.
		}		
	}	
}

function drawProps(){ // percorre a matriz do grid e desenha os props que lá existem.
	if(gridProp[character.positionGrid.x][character.positionGrid.y] != null){
		gridProp[character.positionGrid.x][character.positionGrid.y] = null;
	}
	for(var i = 0; i <= sizeStageX; i++){
		for(var j = 0; j <= sizeStageY; j++){
			if(gridProp[i][j] != null){ // checa se o prop é nulo, se não, ele desenha o bloco.
				gridProp[i][j].drawProp(); 		
			}		
		}
	}
}
