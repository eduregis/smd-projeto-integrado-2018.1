var learnLock = [true,true,true,false,false,false,false]; // vetor de booleanos que diz quais props estão liberados.
var victoryVector = [false,false,false,false];
var learnIndex = 0; // endereço da página na seção de aprender.

function loadLearn(){
	switch(learnIndex){
		case 0:
			if(learnLock[0]) image(bkg_learn_00,0,0);
			else image(bkg_learn_lock,0,0);
			break;
		case 1:
			if(learnLock[1]) image(bkg_learn_01,0,0);
			else image(bkg_learn_lock,0,0);
			break;
		case 2:
			if(learnLock[2]) image(bkg_learn_02,0,0);
			else image(bkg_learn_lock,0,0);
			break;
		case 3:
			if(learnLock[3]) image(bkg_learn_03,0,0);
			else image(bkg_learn_lock,0,0);
			break;
		case 4:
			if(learnLock[4]) image(bkg_learn_04,0,0);
			else image(bkg_learn_lock,0,0);
			break;
		case 5:
			if(learnLock[5]) image(bkg_learn_05,0,0);
			else image(bkg_learn_lock,0,0);
			break;
		case 6:
			if(learnLock[6]) image(bkg_learn_06,0,0);
			else image(bkg_learn_lock,0,0);
			break;
	}
	if (insideRect(mouseX,mouseY,900,700,250,102)){ // botão de voltar.
		image(spr_btn_back_1,900,700,250,102);
		if(mouseIsPressed){
			pageCode = "menu"; 
			levelController = true;
			isLevel = false;
		}
	}else image(spr_btn_back_0, 900, 700, 250, 102);	

	if (insideRect(mouseX,mouseY, 24, 630, 153, 58)){ // botão da aba 'algoritmo'.
		image(spr_btn_learn_00, 19, 628, 163, 62);
		if(mouseIsPressed){
			learnIndex = 0;
		}
	}else image(spr_btn_learn_00, 24, 630, 153, 58);

	if (insideRect(mouseX,mouseY, 204, 630, 153, 58)){ // botão da aba 'variáveis'.
		image(spr_btn_learn_01, 199, 628, 163, 62);
		if(mouseIsPressed){
			learnIndex = 1;
		}
	}else image(spr_btn_learn_01,204, 630, 153, 58);
	
	if (insideRect(mouseX,mouseY, 384, 630, 153, 58)){ // botão da aba 'fluxograma'.
		image(spr_btn_learn_02, 379, 628, 163, 62);
		if(mouseIsPressed){
			learnIndex = 2;
		}
	}else image(spr_btn_learn_02, 384, 630,153,58);

	if (insideRect(mouseX,mouseY, 564, 630,153, 58)){ // botão da aba 'interatividade'.
		image(spr_btn_learn_03, 559, 628, 163, 62);
		if(mouseIsPressed){
			learnIndex = 3;
		}
	}else image(spr_btn_learn_03, 564, 630, 153, 58);	

	if (insideRect(mouseX,mouseY,744, 630,153,58)){ // botão da aba 'estruturas'.
		image(spr_btn_learn_04,739, 628, 163, 62);
		if(mouseIsPressed){
			learnIndex = 4;
		}
	}else image(spr_btn_learn_04, 744, 630, 153, 58);

	if (insideRect(mouseX,mouseY, 924, 630, 153, 58)){ // botão da aba 'condicionantes'.
		image(spr_btn_learn_05, 919, 628, 163, 62);
		if(mouseIsPressed){
			learnIndex = 5;
		}
	}else image(spr_btn_learn_05, 924, 630, 153, 58);

	if (insideRect(mouseX,mouseY, 1104,630, 153, 58)){ // botão da aba 'operadores lógicos'.
		image(spr_btn_learn_06, 1099,628, 163, 62);
		if(mouseIsPressed){
			learnIndex = 6;
		}
	}else image(spr_btn_learn_06,1104,630,153,58);	
	
}
