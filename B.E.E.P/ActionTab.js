class ActionTab{
	constructor(){
		this.position = createVector(760,60);
		this.actionButtons = [];		
		this.newButton = null;
	}

	drawTab(){
		if (this.newButton != null) {
			if(this.actionButtons.length < 12){
				this.actionButtons.push(this.newButton);
			}			
			this.newButton = null;
		}
		rectMode(CORNER);
		fill(100);
		rect(this.position.x,this.position.y,620,220);		
		for(var i = 0; i < 6; i++){
			if(i < this.actionButtons.length)
				fill(255,0,0);
			else
				fill(0);
			rect(this.position.x + 20 + i*100, this.position.y + 20,80,80);								
		}
		for(var i = 6; i < 12; i++){
			if(i < this.actionButtons.length)
				fill(255,0,0);
			else
				fill(0);
			rect(this.position.x - 580 + i*100, this.position.y + 120,80,80);			
		}
		print(this.actionButtons);
	}
}