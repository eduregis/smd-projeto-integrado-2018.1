class Character{
	constructor(x,y){
		this.position = createVector(x,y); // posição do personagem
		this.positionGrid = createVector(int(sizeStageX/2),int(sizeStageY/2)); // posição do personagem no grid.
		this.move = false; // variável de controle do movimento, utilizando a interpolação.		
		this.i = 0;	// contador que permite continuidade ao movimento do personagem.
		this.direction = 0; // variável que informa para que direção o personagem está olhando. 0-) frente, 1-) esquerda, 2-) trás, 3-) direita.
		this.block = null; // variável que armazena o bloco que o personagem pode carregar.
		this.prop = null;
	}

	updateCharacter(){
		print(learnLock);
		this.drawCharacter(); // desenha o personagem mesmo se este estiver parado.
		if (this.i==0){
			this.move = false; // quando i chega a zero, significa que o personagem chegou no cruzamento desejado, então ele não irá mais se mover, até que outro comando seja dado.	
		}else{
			this.i--; // contador regressivo funcionando.
		}
		switch (actionCode){
			case 0: // andar para frente do personagem.
				charCod = 1;
				if (!stayIndex){
					if(currentTab == "Procedure") procedureIndex++;
					else actionIndex++;
					stayIndex = true;					
				}					
				break;
			case 1: // vira à esquerda.
				if (this.direction != 3){
					this.direction++;
					charCod++;
				}else{
					this.direction = 0;
					charCod = 1;
				}
				if (!stayIndex){
					if(currentTab == "Procedure") procedureIndex++;
					else if (currentTab == "DecisionIf") decisionIfIndex++;
					else if (currentTab == "DecisionElse") decisionElseIndex++;
					else actionIndex++;
					stayIndex = true;										
				}
				break;				
			case 2: // vira à direita.
				if (this.direction != 0){
					this.direction--;
					charCod--;
				}else{
					this.direction = 3;
					charCod = 4;
				}
				if (!stayIndex){
					if(currentTab == "Procedure") procedureIndex++;
					else if (currentTab == "DecisionIf") decisionIfIndex++;
					else if (currentTab == "DecisionElse") decisionElseIndex++;
					else actionIndex++;
					stayIndex = true;					
				}															
				break;	
			case 3: //  pega ou coloca um bloco.
				charCod = 5;
				if (!stayIndex){
					if(currentTab == "Procedure") procedureIndex++;
					else if (currentTab == "DecisionIf") decisionIfIndex++;
					else if (currentTab == "DecisionElse") decisionElseIndex++;
					else actionIndex++;
					stayIndex = true;					
				}
				break;
			case 4: //  ataca um inimigo.
				charCod = 6;
				if (!stayIndex){
					if(currentTab == "Procedure") procedureIndex++;
					else if (currentTab == "DecisionIf") decisionIfIndex++;
					else if (currentTab == "DecisionElse") decisionElseIndex++;
					else actionIndex++;
					stayIndex = true;					
				}
				break;
			case 5: //  aperta um botão.
				charCod = 7;
				if (!stayIndex){
					if(currentTab == "Procedure") procedureIndex++;
					else if (currentTab == "DecisionIf") decisionIfIndex++;
					else if (currentTab == "DecisionElse") decisionElseIndex++;
					else actionIndex++;
					stayIndex = true;					
				}
				break;			
		}
		this.checkCollision(); // checa colisão com algum bloco.
		this.moveCharacter(); // indo a parte de movimentação do personagem.
	}

	checkCollision(){		
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
					if(this.move){
						if ((this.i <= 26) && (this.i > 17)) image(spr_up_0,this.position.x - 21,this.position.y - 83,69,86);
						else if ((this.i <= 17) && (this.i > 8)) image(spr_up_1,this.position.x - 21,this.position.y - 83,69,86);
						else image(spr_up_2,this.position.x - 21,this.position.y - 83,69,86);
					} else{
						image(spr_up_1,this.position.x - 21,this.position.y - 83,69,86);
					}									
					break;
				case 1:
					if(this.move){
						if ((this.i <= 26) && (this.i > 17)) image(spr_left_0,this.position.x - 46,this.position.y - 83,69,86);
						else if ((this.i <= 17) && (this.i > 8)) image(spr_left_1,this.position.x - 46,this.position.y - 83,69,86);
						else image(spr_left_2,this.position.x - 46,this.position.y - 83,69,86);
					} else{
						image(spr_left_1,this.position.x - 46,this.position.y - 83,69,86);
					}
					break;				
				case 2:
					if(this.move){
						if ((this.i <= 26) && (this.i > 17)) image(spr_down_0,this.position.x - 30,this.position.y - 83,52,86);
						else if ((this.i <= 17) && (this.i > 8)) image(spr_down_1,this.position.x - 30,this.position.y - 83,52,86);
						else image(spr_down_2,this.position.x - 30,this.position.y - 83,52,86);
					} else{
						image(spr_down_1,this.position.x - 30,this.position.y - 83,52,86);
					}
					break;	
				case 3:
					if(this.move){
						if ((this.i <= 26) && (this.i > 17)) image(spr_right_0,this.position.x - 20,this.position.y - 83,52,86);
						else if ((this.i <= 17) && (this.i > 8)) image(spr_right_1,this.position.x - 20,this.position.y - 83,52,86);
						else image(spr_right_2,this.position.x - 20,this.position.y - 83,52,86);
					} else{
						image(spr_right_1,this.position.x - 20,this.position.y - 83,52,86);
					}					
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
							if (this.i == 1){ // quando i for 1, significa que estamos no fim do movimento.
								this.positionGrid.y--; // quando está no fim do movimento, a posição no grid do personagem é atualizada.
							} 
						}
						break;
					case 1:						
						if(this.positionGrid.x > 0){
							this.position.x-=2;
							this.position.y--; 
							if (this.i == 1) {
								this.positionGrid.x--;
							}
						}
						break;
					case 2:						
						if(this.positionGrid.y < sizeStageY){
							this.position.x-=2;
							this.position.y++; 
							if (this.i == 1){
								this.positionGrid.y++;
							}
						}
						break;
					case 3: 
						if(this.positionGrid.x < sizeStageX){
							this.position.x+=2;
							this.position.y++; 
							if (this.i == 1) {
								this.positionGrid.x++;
							}
						}
						break;
					}					 
				}
				break;
			case 2:
				this.drawCharacter(); // atualiza o desenha do personagem.
					
				break;
			case 3:
				this.drawCharacter(); // atualiza o desenha do personagem.
					
				break;
			case 4:
				this.drawCharacter(); // atualiza o desenha do personagem.
					
				break;
			case 5:				
				if(this.block == null){ // checamos se já existe um bloco armazenado como personagem.
					switch(this.direction){// de acordo com a direção que o personagem estiver olhando, pegamos o bloco à sua frente.
						case 0:
							if((this.positionGrid.y > 0) && (grid[this.positionGrid.x][this.positionGrid.y - 1] != null) && (grid[this.positionGrid.x][this.positionGrid.y - 1].id == 0)){
							// impede que o personagem tente pegar algo fora do grid.											
								this.block = grid[this.positionGrid.x][this.positionGrid.y - 1]; // passamos o objeto para dentro do personagem.
								grid[this.positionGrid.x][this.positionGrid.y - 1] = null; // excluímos o objeto do cenário.								
							}
							charCod = 1; // mantém a posição do personagem
							break;
						case 1:
							if((this.positionGrid.x > 0) && (grid[this.positionGrid.x - 1][this.positionGrid.y] != null) && (grid[this.positionGrid.x - 1][this.positionGrid.y].id == 0)){
								this.block = grid[this.positionGrid.x - 1][this.positionGrid.y];
								grid[this.positionGrid.x - 1][this.positionGrid.y] = null;								
							}
							charCod = 2;
							break;
						case 2:
							if((this.positionGrid.y < sizeStageY) && (grid[this.positionGrid.x][this.positionGrid.y + 1] != null) && (grid[this.positionGrid.x][this.positionGrid.y + 1].id == 0)){
								this.block = grid[this.positionGrid.x][this.positionGrid.y + 1];
								grid[this.positionGrid.x][this.positionGrid.y + 1] = null;								
							}
							charCod = 3;
							break;
						case 3:
							if((this.positionGrid.x < sizeStageX) && (grid[this.positionGrid.x + 1][this.positionGrid.y] != null) && (grid[this.positionGrid.x + 1][this.positionGrid.y].id == 0)){
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
				
				break;
			case 6: // Atacar
				switch(this.direction){// de acordo com a direção que o personagem estiver olhando, atacamos o inimigo à sua frente.
					case 0:
						if((this.positionGrid.y > 0) && (grid[this.positionGrid.x][this.positionGrid.y - 1] != null)){ // impede que o personagem tente atacar fora do grid ou um campo vazio.					
							if (grid[this.positionGrid.x][this.positionGrid.y - 1].id == 1) grid[this.positionGrid.x][this.positionGrid.y - 1] = null; // excluímos o inimigo do cenário.
							// esse if serve para que apenas inimigos sejam influenciados por este comando.								
						}
						charCod = 1; // mantém a posição do personagem
						break;
					case 1:
						if((this.positionGrid.x > 0) && (grid[this.positionGrid.x - 1][this.positionGrid.y] != null)){
							if (grid[this.positionGrid.x - 1][this.positionGrid.y].id == 1) grid[this.positionGrid.x - 1][this.positionGrid.y] = null;								
						}
						charCod = 2;
							break;
					case 2:
						if((this.positionGrid.y < sizeStageY) && (grid[this.positionGrid.x][this.positionGrid.y + 1] != null)){
							if (grid[this.positionGrid.x][this.positionGrid.y + 1].id == 1) grid[this.positionGrid.x][this.positionGrid.y + 1] = null;								
						}
						charCod = 3;
						break;
					case 3:
						if((this.positionGrid.x < sizeStageX) && (grid[this.positionGrid.x + 1][this.positionGrid.y] != null)){
							if (grid[this.positionGrid.x + 1][this.positionGrid.y].id == 1) grid[this.positionGrid.x + 1][this.positionGrid.y] = null;								
						}
						charCod = 4;
						break;
					}				
			break;
			case 7: //Pressionar botão
				switch(this.direction){// de acordo com a direção que o personagem estiver olhando, pegamos o bloco à sua frente.
					case 0:
						if ((this.positionGrid.y > 0) && (grid[this.positionGrid.x][this.positionGrid.y - 1] != null)){ // impede que o personagem tente pegar algo fora do grid					
							if (grid[this.positionGrid.x][this.positionGrid.y - 1].id == 2){
								if (grid[this.positionGrid.x][this.positionGrid.y - 1].status == 0) victoryCount++;
								grid[this.positionGrid.x][this.positionGrid.y - 1].status = 1; // mudamos o status do botão, agora pressionado.	
							} 							
						}
						charCod = 1; // mantém a posição do personagem
						break;
					case 1:
						if ((this.positionGrid.x > 0) && (grid[this.positionGrid.x - 1][this.positionGrid.y] != null)){
							if (grid[this.positionGrid.x - 1][this.positionGrid.y].id == 2){
								if (grid[this.positionGrid.x - 1][this.positionGrid.y].status == 0) victoryCount++;
								grid[this.positionGrid.x - 1][this.positionGrid.y].status = 1;	
							}							
						}
						charCod = 2;
							break;
					case 2:
						if ((this.positionGrid.y < sizeStageY) && (grid[this.positionGrid.x][this.positionGrid.y + 1] != null)){
							if (grid[this.positionGrid.x][this.positionGrid.y + 1].id == 2){
								if (grid[this.positionGrid.x][this.positionGrid.y + 1].status == 0) victoryCount++;
								grid[this.positionGrid.x][this.positionGrid.y + 1].status = 1;
							} 								
						}
						charCod = 3;
						break;
					case 3:
						if ((this.positionGrid.x < sizeStageX) && (grid[this.positionGrid.x + 1][this.positionGrid.y] != null)){
							if (grid[this.positionGrid.x + 1][this.positionGrid.y].id == 2){
								if (grid[this.positionGrid.x + 1][this.positionGrid.y].status == 0) victoryCount++;
								grid[this.positionGrid.x + 1][this.positionGrid.y].status = 1;
							} 								
						}
						charCod = 4;
						break;
					}				
			break;				
		}
		
		textSize(16);
		fill(255);
		text(this.positionGrid.x + " , " + this.positionGrid.y,40,40);// mostra em que posição do grid o personagem está.
	}
}