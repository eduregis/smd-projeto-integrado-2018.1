class DecisionTab{ // tebela de ações que serão executadas.
	constructor(limitIf,limitElse){
		this.position = createVector(680,410); // posição do bloco.
		this.actionButtonsIf = []; // vetor com os ids dos comandos	
		this.actionButtonsElse = []; // vetor com os ids dos comandos		
		this.newButtonIf = null; // variável de controle que receberá o novo comando a ser colocado no vetor.
		this.newButtonElse = null; // variável de controle que receberá o novo comando a ser colocado no vetor.
		this.limitIf = limitIf;
		this.limitElse = limitElse;
	}
	drawTab(){
		if (this.newButtonIf != null) { // caso um botão seja arrastado até esta tabela de ações, este será introduzido na última posição vaga. 
			if(this.actionButtonsIf.length < this.limitIf){ // testa se o máximo de posições foi excedido.
				this.actionButtonsIf.push(this.newButtonIf); // caso não tenha excedido, coloca-se esse botão no vetor.
			}			
			this.newButtonIf = null; // a variável de controle fica vaga para um novo botão entrar.
		}
		if (this.newButtonElse != null) { // caso um botão seja arrastado até esta tabela de ações, este será introduzido na última posição vaga. 
			if(this.actionButtonsElse.length < this.limitElse){ // testa se o máximo de posições foi excedido.
				this.actionButtonsElse.push(this.newButtonElse); // caso não tenha excedido, coloca-se esse botão no vetor.
			}			
			this.newButtonElse = null; // a variável de controle fica vaga para um novo botão entrar.
		}		
		if(P_DKey == 2){
			fill(0,35);
			rectMode(CORNER);
			image(bkg_decision_tab,this.position.x,this.position.y - 8);
			fill(0);			
			for(var i = 0; i < 5; i++){
				if(i < this.actionButtonsIf.length){
					switch(this.actionButtonsIf[i]){
						case 0:
							if(i == decisionIfIndex - 1) image(spr_btn_walk_1,this.position.x + 20 + i*90, this.position.y + 68,70,70);
							else image(spr_btn_walk_0,this.position.x + 20 + i*90, this.position.y + 68,70,70);
							break;
						case 1:
							if(i == decisionIfIndex - 1) image(spr_btn_turn_left_1,this.position.x + 20 + i*90, this.position.y + 68,70,70);
							else image(spr_btn_turn_left_0,this.position.x + 20 + i*90, this.position.y + 68,70,70);
							break;
						case 2:
							if(i == decisionIfIndex - 1) image(spr_btn_turn_right_1,this.position.x + 20 + i*90, this.position.y + 68,70,70);
							else  image(spr_btn_turn_right_0,this.position.x + 20 + i*90, this.position.y + 68,70,70);
							break;
						case 3:
							if(i == decisionIfIndex - 1) image(spr_btn_grab_drop_1,this.position.x + 20 + i*90, this.position.y + 68,70,70);
							else  image(spr_btn_grab_drop_0,this.position.x + 20 + i*90, this.position.y + 68,70,70);
							break;
						case 4:
							if(i == decisionIfIndex - 1) image(spr_btn_attack_1,this.position.x + 20 + i*90, this.position.y + 68,70,70);
							else  image(spr_btn_attack_0,this.position.x + 20 + i*90, this.position.y + 68,70,70);
							break;
						case 5:
							if(i == decisionIfIndex - 1) image(spr_btn_press_1,this.position.x + 20 + i*90, this.position.y + 68,70,70);
							else  image(spr_btn_press_0,this.position.x + 20 + i*90, this.position.y + 68,70,70);
							break;
						case 6:
							if(i == decisionIfIndex - 1) image(spr_btn_procedure_1,this.position.x + 20 + i*90, this.position.y + 68,70,70);
							else image(spr_btn_procedure_0,this.position.x + 20 + i*90, this.position.y + 68,70,70);
							break;
						case 7:
							if(i == decisionIfIndex - 1) image(spr_btn_decision_1,this.position.x + 20 + i*90, this.position.y + 68,70,70);
							else image(spr_btn_decision_0,this.position.x + 20 + i*90, this.position.y + 68,70,70);
							break;
					}
				}
				else{
					if (i >= this.limitIf){
						fill(200);
					} else{
						fill(0);
					}				
					rect(this.position.x + 20 + i*90, this.position.y + 68,70,70);	
				}				
			}
			for(var i = 0; i < 5; i++){
				if(i < this.actionButtonsElse.length){
					switch(this.actionButtonsElse[i]){
						case 0:
							if(i == decisionElseIndex - 1) image(spr_btn_walk_1,this.position.x + 20 + i*90, this.position.y + 180,70,70);
							else  image(spr_btn_walk_0,this.position.x + 20 + i*90, this.position.y + 180,70,70);
							break;
						case 1:
							if(i == decisionElseIndex - 1) image(spr_btn_turn_left_1,this.position.x + 20 + i*90, this.position.y + 180,70,70);
							else  image(spr_btn_turn_left_0,this.position.x + 20 + i*90, this.position.y + 180,70,70);
							break;
						case 2:
							if(i == decisionElseIndex - 1) image(spr_btn_turn_right_1,this.position.x + 20 + i*90, this.position.y + 180,70,70);
							else image(spr_btn_turn_right_0,this.position.x + 20 + i*90, this.position.y + 180,70,70);
							break;
						case 3:
							if(i == decisionElseIndex - 1) image(spr_btn_grab_drop_1,this.position.x + 20 + i*90, this.position.y + 180,70,70);
							else image(spr_btn_grab_drop_0,this.position.x + 20 + i*90, this.position.y + 180,70,70);
							break;
						case 4:
							if(i == decisionElseIndex - 1) image(spr_btn_attack_1,this.position.x + 20 + i*90, this.position.y + 180,70,70);
							else image(spr_btn_attack_0,this.position.x + 20 + i*90, this.position.y + 180,70,70);
							break;
						case 5:
							if(i == decisionElseIndex - 1) image(spr_btn_press_1,this.position.x + 20 + i*90, this.position.y + 180,70,70);
							else  image(spr_btn_press_0,this.position.x + 20 + i*90, this.position.y + 180,70,70);
							break;
						case 6:
							if(i == decisionElseIndex - 1) image(spr_btn_procedure_1,this.position.x + 20 + i*90, this.position.y + 180,70,70);
							else image(spr_btn_procedure_0,this.position.x + 20 + i*90, this.position.y + 180,70,70);
							break;
						case 7:
							if(i == decisionElseIndex - 1) image(spr_btn_decision_1,this.position.x + 20 + i*90, this.position.y + 180,70,70);
							else image(spr_btn_decision_0,this.position.x + 20 + i*90, this.position.y + 180,70,70)
							break;
					}
				}
				else{
					if (i >= this.limitElse){
						fill(200);
					} else{
						fill(0);
					}				
					rect(this.position.x + 20 + i*90, this.position.y + 180,70,70);	
				}				
			}			
		}
	}	
}