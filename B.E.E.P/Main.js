var corT = 5; // controla o tempo da mudança de cor.
var corG = 255; // controla a mudança de cor.
var charCod = 1; // controla o movimento do personagem.
var character; // personagem.

var sizeStageX; 
var sizeStageY;
var grid = []; // matriz a ser preenchida com blocos.
var basicButtons = []; // vetor com os botões de baixo.

var centerGridX, centerGridY; // variáveis para controlar a posição do grid na tela.
var actionTab; // tabela de ações.
var p_dTab; // tabela de procedimentos e decisões.
var procedureTab; // tabela de procedimentos.
var decisionTab; // tabela de decisões.

var exitButton; // botão de sair.
var resetButton; // botão de reiniciar a fase.
var startButton; // botão de ativação.

var starter = false; // variável que inicia a sequencia de comandos
var actionCode; // variável que pega o comando da tabela de ações e passa para o personagem.
var actionIndex = 0; // variável que percorrerá a tabela de ações.
var stayIndex = false; // variável que auxilia no processo de percorrer a tabela de ações.

function preload(){
	loadSprites();
}

function setup(){
	createCanvas(1280,800);	
}

function draw(){
	drawLevel();				
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

function fillGrid(){ // função auxiliar, preenche todo o grid com blocos, será cortada em versões posteriores.
	for(var i = 0; i <= sizeStageX; i++){
		for(var j = 0; j <= sizeStageY; j++){
			addBlock(i,j);	
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
	if((corG > 255) || (corG < 125)) // dá o efeito de neon.
		corT = -corT;
	corG += corT;	
		stroke(0,corG,255);	
}

function actionController(){
	if(actionIndex + 1 > actionTab.actionButtons.length) stayIndex = true;
	if(starter){
		if(actionCode == null){
			switch(actionTab.actionButtons[actionIndex]){
				case 0:
					actionCode = 0;
					character.i = 26;
					character.move = true;
					break;
				case 1:
					actionCode = 1;
					break;
				case 2:
					actionCode = 2;
					break;
				case 3:
					actionCode = 3;
					break;
				case 4:
					actionCode = 4;
					break;
				case 5:
					actionCode = 5;
					break;
				default:
					print("não tem nada aqui!");
					break;
			}
		}else{
			actionCode = null;
			starter = false;
		}
	}
}


