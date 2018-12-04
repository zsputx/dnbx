var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//import Phaser from '../../libs/phaser-wx.js'
var GameState = (function (_super) {
    __extends(GameState, _super);
    function GameState(game) {
        var _this = _super.call(this) || this;
        _this.game = game;
        return _this;
    }
    GameState.prototype.resumed = function () {
        location.reload();
    };
    GameState.prototype.preload = function () {
        this.game.stage.backgroundColor = 0xec628c;
    };
    GameState.prototype.create = function () {
        this.init_menu();
    };
    GameState.prototype.create_score = function () {
        this.dis_score = document.createElement("p");
        this.dis_score.innerHTML = "<p  id='ppp' style='position: absolute;top: 30px;left: 48%;color: #ffd649;font-family: Arial Black;font-size: 2em '>0</p>";
        document.body.appendChild(this.dis_score);
    };
    //初始化菜单
    GameState.prototype.init_menu = function () {
        this.gq_score = T.tk[0].length - 1;
        this.TK = T.random_sort(T.tk[0]);
        this.bt_kg = true;
        this.score = 0;
        this.count_s = 0;
        this.ctkg = true;
        this.dqwt_c = 0;
        this.clear_hp_kg = false;
        this.menu = new Menu(this.game);
        var me = this;
        this.hp_val = 1;
        this.m_bt = this.game.add.audio("m_bt");
        this.m_zc = this.game.add.audio("m_zc");
        this.m_cw = this.game.add.audio("m_cw");
        this.m_zq = this.game.add.audio("m_zq");
        this.m_djs = this.game.add.audio("m_djs");
        this.m_back = this.game.add.audio("m_back");
        this.m_jz = this.game.add.audio("m_jz");
        this.menu.addItem(T.w / 2, T.h * 0.3, "logo", "logo", null, 0); //背景
        //开始按钮
        this.menu.addItem(T.w / 2, T.h * 0.7, "ks", "ks", function () {
            me.strat_game();
            me.menu.hide();
            me.m_bt.play();
        }, 0);
        ///进度条
        this.hp = new progress_bar(this.game, T.w * 0.1, T.h * 0.15, T.w * 0.8, T.h * 0.03, 20, 0xff00f0, 0xfff000, T.w * 0.2);
        this.hp.setHp(1);
        this.hp.hide();
        this.pd_menu = new Menu(this.game);
        this.pd_menu.addItem(T.w * 0.3, T.h * 0.7, "dui", "logo", function () {
            if (me.start_kg && me.bt_kg) {
                me.pd(true);
                me.bt_kg = false;
            }
        }, 0); //背景
        this.pd_menu.addItem(T.w * 0.7, T.h * 0.7, "cuo", "ks", function () {
            if (me.start_kg && me.bt_kg) {
                me.pd(false);
                me.bt_kg = false;
            }
        }, 0);
        this.pd_menu.hide();
        this.dis_que = this.game.add.text(T.w * 0.5, T.h * 0.3, "1*1=", {
            font: "bold 50px Arial",
            fill: "#fff",
            boundsAlignH: "center",
            boundsAlignV: "middle"
        });
        this.dis_que.anchor.set(0.5, 0.5);
        this.dis_que.visible = false;
        this.dis_dan = this.game.add.text(T.w * 0.5, T.h * 0.45, "5", {
            font: "bold 50px Arial",
            fill: "#fff",
            boundsAlignH: "center",
            boundsAlignV: "middle"
        });
        this.dis_dan.anchor.set(0.5, 0.5);
        this.dis_dan.visible = false;
    };
    //开始游戏
    GameState.prototype.strat_game = function () {
        this.create_score();
        this.djss = new Daojs(this.game, T.w / 2, T.h / 2, 'tp', "#f0ff0c", 5);
        var me = this;
        this.m_djs.play();
        this.djss.start(5, function () {
            me.start_kg = true;
            me.m_djs.stop();
            me.m_back.play();
            me.m_back.loop = true;
        });
    };
    GameState.prototype.setScore = function () {
        document.getElementById("ppp").innerText = this.score;
    };
    GameState.prototype.pd = function (a) {
        if (a) {
            if (a == this.TK[this.dqwt_c].c) {
                this.m_zq.play();
                if (this.dqwt_c < this.TK.length - 1) {
                    this.dqwt_c++;
                    this.score += 1;
                    this.setScore();
                }
                else {
                    this.start_kg = false;
                    this.add_lv();
                }
                this.clear_hp_kg = false;
                this.ctkg = true;
                this.pd_menu.hide();
                this.hp.hide();
                this.dis_que.visible = false;
                this.dis_dan.visible = false;
            }
            else {
                this.m_cw.play();
                this.over();
            }
        }
        else {
            if (a == this.TK[this.dqwt_c].c) {
                this.m_zq.play();
                if (this.dqwt_c < this.TK.length - 1) {
                    this.dqwt_c++;
                    this.score += 1;
                    this.setScore();
                }
                else {
                    this.start_kg = false;
                    this.add_lv();
                }
                this.clear_hp_kg = false;
                this.ctkg = true;
                this.pd_menu.hide();
                this.hp.hide();
                this.dis_dan.visible = false;
            }
            else {
                this.m_cw.play();
                this.over();
            }
        }
    };
    //打错问题
    GameState.prototype.err_game = function () {
    };
    //下一个问题
    GameState.prototype.next_question = function () {
        var me = this;
        me.bt_kg = true;
        me.m_zc.play();
        me.pd_menu.display();
        me.dis_que.visible = true;
        me.dis_dan.visible = true;
        me.hp_val = 1;
        me.hp.setHp(1);
        me.hp.display();
        me.dis_que.text = this.TK[me.dqwt_c].a;
        me.dis_dan.text = this.TK[me.dqwt_c].b;
        me.clear_hp_kg = true;
    };
    //晋升
    GameState.prototype.add_lv = function () {
        var me = this;
        me.start_kg = false;
        var ss = this.game.add.button(T.w / 2, T.h / 2, 'img_xyg', function () {
            me.start_kg = true;
            me.getTk();
            me.dqwt_c = 0;
            ss.destroy();
        });
        ss.anchor.set(0.5, 0.5);
    };
    GameState.prototype.getTk = function () {
        console.log(this.score);
        if ((this.score / this.gq_score) < T.tk.length) {
            this.TK = T.random_sort(T.tk[this.score / this.gq_score]);
        }
        else {
            console.log("通关了");
            this.tg_action();
        }
    };
    GameState.prototype.update = function () {
        if (this.start_kg) {
            if (this.ctkg) {
                this.next_question();
                this.ctkg = false;
            }
            if (this.clear_hp_kg && this.bt_kg) {
                this.count_s++;
                if (this.count_s % 25 == 0) {
                    this.hp_val += -0.1;
                    if (this.hp_val >= 0) {
                        this.hp.setHp(this.hp_val);
                    }
                    if (this.hp_val <= 0) {
                        this.over();
                        this.m_cw.play();
                    }
                }
            }
        }
    };
    //t通关提示
    GameState.prototype.tg_action = function () {
        var me = this;
        this.start_kg = false;
        document.body.removeChild(this.dis_score);
        var ss = this.game.add.button(T.w / 2, T.h / 2, 'img_tg', function () {
            me.game.state.start("gameState");
            ss.destroy();
        });
        ss.anchor.set(0.5, 0.5);
    };
    GameState.prototype.over = function () {
        this.start_kg = false;
        var me = this;
        this.m_back.stop();
        var over = this.game.add.button(T.w / 2, T.h / 2, 'over', function () {
            me.game.state.start("gameState");
        });
        this.game.add.tween(over).from({ y: -200 }, 1000, Phaser.Easing.Bounce.Out, true);
        over.anchor.set(0.5, 0.5);
        document.body.removeChild(this.dis_score);
    };
    return GameState;
}(Phaser.State));
//module.exports=GameState;
