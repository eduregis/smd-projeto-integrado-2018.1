function loadCredits(){
	image(bkg_credits,0,0);

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
		soundOverButtonMenuCount = 0;
		image(spr_btn_back_0, 900, 700, 250, 102);
	}	
}