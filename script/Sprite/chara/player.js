phina.define('Player', {
    superClass: 'Sprite',

    // コンストラクタ
    init: function () {
        this.superInit('player_normal');

        // スタイルの設定
        this.style = ITEM_STYLE_NORMAL;
    },

    // 毎フレーム更新処理
    update: function (app) {
        var pointer = app.pointer;

        // プレイヤーの座標をポインタの座標に移動
        this.x = pointer.x;
        this.y = pointer.y - PLAYER_HEIGHT / 2;
        this.y = Math.min(this.y, MOVABLE_BOTTOM);
        this.y = Math.max(0, this.y);

    }
});