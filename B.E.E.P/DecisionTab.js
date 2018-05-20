class DecisionTab{ // tebela de ações que serão executadas.
	constructor(){
		this.position = createVector(680,410); // posição do bloco.
		this.actionButtons = []; // vetor com os ids dos comandos		
		this.newButton = null; // variável de controle que receberá o novo comando a ser colocado no vetor.
	}
	drawTab(){
		fill(100);
		rectMode(CORNER);
		rect(this.position.x,this.position.y,470,200);
		
	}	
}