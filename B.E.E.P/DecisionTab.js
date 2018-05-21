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
			fill(100);
			rectMode(CORNER);
			rect(this.position.x,this.position.y,470,290);
			fill(0);
			textSize(30);
			text("IF",this.position.x + 50,this.position.y + 50);
			text("ELSE",this.position.x + 70,this.position.y + 180);
			for(var i = 0; i < 5; i++){
				if(i < this.actionButtonsIf.length){
					fill(255,120,0);
					rect(this.position.x + 20 + i*90, this.position.y + 65,70,70);
					fill(255);
					textSize(40);
					text(this.actionButtonsIf[i],this.position.x + 60 + i*90, this.position.y + 115);
				}
				else{
					if (i >= this.limitIf){
						fill(200);
					} else{
						fill(0);
					}				
					rect(this.position.x + 20 + i*90, this.position.y + 65,70,70);	
				}				
			}
			for(var i = 0; i < 5; i++){
				if(i < this.actionButtonsElse.length){
					fill(255,120,0);
					rect(this.position.x + 20 + i*90, this.position.y + 200,70,70);
					fill(255);
					textSize(40);
					text(this.actionButtonsElse[i],this.position.x + 60 + i*90, this.position.y + 250);
				}
				else{
					if (i >= this.limitElse){
						fill(200);
					} else{
						fill(0);
					}				
					rect(this.position.x + 20 + i*90, this.position.y + 200,70,70);	
				}				
			}			
		}
	}	
}