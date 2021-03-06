//import Phaser from '../../libs/phaser-wx.js'
 class LoadState extends Phaser.State {
    game;
    anm;
    text_progress;
    constructor(game) {
        super();
        this.game = game;
    }


  private  preload() {
      this.game.stage.backgroundColor=0xec628c;
        this.game.load.image('img_sun','./res/img_sun.png');



    }

   private  create() {
        this.load_anm();

        // this.game.load.onLoadStart.add(this.loadStart, this);
        this.game.load.onFileComplete.add(this.filePross, this);
        this.game.load.onLoadComplete.add(this.loadComplete, this);

        this.load_res(this.game);

    }
    
   private load_res(game){

        game.load.image('logo', 'res/img_logo.png');
        game.load.image('ks', 'res/img_ks.png');
       game.load.image('img_back', 'res/img_back.png');
       game.load.image('tp', 'res/img_tp.png');
       game.load.image('life', 'res/img_life.png');
       game.load.image('img_js', 'res/img_js.png');
       game.load.image('dui', 'res/img_dui.png');
       game.load.image('cuo', 'res/img_cuo.png');
       game.load.image('img_tg', 'res/img_tg.png');
       game.load.image('img_xyg', 'res/img_xyg.png');
       game.load.audio('m_bt', 'res/button.mp3');
       game.load.audio('m_zq', 'res/right.mp3');
       game.load.audio('m_cw', 'res/cuowu.mp3');
       game.load.audio('m_zc', 'res/zhuanchang.mp3');
       game.load.audio('m_djs', 'res/daojs.mp3');
       game.load.audio('m_back', 'res/back.mp3');
       game.load.audio('m_jz', 'res/jinzhang.mp3');
       game.load.image('over', 'res/img_over.png');
        game.load.start();
    }

   private load_anm(){
        this.anm=this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,'img_sun');
        this.anm.anchor.set(0.5,0.5);
        this.anm.scale.set(0.2,0.2);
        this.text_progress=this.game.add.text(this.game.world.centerX,this.game.world.centerY*2*0.8,+"0%",{ font: "16px Arial", fill: "orange"});
        this.text_progress.anchor.set(0.5,0.5);

    }
    //加载资源
  // loadStart(){}
   //资源进度
   filePross(progress, cacheKey, success, totalLoaded, totalFiles){
       this.text_progress.text=progress+"%";
       this.anm.rotation+=0.1;

   }
   //资源完成
   loadComplete(){
         this.game.state.start('gameState');

   }





}


//module.exports=LoadState;


