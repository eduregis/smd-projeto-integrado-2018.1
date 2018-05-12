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
	//fillGrid();
	addBlock(3,0);
	addBlock(1,1);
	addBlock(1,4);
	addBlock(4,1);
	addBlock(4,4);
	if(sizeStage%2 == 0){
		character = new Character(width/2,height/2,sizeStage);	
	}else{
		character = new Character(width/2,height/2 - 200/sizeStage,sizeStage);
	}
}

function draw(){
	isometricGrid(sizeStage); // desenha o grid isométrico.
	character.updateCharacter(); // desenha o personagem.
	drawBlocks(); // desenha os blocos existentes no grid.	
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

function fillGrid(){ // função auxiliar, preenche todo o grid com blocos, será cortada em versões posteriores.
	for(var i = 0; i <= sizeStage; i++){
		for(var j = 0; j <= sizeStage; j++){
			addBlock(i,j);	
		}		
	}
}

function addBlock(x,y){
	block = new Block(x, y); // cria um bloco na posição especificada.
	grid[x][y] = block; // insere o bloco criado acima no grid.
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

function keyReleased(){	
	if((keyCode == 87) || (keyCode == 65) || (keyCode == 68) || (keyCode == 82)){ // recebendo os valores do teclado (W, A, S, D e espaço).
		if((character.i == 0) && (!character.move)){
			character.i = int(200/sizeStage); // ajuste do contador para a dimensão da fase.
			if (keyCode == 87) character.move = true;	// movimentando o personagem, só se move quando o comando for para cima.			
			character.stayMove = true; // mexendo na variável de controle, para o personagewm receba o comando do jogador.
		}	
	}	
}