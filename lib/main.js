var G1_Game = (function () {
    function G1_Game() {
        this.game = new Phaser.Game({ "width": T.w, "height": T.h, "renderer": Phaser.CANVAS });
        this.loadState = new LoadState(this.game);
        this.gameState = new GameState(this.game);
        this.game.state.add("loadState", this.loadState);
        this.game.state.add("gameState", this.gameState);
        this.game.state.start("loadState");
    }
    return G1_Game;
}());
window.onload = function () {
    var game = new G1_Game();
};
