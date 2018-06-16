var buttonCode = null; // variável de controle para identificar os botões.
var contMissButton; // variável de controle para selecionar os botões.
var mouseButton = null; // botão que seguirá o mouse enquanto ele o arrasta.

class Button{
	constructor(x,y,w,h,id,spr_on,spr_off){
		this.id = id; // identificador do botão, para controle e unicidade.
		this.position = createVector(x,y); // posição dos botões estáticos.
		this.dimension = createVector(w,h); // dimensão dos botões.
		this.spr_on = spr_on; // guarda a imagem do botão ativado.
		this.spr_off = spr_off; // guarda a imagem do botão desativado.
		this.status = 0; // estado do botão, se este está normal, sob o mouse, ou clicado.
	}
	draw(){ 
		rectMode(CENTER); 
		textAlign(CENTER);
		textSize(16);
		switch(this.status){
			case 0:
				this.basic(); // caso o mouse não esteja em cima do botão.
				if(insideRect(mouseX,mouseY,this.position.x - this.dimension.x/2, this.position.y - this.dimension.y/2, this.dimension.x, this.dimension.y)){
					if(!mouseIsPressed) // impede que ao clicar em um botão, outros ao estarem sob o mouse, mudem de status.
						soundOverButtonMenu();
						this.status = 1;
				}
				break;
			case 1:
				this.above(); // caso o mouse estaja em cima do botão.
				if(!insideRect(mouseX,mouseY,this.position.x - this.dimension.x/2, this.position.y - this.dimension.y/2, this.dimension.x, this.dimension.y)){
					this.status = 0;
				}else if(mouseIsPressed){
					this.status = 2;
				}							
				break;
			case 2:
				this.click(); // caso o botão seja clicado.
				if(insideRect(mouseX,mouseY,this.position.x - this.dimension.x/2, this.position.y - this.dimension.y/2, this.dimension.x, this.dimension.y)){
					 if (!mouseIsPressed) this.status = 1;
				}else{
					this.status = 0;
				}				
				break;
		}
	}
	basic(){ // quando o mouse não está em cima do botão.
		image(this.spr_off,this.position.x - 40,this.position.y - 40);
	}
	above(){ // quando o mouse está em cima do botão.		
		image(this.spr_on,this.position.x - 40,this.position.y - 40); 
	}
	click(){ // quando o botão é clicado.
		if(buttonCode == this.id){
			stroke(0);
			fill(0); // cor do botão clicado.
			rect(this.position.x, this.position.y, this.dimension.x,this.dimension.y);
			fill(200);
			// diminui a fonte para adequar-se ao tamanho do botão.
			if((this.id == 1) || (this.id == 2)) textSize(10);
			if(this.id == 3) textSize(14);	
		}		
	}
}

function between(max, min, val){ // testa se uma variável esta dentro de um escopo determinado.
	if(val <= max){
		if(val >= min){
			return true;
		}
	}
	return false;
}

function insideRect(mx,my,x,y,w,h){ // testa se uma variável esta dentro de um escopo de 2 dimensões determinado.
	if(between(x+w,x,mx)){
		if(between(y+h,y,my)){
			return true;
		}
	}
	return false;
}

function drawMouseButton(){ // desenha o botão que segue o mouse quando este está o arrastando
	if(buttonCode != null){
		mouseButton = new Button(mouseX,mouseY,80,80,basicButtons[buttonCode].id,basicButtons[buttonCode].spr_off,basicButtons[buttonCode].spr_on);
		mouseButton.draw();
	}
}

function loadButtons(){ // carregando os botões.
	button1 = new Button(100,700,70,70,0,spr_btn_walk_1, spr_btn_walk_0);
	basicButtons.push(button1);
	button2 = new Button(200,700,70,70,1,spr_btn_turn_left_1, spr_btn_turn_left_0);
	basicButtons.push(button2);
	button3 = new Button(300,700,70,70,2,spr_btn_turn_right_1, spr_btn_turn_right_0);
	basicButtons.push(button3);
	button4 = new Button(400,700,70,70,3,spr_btn_grab_drop_1, spr_btn_grab_drop_0);
	basicButtons.push(button4);
	button5 = new Button(500,700,70,70,4,spr_btn_attack_1, spr_btn_attack_0);
	basicButtons.push(button5);
	button6 = new Button(600,700,70,70,5,spr_btn_press_1,spr_btn_press_0);
	basicButtons.push(button6);
	button7 = new Button(735,342,70,70,6,spr_btn_procedure_1,spr_btn_procedure_0);
	basicButtons.push(button7);
	button8 = new Button(735,342,70,70,7,spr_btn_decision_1,spr_btn_decision_0);
	basicButtons.push(button8);
}

function drawButtons(){ // desenha os botões estáticos e que segue o mouse.
	for(var i = 0; i < 6; i++){		
		basicButtons[i].draw();
	}
	if (P_DKey == 1){
		basicButtons[6].draw();
	}else if (P_DKey == 2){
		basicButtons[7].draw();
	}
	drawMouseButton();	
}

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

