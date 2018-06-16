var antiBugLevelChoiceMenu = false;

function loadLevelChoice(){
	image(bkg_level,0,0);	
	if (insideRect(mouseX,mouseY,100,300,200,200)){
		image(spr_btn_lvl_01_1,100,300);
		if((mouseIsPressed) && (antiBugLevelChoiceMenu)){
			pageCode = "level_01"; 
			levelController = true;
			isLevel = false;
		}
	}else{
		image(spr_btn_lvl_01_0,100,300);
	}

	if (insideRect(mouseX,mouseY,370,300,200,200)){
		if (learnLock[3]) image(spr_btn_lvl_02_1,370,300);
		else image(spr_btn_lvl_02_2,370,300);
		if((mouseIsPressed) && (antiBugLevelChoiceMenu) && (learnLock[3])){
			pageCode = "level_02"; 
			levelController = true;
			isLevel = false;
		}
	}else{
		if (learnLock[3]) image(spr_btn_lvl_02_0,370,300);
		else image(spr_btn_lvl_02_2,370,300);
	}

	if (insideRect(mouseX,mouseY,640,300,200,200)){
		if (learnLock[4]) image(spr_btn_lvl_03_1,640,300);
		else image(spr_btn_lvl_03_2,640,300);
		if((mouseIsPressed) && (antiBugLevelChoiceMenu) && (learnLock[4])){
			pageCode = "level_03"; 
			levelController = true;
			isLevel = false;
		}
	}else{
		if (learnLock[4]) image(spr_btn_lvl_03_0,640,300);
		else image(spr_btn_lvl_03_2,640,300);
	}

	if (insideRect(mouseX,mouseY,910,300,200,200)){
		if (learnLock[5]) image(spr_btn_lvl_04_1,910,300);
		else image(spr_btn_lvl_04_2,910,300);
		if((mouseIsPressed) && (antiBugLevelChoiceMenu) && (learnLock[5])){
			pageCode = "level_04"; 
			levelController = true;
			isLevel = false;
		}
	}else{
		if (learnLock[5]) image(spr_btn_lvl_04_0,910,300);
		else image(spr_btn_lvl_04_2,910,300);
	}
}