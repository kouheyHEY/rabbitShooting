phina.define('Bullet_boss1_special', {
    superClass: 'Sprite',

    // コンストラクタ
    init: function (speed_x, speed_y) {
        this.superInit('bullet_boss1_special');

        // 弾速を設定
        this.physical.velocity.y = speed_y;
        this.physical.velocity.x = speed_x;

        // 弾の幅を設定
        this.circWidth = BULLET_BOSS1_SPECIAL_WIDTH;

        // 弾のパワーを設定
        this.bulletPower = POWER_BULLET_BOSS1_SPECIAL;
    },

    // 毎フレーム更新処理
    update: function (app) {

        // 画面外に到達したら削除
        if (
            this.top >= SCREEN_HEIGHT ||
            this.right < 0 ||
            this.left >= SCREEN_WIDTH ||
            this.bottom < 0
        ) {
            this.remove();
        }
    }
});