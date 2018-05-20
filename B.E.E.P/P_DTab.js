class P_DTab{ // tebela de ações que serão executadas.
	constructor(){
		this.position = createVector(760,300); // posição do bloco.
		this.actionButtons = []; // vetor com os ids dos comandos		
		this.newButton = null; // variável de controle que receberá o novo comando a ser colocado no vetor.
	}
	drawTab(){
		fill(100);
		rectMode(CORNER);
		rect(this.position.x,this.position.y,620,120);
		for(var i = 0; i < 6; i++){
			fill(0);
			rect(this.position.x + 20 + i*100, this.position.y + 20,80,80);
		}
	}	
}