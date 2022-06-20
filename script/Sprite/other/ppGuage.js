phina.define("PpGuage", {
	// 継承
	superClass: 'Gauge',
	// コンストラクタ
	init: function () {
		// 親クラス初期化
		this.superInit({
			width: PP_GUAGE_WIDTH,
			height: PP_GUAGE_HEIGHT,
			// fill: 'red',
			// stroke: 'black',
			gaugeColor: NORMALCOLOR_PP_GUAGE,
			maxValue: MAX_VALUE_PP_GUAGE,
			value: 0,
		});
		// 値変化アニメーションの時間
		this.animationTime = 10;
	},
});