// sprites de movimento.
var spr_up_0, spr_up_1, spr_up_2; // sprites do personagem andando para cima.
var spr_left_0, spr_left_1, spr_left_2; // sprites do personagem andando para a esquerda.
var spr_down_0, spr_down_1, spr_down_2; // sprites do personagem andando para baixo.
var spr_right_0, spr_right_1, spr_right_2; // sprites do personagem andando para a direita.
var spr_drag_up_0, spr_drag_up_1, spr_drag_up_2; // sprite do personagem carregando caixa para cima.
var spr_drag_left_0, spr_drag_left_1, spr_drag_left_2; // sprite do personagem carregando caixa para a esquerda.
var spr_drag_down_0; // sprite do personagem carregando caixa para baixo.
var spr_drag_right_0; // sprite do personagem carregando caixa para a direita.
var spr_press_up_0, spr_press_up_1, spr_press_up_2; // sprite do personagem acertando o item acima.
var spr_press_left_0, spr_press_left_1, spr_press_left_2; // sprite do personagem acertando o item à esquerda.
var spr_press_down_0, spr_press_down_1, spr_press_down_2; // sprite do personagem acertando o item abaixo.
var spr_press_right_0, spr_press_right_1, spr_press_right_2; // sprite do personagem acertando o item à direita.
// sprites dos botões arrastáveis.
var spr_btn_walk_0, spr_btn_walk_1; // botão de andar.
var spr_btn_turn_left_0, spr_btn_turn_left_1; // botão de girar para a esquerda.
var spr_btn_turn_right_0, spr_btn_turn_right_1; // botão de girar para a direita.
var spr_btn_grab_drop_0, spr_btn_grab_drop_1; // botão de pegar e largar a caixa.
var spr_btn_attack_0, spr_btn_attack_1; // botão de atacar o inimigo.
var spr_btn_procedure_0, spr_btn_procedure_1; // botão de acionar o procedimento.
var spr_btn_decision_0, spr_btn_decision_1; // botão de acionar a decisão.
var spr_btn_press_0, spr_btn_press_1; // botão de pressionar.
// sprites do menu principal.
var bkg_menu, bkg_menu_start, bkg_menu_learn, bkg_menu_credits, bkg_menu_exit; // telas do começo de jogo.
// sprites das abas.
var bkg_level, bkg_action_tab, bkg_p_d_tab, bkg_procedure_tab, bkg_decision_tab; // fundo da fase e tabelas.
// sprites dos botões de execução.
var spr_btn_start_0, spr_btn_start_1, spr_btn_reset_0, spr_btn_reset_1, spr_btn_exit_0, spr_btn_exit_1; // botões de ação, resetar e sair.
// sprite do chão.
var spr_tile; // chão da fase.
// sprites dos colecionáveis.
var spr_prop_00, spr_prop_01, spr_prop_02, spr_prop_03, spr_prop_04, spr_prop_05, spr_prop_06;
// sprite do portal.
var spr_portal;
// sprites dos obstáculos.
var spr_block; // sprite da caixa.
var spr_enemy_idle_0, spr_enemy_idle_1, spr_enemy_idle_2; // sprite do inimigo parado.
var spr_press_btn_0, spr_press_btn_1; // sprites do botão pressionável normal e ativo.
// telas do menu aprender.
var bkg_learn_00, bkg_learn_01, bkg_learn_02, bkg_learn_03, bkg_learn_04, bkg_learn_05, bkg_learn_06, bkg_learn_lock; 
// sprites do botão de voltar.
var spr_btn_back_0, spr_btn_back_1;
// sprites do botão de pular as instruções do beep.
var spr_btn_skip_0, spr_btn_skip_1;
// sprites da aba de aprender.
var spr_btn_learn_00, spr_btn_learn_01, spr_btn_learn_02, spr_btn_learn_03, spr_btn_learn_04, spr_btn_learn_05, spr_btn_learn_06;
//botões para entrar nas fases.
var spr_btn_lvl_01_0, spr_btn_lvl_01_1;
var spr_btn_lvl_02_0, spr_btn_lvl_02_1, spr_btn_lvl_02_2;
var spr_btn_lvl_03_0, spr_btn_lvl_03_1, spr_btn_lvl_03_2;
var spr_btn_lvl_04_0, spr_btn_lvl_04_1, spr_btn_lvl_04_2;  
// instruções do beep.
var level01_01, level01_02, level01_03, level01_04, level01_05, level01_06, level01_07, level01_08, level01_09, level01_10, level01_11;
var level02_01, level02_02, level02_03, level02_04, level02_05, level02_06, level02_07, level02_08, level02_09;
var level03_01, level03_02, level03_03, level03_04, level03_05;
var level04_01, level04_02, level04_03, level04_04, level04_05;
// créditos.
var bkg_credits;

function loadSprites(){ // carrega os sprites respectivos.
	// sprites de movimento.
	spr_up_0 = loadImage('assets/walk_up_0.png');
	spr_up_1 = loadImage('assets/walk_up_1.png');
	spr_up_2 = loadImage('assets/walk_up_2.png');
	spr_left_0 = loadImage('assets/walk_left_0.png');
	spr_left_1 = loadImage('assets/walk_left_1.png');
	spr_left_2 = loadImage('assets/walk_left_2.png');
	spr_down_0 = loadImage('assets/walk_down_0.png');
	spr_down_1 = loadImage('assets/walk_down_1.png');
	spr_down_2 = loadImage('assets/walk_down_2.png');
	spr_right_0 = loadImage('assets/walk_right_0.png');
	spr_right_1 = loadImage('assets/walk_right_1.png');
	spr_right_2 = loadImage('assets/walk_right_2.png');
	spr_drag_up_0 = loadImage('assets/drag_up_0.png');
	spr_drag_up_1 = loadImage('assets/drag_up_1.png');
	spr_drag_up_2 = loadImage('assets/drag_up_2.png');
	spr_drag_left_0 = loadImage('assets/drag_left_0.png');
	spr_drag_left_1 = loadImage('assets/drag_left_1.png');
	spr_drag_left_2 = loadImage('assets/drag_left_2.png');
	spr_drag_down_0 = loadImage('assets/drag_down_0.png');
	spr_drag_right_0 = loadImage('assets/drag_right_0.png');
	spr_press_up_0 = loadImage('assets/press_up_0.png');
	spr_press_up_1 = loadImage('assets/press_up_1.png');
	spr_press_up_2 = loadImage('assets/press_up_2.png');
	spr_press_left_0 = loadImage('assets/press_left_0.png');
	spr_press_left_1 = loadImage('assets/press_left_1.png');
	spr_press_left_2 = loadImage('assets/press_left_2.png');
	spr_press_down_0 = loadImage('assets/press_down_0.png');
	spr_press_down_1 = loadImage('assets/press_down_1.png');
	spr_press_down_2 = loadImage('assets/press_down_2.png');
	spr_press_right_0 = loadImage('assets/press_right_0.png');
	spr_press_right_1 = loadImage('assets/press_right_1.png');
	spr_press_right_2 = loadImage('assets/press_right_2.png');
	// sprites dos botões arrastáveis.
	spr_btn_walk_0 = loadImage('assets/btn_walk_0.png');
	spr_btn_walk_1 = loadImage('assets/btn_walk_1.png');
	spr_btn_turn_left_0 = loadImage('assets/btn_turn_left_0.png');
	spr_btn_turn_left_1 = loadImage('assets/btn_turn_left_1.png');
	spr_btn_turn_right_0 = loadImage('assets/btn_turn_right_0.png');
	spr_btn_turn_right_1 = loadImage('assets/btn_turn_right_1.png');
	spr_btn_grab_drop_0 = loadImage('assets/btn_grab_drop_0.png');
	spr_btn_grab_drop_1 = loadImage('assets/btn_grab_drop_1.png');
	spr_btn_attack_0 = loadImage('assets/btn_attack_0.png');
	spr_btn_attack_1 = loadImage('assets/btn_attack_1.png');
	spr_btn_press_0 = loadImage('assets/btn_press_0.png');
	spr_btn_press_1 = loadImage('assets/btn_press_1.png');
	spr_btn_procedure_0 = loadImage('assets/btn_procedure_0.png');
	spr_btn_procedure_1 = loadImage('assets/btn_procedure_1.png');
	spr_btn_decision_0 = loadImage('assets/btn_decision_0.png');
	spr_btn_decision_1 = loadImage('assets/btn_decision_1.png');
	// sprites do menu principal.
	bkg_menu = loadImage('assets/Beep_menu_principal.png');
	bkg_menu_start = loadImage('assets/Beep_menu_start.png');
	bkg_menu_learn = loadImage('assets/Beep_menu_learn.png');
	bkg_menu_credits = loadImage('assets/Beep_menu_credits.png');
	bkg_menu_exit = loadImage('assets/Beep_menu_exit.png');
	// sprites das abas.
	bkg_level = loadImage('assets/bkg_level.png');
	bkg_action_tab = loadImage('assets/bkg_action_tab.png');
	bkg_procedure_tab = loadImage('assets/bkg_procedure_tab.png');
	bkg_p_d_tab = loadImage('assets/bkg_p_d_tab.png');
	bkg_decision_tab = loadImage('assets/bkg_decision_tab.png');
	// sprites dos botões de execução.
	spr_btn_start_0 = loadImage('assets/btn_start_0.png');
	spr_btn_start_1 = loadImage('assets/btn_start_1.png');
	spr_btn_reset_0 = loadImage('assets/btn_reset_0.png');
	spr_btn_reset_1 = loadImage('assets/btn_reset_1.png');
	spr_btn_exit_0 = loadImage('assets/btn_exit_0.png');
	spr_btn_exit_1 = loadImage('assets/btn_exit_1.png');
	// sprite do chão.
	spr_tile = loadImage('assets/tile.png');
	// sprites dos colecionáveis.
	spr_prop_00 = loadImage('assets/prop_00.png');
	spr_prop_01 = loadImage('assets/prop_01.png');
	spr_prop_02 = loadImage('assets/prop_02.png');
	spr_prop_03 = loadImage('assets/prop_03.png');
	spr_prop_04 = loadImage('assets/prop_04.png');
	spr_prop_05 = loadImage('assets/prop_05.png');
	spr_prop_06 = loadImage('assets/prop_06.png');
	// sprite do portal.
	spr_portal = loadImage('assets/portal.png');
	// sprites dos obstáculos.
	spr_block = loadImage('assets/block.png');
	spr_enemy_idle_0 = loadImage('assets/spr_enemy_idle_0.png');
	spr_enemy_idle_1 = loadImage('assets/spr_enemy_idle_1.png');
	spr_enemy_idle_2 = loadImage('assets/spr_enemy_idle_2.png');
	spr_press_btn_0 = loadImage('assets/press_button_0.png');
	spr_press_btn_1 = loadImage('assets/press_button_1.png');
	// telas do menu aprender.
	bkg_learn_00 = loadImage('assets/bkg_learn_00.png');
	bkg_learn_01 = loadImage('assets/bkg_learn_01.png');
	bkg_learn_02 = loadImage('assets/bkg_learn_02.png');
	bkg_learn_03 = loadImage('assets/bkg_learn_03.png');
	bkg_learn_04 = loadImage('assets/bkg_learn_04.png');
	bkg_learn_05 = loadImage('assets/bkg_learn_05.png');
	bkg_learn_06 = loadImage('assets/bkg_learn_06.png');
	bkg_learn_lock = loadImage('assets/bkg_learn_lock.png');
	bkg_learn_unlock = loadImage('assets/bkg_learn_unlock.png');
	// sprites do botão de pular as instruções do beep.
	spr_btn_skip_0 = loadImage('assets/btn_skip_0.png');
	spr_btn_skip_1 = loadImage('assets/btn_skip_1.png');
	// sprites do botão de voltar.
	spr_btn_back_0 = loadImage('assets/btn_back_0.png');
	spr_btn_back_1 = loadImage('assets/btn_back_1.png');
	// sprites das abas de aprender.
	spr_btn_learn_00 = loadImage('assets/btn_learn_00.png');
	spr_btn_learn_01 = loadImage('assets/btn_learn_01.png');
	spr_btn_learn_02 = loadImage('assets/btn_learn_02.png');
	spr_btn_learn_03 = loadImage('assets/btn_learn_03.png');
	spr_btn_learn_04 = loadImage('assets/btn_learn_04.png');
	spr_btn_learn_05 = loadImage('assets/btn_learn_05.png');
	spr_btn_learn_06 = loadImage('assets/btn_learn_06.png');
	//botões para entrar nas fases.
	spr_btn_lvl_01_0 = loadImage('assets/btn_lvl_01_0.png');
	spr_btn_lvl_01_1 = loadImage('assets/btn_lvl_01_1.png');
	spr_btn_lvl_02_0 = loadImage('assets/btn_lvl_02_0.png');
	spr_btn_lvl_02_1 = loadImage('assets/btn_lvl_02_1.png');
	spr_btn_lvl_02_2 = loadImage('assets/btn_lvl_02_2.png');
	spr_btn_lvl_03_0 = loadImage('assets/btn_lvl_03_0.png');
	spr_btn_lvl_03_1 = loadImage('assets/btn_lvl_03_1.png');
	spr_btn_lvl_03_2 = loadImage('assets/btn_lvl_03_2.png');
	spr_btn_lvl_04_0 = loadImage('assets/btn_lvl_04_0.png');
	spr_btn_lvl_04_1 = loadImage('assets/btn_lvl_04_1.png');
	spr_btn_lvl_04_2 = loadImage('assets/btn_lvl_04_2.png');
	// instruções do beep (fase 01).
	level01_01 = loadImage('assets/level01_01.png');
	level01_02 = loadImage('assets/level01_02.png');
	level01_03 = loadImage('assets/level01_03.png');
	level01_04 = loadImage('assets/level01_04.png');
	level01_05 = loadImage('assets/level01_05.png');
	level01_06 = loadImage('assets/level01_06.png');
	level01_07 = loadImage('assets/level01_07.png');
	level01_08 = loadImage('assets/level01_08.png');
	level01_09 = loadImage('assets/level01_09.png');
	level01_10 = loadImage('assets/level01_10.png');
	level01_11 = loadImage('assets/level01_11.png');
	// instruções do beep (fase 02).
	level02_01 = loadImage('assets/level02_01.png');
	level02_02 = loadImage('assets/level02_02.png');
	level02_03 = loadImage('assets/level02_03.png');
	level02_04 = loadImage('assets/level02_04.png');
	level02_05 = loadImage('assets/level02_05.png');
	level02_06 = loadImage('assets/level02_06.png');
	level02_07 = loadImage('assets/level02_07.png');
	level02_08 = loadImage('assets/level02_08.png');
	level02_09 = loadImage('assets/level02_09.png');
	// instruções do beep (fase 03).
	level03_01 = loadImage('assets/level03_01.png');
	level03_02 = loadImage('assets/level03_02.png');
	level03_03 = loadImage('assets/level03_03.png');
	level03_04 = loadImage('assets/level03_04.png');
	level03_05 = loadImage('assets/level03_05.png');
	// instruções do beep (fase 04).
	level04_01 = loadImage('assets/level04_01.png');
	level04_02 = loadImage('assets/level04_02.png');
	level04_03 = loadImage('assets/level04_03.png');
	level04_04 = loadImage('assets/level04_04.png');
	level04_05 = loadImage('assets/level04_05.png');
	// créditos.
	bkg_credits = loadImage('assets/credits.png');
}

// efeitos sonoros.
var snd_over_btn_menu;
var snd_char_move;
var snd_press_btn;
var snd_click_btn_menu;
var snd_char_hit;
var snd_block_portal;
// músicas de fundo.
var snd_ost_0, snd_ost_1; ost_number = 0;

function loadSounds(){
	soundFormats('mp3', 'ogg');
	// efeitos sonoros.
 	snd_over_btn_menu = loadSound('assets/snd_over_button_menu.mp3');
 	snd_char_move = loadSound('assets/snd_char_move.mp3');
 	snd_press_btn = loadSound('assets/snd_press_button.mp3');
 	snd_click_btn_menu = loadSound('assets/snd_click_button_menu.mp3');
 	snd_char_hit = loadSound('assets/snd_char_hit.mp3');
 	snd_block_portal = loadSound('assets/snd_block_portal.mp3');
 	// músicas de fundo.
 	snd_ost_0 = loadSound('assets/snd_ost_0.mp3');
 	snd_ost_1 = loadSound('assets/snd_ost_1.mp3');
}

function OST_0(){ // primeira música.
	snd_ost_0.setVolume(0.1);
  	snd_ost_0.play();
}

function OST_1(){ // segunda música.
	snd_ost_1.setVolume(0.1);
  	snd_ost_1.play();
}

function jukebox(){
	switch(ost_number){
		case 0:
			if(!snd_ost_0.isPlaying()){
				OST_1();
				ost_number = 1;
			} 
			break;
		case 1:
			if(!snd_ost_1.isPlaying()){
				OST_0();
				ost_number = 0;
			}
			break;
	}		
}