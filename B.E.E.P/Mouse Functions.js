function mousePressed(){ 
	contMissButton = 0; // caso o clique não seja em nenhum botão, esta variável nos ajuda a deixar o campo do botão que segue o mouse nulo.
	for (var i = 0; i < 6; i++){
		if ((isLevel) && insideRect(mouseX,mouseY,basicButtons[i].position.x - basicButtons[i].dimension.x/2, basicButtons[i].position.y - basicButtons[i].dimension.y/2, basicButtons[i].dimension.x, basicButtons[i].dimension.y))
			buttonCode = i;
		else
			contMissButton++;
	}		
	// o clique passa por 8 testes, para cada um dos botões arrastáveis, caso "erre", ou seja, não clique em nenhum dos botões, o mouse não recebe um botão de referência.
	if(contMissButton == 6) buttonCode = null;
	if((isLevel) && insideRect(mouseX,mouseY,basicButtons[6].position.x - basicButtons[6].dimension.x/2, basicButtons[6].position.y - basicButtons[6].dimension.y/2, basicButtons[6].dimension.x, basicButtons[6].dimension.y)){
		if(P_DKey == 1){
			buttonCode = 6;
		}else if (P_DKey == 2){
			buttonCode = 7;
		}else{
			buttonCode = null;
		}
	}
	p_DMouseEvents();
	procedureTabMouseEvents();	
}

function mouseReleased(){ // ao terminar o comando de arrastar, o botão do mouse volta a ser nulo.

	instructionCounter++;

	antiBugLevelChoiceMenu = true;
	if((isLevel) && (mouseX <= 1380) && (mouseX >= 680) && (mouseY <= 240) && (mouseY >= 45) && (!blockBarrier)){ // arrastando para a aba de ações.
		actionTab.newButton = mouseButton.id;			
	}
	buttonCode = null;

	if(P_DKey == 1){ //arrastando para a aba de procedimentos, caso esteja aberta.
		if((isLevel) && (mouseX <= 1150) && (mouseX >= 680) && (mouseY <= 640) && (mouseY >= 445) && (!blockBarrier)){
			procedureTab.newButton = mouseButton.id;			
		}
	}

	if(P_DKey == 2){ //arrastando para a aba de procedimentos, caso esteja aberta.
		if((isLevel) && (mouseX <= 1150) && (mouseX >= 680) && (mouseY <= 545) && (mouseY >= 475) && (!blockBarrier)){
			decisionTab.newButtonIf = mouseButton.id;			
		}else if((mouseX <= 1150) && (mouseX >= 680) && (mouseY <= 700) && (mouseY >= 610)){
			decisionTab.newButtonElse = mouseButton.id;			
		}
	}
}
