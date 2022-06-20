// タイトルシーン
phina.define('GameOverScene', {
    superClass: 'DisplayScene',
    // コンストラクタ
    init: function () {
        this.superInit();

        // ゲームオーバーからの経過時間
        this.backTitleSceneTime = BACK_TITLESCENE_TIME * 1000;

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
            text: GAMEOVER_STRING,
            fontSize: 64,
            fontFamily: 'bitFont',
            fill: 'fuchsia'
        }).addChildTo(this).setPosition(
            this.gridX.center(),
            this.gridY.span(5)
        );

        Label({
            text: CONTINUE_STRING,
            fontSize: 32,
            fontFamily: 'bitFont',
            fill: 'fuchsia',
        }).addChildTo(this).setPosition(
            this.gridX.center(),
            this.gridY.span(12)
        ).tweener.fadeOut(1000).fadeIn(500).setLoop(true).play();


        // コンティニューまでの待機時間表示
        this.backTitleSceneTimeString = Label({
            text: '',
            fontSize: 64,
            fontFamily: 'bitFont',
            fill: 'fuchsia',
        }).addChildTo(this).setPosition(
            this.gridX.center(),
            this.gridY.span(13)
        );

        // 画面タッチ時
        this.on('pointend', function () {
            // 次のシーンへ（暫定：ゲーム画面へ遷移）
            this.exit('game');
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

        // タイトル画面に戻るまでの秒数
        this.backTitleSceneTime -= app.deltaTime;
        this.backTitleSceneTimeString.text = Math.floor(this.backTitleSceneTime / 1000 + 1);

        if (Math.floor(this.backTitleSceneTime / 1000 + 1) < 0) {
            // 待機時間経過後

            // タイトル画面に戻る
            this.exit('title');
        }
    },
});