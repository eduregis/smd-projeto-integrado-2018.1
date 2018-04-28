var corT = 5; // controla o tempo da mudança de cor.
var corG = 255; // controla a mudança de cor.
var charCod = 1; // controla o movimento do personagem.
var character; // personagem.
var sizeStage; // dimensão da fase.
var grid = []; // matriz a ser preenchida com blocos.

function setup(){
	createCanvas(1024,768);
	sizeStage = 7; // dimensão da fase, cria um grid quadrado com o número dado.
	background(0);
	fillGridNull(); // enche a matriz de objetos nulos.
	addBlock(1,5);
	if(sizeStage%2 == 0){
		character = new Character(width/2,height/2,sizeStage);	
	}else{
		character = new Character(width/2,height/2 - 200/sizeStage,sizeStage);
	}	
}

function fillGridNull(){
	for(var i = 0; i <= sizeStage; i++){
		var arrayAux = []; // vetor auxiliar que será anexado a matriz do grid.
		for(var j = 0; j <= sizeStage; j++){
			arrayAux.push(null); // inserindo objetos nulos no vetor auxiliar.
		}
		grid.push(arrayAux); // inserir vetor preenchido com objetos nulos na matriz do grid.
	}
}

function addBlock(x,y){
	block = new Block(x, y); // cria um bloco na posição especificada.
	grid[x][y] = block; // insere o bloco criado acima no grid.
}

function draw(){
	isometricGrid(sizeStage); // desenha o grid isométrico.
	character.drawCharacter(); // desenha o personagem.
	drawBlocks(); // desenha os blocos existentes no grid.
}

function drawBlocks(){ // percorre a matriz do grid e desenha os blocos que lá existem.
	for(var i = 0; i <= sizeStage; i++){
		for(var j = 0; j <= sizeStage; j++){
			if(grid[i][j] != null){ // checa se o objeto é nulo, se não, ele desenha o bloco.
				grid[i][j].drawBlock(); 		
			}		
		}
	}
}

function isometricGrid(mod){
	background(0);
	colorGrid(); // função que altera as cores do grid
	// espaçamento entre as linhas baseado na quantidade de casas
	var ver = 200/mod; 
	var hor = 400/mod;
	//criando o grid com base no espaçamento definido
	for(var i = 0; i <= mod; i++){		
		line(width/2+ i*hor, height/2 - 200 + i*ver, width/2 - 400 + i*hor, height/2 + i*ver);
		line(width/2- i*hor, height/2 - 200 + i*ver, width/2 + 400 - i*hor, height/2 + i*ver);
	}	
}

function colorGrid(){
	if((corG > 255) || (corG < 125)) // dá o efeito de neon
		corT = -corT;
	corG += corT;	
		stroke(0,corG,255);	
}

class Character{
	constructor(x,y,dim){
		this.position = createVector(x,y); // posição do personagem
		this.positionGrid = createVector(int(sizeStage/2),int(sizeStage/2)); // posição do personagem no grid.
		this.dim = 200/dim;	// dimensão no personagem, baseado no número de casas.
		this.move = false; // variável de controle do movimento, utilizando a interpolação.
		this.stayMove = false; // variável de controle que impede que outros comando sejam recebidos enquanto o personagem se desloca.
		this.i = 0;	// contador que permite continuidade ao movimento do personagem.
		this.direction = 0; // variável que informa para que direção o personagem está olhando. 0-) frente, 1-) esquerda, 2-) trás, 3-) direita.
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
					charCod = 1;					
					break;
				case 65: // seta para à esquerda.
					charCod = 2;					
					break;
				case 83: // seta para baixo.
					charCod = 3;					
					break;
				case 68: //seta para a direita
					charCod = 4;					
					break;				
			}
			this.stayMove = false; // mudando o valor de stayMove, para impedir que o jogador dê novos comandos.
		}
		this.moveCharacter(); // indo a parte de movimentação do personagem.
	}

	moveCharacter(){
		switch(charCod){ //dando funções para cada tecla.
			case 1: // os comentários do case 1 se aplicam a todos os outros cases.
				this.direction = 0;// adequa a direção do personagem.
				triangle(this.position.x - this.dim, this.position.y, this.position.x, this.position.y + this.dim/2, this.position.x + this.dim/2, this.position.y - this.dim/4); //placeholder.
				if(this.move) { // funciona só quando o booleano move está ativo.
					if(this.positionGrid.x > 0){ // testa se está no limite do grid
						this.position.x+=2; //acréscimos e decrécimos na posição do personagem.
						this.position.y--;
						if (this.i == 1) this.positionGrid.x--; // quando i é igual a 1, significa que o movimento está no último loop, então mudamos a posição no grid do personagem.
					}					
				}
				break;
			case 2:
				this.direction = 1;
				triangle(this.position.x, this.position.y + this.dim/2, this.position.x - this.dim/2, this.position.y - this.dim/4, this.position.x + this.dim, this.position.y);
				if(this.move) {
					if(this.positionGrid.y > 0){
						this.position.x-=2;
						this.position.y--; 
						if (this.i == 1) this.positionGrid.y--;
					}
				}
				break;
			case 3:
				this.direction = 2;
				triangle(this.position.x - this.dim/2, this.position.y + this.dim/4, this.position.x, this.position.y - this.dim/2, this.position.x + this.dim, this.position.y);
				if(this.move) {
					if(this.positionGrid.x < sizeStage){
						this.position.x-=2;
						this.position.y++;	
						if (this.i == 1) this.positionGrid.x++;
					}			  
				}
				break;
			case 4:
				this.direction = 3;
				triangle(this.position.x - this.dim, this.position.y, this.position.x, this.position.y - this.dim/2, this.position.x + this.dim/2, this.position.y + this.dim/4);
				if(this.move) {
					if(this.positionGrid.y < sizeStage){
						this.position.x+=2;
						this.position.y++; 	
						if (this.i == 1) this.positionGrid.y++;
					}			 
				}
				break;
		}
		fill(255);
		text(this.positionGrid.x + " , " + this.positionGrid.y,40,40);	
	}
}

class Block{
	constructor(x,y){
		this.positionGrid = createVector(x,y); // recebe a posição no grid que o bloco será inicialmente colocado.
		if(sizeStage%2 == 0){
			this.position = createVector(width/2,height/2); // posição do bloco. 
		}else{
			this.position = createVector(width/2 + 400/sizeStage,height/2); // posição do bloco ajustada para o caso da dimensão da fase ser ímpar.
		}
		this.drawController = true;	// variável de controle para ajustar a posição do bloco.
	}			

	drawBlock(){
		if(this.drawController){
			if(this.positionGrid.x > sizeStage/2){ // verifica a posição do bloco e faz os ajustes necessários. 
				for(var i = this.positionGrid.x; i > sizeStage/2; i--){ 
					this.position.x += int(400/sizeStage); 
					this.position.y += int(200/sizeStage);
				}			
			}else{
				for(var i = this.positionGrid.x; i < sizeStage/2; i++){
					this.position.x -= int(400/sizeStage);
					this.position.y -= int(200/sizeStage);
				}
			}
			if(this.positionGrid.y > sizeStage/2){
				for(var i = this.positionGrid.y; i > sizeStage/2; i--){
					this.position.x -= int(400/sizeStage);
					this.position.y += int(200/sizeStage);
				}			
			}else{
				for(var i = this.positionGrid.y; i < sizeStage/2; i++){
					this.position.x += int(400/sizeStage);
					this.position.y -= int(200/sizeStage);
				}
			}
			this.drawController = false; // alterando a drawController para que não entre de novo na função e tire o bloco do seu lugar., até ele ser reposicionado pelo jogador.
		}
		var mod = 200/sizeStage;
		//placeholder?		
		fill(100);
		quad(this.position.x + mod, this.position.y - mod, this.position.x + mod, this.position.y, this.position.x, this.position.y + mod/2, this.position.x, this.position.y - mod/2);
		fill(150);
		quad(this.position.x - mod, this.position.y - mod, this.position.x - mod, this.position.y, this.position.x, this.position.y + mod/2, this.position.x, this.position.y - mod/2);
		fill(200);
		quad(this.position.x, this.position.y - mod/2, this.position.x - mod, this.position.y - mod, this.position.x, this.position.y - 3*mod/2, this.position.x + mod, this.position.y - mod);
	}
}

function keyReleased(){
	if((keyCode == 87) || (keyCode == 65) || (keyCode == 83) || (keyCode == 68)){ // recebendo os valores do teclado.
		if((character.i == 0) && (!character.move)){
			character.i = int(200/sizeStage); // ajuste do contador para a dimensão da fase.
			character.move = true;	// movimentando o personagem.
			character.stayMove = true; // mexendo na variável de controle, para o personagewm receba o comando do jogador.
		}	
	}	
}