// タイトル
const TITLE_STRING = 'うさシューティング';

// ゲームオーバー
const GAMEOVER_STRING = 'GAME OVER...';
const CONTINUE_STRING = 'TOUCH TO CONTINUE...';

// ゲームクリア
const GAMECLEAR_STRING = 'NYAN IS DESTROYED!';
const GAMESCORE_STRING = 'YOUR SCORE';

// 画面幅、画面高さ
const SCREEN_WIDTH = 640;
const SCREEN_HEIGHT = 960;

// 行動可能な画面範囲
const MOVABLE_BOTTOM = 840;

// フレーム数のリセット間隔（15分）
const FRAME_RESET_INTERVAL = 54000;

// ゲームのfps値
const GAME_FRAME = 60;

// シーン
const SCENES = [

    // ダミータイトルシーン
    {
        className: 'DummyTitleScene',
        label: 'dummyTitle',
        nextLabel: 'title',
    },

    // タイトルシーン
    {
        className: 'TitleScene',
        label: 'title',
        nextLabel: 'game',
    },

    // ゲームシーン
    {
        className: 'GameScene',
        label: 'game',
        nextLabel: 'gameOver',
    },

    // ゲームオーバーシーン
    {
        className: 'GameOverScene',
        label: 'gameOver',
        nextLabel: '',
    },

    // ゲームクリアシーン
    {
        className: 'GameClearScene',
        label: 'gameClear',
        nextLabel: '',
    }

]