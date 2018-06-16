var soundOverButtonMenuCount = 0;

function loadMenu(){	
	if (insideRect(mouseX,mouseY,795, 338, 400, 70)){
		if (soundOverButtonMenuCount == 0) soundOverButtonMenu();
		soundOverButtonMenuCount++;
		if (mouseIsPressed){
			pageCode = "levelChoice"; 
			levelController = true;
			isLevel = false;
		} 
		image(bkg_menu_start,0,0);
	} else if (insideRect(mouseX,mouseY,795, 425, 400, 70)){
		if (soundOverButtonMenuCount == 0) soundOverButtonMenu();
		soundOverButtonMenuCount++;
		if (mouseIsPressed){
			pageCode = "learn"; 
			learnIndex = 0;
			levelController = true;
			isLevel = false;
		} 
		image(bkg_menu_learn,0,0);
	} else if (insideRect(mouseX,mouseY,795, 512, 400, 70)){
		if (soundOverButtonMenuCount == 0) soundOverButtonMenu();
		soundOverButtonMenuCount++;
		image(bkg_menu_credits,0,0);
	} else if (insideRect(mouseX,mouseY,795, 599, 400, 70)){
		if (soundOverButtonMenuCount == 0) soundOverButtonMenu();
		soundOverButtonMenuCount++;
		image(bkg_menu_exit,0,0);
	} else {
		soundOverButtonMenuCount = 0;
		image(bkg_menu,0,0);
	}	
}

function soundOverButtonMenu(){
	snd_over_btn_menu.setVolume(0.1);
  	snd_over_btn_menu.play();
}