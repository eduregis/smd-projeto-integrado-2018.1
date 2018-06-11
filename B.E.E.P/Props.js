class Prop{
	constructor(x,y,id){
		this.id = id;
		this.positionGrid = createVector(x,y); // recebe a posição no grid que o bloco será inicialmente colocado.
		this.position = createVector(centerGridX,centerGridY); // posição do bloco. 
		this.status = 0;

	}			

	drawProp(){		
		if(this.positionGrid.x > int(sizeStageX/2)){ // verifica a posição do bloco e faz os ajustes necessários. 
			for(var i = this.positionGrid.x ; i > int(sizeStageX/2); i--){ 
				this.position.x += 50; // ajuste horizontal.
				this.position.y += 25; // ajuste vertical.
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
		// Os desenhos entram aqui.
		switch(this.id){
			case 0:
				
				break;
			case 1:
				
				break;
			case 2:
				
				break;
			default:

				break;		
		}		
	}
}
