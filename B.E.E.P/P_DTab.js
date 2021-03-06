var P_Or_D = false;
var P_DKey = 0; // variável que abre ou a aba de Procedimentos ou a aba de Decisões.

class P_DTab{ // tebela de ações que serão executadas.
	constructor(limit){
		this.position = createVector(680,287); // posição do bloco.
		this.limit = limit;
	}
	drawTab(){
		fill(0,35);
		rectMode(CORNER);
		image(bkg_p_d_tab,680,255); // desenhamos o bloco que ficará atrás.
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
// ATENÇÃO!!! Os valores colocados aqui funcionam para uma casa apenas, para desenvolver mais casas, é preciso refazer essa parte orientada ao objeto.
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
	if(insideRect(mouseX,mouseY,700,300,70,70) && (P_DKey == 0)){ // testa se clicamos no local correto para abrir a aba de opções.		 
		P_Or_D = true;
	}else{
		P_Or_D = false;
	}
}

function draw_P_Or_D(){ // aba de opções.
	fill(0);
	rect(620,335,200,110);
	fill(0,255,255);
	image(spr_btn_procedure_0,640,355,70,70);
	image(spr_btn_decision_0,730,355,70,70);		
}