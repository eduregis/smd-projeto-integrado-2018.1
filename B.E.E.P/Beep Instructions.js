var instructionCode = 1;
var instructionCounter;

function loadInstruction(){
	image(bkg_level,0,0);
	switch(instructionCode){
		case 1:			
			switch(instructionCounter){
				case 1:
					image(level01_01,0,0);
					break;
				case 2:
					image(level01_02,0,0);
					break;
				case 3:
					image(level01_03,0,0);
					break;
				case 4:
					image(level01_04,0,0);
					break;
				case 5:
					image(level01_05,0,0);
					break;
				case 6:
					image(level01_06,0,0);
					break;
				case 7:
					image(level01_07,0,0);
					break;
				case 8:
					image(level01_08,0,0);
					break;
				case 9:
					image(level01_09,0,0);
					break;
				case 10:
					image(level01_10,0,0);
					break;
				case 11:
					image(level01_11,0,0);
					break;
				case 12:
					pageCode = "level_01"; 
					levelController = true;
					isLevel = false;				
			}			
			break;
		case 2:			
			switch(instructionCounter){
				case 1:
					image(level02_01,0,0);
					break;
				case 2:
					image(level02_02,0,0);
					break;
				case 3:
					image(level02_03,0,0);
					break;
				case 4:
					image(level02_04,0,0);
					break;
				case 5:
					image(level02_05,0,0);
					break;
				case 6:
					image(level02_06,0,0);
					break;
				case 7:
					image(level02_07,0,0);
					break;
				case 8:
					image(level02_08,0,0);
					break;
				case 9:
					image(level02_09,0,0);
					break;				
				case 10:
					pageCode = "level_02"; 
					levelController = true;
					isLevel = false;				
			}			
			break;
		case 3:			
			switch(instructionCounter){
				case 1:
					image(level03_01,0,0);
					break;
				case 2:
					image(level03_02,0,0);
					break;
				case 3:
					image(level03_03,0,0);
					break;
				case 4:
					image(level03_04,0,0);
					break;
				case 5:
					image(level03_05,0,0);
					break;								
				case 6:
					pageCode = "level_03"; 
					levelController = true;
					isLevel = false;				
			}			
			break;
		case 4:			
			switch(instructionCounter){
				case 1:
					image(level04_01,0,0);
					break;
				case 2:
					image(level04_02,0,0);
					break;
				case 3:
					image(level04_03,0,0);
					break;
				case 4:
					image(level04_04,0,0);
					break;
				case 5:
					image(level04_05,0,0);
					break;								
				case 6:
					pageCode = "level_04"; 
					levelController = true;
					isLevel = false;				
			}			
			break;
	}
	if (insideRect(mouseX,mouseY,900,700,250,102)){ // botão de voltar.
		if (soundOverButtonMenuCount == 0) soundOverButtonMenu();
		soundOverButtonMenuCount++;
		image(spr_btn_skip_1,900,700,250,102);
		if(mouseIsPressed){
			switch(instructionCode){
				case 1:
					pageCode = "level_01";
					break;
				case 2:
					pageCode = "level_02";
					break;
				case 3:
					pageCode = "level_03";
					break;
				case 4:
					pageCode = "level_04";
					break;
			}
			soundClickButtonMenu();			 
			levelController = true;
			isLevel = false;
		}
	}else {
		soundOverButtonMenuCount = 0;
		image(spr_btn_skip_0, 900, 700, 250, 102);
	}
}