phina.define("LifeGuage", {
	// 継承
	superClass: 'Gauge',
	// コンストラクタ
	init: function (width, height, lifeColor, damageColor, strokeColor, maxLife) {
		// 親クラス初期化
		this.superInit({
			width: width,
			height: height,
			fill: damageColor,
			stroke: strokeColor,
			gaugeColor: lifeColor,
			maxValue: maxLife,
			value: maxLife,
		});
		// 値変化アニメーションの時間
		this.animationTime = 500;
	},
});