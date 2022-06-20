phina.define('Bullet_speed', {
    superClass: 'Sprite',

    // コンストラクタ
    init: function () {
        this.superInit('bullet_speed');

        // 弾速を設定
        this.physical.velocity.y = - SPEED_BULLET_SPEED;

        // 弾のパワーを設定
        this.bulletPower = POWER_BULLET_SPEED;
    },

    // 毎フレーム更新処理
    update: function (app) {

        // 画面上部に到達したら削除
        if (this.bottom < 0) {
            this.remove();
        }

    }
});