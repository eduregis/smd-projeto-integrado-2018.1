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
var procedureIndex = 0; // variável que percorrerá a tabela de procedimentos.
var decisionIfIndex = 0; // variável que percorrerá a tabela de decisões, se o teste da condicional funcionar.
var decisionElseIndex = 0; // variável que percorrerá a tabela de decisões, se o teste da condicional não funcionar.
var currentTab = "Action";
var stayIndex = false; // variável que auxilia no processo de percorrer a tabela de ações.

function preload(){
	loadSprites(); // carrega as imagens
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
	// espaçamento entre as linhas baseado na quantidade de casas.		
}

function colorGrid(){
	if((corG > 255) || (corG < 125)) // dá o efeito de neon.
		corT = -corT;
	corG += corT;	
		stroke(0,corG,255);	
}

function decisionTest(test){
	switch (test){
		case "general":
			try{
				if((character.direction == 0) && (grid[character.positionGrid.x][character.positionGrid.y - 1] != null)){
					return true;
				} else if((character.direction == 1) && (grid[character.positionGrid.x - 1][character.positionGrid.y] != null)){
					return true;
				} else if((character.direction == 2) && (grid[character.positionGrid.x][character.positionGrid.y + 1] != null)){
					return true;
				} else if((character.direction == 3) && (grid[character.positionGrid.x + 1][character.positionGrid.y] != null)){
					return true;
				}else{
					return false;
				}
			}
			catch (e){
				return false;
			}	
			break;
		case "block":
			try{
				if((character.direction == 0) && (grid[character.positionGrid.x][character.positionGrid.y - 1] != null) && (grid[character.positionGrid.x][character.positionGrid.y - 1].id == 0)){
					return true;
				} else if((character.direction == 1) && (grid[character.positionGrid.x - 1][character.positionGrid.y] != null) && (grid[character.positionGrid.x - 1][character.positionGrid.y].id == 0)){
					return true;
				} else if((character.direction == 2) && (grid[character.positionGrid.x][character.positionGrid.y + 1] != null) && (grid[character.positionGrid.x][character.positionGrid.y + 1].id == 0)){
					return true;
				} else if((character.direction == 3) && (grid[character.positionGrid.x + 1][character.positionGrid.y] != null) && (grid[character.positionGrid.x + 1][character.positionGrid.y].id == 0)){
					return true;
				}else{
					return false;
				}
			}
			catch (e){
				return false;
			}
			break;
		case "enemy":
			try{
				if((character.direction == 0) && (grid[character.positionGrid.x][character.positionGrid.y - 1] != null) && (grid[character.positionGrid.x][character.positionGrid.y - 1].id == 1)){
					return true;
				} else if((character.direction == 1) && (grid[character.positionGrid.x - 1][character.positionGrid.y] != null) && (grid[character.positionGrid.x - 1][character.positionGrid.y].id == 1)){
					return true;
				} else if((character.direction == 2) && (grid[character.positionGrid.x][character.positionGrid.y + 1] != null) && (grid[character.positionGrid.x][character.positionGrid.y + 1].id == 1)){
					return true;
				} else if((character.direction == 3) && (grid[character.positionGrid.x + 1][character.positionGrid.y] != null) && (grid[character.positionGrid.x + 1][character.positionGrid.y].id == 1)){
					return true;
				}else{
					return false;
				}
			}
			catch (e){
				return false;
			}
			break;
		case "pressButton":
			try{
				if((character.direction == 0) && (grid[character.positionGrid.x][character.positionGrid.y - 1] != null) && (grid[character.positionGrid.x][character.positionGrid.y - 1].id == 0)){
					return true;
				} else if((character.direction == 1) && (grid[character.positionGrid.x - 1][character.positionGrid.y] != null) && (grid[character.positionGrid.x - 1][character.positionGrid.y].id == 2)){
					return true;
				} else if((character.direction == 2) && (grid[character.positionGrid.x][character.positionGrid.y + 1] != null) && (grid[character.positionGrid.x][character.positionGrid.y + 1].id == 2)){
					return true;
				} else if((character.direction == 3) && (grid[character.positionGrid.x + 1][character.positionGrid.y] != null) && (grid[character.positionGrid.x + 1][character.positionGrid.y].id == 2)){
					return true;
				}else{
					return false;
				}
			}
			catch (e){
				return false;
			}
			break;
		default:
		return false;
			break;
	}	
}

function actionController(){
	print(currentTab);
	if(actionIndex + 1 > actionTab.actionButtons.length) stayIndex = true; // impede que o checador procure comandos fora do escopo do vetor.	
	if(starter){ // se a variável de controle starter permite, ele inicia um novo código.		
		switch(currentTab){
			case "Action": // percorrerá a aba de ações.
				if(actionCode == null){ // no final de cada comando, actionCode volta para nulo, para que receba um novo comando a partir daqui.
					switch(actionTab.actionButtons[actionIndex]){ // procura o id do comando na tabela de ações.
						case 0: // move o personagem para a posição em que ele está para frente.
							actionCode = 0;
							character.i = 26; // colocar a variável i do personagem para 26, ela funciona como um contador, que regride em 1 a cada farme, quando chegar em 1, termina o movimento. 
							character.move = true; // variável de controle para mover o personagem se e somente se esse comando for dado.
							break;
						case 1:
							actionCode = 1; // gira o personagem à esquerda.
							break;
						case 2:
							actionCode = 2; // gira o personagem à direita.
							break;
						case 3:
							actionCode = 3; // faz o personagem pegar caixas, se já não estiver carregando, e soltar caixas, se estiver carregando uma. Caso não tenha nada na frente e este não 
							// estiver carregando nada, o comando não faz nada.
							break;
						case 4:
							actionCode = 4; // faz o personagem atacar inimigos, caso hja algum à sua frente.
							break;
						case 5:
							actionCode = 5; // faz o personagem apertar botões, caso haja algum à sua frente. Caso aperte de novo, o botão não volta ao seu estado natural.
							break;
						case 6:
							currentTab = "Procedure";
							break;
						case 7:
							if (decisionTest("block")){
								currentTab = "DecisionIf";
							}else{
								currentTab = "DecisionElse";
							}
							break;
						default:
							print("não tem nada aqui! a"); // auxiliar, lembrar de remover na versão final.
							actionCode--;
							break;
					}
				}else{
				actionCode = null; // colocar o valor do código de ação para nulo. Caso contrário, ele vai ficar repetindo a instrução para o personagem sem fim.
				starter = false; // impedir que entre na função e deixe o código de ação não-nulo de novo, causando um loop.
				}
				break;
			case "Procedure": // percorrerá a aba de procedimentos.
				if(procedureIndex + 1 > procedureTab.actionButtons.length){ // quando o procedminto chega ao fim, ela retorna para a aba de ações.
					currentTab = "Action";
					actionIndex++;
					procedureIndex = 0; // zera o percorredor de procedimentos, para que possamos usá-lo novamente.
				} 
				if(actionCode == null){ // no final de cada comando, actionCode volta para nulo, para que receba um novo comando a partir daqui.
					switch(procedureTab.actionButtons[procedureIndex]){ // procura o id do comando na tabela de ações.
						case 0: // move o personagem para a posição em que ele está para frente.
							actionCode = 0; 
							character.i = 26; // colocar a variável i do personagem para 26, ela funciona como um contador, que regride em 1 a cada farme, quando chegar em 1, termina o movimento. 
							character.move = true; // variável de controle para mover o personagem se e somente se esse comando for dado.
							break;
						case 1:
							actionCode = 1; // gira o personagem à esquerda.
							break;
						case 2:
							actionCode = 2; // gira o personagem à direita.
							break;
						case 3:
							actionCode = 3; // faz o personagem pegar caixas, se já não estiver carregando, e soltar caixas, se estiver carregando uma. Caso não tenha nada na frente e este não 
							// estiver carregando nada, o comando não faz nada.
							break;
						case 4:
							actionCode = 4; // faz o personagem atacar inimigos, caso hja algum à sua frente.
							break;
						case 5:
							actionCode = 5; // faz o personagem apertar botões, caso haja algum à sua frente. Caso aperte de novo, o botão não volta ao seu estado natural.
							break;
						case 6:
							procedureIndex = 0; // volta para a primeira posição da tabela de procedimento, gerando um loop.
							break;										
						default:
							print("não tem nada aqui! p"); // auxiliar, lembrar de remover na versão final.
							actionCode--;
							break;
					}
				}else{
				actionCode = null; // colocar o valor do código de ação para nulo. Caso contrário, ele vai ficar repetindo a instrução para o personagem sem fim.
				starter = false; // impedir que entre na função e deixe o código de ação não-nulo de novo, causando um loop.
				}
				break;
			case "DecisionIf":
				if(decisionIfIndex + 1 > decisionTab.actionButtonsIf.length){ // quando o procedminto chega ao fim, ela retorna para a aba de ações.
					currentTab = "Action";
					actionIndex++;
					decisionIfIndex = 0; // zera o percorredor de procedimentos, para que possamos usá-lo novamente.
					decisionElseIndex = 0;
				} 
				if(actionCode == null){ // no final de cada comando, actionCode volta para nulo, para que receba um novo comando a partir daqui.
					switch(decisionTab.actionButtonsIf[decisionIfIndex]){ // procura o id do comando na tabela de ações.
						case 0: // move o personagem para a posição em que ele está para frente.
							actionCode = 0; 
							character.i = 26; // colocar a variável i do personagem para 26, ela funciona como um contador, que regride em 1 a cada farme, quando chegar em 1, termina o movimento. 
							character.move = true; // variável de controle para mover o personagem se e somente se esse comando for dado.
							break;
						case 1:
							actionCode = 1; // gira o personagem à esquerda.
							break;
						case 2:
							actionCode = 2; // gira o personagem à direita.
							break;
						case 3:
							actionCode = 3; // faz o personagem pegar caixas, se já não estiver carregando, e soltar caixas, se estiver carregando uma. Caso não tenha nada na frente e este não 
							// estiver carregando nada, o comando não faz nada.
							break;
						case 4:
							actionCode = 4; // faz o personagem atacar inimigos, caso hja algum à sua frente.
							break;
						case 5:
							actionCode = 5; // faz o personagem apertar botões, caso haja algum à sua frente. Caso aperte de novo, o botão não volta ao seu estado natural.
							break;														
						default:
							print("não tem nada aqui!"); // auxiliar, lembrar de remover na versão final.
							actionCode--;
							break;
					}
				}else{
				actionCode = null; // colocar o valor do código de ação para nulo. Caso contrário, ele vai ficar repetindo a instrução para o personagem sem fim.
				starter = false; // impedir que entre na função e deixe o código de ação não-nulo de novo, causando um loop.
				}
				break;
			case "DecisionElse":
				if(decisionElseIndex + 1 > decisionTab.actionButtonsElse.length){ // quando o procedminto chega ao fim, ela retorna para a aba de ações.
					currentTab = "Action";
					actionIndex++;
					decisionIfIndex = 0;
					decisionElseIndex = 0; // zera o percorredor de procedimentos, para que possamos usá-lo novamente.
				} 
				if(actionCode == null){ // no final de cada comando, actionCode volta para nulo, para que receba um novo comando a partir daqui.
					switch(decisionTab.actionButtonsElse[decisionElseIndex]){ // procura o id do comando na tabela de ações.
						case 0: // move o personagem para a posição em que ele está para frente.
							actionCode = 0; 
							character.i = 26; // colocar a variável i do personagem para 26, ela funciona como um contador, que regride em 1 a cada farme, quando chegar em 1, termina o movimento. 
							character.move = true; // variável de controle para mover o personagem se e somente se esse comando for dado.
							break;
						case 1:
							actionCode = 1; // gira o personagem à esquerda.
							break;
						case 2:
							actionCode = 2; // gira o personagem à direita.
							break;
						case 3:
							actionCode = 3; // faz o personagem pegar caixas, se já não estiver carregando, e soltar caixas, se estiver carregando uma. Caso não tenha nada na frente e este não 
							// estiver carregando nada, o comando não faz nada.
							break;
						case 4:
							actionCode = 4; // faz o personagem atacar inimigos, caso hja algum à sua frente.
							break;
						case 5:
							actionCode = 5; // faz o personagem apertar botões, caso haja algum à sua frente. Caso aperte de novo, o botão não volta ao seu estado natural.
							break;														
						default:
							print("não tem nada aqui! p"); // auxiliar, lembrar de remover na versão final.
							actionCode--;
							break;
					}
				}else{
				actionCode = null; // colocar o valor do código de ação para nulo. Caso contrário, ele vai ficar repetindo a instrução para o personagem sem fim.
				starter = false; // impedir que entre na função e deixe o código de ação não-nulo de novo, causando um loop.
				}
				break;
			default:

				break;
		}
	}
}




