// タイトルシーン
phina.define('GameClearScene', {
    superClass: 'DisplayScene',
    // コンストラクタ
    init: function (args) {
        this.superInit();

        // 背景グループ
        var bgGroup = DisplayElement().addChildTo(this);

        // 背景ループの設定
        (2).times(function (i) {
            Sprite('bg_title').addChildTo(bgGroup)
                .setPosition(this.gridX.center() + i * SCREEN_WIDTH, this.gridY.center())
                .setSize(SCREEN_WIDTH, SCREEN_HEIGHT)
                .physical.force(-1, 0);
        }, this);

        // 表示する文字列の設定
        Label({
            text: GAMECLEAR_STRING,
            fontSize: 64,
            fontFamily: 'bitFont',
            fill: 'fuchsia'
        }).addChildTo(this).setPosition(
            this.gridX.center(),
            this.gridY.span(5)
        );

        // ゲームクリアタイム（フレーム）
        var clearFrame = args.clearFrame;
        // ゲームクリアタイム（秒）
        this.clearTime = clearFrame * 1000 / GAME_FRAME;

        this.gameScoreString = Label({
            text: GAMESCORE_STRING + '\n' + this.clearTime.toFixed(2) + 'ms',
            fontSize: 48,
            fontFamily: 'bitFont',
            fill: 'fuchsia',
        }).addChildTo(this).setPosition(
            this.gridX.center(),
            this.gridY.span(9.5)
        );

        Label({
            text: CONTINUE_STRING,
            fontSize: 32,
            fontFamily: 'bitFont',
            fill: 'fuchsia',
        }).addChildTo(this).setPosition(
            this.gridX.center(),
            this.gridY.span(13)
        ).tweener.fadeOut(1000).fadeIn(500).setLoop(true).play();

        // 画面タッチ時
        this.on('pointend', function () {
            // 次のシーンへ（暫定：タイトル画面へ遷移）
            this.exit('title');
        });

        this.bgGroup = bgGroup;
    },

    // 毎フレーム更新処理
    update: function (app) {
        var first = this.bgGroup.children.first;
        if (first.right < 0) {
            first.addChildTo(this.bgGroup);
            this.bgGroup.children.last.left = this.bgGroup.children.first.right;
        }
    },
});