var levelController = true; // para que as especificidades da fase seja passadas apenas uma vez, como se fosse no setup.
var pageCode = "menu"; // id da fase.
var isLevel = false;

function setupLevel(){ // função que simula um setup.
	if(levelController){
		//botões de sair, resetar e de ação.		
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
		}
		levelController = false;
	}
}

function drawLevel(){
	image(bkg_level,0,0);
	setupLevel(); // chama o setup da fase.
	if(isLevel){
		isometricGrid(); // desenha o grid isométrico.
		exitButton.draw(); // desenha o botão de sair.
		resetButton.draw(); // desenha o botão de resetar.
		startButton.draw();	// desenha o botão de ação.
		actionTab.drawTab(); // desenha a tabela de ações.
		actionController(); // função que controla a sequencia de ações.
		p_dTab.drawTab(); // desenha a tabela de escolha entre desição e procedimento.
		procedureTab.drawTab(); // desenha a tabela de procedimentos.
		decisionTab.drawTab();	 // desenha a tabela de desições.
		drawObjects(); // desenha os blocos existentes no grid.
		character.updateCharacter(); // desenha o personagem.
		drawButtons(); // desenha os botões arrastáveis.
	}else{
		if(pageCode == "menu") menu();
		else if (pageCode == "levelChoice") levelChoice();
	}
}

function menu(){
	loadMenu();
}

function levelChoice(){
	loadLevelChoice();
}

function levelDesign_01(){
	// define o centro do grid.
	centerGridX = 335;
	centerGridY = 400;
	actionTab = new ActionTab(9); // define o limite de ações permitido para o jogador.
	procedureTab = new ProcedureTab(10);  // define o limite de ações do procedimento permitido para o jogador.
	decisionTab = new DecisionTab(5,5);	 // define o limite de ações por escolha para o jogador.
	p_dTab = new P_DTab(1);	 // define o limite de procedimentos e/ou decisões permitido para o jogador.
	// define as dimensões da fase.
	sizeStageX = 5;
	sizeStageY = 6;
	fillGridNull(); // enche a matriz de objetos nulos.
	fillGridPropNull(); // enche a matriz de objetos nulos.	
	character = new Character(centerGridX,centerGridY); // 	inicia o personagem numa posição determinada.
	// espaço para preencher a fase.
	addBlock(0,0);
	addEnemy(1,4);
	addBlock(2,1);
	addBlock(4,1);
	addPressButton(4,4);	
	loadButtons();
}

function levelDesign_02(){
	centerGridX = 335;
	centerGridY = 400;
	actionTab = new ActionTab(10); // define o limite de ações permitido para o jogador.
	procedureTab = new ProcedureTab(10);  // define o limite de ações do procedimento permitido para o jogador.
	decisionTab = new DecisionTab(5,5);	 // define o limite de ações por escolha para o jogador.
	p_dTab = new P_DTab(1);	 // define o limite de procedimentos e/ou decisões permitido para o jogador.
	// define as dimensões da fase.
	sizeStageX = 4;
	sizeStageY = 5;
	fillGridNull(); // enche a matriz de objetos nulos.
	fillGridPropNull(); // enche a matriz de objetos nulos.	
	character = new Character(centerGridX,centerGridY); // 	inicia o personagem numa posição determinada.
	// espaço para preencher a fase.
	addBlock(1,1);
	addEnemy(1,4);
	addBlock(2,1);
	addBlock(4,1);
	addPressButton(4,5);	
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
	character = new Character(centerGridX,centerGridY); // 	inicia o personagem numa posição determinada.
	// espaço para preencher a fase.
	addBlock(1,1);
	addEnemy(1,4);
	addBlock(2,1);
	addBlock(4,1);
	addPressButton(4,5);	
	loadButtons();
}