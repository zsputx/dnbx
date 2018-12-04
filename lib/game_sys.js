///////////////游戏结构类/////////////////
var game_tx = (function () {
    function game_tx(me) {
        this.me = me;
        this.game = me.game;
    }
    game_tx.prototype.create = function () {
        var s = this.game.add.sprite(100, 100, 'picture1');
        s.scale.set(0.2, 0.2);
        s.anchor.set(0.5, 0.5);
    };
    game_tx.prototype.loop = function () {
    };
    ;
    return game_tx;
}());
