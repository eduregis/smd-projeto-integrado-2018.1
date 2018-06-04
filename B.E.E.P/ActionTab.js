class ActionTab{ // tebela de ações que serão executadas.
	constructor(limit){
		this.position = createVector(680,60); // posição do bloco.
		this.actionButtons = []; // vetor com os ids dos comandos		
		this.newButton = null; // variável de controle que receberá o novo comando a ser colocado no vetor.		
		this.limit = limit;
		if (this.limit > 12) this.limit = 12;
	}

	drawTab(){
		if (this.newButton != null) { // caso um botão seja arrastado até esta tabela de ações, este será introduzido na última posição vaga. 
			if(this.actionButtons.length < this.limit){ // testa se o máximo de posições foi excedido.
				this.actionButtons.push(this.newButton); // caso não tenha excedido, coloca-se esse botão no vetor.
			}			
			this.newButton = null; // a variável de controle fica vaga para um novo botão entrar.
		}
		rectMode(CORNER);
		fill(0,35);
		rect(this.position.x,this.position.y,560,200);	// bloco principal.	
		for(var i = 0; i < 6; i++){
			if(i < this.actionButtons.length){ // desenha os botões que estão na tabela de ações.
				switch(this.actionButtons[i]){
					case 0:
						if(i == actionIndex - 1) image(spr_btn_walk_1,this.position.x + 20 + i*90, this.position.y + 20,70,70); // dá o efeito luminoso ao botão, quando esse é o ativo.
						else image(spr_btn_walk_0,this.position.x + 20 + i*90, this.position.y + 20,70,70); //tira o efeito luminoso ao botão, quando esse não é o ativo.
						break;
					case 1:
						if(i == actionIndex - 1) image(spr_btn_turn_left_1,this.position.x + 20 + i*90, this.position.y + 20,70,70);
						else image(spr_btn_turn_left_0,this.position.x + 20 + i*90, this.position.y + 20,70,70);
						break;
					case 2:
						if(i == actionIndex - 1) image(spr_btn_turn_right_1,this.position.x + 20 + i*90, this.position.y + 20,70,70);
						else image(spr_btn_turn_right_0,this.position.x + 20 + i*90, this.position.y + 20,70,70);
						break;
					case 3:
						if(i == actionIndex - 1) image(spr_btn_grab_drop_1,this.position.x + 20 + i*90, this.position.y + 20,70,70);
						else image(spr_btn_grab_drop_0,this.position.x + 20 + i*90, this.position.y + 20,70,70);
						break;
					case 4:
						if(i == actionIndex - 1) image(spr_btn_attack_1,this.position.x + 20 + i*90, this.position.y + 20,70,70);
						else image(spr_btn_attack_0,this.position.x + 20 + i*90, this.position.y + 20,70,70);
						break;
					case 5:
						if(i == actionIndex - 1) image(spr_btn_press_1,this.position.x + 20 + i*90, this.position.y + 20,70,70);
						else image(spr_btn_press_0,this.position.x + 20 + i*90, this.position.y + 20,70,70);
						break;
					case 6:
						if(i == actionIndex - 1) image(spr_btn_procedure_1,this.position.x + 20 + i*90, this.position.y + 20,70,70);
						else image(spr_btn_procedure_0,this.position.x + 20 + i*90, this.position.y + 20,70,70);
						break;
					case 7:
						if(i == actionIndex - 1) image(spr_btn_decision_1,this.position.x + 20 + i*90, this.position.y + 20,70,70);
						else image(spr_btn_decision_0,this.position.x + 20 + i*90, this.position.y + 20,70,70);
						break;
					default:
						fill(255,0,0);
						rect(this.position.x + 20 + i*90, this.position.y + 20,70,70);
						break;
				}
			}
			else{
				if (i >= this.limit){ // desenho espaço cinza (placeholder?) caso o tenha limite de bloco.
					fill(200);
				} else{
					fill(0); // caso não tenha ainda um botão respectivo na tabela, o espaço fica vazio.
				}				
				rect(this.position.x + 20 + i*90, this.position.y + 20,70,70);	
			}														
		}
		for(var i = 6; i < 12; i++){
			if(i < this.actionButtons.length){
				switch(this.actionButtons[i]){
					case 0:
						if (i == actionIndex - 1) image(spr_btn_walk_1,this.position.x - 520 + i*90, this.position.y + 110,70,70);
						else image(spr_btn_walk_0,this.position.x - 520 + i*90, this.position.y + 110,70,70);
						break;
					case 1:
						if (i == actionIndex - 1) image(spr_btn_turn_left_1,this.position.x - 520 + i*90, this.position.y + 110,70,70);
						else image(spr_btn_turn_left_0,this.position.x - 520 + i*90, this.position.y + 110,70,70);
						break;
					case 2:
						if (i == actionIndex - 1) image(spr_btn_turn_right_1,this.position.x - 520 + i*90, this.position.y + 110,70,70);
						else image(spr_btn_turn_right_0,this.position.x - 520 + i*90, this.position.y + 110,70,70);
						break;
					case 3:
						if (i == actionIndex - 1) image(spr_btn_grab_drop_1,this.position.x - 520 + i*90, this.position.y + 110,70,70);
						else image(spr_btn_grab_drop_0,this.position.x - 520 + i*90, this.position.y + 110,70,70);
						break;
					case 4:
						if (i == actionIndex - 1) image(spr_btn_attack_1,this.position.x - 520 + i*90, this.position.y + 110,70,70);
						else image(spr_btn_attack_0,this.position.x - 520 + i*90, this.position.y + 110,70,70);
						break;
					case 5:
						if (i == actionIndex - 1) image(spr_btn_press_1,this.position.x - 520 + i*90, this.position.y + 110,70,70);
						else image(spr_btn_press_0,this.position.x - 520 + i*90, this.position.y + 110,70,70);
						break;
					case 6:
						if(i == actionIndex - 1) image(spr_btn_procedure_1,this.position.x + 20 + i*90, this.position.y + 20,70,70);
						else image(spr_btn_procedure_0,this.position.x + 20 + i*90, this.position.y + 20,70,70);
						break;
					case 7:
						if(i == actionIndex - 1) image(spr_btn_decision_1,this.position.x + 20 + i*90, this.position.y + 20,70,70);
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
				rect(this.position.x - 520 + i*90, this.position.y + 110,70,70);	
			}					
		}		
	}
}