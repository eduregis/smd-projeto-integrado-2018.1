class Block{
	constructor(x,y){
		this.positionGrid = createVector(x,y); // recebe a posição no grid que o bloco será inicialmente colocado.
		if(sizeStage%2 == 0){
			this.position = createVector(width/2,height/2); // posição do bloco. 
		}else{
			this.position = createVector(width/2 ,height/2 - 200/sizeStage); // posição do bloco ajustada para o caso da dimensão da fase ser ímpar.
		}
		this.drawController = true;	// variável de controle para ajustar a posição do bloco.
	}			

	drawBlock(){
		if(this.drawController){
			if(this.positionGrid.x > int(sizeStage/2)){ // verifica a posição do bloco e faz os ajustes necessários. 
				for(var i = this.positionGrid.x ; i > int(sizeStage/2); i--){ 
					this.position.x += int(400/sizeStage); 
					this.position.y += int(200/sizeStage);
				}			
			}else if(this.positionGrid.x < int(sizeStage/2)){
				for(var i = this.positionGrid.x ; i < int(sizeStage/2); i++){
					this.position.x -= int(400/sizeStage);
					this.position.y -= int(200/sizeStage);
				}
			}
			if(this.positionGrid.y > int(sizeStage/2)){
				for(var i = this.positionGrid.y; i > int(sizeStage/2); i--){
					this.position.x -= int(400/sizeStage);
					this.position.y += int(200/sizeStage);
				}			
			}else if(this.positionGrid.y < int(sizeStage/2)){
				for(var i = this.positionGrid.y; i < int(sizeStage/2); i++){
					this.position.x += int(400/sizeStage);
					this.position.y -= int(200/sizeStage);
				}
			}
			this.drawController = false; // alterando a drawController para que não entre de novo na função e tire o bloco do seu lugar., até ele ser reposicionado pelo jogador.
		}
		var mod = 200/sizeStage;
		//placeholder?		
		fill(100);
		quad(this.position.x + mod, this.position.y - mod, this.position.x + mod, this.position.y, this.position.x, this.position.y + mod/2, this.position.x, this.position.y - mod/2);
		fill(150);
		quad(this.position.x - mod, this.position.y - mod, this.position.x - mod, this.position.y, this.position.x, this.position.y + mod/2, this.position.x, this.position.y - mod/2);
		fill(200);
		quad(this.position.x, this.position.y - mod/2, this.position.x - mod, this.position.y - mod, this.position.x, this.position.y - 3*mod/2, this.position.x + mod, this.position.y - mod);
	}
}