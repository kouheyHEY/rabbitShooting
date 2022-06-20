// タイトルシーン
phina.define('TitleScene', {
    superClass: 'DisplayScene',
    // コンストラクタ
    init: function () {
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

        // タイトル
        Label({
            text: TITLE_STRING,
            fontSize: 64,
            fontFamily: 'bitFont',
            fill: 'fuchsia'
        }).addChildTo(this).setPosition(this.gridX.center(), this.gridY.span(5));

        Label({
            text: "TOUCH START",
            fontSize: 48,
            fontFamily: 'bitFont',
            fill: 'fuchsia',
        }).addChildTo(this)
            .setPosition(this.gridX.center(), this.gridY.span(12))
            .tweener.fadeOut(1000).fadeIn(500).setLoop(true).play();

        // 画面タッチ時
        this.on('pointend', function () {
            // 次のシーンへ
            this.exit();
        });

        this.bgGroup = bgGroup;
    },
    // 毎フレーム更新処理
    update: function () {
        var first = this.bgGroup.children.first;
        if (first.right < 0) {
            first.addChildTo(this.bgGroup);
            this.bgGroup.children.last.left = this.bgGroup.children.first.right;
        }
    },
});