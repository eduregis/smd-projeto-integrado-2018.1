var P_Or_D = false;

class P_DTab{ // tebela de ações que serão executadas.
	constructor(limit){
		this.position = createVector(680,280); // posição do bloco.
		this.p_Or_DButtons = []; // vetor com os ids dos comandos		
		this.newButton = null; // variável de controle que receberá o novo comando a ser colocado no vetor.
		this.limit = limit;
	}
	drawTab(){
		fill(100);
		rectMode(CORNER);
		rect(this.position.x,this.position.y,560,110); // desenhamos o bloco que ficará atrás.
		for(var i = 0; i < 6; i++){ // desenhamos os espações para os botões.
			if(i < this.limit) // caso o limite não seja excedido.
				fill(0);
			else
				fill(200); // caso o limite determinado seja excedido.
			rect(this.position.x + 20 + i*90, this.position.y + 20,70,70);
		}
		if (P_Or_D) draw_P_Or_D(); // se a variável auxiliar estiver ativada, desenhamos a aba de opções.
	}
}
// ATENÇÃO!!! Os valores colocados aqui funcionam para uma casa apenas, para desenvolver mais casas, é preciso refazer essa parte orintada ao objeto.
function p_DMouseEvents(){
	if(P_Or_D){ // testa se a variável está ativa, para abrir a aba de opções.
		if(insideRect(mouseX,mouseY,640,355,70,70)){ // caso clique no primeiro botão, este abrirá a aba de procedimentos.
			P_DKey = 1;
			P_Or_D = false;
		}else if(insideRect(mouseX,mouseY,730,355,70,70)){ // caso clique no segundo botão, este abrirá a aba de decisões.
			P_DKey = 2;
			P_Or_D = false;
		}else{
			P_DKey = 0;
		}
	}	
	if(insideRect(mouseX,mouseY,700,300,70,70)){ // testa se clicamos no local correto para abrir a aba de opções.		 
		P_Or_D = true;
		P_DKey = 0;		
	}else{
		P_Or_D = false;
	}
}

function draw_P_Or_D(){ // aba de opções.
	fill(100);
	rect(620,335,200,110);
	fill(0,255,255);
	rect(640,355,70,70);
	rect(730,355,70,70);
	fill(0);
	textSize(40);
	text("P",675,400);
	text("D",765,400);	
}