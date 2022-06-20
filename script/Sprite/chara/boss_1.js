phina.define('Boss_1', {
    superClass: 'Sprite',

    // コンストラクタ
    init: function () {
        this.superInit('boss_1');

        // 連続発射回数
        this.seqShotNum = 0;

        // ライフゲージの設定
        this.lifeGuage = LifeGuage(
            LIFE_GUAGE_WIDTH,
            LIFE_GUAGE_HEIGHT,
            'limegreen',
            'red',
            'black',
            MAX_LIFE_BOSS1
        ).addChildTo(this);

        // ライフゲージの表示位置
        this.lifeGuage.y = - (BOSS_1_HEIGHT / 2 + LIFE_GUAGE_HEIGHT);
    },

    /**
     * 連続発射回数の準備
     */
    setSeqShotNum: function () {
        this.seqShotNum = SEQ_SHOT_NUM_BULLET_BOSS1_NORMAL;
    },

    /**
     * 連続発射中かどうかを返す
     */
    getSeqShot: function () {
        if (this.seqShotNum != 0) {
            return true;
        } else {
            return false;
        }
    },

    /**
     * プレイヤーとの距離、弾速を計算
     * @param player_x プレイヤーのx座標
     * @param player_y プレイヤーのy座標
     * @param bulletType 弾の種類（"normal", "special"）
     * @returns 弾速
     */
    calcBulletSpeed: function (player_x, player_y, bulletType) {

        var bulletSpeedBase = SPEED_BULLET_BOSS1_NORMAL;

        // 弾の種類によって弾速の基準を変更する
        if (bulletType == "normal") {
            bulletSpeedBase = SPEED_BULLET_BOSS1_NORMAL;
        } else if (bulletType == "special") {
            bulletSpeedBase = SPEED_BULLET_BOSS1_SPECIAL;
        }

        // 連続発射回数を設定
        if (this.seqShotNum != 0) {
            this.seqShotNum--;
        }

        // プレイヤーとの距離
        var distToPlayer = Math.sqrt(
            Math.pow(this.x - player_x, 2) +
            Math.pow(this.y - player_y, 2)
        );

        // 弾速
        var bulletSpeed = {
            speed_x: bulletSpeedBase * (player_x - this.x) / distToPlayer,
            speed_y: bulletSpeedBase * (player_y - this.y) / distToPlayer,
        }

        return bulletSpeed;
    },

    // 毎フレーム更新処理
    update: function (app) {

    }
});