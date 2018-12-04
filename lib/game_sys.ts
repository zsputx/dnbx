///////////////游戏结构类/////////////////
class game_tx{
    game;
    me;
    constructor(me){
        this.me=me;
        this.game=me.game;

    }

    create(){
        var s=this.game.add.sprite(100,100,'picture1');
        s.scale.set(0.2,0.2);
        s.anchor.set(0.5,0.5);


    }
    loop(){

    };

}