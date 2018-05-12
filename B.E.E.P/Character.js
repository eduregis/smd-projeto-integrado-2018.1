class Character{
	constructor(x,y,dim){
		this.position = createVector(x,y); // posição do personagem
		this.positionGrid = createVector(int(sizeStageX/2),int(sizeStageY/2)); // posição do personagem no grid.
		this.dim = 200/dim;	// dimensão no personagem, baseado no número de casas.
		this.move = false; // variável de controle do movimento, utilizando a interpolação.
		this.stayMove = false; // variável de controle que impede que outros comando sejam recebidos enquanto o personagem se desloca.
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
		if(this.stayMove){ // stayMove sendo usado, para impedir que, enquanto ele se desloca, o jogador dê novos comandos ao personagem.
			switch (keyCode){
				case 87: // tecla W, para cima.
					charCod = 1;					
					break;
				case 65: // tecla A, para à esquerda.
					if (this.direction != 3){
						this.direction++;
						charCod++;
					}else{
						this.direction = 0;
						charCod = 1;
					}															
					break;				
				case 68: // tecla D, para a direita.
					if (this.direction != 0){
						this.direction--;
						charCod--;
					}else{
						this.direction = 3;
						charCod = 4;
					}															
					break;	
				case 82: // tecla R, para pegar ou colocar um bloco.
					charCod = 5;
					break;				
			}
			this.stayMove = false; // mudando o valor de stayMove, para impedir que o jogador dê novos comandos.
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
					triangle(this.position.x - this.dim, this.position.y, this.position.x, this.position.y + this.dim/2, this.position.x + this.dim/2, this.position.y - this.dim/4); //placeholder.									
					break;
				case 1:
					triangle(this.position.x, this.position.y + this.dim/2, this.position.x - this.dim/2, this.position.y - this.dim/4, this.position.x + this.dim, this.position.y);  																		
					break;				
				case 2: 
					triangle(this.position.x - this.dim/2, this.position.y + this.dim/4, this.position.x, this.position.y - this.dim/2, this.position.x + this.dim, this.position.y); 										
					break;	
				case 3:
					triangle(this.position.x - this.dim, this.position.y, this.position.x, this.position.y - this.dim/2, this.position.x + this.dim/2, this.position.y + this.dim/4)
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
							if (this.i == 1) this.positionGrid.y--; // quando está no fim do movimento, a posição no grid do personagem é atualizada.
						}
						break;
					case 1:						
						if(this.positionGrid.x > 0){
							this.position.x-=2;
							this.position.y--; 
							if (this.i == 1) this.positionGrid.x--;
						}
						break;
					case 2:						
						if(this.positionGrid.y < sizeStageY){
							this.position.x-=2;
							this.position.y++; 
							if (this.i == 1) this.positionGrid.y++;
							}
						break;
					case 3: 
						if(this.positionGrid.x < sizeStageX){
							this.position.x+=2;
							this.position.y++; 
							if (this.i == 1) this.positionGrid.x++;
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
									vectorPosition = createVector(this.position.x + (400/sizeStageX), this.position.y - (200/sizeStageY)); // usamos a posição do personagem de referência para posicionar o bloco.
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
									vectorPosition = createVector(this.position.x - (400/sizeStageX), this.position.y - (200/sizeStageY));
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
									vectorPosition = createVector(this.position.x - (400/sizeStageX), this.position.y + (200/sizeStageY));
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
									vectorPosition = createVector(this.position.x + (400/sizeStageX), this.position.y + (200/sizeStageY));
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
		}
		fill(255);
		text(this.positionGrid.x + " , " + this.positionGrid.y,40,40);	
	}
}