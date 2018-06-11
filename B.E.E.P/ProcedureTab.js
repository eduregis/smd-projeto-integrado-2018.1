class ProcedureTab{ // tebela de ações que serão executadas.
	constructor(limit){
		this.position = createVector(680,435); // posição do bloco.
		this.actionButtons = []; // vetor com os ids dos comandos		
		this.newButton = null; // variável de controle que receberá o novo comando a ser colocado no vetor.
		this.limit = limit;
	}
	drawTab(){
		if (this.newButton != null) { // caso um botão seja arrastado até esta tabela de ações, este será introduzido na última posição vaga. 
			if(this.actionButtons.length < this.limit){ // testa se o máximo de posições foi excedido.
				this.actionButtons.push(this.newButton); // caso não tenha excedido, coloca-se esse botão no vetor.
			}			
			this.newButton = null; // a variável de controle fica vaga para um novo botão entrar.
		}
		if(P_DKey == 1){
			fill(0,35);
			rectMode(CORNER);
			image(bkg_procedure_tab,680,405);
			for(var i = 0; i < 5; i++){
				if(i < this.actionButtons.length){
					switch(this.actionButtons[i]){
						case 0:
							if(i == procedureIndex - 1) image(spr_btn_walk_1,this.position.x + 20 + i*90, this.position.y + 20,70,70);
							else image(spr_btn_walk_0,this.position.x + 20 + i*90, this.position.y + 20,70,70);
							break;
						case 1:
							if(i == procedureIndex - 1) image(spr_btn_turn_left_1,this.position.x + 20 + i*90, this.position.y + 20,70,70);
							else image(spr_btn_turn_left_0,this.position.x + 20 + i*90, this.position.y + 20,70,70);
							break;
						case 2:
							if(i == procedureIndex - 1) image(spr_btn_turn_right_1,this.position.x + 20 + i*90, this.position.y + 20,70,70);
							else image(spr_btn_turn_right_0,this.position.x + 20 + i*90, this.position.y + 20,70,70);
							break;
						case 3:
							if(i == procedureIndex - 1) image(spr_btn_grab_drop_1,this.position.x + 20 + i*90, this.position.y + 20,70,70);
							else image(spr_btn_grab_drop_0,this.position.x + 20 + i*90, this.position.y + 20,70,70);
							break;
						case 4:
							if(i == procedureIndex - 1) image(spr_btn_attack_1,this.position.x + 20 + i*90, this.position.y + 20,70,70);
							else image(spr_btn_attack_0,this.position.x + 20 + i*90, this.position.y + 20,70,70);
							break;
						case 5:
							if(i == procedureIndex - 1) image(spr_btn_press_1,this.position.x + 20 + i*90, this.position.y + 20,70,70);
							else  image(spr_btn_press_0,this.position.x + 20 + i*90, this.position.y + 20,70,70);
							break;
						case 6:
							if(i == procedureIndex - 1) image(spr_btn_procedure_1,this.position.x + 20 + i*90, this.position.y + 20,70,70);
							else image(spr_btn_procedure_0,this.position.x + 20 + i*90, this.position.y + 20,70,70);
							break;
						case 7:
							if(i == procedureIndex - 1) image(spr_btn_decision_1,this.position.x + 20 + i*90, this.position.y + 20,70,70);
							else image(spr_btn_decision_0,this.position.x + 20 + i*90, this.position.y + 20,70,70);
							break;
					}
				}
				else{
					if (i >= this.limit){
						fill(200);
					} else{
						fill(0);
					}				
					rect(this.position.x + 20 + i*90, this.position.y + 20,70,70);	
				}				
			}
			for(var i = 5; i < 10; i++){
				if(i < this.actionButtons.length){
					switch(this.actionButtons[i]){
						case 0:
							if(i == procedureIndex - 1) image(spr_btn_walk_1,this.position.x - 430 + i*90, this.position.y + 110,70,70);
							else image(spr_btn_walk_0,this.position.x - 430 + i*90, this.position.y + 110,70,70);
							break;
						case 1:
							if(i == procedureIndex - 1) image(spr_btn_turn_left_1,this.position.x - 430 + i*90, this.position.y + 110,70,70);
							else image(spr_btn_turn_left_0,this.position.x - 430 + i*90, this.position.y + 110,70,70);
							break;
						case 2:
							if(i == procedureIndex - 1) image(spr_btn_turn_right_1,this.position.x - 430 + i*90, this.position.y + 110,70,70);
							else image(spr_btn_turn_right_0,this.position.x - 430 + i*90, this.position.y + 110,70,70);
							break;
						case 3:
							if(i == procedureIndex - 1) image(spr_btn_grab_drop_1,this.position.x - 430 + i*90, this.position.y + 110,70,70);
							else image(spr_btn_grab_drop_0,this.position.x - 430 + i*90, this.position.y + 110,70,70);
							break;
						case 4:
							if(i == procedureIndex - 1) image(spr_btn_attack_1,this.position.x - 430 + i*90, this.position.y + 110,70,70);
							else image(spr_btn_attack_0,this.position.x - 430 + i*90, this.position.y + 110,70,70);
							break;
						case 5:
							if(i == procedureIndex - 1) image(spr_btn_press_1,this.position.x - 430 + i*90, this.position.y + 110,70,70);
							else image(spr_btn_press_0,this.position.x - 430 + i*90, this.position.y + 110,70,70);
							break;
						case 6:
							if(i == procedureIndex - 1) image(spr_btn_procedure_1,this.position.x - 430 + i*90, this.position.y + 110,70,70);
							else image(spr_btn_procedure_0,this.position.x - 430 + i*90, this.position.y + 110,70,70);
							break;
						case 7:
							if(i == procedureIndex - 1) image(spr_btn_decision_1,this.position.x - 430 + i*90, this.position.y + 110,70,70);
							else image(spr_btn_decision_0,this.position.x - 430 + i*90, this.position.y + 110,70,70);
							break;
					}
				}
				else{
					if (i >= this.limit){
						fill(200);
					} else{
						fill(0);
					}	
					rect(this.position.x - 430 + i*90, this.position.y + 110,70,70);	
				}
			}
		}
	}	
}

function procedureTabMouseEvents(){
	
}