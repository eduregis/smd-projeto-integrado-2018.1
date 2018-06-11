function loadLevelChoice(){	
	image(bkg_level,0,0);
	rect(200,400,200,200);
	rect(500,400,200,200);
	rect(800,400,200,200);
	if (insideRect(mouseX,mouseY,200,400,200,200) && (mouseIsPressed)){
		pageCode = "level_01"; 
		levelController = true;
		isLevel = false;
	} else if (insideRect(mouseX,mouseY,500,400,200,200) && (mouseIsPressed)){
		pageCode = "level_02"; 
		levelController = true;
		isLevel = false;
	} else if (insideRect(mouseX,mouseY,800,400,200,200) && (mouseIsPressed)){
		pageCode = "level_03"; 
		levelController = true;
		isLevel = false;
	}
}