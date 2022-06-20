// プレイヤー_通常弾
// 弾の移動速度
var SPEED_BULLET_NORMAL = BULLET_NORMAL_HEIGHT;
// 弾の発射間隔
var INTERVAL_BULLET_NORMAL = 6;
// 弾のパワー
var POWER_BULLET_NORMAL = 1;

// プレイヤー_スピード弾
// 弾の移動速度
var SPEED_BULLET_SPEED = BULLET_NORMAL_HEIGHT * 1.2;
// 弾の発射間隔
var INTERVAL_BULLET_SPEED = 4;
// 弾のパワー
var POWER_BULLET_SPEED = 1;

// ボス1_通常弾
// 弾の移動速度
var SPEED_BULLET_BOSS1_NORMAL = 8;
// 弾の発射間隔（連続発射間隔）
var INTERVAL_BULLET_BOSS1_NORMAL = 8;
// 弾の発射間隔（連続発射の判定間隔）
var INTERVAL_BULLET_BOSS1_NORMAL_JUDGE = 120;
// 弾の連続発射弾数
var SEQ_SHOT_NUM_BULLET_BOSS1_NORMAL = 6;
// 弾のパワー
var POWER_BULLET_BOSS1_NORMAL = 1;

// ボスの設定
// 表示位置
const Y_BOSS1 = 160;
// ハートの設定
var MAX_LIFE_BOSS1 = 400;

// ボス1_スペシャル弾
// 弾の移動速度
var SPEED_BULLET_BOSS1_SPECIAL = 2;
// 弾の発射間隔
var INTERVAL_BULLET_BOSS1_SPECIAL = 400;
// 弾のパワー
var POWER_BULLET_BOSS1_SPECIAL = 4;

// スタイルチェンジアイテム
// アイテムの移動速度
var SPEED_CHANGE_ITEM = 5;
// アイテムの種類
const ITEM_STYLE_NORMAL = 0;
const ITEM_STYLE_SPEED = 1;
const ITEM_STYLE_POWER = 2;
const ITEM_STYLE_RANGE = 3;
const ITEM_STYLE_SPECIAL = 4;
// アイテムの種類別の文字列
const ITEM_STYLE_STRING = [
    'item_normal',
    'item_speed',
    'item_power',
    'item_range',
    'item_special'
];
// アイテムの生成間隔
const INTERVAL_CHANGE_ITEM = 900;

// プレイヤーのハート数
var PLAYER_HEART_NUM = 4;
// 最大ハート数
var MAX_PLAYER_HEART_NUM = 10;
// ハートの表示位置
const PLAYER_HEART_DISP_SPACE_X = 12;
const PLAYER_HEART_DISP_SPACE_Y = 36;
const PLAYER_HEART_X = SCREEN_WIDTH - (PLAYER_HEART_WIDTH + PLAYER_HEART_DISP_SPACE_X);
const PLAYER_HEART_Y = SCREEN_HEIGHT - (PLAYER_HEART_HEIGHT + PLAYER_HEART_DISP_SPACE_Y);

// ライフゲージ
// ライフゲージの幅と高さ
const LIFE_GUAGE_WIDTH = SCREEN_WIDTH - 64;
const LIFE_GUAGE_HEIGHT = 16;
// ゲージの表示位置（敵）
const Y_LIFE_GUAGE_ENEMY = 300;

// ppゲージ
// ppゲージの幅と高さ
const PP_GUAGE_WIDTH = SCREEN_WIDTH / 2 - 64;
const PP_GUAGE_HEIGHT = 8;
// 表示位置
const X_PP_GUAGE = SCREEN_WIDTH - (PP_GUAGE_WIDTH / 2) - 32;
const Y_PP_GUAGE = SCREEN_HEIGHT - 32;
// 最大値
var MAX_VALUE_PP_GUAGE = 100;
// スペシャル可能割合
var SPECIAL_VALUE_PP_GUAGE = MAX_VALUE_PP_GUAGE * 0.8;
// 背景色、通常色、特殊色の設定
const BGCOLOR_PP_GUAGE = 'silver';
const NORMALCOLOR_PP_GUAGE = 'limegreen';
const SPECIAL_COLOR_PP_GUAGE = 'orange';

// ゲームオーバー時の設定
// タイトルシーンに戻るまでの秒数
const BACK_TITLESCENE_TIME = 5;