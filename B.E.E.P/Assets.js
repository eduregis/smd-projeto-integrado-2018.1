// sprites de movimento.
var spr_up_0, spr_up_1, spr_up_2; // sprites do personagem andando para cima.
var spr_left_0, spr_left_1, spr_left_2; // sprites do personagem andando para a esquerda.
var spr_down_0, spr_down_1, spr_down_2; // sprites do personagem andando para baixo.
var spr_right_0, spr_right_1, spr_right_2; // sprites do personagem andando para a direita.
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
// sprites dos obstáculos.
var spr_block; // sprite da caixa.
var spr_enemy_idle; // sprite do inimigo parado.
var spr_press_btn_0, spr_press_btn_1; // sprites do botão pressionável normal e ativo.
// telas do menu aprender.
var bkg_learn_00, bkg_learn_01, bkg_learn_02, bkg_learn_03, bkg_learn_04, bkg_learn_05, bkg_learn_06, bkg_learn_lock; 
// sprites do botão de voltar.
var spr_btn_back_0, spr_btn_back_1;
// sprites da aba de aprender.
var spr_btn_learn_00, spr_btn_learn_01, spr_btn_learn_02, spr_btn_learn_03, spr_btn_learn_04, spr_btn_learn_05, spr_btn_learn_06;

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
	// sprites dos obstáculos.
	spr_block = loadImage('assets/block.png');
	spr_enemy_idle = loadImage('assets/spr_enemy_idle.png');
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
	// sprites do botão de voltar.
	spr_btn_back_0 = loadImage('assets/btn_back_0.png');
	spr_btn_back_1 = loadImage('assets/btn_back_1.png');
	// sprites das abas de aprender
	spr_btn_learn_00 = loadImage('assets/btn_learn_00.png');
	spr_btn_learn_01 = loadImage('assets/btn_learn_01.png');
	spr_btn_learn_02 = loadImage('assets/btn_learn_02.png');
	spr_btn_learn_03 = loadImage('assets/btn_learn_03.png');
	spr_btn_learn_04 = loadImage('assets/btn_learn_04.png');
	spr_btn_learn_05 = loadImage('assets/btn_learn_05.png');
	spr_btn_learn_06 = loadImage('assets/btn_learn_06.png');

}