class Character{
	constructor(x,y,dim){
		this.position = createVector(x,y); // posição do personagem
		this.positionGrid = createVector(int(sizeStageX/2),int(sizeStageY/2)); // posição do personagem no grid.
		this.dim = 200/dim;	// dimensão no personagem, baseado no número de casas.
		this.move = false; // variável de controle do movimento, utilizando a interpolação.		
		this.i = 0;	// contador que permite continuidade ao movimento do personagem.
		this.direction = 0; // variável que informa para que direção o personagem está olhando. 0-) frente, 1-) esquerda, 2-) trás, 3-) direita.
		this.block = null; // variável que armazena o bloco que o personagem pode carregar.
	}

	updateCharacter(){
		this.drawCharacter(); // desenha o personagem mesmo se este estiver parado.
		if (this.i==0){
			this.move = false; // quando i chega a zero, significa que o personagem chegou no cruzamento desejado, então ele não irá mais se mover, até que outro comando seja dado.	
		}else{
			this.i--; // contador regressivo funcionando.
		}
		switch (actionCode){
			case 0: // tecla W, para cima.
				charCod = 1;					
				break;
			case 1: // tecla A, para à esquerda.
				if (this.direction != 3){
					this.direction++;
					charCod++;
				}else{
					this.direction = 0;
					charCod = 1;
				}

				break;				
			case 2: // tecla D, para a direita.
				if (this.direction != 0){
					this.direction--;
					charCod--;
				}else{
					this.direction = 3;
					charCod = 4;
				}															
				break;	
			case 3: // tecla R, para pegar ou colocar um bloco.
				charCod = 5;
				break;			
		}
		this.checkBlockCollision(); // checa colisão com algum bloco.
		this.moveCharacter(); // indo a parte de movimentação do personagem.
	}

	checkBlockCollision(){		
		switch(this.direction){ // utilizando a variável de controle para testar colisão.
			case 0:
				if(this.positionGrid.y > 0){ // testa se o personagem está na borda do grid, se sim, ele faria um teste de colisão com um objeto fora do escopo e daria erro, por isso esse teste.
					if(grid[this.positionGrid.x][this.positionGrid.y - 1] != null){ // baseado na posição do personagem, fazemos uma checagem se existe um bloco na posição em que o personagem está olhando.
						this.move = false; // caso tenha, impedimos o movimento colocando a variável de controle move para false.
					}
				}				
				break;
			case 1:
				if(this.positionGrid.x > 0){
					if(grid[this.positionGrid.x - 1][this.positionGrid.y] != null){
						this.move = false;
					}
				}				
				break;
			case 2:
				if(this.positionGrid.y < sizeStageY){
					if(grid[this.positionGrid.x][this.positionGrid.y + 1] != null){
						this.move = false;
					}
				}				
				break;
			case 3:
				if(this.positionGrid.x < sizeStageX){
					if(grid[this.positionGrid.x + 1][this.positionGrid.y] != null){
						this.move = false;
					}
				}				
				break;
		}
	}

	drawCharacter(){ // função que desenha o personagem.
		switch (this.direction){
				case 0:
					image(spr_up,this.position.x - 21,this.position.y - 83,69,86);	
					break;
				case 1:
					image(spr_left,this.position.x - 46,this.position.y - 83,69,86);
					break;				
				case 2:
					image(spr_down,this.position.x - 30,this.position.y - 83,52,86); 
					break;	
				case 3:
					image(spr_right,this.position.x - 20,this.position.y - 83,52,86);
					break;				
			}
	}

	moveCharacter(){
		switch(charCod){ // dando funções para cada tecla.
			case 1: //movimenta o personagem
				if(this.move){
					this.drawCharacter(); // desenha o personagem em movimento
					switch(this.direction){
					case 0: 						
						if(this.positionGrid.y > 0){ // verifica se o personagem está na borda do grid
							this.position.x+=2;
							this.position.y--; 
							if (this.i == 1){
								this.positionGrid.y--; // quando está no fim do movimento, a posição no grid do personagem é atualizada.
								actionIndex++;
							} 
						}
						break;
					case 1:						
						if(this.positionGrid.x > 0){
							this.position.x-=2;
							this.position.y--; 
							if (this.i == 1) {
								this.positionGrid.x--;
								actionIndex++;
							}
						}
						break;
					case 2:						
						if(this.positionGrid.y < sizeStageY){
							this.position.x-=2;
							this.position.y++; 
							if (this.i == 1){
								this.positionGrid.y++;
								actionIndex++;
							}
						}
						break;
					case 3: 
						if(this.positionGrid.x < sizeStageX){
							this.position.x+=2;
							this.position.y++; 
							if (this.i == 1) {
								this.positionGrid.x++;
								actionIndex++;
							}
						}
						break;
					}					 
				}
				break;
			case 2:
				this.drawCharacter(); // atualiza o desenha do personagem.
				if (!stayIndex){
					actionIndex++;
					stayIndex = true;
				}	
				break;
			case 3:
				this.drawCharacter(); // atualiza o desenha do personagem.
				if (!stayIndex){
					actionIndex++;
					stayIndex = true;
				}	
				break;
			case 4:
				this.drawCharacter(); // atualiza o desenha do personagem.
				if (!stayIndex){
					actionIndex++;
					stayIndex = true;
				}	
				break;
			case 5:				
				if(this.block == null){ // checamos se já existe um bloco armazenado como personagem.
					switch(this.direction){// de acordo com a direção que o personagem estiver olhando, pegamos o bloco à sua frente.
						case 0:
							if(this.positionGrid.y > 0){ // impede que o personagem tente pegar algo fora do grid											
								this.block = grid[this.positionGrid.x][this.positionGrid.y - 1]; // passamos o objeto para dentro do personagem.
								grid[this.positionGrid.x][this.positionGrid.y - 1] = null; // excluímos o objeto do cenário.								
							}
							charCod = 1; // mantém a posição do personagem
							break;
						case 1:
							if (this.positionGrid.x > 0){
								this.block = grid[this.positionGrid.x - 1][this.positionGrid.y];
								grid[this.positionGrid.x - 1][this.positionGrid.y] = null;								
							}
							charCod = 2;
							break;
						case 2:
							if(this.positionGrid.y < sizeStageY){
								this.block = grid[this.positionGrid.x][this.positionGrid.y + 1];
								grid[this.positionGrid.x][this.positionGrid.y + 1] = null;								
							}
							charCod = 3;
							break;
						case 3:
							if(this.positionGrid.x < sizeStageX){
								this.block = grid[this.positionGrid.x + 1][this.positionGrid.y];
								grid[this.positionGrid.x + 1][this.positionGrid.y] = null;								
							}
							charCod = 4;
							break;
					}
					if (this.block != null) {
						this.block.position = null;
						this.block.positionGrid = null;
					}
				}else{					
					var vectorPosition, vectorPositionGrid;
					switch(this.direction){ // caso o personagem já tenha um bloco consigo, temos que fazer ele soltar o bloco no chão.
						case 0:// os comentários do case 0 se aplicam igualmente a todos os outros cases.							 						
							if(this.positionGrid.y > 0){ // testamos se o personagem não está não está de frente para os limites da fase.	
								if(grid[this.positionGrid.x][this.positionGrid.y - 1] == null){ //testamos se já existe um objeto no local à frente do personagem.
									vectorPosition = createVector(this.position.x + 50, this.position.y - 25); // usamos a posição do personagem de referência para posicionar o bloco.
									this.block.position = vectorPosition; // passamos a referência para o bloco sendo carregado.
									vectorPositionGrid = createVector(this.positionGrid.x,this.positionGrid.y - 1); // usamos a posição do personagem no grid de referência para posicionar o bloco.
									this.block.positionGrid = vectorPositionGrid; // passamos também a referência para o bloco sendo carregado.					
									grid[this.positionGrid.x][this.positionGrid.y - 1] = this.block; // devolvemos o objeto para o cenário.
									this.block = null; // excluímos o objeto do personagem.								
								}
							}							
							charCod = 1;					
							break;
						case 1:
							if (this.positionGrid.x > 0){
								if(grid[this.positionGrid.x - 1][this.positionGrid.y] == null){
									vectorPosition = createVector(this.position.x - 50, this.position.y - 25);
									this.block.position = vectorPosition;
									vectorPositionGrid = createVector(this.positionGrid.x - 1,this.positionGrid.y);
									this.block.positionGrid = vectorPositionGrid;
									grid[this.positionGrid.x - 1][this.positionGrid.y] = this.block;
									this.block = null;
								}		
							}												
							charCod = 2;
							break;
						case 2:
							if(this.positionGrid.y < sizeStageY){
								if(grid[this.positionGrid.x][this.positionGrid.y + 1] == null){
									vectorPosition = createVector(this.position.x - 50, this.position.y + 25);
									this.block.position = vectorPosition;
									vectorPositionGrid = createVector(this.positionGrid.x,this.positionGrid.y + 1);
									this.block.positionGrid = vectorPositionGrid;
									grid[this.positionGrid.x][this.positionGrid.y + 1] = this.block;
									this.block = null;
								}	
							}													
							charCod = 3;
							break;
						case 3:
							if(this.positionGrid.x < sizeStageX){
								if(grid[this.positionGrid.x + 1][this.positionGrid.y] == null){
									vectorPosition = createVector(this.position.x + 50, this.position.y + 25);
									this.block.position = vectorPosition;
									vectorPositionGrid = createVector(this.positionGrid.x + 1,this.positionGrid.y);
									this.block.positionGrid = vectorPositionGrid;
									grid[this.positionGrid.x + 1][this.positionGrid.y] = this.block;
									this.block = null;
								}
							}							
							charCod = 4;
							break;
				}				
			}
			this.move = false;
			if (!stayIndex){
					actionIndex++;
					stayIndex = true;
				}			
		}
		textSize(16);
		fill(255);
		text(this.positionGrid.x + " , " + this.positionGrid.y,40,40);// mostra em que posição do grid o personagem está.
	}
}