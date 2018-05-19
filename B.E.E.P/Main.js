var corT = 5; // controla o tempo da mudança de cor.
var corG = 255; // controla a mudança de cor.
var charCod = 1; // controla o movimento do personagem.
var character; // personagem.

var sizeStageX; 
var sizeStageY;
var grid = []; // matriz a ser preenchida com blocos.
var basicButtons = []; // vetor com os botões de baixo.

var centerGridX, centerGridY;
var actionTab;

var spr_up, spr_left, spr_down, spr_right; // sprites do personagem
var spr_block; // sprite caixa

function preload(){
	loadSprites();
}

function setup(){
	createCanvas(1440,900);
	centerGridX = 365;
	centerGridY = 450;
	actionTab = new ActionTab();	
	sizeStageX = 5;
	sizeStageY = 6;
	background(0);
	fillGridNull(); // enche a matriz de objetos nulos.
	//fillGrid();
	character = new Character(centerGridX,centerGridY,8);	
	addBlock(0,0);
	addBlock(1,1);
	addBlock(1,4);
	addBlock(4,1);
	addBlock(4,4);
	loadButtons();	

}

function draw(){
	isometricGrid(); // desenha o grid isométrico.	
	actionTab.drawTab();
	drawBlocks(); // desenha os blocos existentes no grid.
	character.updateCharacter(); // desenha o personagem.
	drawButtons();			
}

function fillGridNull(){
	for(var i = 0; i <= sizeStageX; i++){
		var arrayAux = []; // vetor auxiliar que será anexado a matriz do grid.
		for(var j = 0; j <= sizeStageY; j++){
			arrayAux.push(null); // inserindo objetos nulos no vetor auxiliar.		
		}
		grid.push(arrayAux); // inserir vetor preenchido com objetos nulos na matriz do grid.
	}
}

function loadSprites(){
	spr_up = loadImage('assets/walk_up.png');
	spr_left = loadImage('assets/walk_left.png');
	spr_down = loadImage('assets/walk_down.png');
	spr_right = loadImage('assets/walk_right.png');
	spr_block = loadImage('assets/cubo.png');
}

function fillGrid(){ // função auxiliar, preenche todo o grid com blocos, será cortada em versões posteriores.
	for(var i = 0; i <= sizeStageX; i++){
		for(var j = 0; j <= sizeStageY; j++){
			addBlock(i,j);	
		}		
	}
}

function addBlock(x,y){
	if ((x >= 0) && (x <= sizeStageX) && (y >= 0) && (y <= sizeStageY)){ // impede que blocos fora do grid sejam criados.
		if((x != character.positionGrid.x) || (y != character.positionGrid.y)){ // impede que blocos sejam criados em cima do personagem.
			block = new Block(x, y); // cria um bloco na posição especificada.
			grid[x][y] = block; // insere o bloco criado acima no grid.
		}
		
	}	
}

function drawBlocks(){ // percorre a matriz do grid e desenha os blocos que lá existem.
	for(var i = 0; i <= sizeStageX; i++){
		for(var j = 0; j <= sizeStageY; j++){
			if(grid[i][j] != null){ // checa se o objeto é nulo, se não, ele desenha o bloco.
				grid[i][j].drawBlock(); 		
			}		
		}
	}
}

function isometricGrid(){
	var hor = centerGridX;
	var ver = centerGridY - 50*int(sizeStageY/2);
	var dif = sizeStageX - sizeStageY;
	// ajustes do grid com as caixas.
	if(sizeStageX != sizeStageY){ // caso não seja um grid quadrado, alguns ajustes precisam ser feitos.
		if (sizeStageX%2 == 0){ // no caso da largura do grid ser par.
			if(dif < 0){ // no caso da largura ser menor que o comprimento.
				hor -= 50*int(dif/2);
				ver -= 25*int(dif/2);				
			}else{ // no caso da largura ser maior que o comprimento.
				hor -= 50*int((1 + dif)/2);
				ver -= 25*int((1 + dif)/2);				
			}			
		}else{ // no caso da largura do grid ser par
			if(dif < 0){ // no caso da largura ser menor que o comprimento.			
				hor -= 50*int((dif - 1)/2);
				ver -= 25*int((dif - 1)/2);
				
			}else{ // no caso da largura ser maior que o comprimento.
				hor -= 50*int(dif/2);
				ver -= 25*int(dif/2);
			}
		}
	}	
	background(0);
	colorGrid(); // função que altera as cores do grid
	for(var i = 0; i < sizeStageY ; i++){ // criamos uma matriz parqa desenhar o grid	
		for(var j = 0; j < sizeStageX ; j++){
			//desenhamos um losango partindo do vértice superior	
			line(hor ,ver ,hor + 50 ,ver + 25);
			line(hor ,ver ,hor - 50 ,ver + 25);
			line(hor + 50 ,ver + 25, hor ,ver + 50);
			line(hor - 50 ,ver + 25, hor ,ver + 50);
			hor += 50;
			ver += 25;
		}
		hor -= 50*(sizeStageX + 1);
		ver -= 25*(sizeStageX - 1);
	}
	// espaçamento entre as linhas baseado na quantidade de casas		
}

function colorGrid(){
	if((corG > 255) || (corG < 125)) // dá o efeito de neon
		corT = -corT;
	corG += corT;	
		stroke(0,corG,255);	
}

function keyReleased(){	
	if((keyCode == 87) || (keyCode == 65) || (keyCode == 68) || (keyCode == 82)){ // recebendo os valores do teclado (W, A, D e R).
		if((character.i == 0) && (!character.move)){
			character.i = 25; // ajuste do contador para a dimensão da fase.
			if (keyCode == 87) character.move = true;	// movimentando o personagem, só se move quando o comando for para cima.			
			character.stayMove = true; // mexendo na variável de controle, para o personagewm receba o comando do jogador.
		}	
	}	
}

