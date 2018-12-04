//////////游戏拓展类

/**
 * 菜单类
 */
class Menu {
    group;
    game;

    constructor(game) {
        this.game = game;
        this.group = this.game.add.group();
    }

    display() {
        this.group.setAll('visible', true);
    }

    addItem(x, y, src, name, action,a) {
        var item = this.group.create(x, y, src,a);
        item.anchor.set(0.5, 0.5);
      //  item.rotation = 0.5 * Math.PI;
        item.name = name;
        if (action) {
            item.inputEnabled = true;
            item.events.onInputDown.add(action);
        }
        return item;
    }
    add(a){
        this.group.addChild(a);
    }
    hide() {
        this.group.setAll('visible', false);
    }

    recover(){
        this.group.children = [];
        this.group.destroy();
    }

}

//进度条
class progress_bar{
    fill;
    stroke;
    hp;
    game;
    graphic;
    x;
    y;
    w;
    h;
    radius;
    lineWidth;
    alpha;
    ghp;
    constructor(game,x,y,w,h,radius,stroke,fill,hp){
        this.game=game;
        this.x=x;
        this.y=y;
        this.hp=hp;
        this.w=w;
        this.h=h;
        this.radius=radius;
        this.lineWidth=1;
        this.alpha=1;
        this.fill=fill;
        this.stroke=stroke;
        this.ghp=this.game.add.graphics();
        this.graphic=this.game.add.graphics();
        this.graphic.lineStyle(this.lineWidth,this.stroke,this.alpha);
        this.graphic.beginFill(this.fill,this.alpha-0.5);
        this.graphic.drawRoundedRect(this.x,this.y,this.w,this.h,this.radius);
        this.graphic.endFill();
        this.ghp.beginFill(this.fill,this.alpha);
        this.ghp.drawRoundedRect(this.x,this.y,this.hp,this.h,this.radius);

        this.ghp.endFill();
    }
    hide(){
   this.graphic.visible=false;
        this.ghp.visible=false;
    }
    display(){
        this.graphic.visible=true;
        this.ghp.visible=true;
    }
    destroy(){
        if(this.graphic){
            this.graphic.destroy();
            this.ghp.destroy();
        }
    }
    setHp(a){

        this.ghp.clear();
        this.ghp.beginFill(this.fill,this.alpha);
        this.ghp.drawRoundedRect(this.x,this.y,this.w*a,this.h,this.radius);

        this.ghp.endFill();

    }
}

//倒计时


class Daojs{
    sp;
    game;
    text;
    constructor(game,x,y,src,fill,val){
        this.game=game;

     this.sp=this.game.add.sprite(x,y,src);
     this.sp.anchor.set(0.5,0.5);
     this.text=this.game.make.text(0,0,""+val,{font: "bold 100px Arial", fill: fill, boundsAlignH: "center", boundsAlignV: "middle"})
     this.text.anchor.set(0.5,0.5);
     this.sp.addChild(this.text);
    }

    hide(){
        this.sp.visible=false;
    }
    display(){
        this.sp.visible=true;

    }
     setVal(a){
        this.text.text=a;
     }

     stop(){


     }
     start(a,c){
         var sz=[];
         var me=this;
         for(var i=a;i>0;i--) {
             this.text.text=""+i;
            var s= this.game.add.tween(this.sp).to({alpha: 0}, 1000, "Linear", false);
           sz.push(s);
         }
        this.dg(sz,0,c);


     }


     dg(a,b,c){

         if(b<a.length) {
             this.sp.alpha=1;
             this.text.text=""+(a.length-b);
             var me=this;
             console.log("b",b);
             a[b].start();
             a[b].onComplete.add(function()
             {
                 if((a.length-b)==1){
                     if(c){c();}
                 }
                 me.dg(a,b+1,c);
             });
         }

     }
}