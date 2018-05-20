class ProcedureTab{ // tebela de ações que serão executadas.
	constructor(limit){
		this.position = createVector(680,410); // posição do bloco.
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
			fill(100);
			rectMode(CORNER);
			rect(this.position.x,this.position.y,470,200);
			for(var i = 0; i < 5; i++){
				if(i < this.actionButtons.length){
					fill(255,120,0);
					rect(this.position.x + 20 + i*90, this.position.y + 20,70,70);
					fill(255);
					textSize(40);
					text(this.actionButtons[i],this.position.x + 60 + i*90, this.position.y + 70);
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
					fill(255,120,0);
					rect(this.position.x - 430 + i*90, this.position.y + 110,70,70);
					fill(255);
					textSize(40);
					text(this.actionButtons[i],this.position.x - 395 + i*90, this.position.y + 160);

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
		
		

	print(this.actionButtons);
	}	
}

function procedureTabMouseEvents(){
	
}