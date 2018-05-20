class ProcedureTab{ // tebela de ações que serão executadas.
	constructor(){
		this.position = createVector(680,410); // posição do bloco.
		this.actionButtons = []; // vetor com os ids dos comandos		
		this.newButton = null; // variável de controle que receberá o novo comando a ser colocado no vetor.
	}
	drawTab(){
		if(P_DKey == 1){
			fill(100);
			rectMode(CORNER);
			rect(this.position.x,this.position.y,470,200);
			for(var i = 0; i < 5; i++){
				fill(0);
				rect(this.position.x + 20 + i*90, this.position.y + 20,70,70);
			}
			for(var i = 5; i < 10; i++){
				fill(0);
				rect(this.position.x - 430 + i*90, this.position.y + 110,70,70);
			}
		}		
	}	
}

function procedureTabMouseEvents(){
	
}