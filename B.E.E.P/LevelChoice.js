var antiBugLevelChoiceMenu = false;
var missLevelChoiceButton = 0;

function loadLevelChoice(){	
	missLevelChoiceButton = 0;
	image(bkg_level,0,0);	
	if (insideRect(mouseX,mouseY,100,300,200,200)){
		if (soundOverButtonMenuCount == 0) soundOverButtonMenu();
		soundOverButtonMenuCount++;
		image(spr_btn_lvl_01_1,100,300);
		if((mouseIsPressed) && (antiBugLevelChoiceMenu)){
			soundClickButtonMenu();
			pageCode = "level_01"; 
			levelController = true;
			isLevel = false;
		}
	}else{
		missLevelChoiceButton++;		
		image(spr_btn_lvl_01_0,100,300);
	}

	if (insideRect(mouseX,mouseY,370,300,200,200)){
		if ((soundOverButtonMenuCount == 0) && (learnLock[3])) soundOverButtonMenu();
		soundOverButtonMenuCount++;
		if (learnLock[3]) image(spr_btn_lvl_02_1,370,300);
		else image(spr_btn_lvl_02_2,370,300);
		if((mouseIsPressed) && (antiBugLevelChoiceMenu) && (learnLock[3])){
			soundClickButtonMenu();
			pageCode = "level_02"; 
			levelController = true;
			isLevel = false;
		}
	}else{
		missLevelChoiceButton++;
		if (learnLock[3]) image(spr_btn_lvl_02_0,370,300);
		else image(spr_btn_lvl_02_2,370,300);
	}

	if (insideRect(mouseX,mouseY,640,300,200,200)){
		if ((soundOverButtonMenuCount == 0) && (learnLock[4])) soundOverButtonMenu();
		soundOverButtonMenuCount++;
		if (learnLock[4]) image(spr_btn_lvl_03_1,640,300);
		else image(spr_btn_lvl_03_2,640,300);
		if((mouseIsPressed) && (antiBugLevelChoiceMenu) && (learnLock[4])){
			soundClickButtonMenu();
			pageCode = "level_03"; 
			levelController = true;
			isLevel = false;
		}
	}else{
		missLevelChoiceButton++;
		if (learnLock[4]) image(spr_btn_lvl_03_0,640,300);
		else image(spr_btn_lvl_03_2,640,300);
	}

	if (insideRect(mouseX,mouseY,910,300,200,200)){
		if ((soundOverButtonMenuCount == 0) && (learnLock[5])) soundOverButtonMenu();
		soundOverButtonMenuCount++;
		if (learnLock[5]) image(spr_btn_lvl_04_1,910,300);
		else image(spr_btn_lvl_04_2,910,300);
		if((mouseIsPressed) && (antiBugLevelChoiceMenu) && (learnLock[5])){
			soundClickButtonMenu();
			pageCode = "level_04"; 
			levelController = true;
			isLevel = false;
		}
	}else{
		missLevelChoiceButton++;
		if (learnLock[5]) image(spr_btn_lvl_04_0,910,300);
		else image(spr_btn_lvl_04_2,910,300);
	}

	if (insideRect(mouseX,mouseY,900,700,250,102)){ // botão de voltar.
		if (soundOverButtonMenuCount == 0) soundOverButtonMenu();
		soundOverButtonMenuCount++;
		image(spr_btn_back_1,900,700,250,102);
		if(mouseIsPressed){
			soundClickButtonMenu();
			pageCode = "menu"; 
			levelController = true;
			isLevel = false;
		}
	}else {
		missLevelChoiceButton++;
		image(spr_btn_back_0, 900, 700, 250, 102);
	}


	if(missLevelChoiceButton == 5) soundOverButtonMenuCount = 0;
}