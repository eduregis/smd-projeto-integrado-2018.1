var levelController = true; // para que as especificidades da fase seja passadas apenas uma vez, como se fosse no setup.
var pageCode = "menu"; // id da fase.
var isLevel = false;

function setupLevel(){ // função que simula um setup.
	if(levelController){
		//botões de sair, resetar e de ação.
		victoryCount = 0; // zera a condição de vitória.		
		startButton = new StartButton(1205,472,70,80);
		resetButton = new ResetButton(1205,555,70,40);
		exitButton = new ExitButton(1205,617,70,40);		
		switch(pageCode){
			case "menu": 
				isLevel = false;
				menu();
				break;
			case "levelChoice":
				isLevel = false;
				levelChoice();
				break;
			case "learn":
				isLevel = false;
				learn();
				break;
			case "level_01":
				isLevel = true; 
				levelDesign_01();
				break;
			case "level_02":
				isLevel = true; 
				levelDesign_02();
				break;
			case "level_03":
				isLevel = true; 
				levelDesign_03();
				break;
			case "level_04":
				isLevel = true; 
				levelDesign_04();
				break;
		}
		levelController = false;
	}
}

function drawLevel(){
	image(bkg_level,0,0);
	setupLevel(); // chama o setup da fase.
	if(isLevel){
		antiBugLevelChoiceMenu = false;		
		isometricGrid(); // desenha o grid isométrico.
		exitButton.draw(); // desenha o botão de sair.
		resetButton.draw(); // desenha o botão de resetar.
		startButton.draw();	// desenha o botão de ação.
		actionTab.drawTab(); // desenha a tabela de ações.
		actionController(); // função que controla a sequencia de ações.
		p_dTab.drawTab(); // desenha a tabela de escolha entre desição e procedimento.
		procedureTab.drawTab(); // desenha a tabela de procedimentos.
		decisionTab.drawTab();	 // desenha a tabela de desições.
		if(pageCode == "level_02") drawPortal_level02();		 
		drawObstacles(); // desenha os blocos existentes no grid.
		drawProps();		
		character.updateCharacter(); // desenha o personagem.
		drawButtons(); // desenha os botões arrastáveis.
		testVictory(1);
	}else{
		blockBarrier = false;
		gridProp = [];
		switch(pageCode){
			case "menu":
				menu();
				antiBugLevelChoiceMenu = false;
				break;
			case "levelChoice":
				levelChoice();
				break;
			case "learn":
				learn();
				antiBugLevelChoiceMenu = false;
				break;
		}
	}
}

function menu(){
	loadMenu();
}

function levelChoice(){
	loadLevelChoice();
}

function learn(){
	loadLearn();
}

function levelDesign_01(){
	// define o centro do grid.
	centerGridX = 325;
	centerGridY = 350;
	actionTab = new ActionTab(5); // define o limite de ações permitido para o jogador.
	procedureTab = new ProcedureTab(0);  // define o limite de ações do procedimento permitido para o jogador.
	decisionTab = new DecisionTab(0,0);	 // define o limite de ações por escolha para o jogador.
	p_dTab = new P_DTab(1);	 // define o limite de procedimentos e/ou decisões permitido para o jogador.
	// define as dimensões da fase.
	sizeStageX = 3;
	sizeStageY = 5;
	fillGridNull(); // enche a matriz de objetos nulos.
	fillGridPropNull(); // enche a matriz de objetos nulos.	
	character = new Character(2,4); // inicia o personagem numa posição determinada.
	// espaço para preencher a fase.
	addPressButton(1,1);
	addProp(2,2,3);			
	loadButtons();	
}

function levelDesign_02(){
	centerGridX = 335;
	centerGridY = 400;
	actionTab = new ActionTab(4); // define o limite de ações permitido para o jogador.
	procedureTab = new ProcedureTab(5);  // define o limite de ações do procedimento permitido para o jogador.
	decisionTab = new DecisionTab(0,0);	 // define o limite de ações por escolha para o jogador.
	p_dTab = new P_DTab(1);	 // define o limite de procedimentos e/ou decisões permitido para o jogador.
	// define as dimensões da fase.
	sizeStageX = 6;
	sizeStageY = 6;
	fillGridNull(); // enche a matriz de objetos nulos.
	fillGridPropNull(); // enche a matriz de objetos nulos.	
	character = new Character(1,5); // 	inicia o personagem numa posição determinada.
	// espaço para preencher a fase.
	addBlock(1,4);	
	addProp(1,1,4);		
	loadButtons();
}

function levelDesign_03(){
	centerGridX = 335;
	centerGridY = 400;
	actionTab = new ActionTab(12); // define o limite de ações permitido para o jogador.
	procedureTab = new ProcedureTab(3);  // define o limite de ações do procedimento permitido para o jogador.
	decisionTab = new DecisionTab(5,5);	 // define o limite de ações por escolha para o jogador.
	p_dTab = new P_DTab(1);	 // define o limite de procedimentos e/ou decisões permitido para o jogador.
	// define as dimensões da fase.
	sizeStageX = 8;
	sizeStageY = 8;
	fillGridNull(); // enche a matriz de objetos nulos.
	fillGridPropNull(); // enche a matriz de objetos nulos.	
	character = new Character(1,5); // 	inicia o personagem numa posição determinada.
	// espaço para preencher a fase.
	addBlock(1,1);
	addEnemy(1,4);
	addBlock(2,1);
	addBlock(4,1);
	addPressButton(4,5);	
	loadButtons();
}

function testVictory(value){
	if (value == victoryCount){
		isVictory = true; // se o valor total corresponder ao necessário, será declarada vitória.
		if(character.prop != null) learnLock[character.prop] = true; // abre a informação antes bloqueada na aba aprender.
	} 
}

function drawPortal_level02(){
	victory_level02();	
	fill(255,127,0,80);
	stroke(255,127,0);
	quad(485,400,535,425,485,450,435,425);
	if(isVictory){

	} 
	
}

function victory_level02(){
	if (grid[5][2] != null){
		victoryCount = 1;
		//grid[5][2] = null;
	}
}