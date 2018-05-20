class ActionTab{ // tebela de ações que serão executadas.
	constructor(){
		this.position = createVector(760,60); // posição do bloco.
		this.actionButtons = []; // vetor com os ids dos comandos		
		this.newButton = null; // variável de controle que receberá o novo comando a ser colocado no vetor.
	}

	drawTab(){
		if (this.newButton != null) { // caso um botão seja arrastado até esta tabela de ações, este será introduzido na última posição vaga. 
			if(this.actionButtons.length < 12){ // testa se o máximo de posições foi excedido.
				this.actionButtons.push(this.newButton); // caso não tenha excedido, coloca-se esse botão no vetor.
			}			
			this.newButton = null; // a variável de controle fica vaga para um novo botão entrar.
		}
		rectMode(CORNER);
		fill(100);
		rect(this.position.x,this.position.y,620,220);	// bloco principal.	
		for(var i = 0; i < 6; i++){
			if(i < this.actionButtons.length){
				fill(255,120,0);
				rect(this.position.x + 20 + i*100, this.position.y + 20,80,80);
				fill(255);
				textSize(40);
				text(this.actionButtons[i],this.position.x + 60 + i*100, this.position.y + 70);

			}
			else{
				fill(0);
				rect(this.position.x + 20 + i*100, this.position.y + 20,80,80);	
			}														
		}
		for(var i = 6; i < 12; i++){
			if(i < this.actionButtons.length){
				fill(255,120,0);
				rect(this.position.x - 580 + i*100, this.position.y + 120,80,80);
				fill(255);
				textSize(40);
				text(this.actionButtons[i],this.position.x - 540 + i*100, this.position.y + 170);

			}
			else{
				fill(0);
				rect(this.position.x - 580 + i*100, this.position.y + 120,80,80);	
			}					
		}
		print(this.actionButtons);
	}
}