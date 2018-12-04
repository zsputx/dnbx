class G1_Game {
    game;
    loadState;
    gameState;
    constructor() {
    this.game = new Phaser.Game({"width":window.innerWidth, "height":window.innerHeight, "renderer":Phaser.CANVAS});
    this.loadState = new LoadState(this.game);
    this.gameState = new GameState(this.game);
    this.game.state.add("loadState", this.loadState);
    this.game.state.add("gameState", this.gameState);
    this.game.state.start("loadState");
    }
}

window.onload = () => {
    var game = new G1_Game();
};









