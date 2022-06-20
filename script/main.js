// phina.js をグローバル領域に展開
phina.globalize();

// メイン処理
phina.main(function () {
    // アプリケーション生成
    var app = GameApp({
        assets: ASSETS,
        scenes: SCENES,
        startLabel: 'title',
        fps: GAME_FRAME,
    });

    // アプリケーション実行
    app.run();
});