function loadLevelChoice(){	
	image(bkg_level,0,0);
	rectMode(CORNER);
	rect(100,400,200,200);
	rect(370,400,200,200);
	rect(640,400,200,200);
	rect(910,400,200,200);
	if (insideRect(mouseX,mouseY,100,400,200,200) && (mouseIsPressed)){
		pageCode = "level_01"; 
		levelController = true;
		isLevel = false;
	} else if (insideRect(mouseX,mouseY,370,400,200,200) && (mouseIsPressed)){
		pageCode = "level_02"; 
		levelController = true;
		isLevel = false;
	} else if (insideRect(mouseX,mouseY,640,400,200,200) && (mouseIsPressed)){
		pageCode = "level_03"; 
		levelController = true;
		isLevel = false;
	} else if (insideRect(mouseX,mouseY,910,400,200,200) && (mouseIsPressed)){
		pageCode = "level_04"; 
		levelController = true;
		isLevel = false;
	}
}