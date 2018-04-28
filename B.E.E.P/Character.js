class Character{
	constructor(x,y,dim){
		this.position = createVector(x,y); // posição do personagem
		this.positionGrid = createVector(int(sizeStage/2),int(sizeStage/2)); // posição do personagem no grid.
		this.dim = 200/dim;	// dimensão no personagem, baseado no número de casas.
		this.move = false; // variável de controle do movimento, utilizando a interpolação.
		this.stayMove = false; // variável de controle que impede que outros comando sejam recebidos enquanto o personagem se desloca.
		this.i = 0;	// contador que permite continuidade ao movimento do personagem.
		this.direction = 0; // variável que informa para que direção o personagem está olhando. 0-) frente, 1-) esquerda, 2-) trás, 3-) direita.
		this.block = null; // variável que armazena o bloco que o personagem pode carregar.
	}

	drawCharacter(){		
		if (this.i==0){
			this.move = false; // quando i chega a zero, significa que o personagem chegou no cruzamento desejado, então ele não irá mais se mover, até que outro comando seja dado.	
		}else{
			this.i--; // contador regressivo funcionando.
		}
		if(this.stayMove){ // stayMove sendo usado, para impedir que, enquanto ele se desloca, o jogador dê novos comandos ao personagem.
			switch (keyCode){
				case 87: // seta para cima.
					this.direction = 0;// adequa a direção do personagem.
					charCod = 1;					
					break;
				case 65: // seta para à esquerda.
					this.direction = 1;
					charCod = 2;					
					break;
				case 83: // seta para baixo.
					this.direction = 2;
					charCod = 3;					
					break;
				case 68: //seta para a direita.
					this.direction = 3;
					charCod = 4;					
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
				if(this.positionGrid.y < sizeStage){
					if(grid[this.positionGrid.x][this.positionGrid.y + 1] != null){
						this.move = false;
					}
				}				
				break;
			case 3:
				if(this.positionGrid.x < sizeStage){
					if(grid[this.positionGrid.x + 1][this.positionGrid.y] != null){
						this.move = false;
					}
				}				
				break;
		}
	}

	moveCharacter(){
		switch(charCod){ // dando funções para cada tecla.
			case 1: // os comentários do case 1 se aplicam a todos os outros cases.
				triangle(this.position.x - this.dim, this.position.y, this.position.x, this.position.y + this.dim/2, this.position.x + this.dim/2, this.position.y - this.dim/4); //placeholder.
				if(this.move){ // funciona só quando o booleano move está ativo.
					if(this.positionGrid.y > 0){ // testa se está no limite do grid.
						this.position.x+=2; //acréscimos e decrécimos na posição do personagem.
						this.position.y--;
						if (this.i == 1) this.positionGrid.y--; // quando i é igual a 1, significa que o movimento está no último loop, então mudamos a posição no grid do personagem.
					}					
				}
				break;
			case 2:
				triangle(this.position.x, this.position.y + this.dim/2, this.position.x - this.dim/2, this.position.y - this.dim/4, this.position.x + this.dim, this.position.y);
				if(this.move) {
					if(this.positionGrid.x > 0){
						this.position.x-=2;
						this.position.y--; 
						if (this.i == 1) this.positionGrid.x--;
					}
				}
				break;
			case 3:
				triangle(this.position.x - this.dim/2, this.position.y + this.dim/4, this.position.x, this.position.y - this.dim/2, this.position.x + this.dim, this.position.y);
				if(this.move) {
					if(this.positionGrid.y < sizeStage){
						this.position.x-=2;
						this.position.y++;	
						if (this.i == 1) this.positionGrid.y++;
					}			  
				}
				break;
			case 4:
				triangle(this.position.x - this.dim, this.position.y, this.position.x, this.position.y - this.dim/2, this.position.x + this.dim/2, this.position.y + this.dim/4);
				if(this.move) {
					if(this.positionGrid.x < sizeStage){
						this.position.x+=2;
						this.position.y++; 	
						if (this.i == 1) this.positionGrid.x++;
					}			 
				}
				break;
		}
		fill(255);
		text(this.positionGrid.x + " , " + this.positionGrid.y,40,40);	
	}
}