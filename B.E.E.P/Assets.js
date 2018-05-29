var spr_up, spr_left, spr_down, spr_right; // sprites do personagem.
var spr_block; // sprite da caixa.
var spr_btn_walk_0, spr_btn_walk_1;
var spr_btn_turn_left_0, spr_btn_turn_left_1;
var spr_btn_turn_right_0, spr_btn_turn_right_1;
var spr_btn_grab_drop_0, spr_btn_grab_drop_1;
var spr_btn_attack_0, spr_btn_attack_1;
var spr_btn_press_0, spr_btn_press_1;
var spr_enemy_idle;
var spr_press_btn_0, spr_press_btn_1;

function loadSprites(){
	spr_up = loadImage('assets/walk_up.png');
	spr_left = loadImage('assets/walk_left.png');
	spr_down = loadImage('assets/walk_down.png');
	spr_right = loadImage('assets/walk_right.png');

	spr_block = loadImage('assets/cubo.png');
	spr_enemy_idle = loadImage('assets/spr_enemy_idle.png');
	spr_press_btn_0 = loadImage('assets/botao_01.png');
	spr_press_btn_1 = loadImage('assets/botao_02.png');

	spr_btn_walk_0 = loadImage('assets/bot_andar.png');
	spr_btn_walk_1 = loadImage('assets/bot_andar_02.png');
	spr_btn_turn_left_0 = loadImage('assets/bot_girar_esq.png');
	spr_btn_turn_left_1 = loadImage('assets/bot_girar_esq_02.png');
	spr_btn_turn_right_0 = loadImage('assets/bot_girar_dir.png');
	spr_btn_turn_right_1 = loadImage('assets/bot_girar_dir_02.png');
	spr_btn_grab_drop_0 = loadImage('assets/bot_pegar.png');
	spr_btn_grab_drop_1 = loadImage('assets/bot_pegar_02.png');
	spr_btn_attack_0 = loadImage('assets/bot_atacar.png');
	spr_btn_attack_1 = loadImage('assets/bot_atacar_02.png');
	spr_btn_press_0 = loadImage('assets/bot_apertar.png');
	spr_btn_press_1 = loadImage('assets/bot_apertar_02.png');
}