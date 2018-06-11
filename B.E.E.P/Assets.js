var spr_up_0, spr_up_1, spr_up_2; // sprites do personagem andando para cima.
var spr_left_0, spr_left_1, spr_left_2; // sprites do personagem andando para a esquerda.
var spr_down_0, spr_down_1, spr_down_2; // sprites do personagem andando para baixo.
var spr_right_0, spr_right_1, spr_right_2; // sprites do personagem andando para a direita.

var spr_btn_walk_0, spr_btn_walk_1; // botão de andar.
var spr_btn_turn_left_0, spr_btn_turn_left_1; // botão de girar para a esquerda.
var spr_btn_turn_right_0, spr_btn_turn_right_1; // botão de girar para a direita.
var spr_btn_grab_drop_0, spr_btn_grab_drop_1; // botão de pegar e largar a caixa.
var spr_btn_attack_0, spr_btn_attack_1; // botão de atacar o inimigo.
var spr_btn_procedure_0, spr_btn_procedure_1; // botão de acionar o procedimento.
var spr_btn_decision_0, spr_btn_decision_1; // botão de acionar a decisão.
var spr_btn_press_0, spr_btn_press_1; // botão de pressionar.

var bkg_menu, bkg_menu_start, bkg_menu_learn, bkg_menu_credits, bkg_menu_exit; // telas do começo de jogo.

var bkg_level, bkg_action_tab, bkg_p_d_tab, bkg_procedure_tab; // fundo da fase e tabelas.

var spr_btn_start, spr_btn_reset, spr_btn_exit; // botões de ação, resetar e sair.

var spr_tile; // chão da fase.

var spr_block; // sprite da caixa.
var spr_enemy_idle; // sprite do inimigo parado.
var spr_press_btn_0, spr_press_btn_1; // sprites do botão pressionável normal e ativo.

function loadSprites(){ // carrega os sprites respectivos.
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

	bkg_menu = loadImage('assets/Beep_menu_principal.png');
	bkg_menu_start = loadImage('assets/Beep_menu_start.png');
	bkg_menu_learn = loadImage('assets/Beep_menu_learn.png');
	bkg_menu_credits = loadImage('assets/Beep_menu_credits.png');
	bkg_menu_exit = loadImage('assets/Beep_menu_exit.png');
	
	bkg_level = loadImage('assets/bkg_level.png');
	bkg_action_tab = loadImage('assets/bkg_action_tab.png');
	bkg_procedure_tab = loadImage('assets/bkg_procedure_tab.png');
	bkg_p_d_tab = loadImage('assets/bkg_p_d_tab.png');

	spr_btn_start = loadImage('assets/btn_start.png');
	spr_btn_reset = loadImage('assets/btn_reset.png');
	spr_btn_exit = loadImage('assets/btn_exit.png');

	spr_tile = loadImage('assets/tile.png');

	spr_block = loadImage('assets/block.png');
	spr_enemy_idle = loadImage('assets/spr_enemy_idle.png');
	spr_press_btn_0 = loadImage('assets/press_button_0.png');
	spr_press_btn_1 = loadImage('assets/press_button_1.png');
}