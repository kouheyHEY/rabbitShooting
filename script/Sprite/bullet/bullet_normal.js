phina.define('Bullet_normal', {
    superClass: 'Sprite',

    // コンストラクタ
    init: function () {
        this.superInit('bullet_normal');

        // 弾速を設定
        this.physical.velocity.y = - SPEED_BULLET_NORMAL;

        // 弾のパワーを設定
        this.bulletPower = POWER_BULLET_NORMAL;
    },

    // 毎フレーム更新処理
    update: function (app) {

        // 画面上部に到達したら削除
        if (this.bottom < 0) {
            this.remove();
        }

    }
});