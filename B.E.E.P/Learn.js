var learnLock = [true,true,true,true,false,false,false]; // vetor de booleanos que diz quais props estão liberados.
var learnIndex = 0; // endereço da página na seção de aprender.

function loadLearn(){
	switch(learnIndex){
		case 0:
			if(learnLock[0]) image(bkg_learn_00,0,0);
			else image(bkg_learn_lock,0,0);
			break;
		case 1:
			if(learnLock[1]) image(bkg_learn_01,0,0);
			else image(bkg_learn_lock,0,0);
			break;
		case 2:
			if(learnLock[2]) image(bkg_learn_02,0,0);
			else image(bkg_learn_lock,0,0);
			break;
		case 3:
			if(learnLock[3]) image(bkg_learn_03,0,0);
			else image(bkg_learn_lock,0,0);
			break;
		case 4:
			if(learnLock[4]) image(bkg_learn_04,0,0);
			else image(bkg_learn_lock,0,0);
			break;
		case 5:
			if(learnLock[5]) image(bkg_learn_05,0,0);
			else image(bkg_learn_lock,0,0);
			break;
		case 6:
			if(learnLock[6]) image(bkg_learn_06,0,0);
			else image(bkg_learn_lock,0,0);
			break;
	}		
}

function keyReleased(){
	if((keyCode == 37) && (learnIndex > 0)) learnIndex--;
	if((keyCode == 39) && (learnIndex < 6)) learnIndex++;
}