var buttonCode = null; // variável de controle para identificar os botões.
var contMissButton; // variável de controle para selecionar os botões.
var mouseButton = null; // botão que seguirá o mouse enquanto ele o arrasta.

class Button{
	constructor(x,y,w,h,id,text){
		this.id = id; // identificador do botão, para controle e unicidade.
		this.position = createVector(x,y); // posição dos botões estáticos.
		this.dimension = createVector(w,h); // dimensão dos botões.
		this.text = text; // texto escrito dentro do botão.
		this.status = 0; // estado do botão, se este está normal, sob o mouse, ou clicado.
	}
	draw(){ // placeholders?
		rectMode(CENTER); 
		textAlign(CENTER);
		textSize(16);
		switch(this.status){
			case 0:
				this.basic(); // caso o mouse não esteja em cima do botão.
				if(insideRect(mouseX,mouseY,this.position.x - this.dimension.x/2, this.position.y - this.dimension.y/2, this.dimension.x, this.dimension.y)){
					if(!mouseIsPressed) // impede que ao clicar em um botão, outros ao estarem sob o mouse, mudem de status.
						this.status = 1;
				}
				break;
			case 1:
				this.above(); // caso o mouse estaja em cima do botão.
				if(!insideRect(mouseX,mouseY,this.position.x - this.dimension.x/2, this.position.y - this.dimension.y/2, this.dimension.x, this.dimension.y)){
					this.status = 0;
				}else if(mouseIsPressed){
					this.status = 2;
				}							
				break;
			case 2:
				this.click(); // caso o botão seja clicado.
				if(insideRect(mouseX,mouseY,this.position.x - this.dimension.x/2, this.position.y - this.dimension.y/2, this.dimension.x, this.dimension.y)){
					 if (!mouseIsPressed) this.status = 1;
				}else{
					this.status = 0;
				}				
				break;
		}
	}
	basic(){
		stroke(0);
		fill(200); // cor do botão básico.
		rect(this.position.x, this.position.y, this.dimension.x, this.dimension.y);
		fill(30);
		// diminui a fonte para adequar-se ao tamanho do botão.
		if((this.id == 1) || (this.id == 2)) textSize(10);
		if(this.id == 3) textSize(14);
		text(this.text, this.position.x, this.position.y);
	}
	above(){		
		stroke(0);
		fill(100); // cor do botão sob o mouse.
		rect(this.position.x, this.position.y, this.dimension.x, this.dimension.y);
		fill(30);
		// diminui a fonte para adequar-se ao tamanho do botão.
		if((this.id == 1) || (this.id == 2)) textSize(10);
		if(this.id == 3) textSize(14);
		text(this.text, this.position.x, this.position.y);		
	}
	click(){
		if(buttonCode == this.id){
			stroke(0);
			fill(0); // cor do botão clicado.
			rect(this.position.x, this.position.y, this.dimension.x,this.dimension.y);
			fill(200);
			// diminui a fonte para adequar-se ao tamanho do botão.
			if((this.id == 1) || (this.id == 2)) textSize(10);
			if(this.id == 3) textSize(14);		
			text(this.text, this.position.x, this.position.y);
		}		
	}
}

function between(max, min, val){ // testa se uma variável esta dentro de um escopo determinado.
	if(val <= max){
		if(val >= min){
			return true;
		}
	}
	return false;
}

function insideRect(mx,my,x,y,w,h){ // testa se uma variável esta dentro de um escopo de 2 dimensões determinado.
	if(between(x+w,x,mx)){
		if(between(y+h,y,my)){
			return true;
		}
	}
	return false;
}

function drawMouseButton(){ // desenha o botão que segue o mouse quando este está o arrastando
	if(buttonCode != null){
		mouseButton = new Button(mouseX,mouseY,80,80,basicButtons[buttonCode].id,basicButtons[buttonCode].text);
		mouseButton.draw();
	}
}

function loadButtons(){ // placeholders?
	button1 = new Button(100,700,70,70,0,"Andar");
	basicButtons.push(button1);
	button2 = new Button(200,700,70,70,1,"Girar p/ esquerda");
	basicButtons.push(button2);
	button3 = new Button(300,700,70,70,2,"Girar p/ direita");
	basicButtons.push(button3);
	button4 = new Button(400,700,70,70,3,"Pegar/Soltar");
	basicButtons.push(button4);
	button5 = new Button(500,700,70,70,4,"Atacar");
	basicButtons.push(button5);
	button6 = new Button(600,700,70,70,5,"Apertar");
	basicButtons.push(button6);
}

function drawButtons(){ // desenha os botões estáticos e que segue o mouse.
	for(var i = 0; i < 6; i++){
		basicButtons[i].draw();
	}
	drawMouseButton();	
}

function mousePressed(){ 
	contMissButton = 0; // caso o clique não seja em nenhum botão, esta variável nos ajuda a deixar o campo do botão que segue o mouse nulo.
	for (var i = 0; i < 6; i++){
		if (insideRect(mouseX,mouseY,basicButtons[i].position.x - basicButtons[i].dimension.x/2, basicButtons[i].position.y - basicButtons[i].dimension.y/2, basicButtons[i].dimension.x, basicButtons[i].dimension.y))
			buttonCode = i;
		else
			contMissButton++;
	}
	if(contMissButton == 6) buttonCode = null;	
}

function mouseReleased(){ // ao terminar o comando de arrastar, o botão do mouse volta a ser nulo.
	if((mouseX <= 1380) && (mouseX >= 760) && (mouseY <= 280) && (mouseY >= 60)){
		actionTab.newButton = mouseButton.id;			
	}
	buttonCode = null;
}