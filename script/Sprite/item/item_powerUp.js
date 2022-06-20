phina.define('Item_powerUp', {
    superClass: 'Sprite',

    // コンストラクタ
    init: function (item_style) {
        this.superInit(item_style);

        // 移動速度を設定
        this.physical.velocity.y = SPEED_CHANGE_ITEM;

        // アイテムの幅を設定
        this.circWidth = ITEM_STYLE_CHANGE_WIDTH;

        // アイテムの種類を設定
        this.item_style_string = item_style;
    },

    // 毎フレーム更新処理
    update: function (app) {

        // 画面下部に到達したら削除
        if (this.top >= SCREEN_HEIGHT) {
            this.remove();
        }

    }
});