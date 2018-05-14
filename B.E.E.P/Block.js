class Block{
	constructor(x,y){
		this.positionGrid = createVector(x,y); // recebe a posição no grid que o bloco será inicialmente colocado.
		this.position = createVector(width/2,height/2); // posição do bloco. 
		this.drawController = true;	// variável de controle para ajustar a posição do bloco.
	}			

	drawBlock(){
		if(this.drawController){
			if(this.positionGrid.x > int(sizeStageX/2)){ // verifica a posição do bloco e faz os ajustes necessários. 
				for(var i = this.positionGrid.x ; i > int(sizeStageX/2); i--){ 
					this.position.x += 50; 
					this.position.y += 25;
				}			
			}else if(this.positionGrid.x < int(sizeStageX/2)){
				for(var i = this.positionGrid.x ; i < int(sizeStageX/2); i++){
					this.position.x -= 50;
					this.position.y -= 25;
				}
			}
			if(this.positionGrid.y > int(sizeStageY/2)){
				for(var i = this.positionGrid.y; i > int(sizeStageY/2); i--){
					this.position.x -= 50;
					this.position.y += 25;
				}			
			}else if(this.positionGrid.y < int(sizeStageY/2)){
				for(var i = this.positionGrid.y; i < int(sizeStageY/2); i++){
					this.position.x += 50;
					this.position.y -= 25;
				}
			}
			this.drawController = false; // alterando a drawController para que não entre de novo na função e tire o bloco do seu lugar., até ele ser reposicionado pelo jogador.
		}
		var mod = 25;
		image(spr_block,this.position.x - 30,this.position.y - 45);
		/*placeholder?		
		fill(100);
		quad(this.position.x + mod, this.position.y - mod, this.position.x + mod, this.position.y, this.position.x, this.position.y + mod/2, this.position.x, this.position.y - mod/2);
		fill(150);
		quad(this.position.x - mod, this.position.y - mod, this.position.x - mod, this.position.y, this.position.x, this.position.y + mod/2, this.position.x, this.position.y - mod/2);
		fill(200);
		quad(this.position.x, this.position.y - mod/2, this.position.x - mod, this.position.y - mod, this.position.x, this.position.y - 3*mod/2, this.position.x + mod, this.position.y - mod);
		*/
	}
}