//////////游戏拓展类
/**
 * 菜单类
 */
var Menu = (function () {
    function Menu(game) {
        this.game = game;
        this.group = this.game.add.group();
    }
    Menu.prototype.display = function () {
        this.group.setAll('visible', true);
    };
    Menu.prototype.addItem = function (x, y, src, name, action, a) {
        var item = this.group.create(x, y, src, a);
        item.anchor.set(0.5, 0.5);
        //  item.rotation = 0.5 * Math.PI;
        item.name = name;
        if (action) {
            item.inputEnabled = true;
            item.events.onInputDown.add(action);
        }
        return item;
    };
    Menu.prototype.add = function (a) {
        this.group.addChild(a);
    };
    Menu.prototype.hide = function () {
        this.group.setAll('visible', false);
    };
    Menu.prototype.recover = function () {
        this.group.children = [];
        this.group.destroy();
    };
    return Menu;
}());
//进度条
var progress_bar = (function () {
    function progress_bar(game, x, y, w, h, radius, stroke, fill, hp) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.hp = hp;
        this.w = w;
        this.h = h;
        this.radius = radius;
        this.lineWidth = 1;
        this.alpha = 1;
        this.fill = fill;
        this.stroke = stroke;
        this.ghp = this.game.add.graphics();
        this.graphic = this.game.add.graphics();
        this.graphic.lineStyle(this.lineWidth, this.stroke, this.alpha);
        this.graphic.beginFill(this.fill, this.alpha - 0.5);
        this.graphic.drawRoundedRect(this.x, this.y, this.w, this.h, this.radius);
        this.graphic.endFill();
        this.ghp.beginFill(this.fill, this.alpha);
        this.ghp.drawRoundedRect(this.x, this.y, this.hp, this.h, this.radius);
        this.ghp.endFill();
    }
    progress_bar.prototype.hide = function () {
        this.graphic.visible = false;
        this.ghp.visible = false;
    };
    progress_bar.prototype.display = function () {
        this.graphic.visible = true;
        this.ghp.visible = true;
    };
    progress_bar.prototype.destroy = function () {
        if (this.graphic) {
            this.graphic.destroy();
            this.ghp.destroy();
        }
    };
    progress_bar.prototype.setHp = function (a) {
        this.ghp.clear();
        this.ghp.beginFill(this.fill, this.alpha);
        this.ghp.drawRoundedRect(this.x, this.y, this.w * a, this.h, this.radius);
        this.ghp.endFill();
    };
    return progress_bar;
}());
//倒计时
var Daojs = (function () {
    function Daojs(game, x, y, src, fill, val) {
        this.game = game;
        this.sp = this.game.add.sprite(x, y, src);
        this.sp.anchor.set(0.5, 0.5);
        this.text = this.game.make.text(0, 0, "" + val, { font: "bold 100px Arial", fill: fill, boundsAlignH: "center", boundsAlignV: "middle" });
        this.text.anchor.set(0.5, 0.5);
        this.sp.addChild(this.text);
    }
    Daojs.prototype.hide = function () {
        this.sp.visible = false;
    };
    Daojs.prototype.display = function () {
        this.sp.visible = true;
    };
    Daojs.prototype.setVal = function (a) {
        this.text.text = a;
    };
    Daojs.prototype.stop = function () {
    };
    Daojs.prototype.start = function (a, c) {
        var sz = [];
        var me = this;
        for (var i = a; i > 0; i--) {
            this.text.text = "" + i;
            var s = this.game.add.tween(this.sp).to({ alpha: 0 }, 1000, "Linear", false);
            sz.push(s);
        }
        this.dg(sz, 0, c);
    };
    Daojs.prototype.dg = function (a, b, c) {
        if (b < a.length) {
            this.sp.alpha = 1;
            this.text.text = "" + (a.length - b);
            var me = this;
            console.log("b", b);
            a[b].start();
            a[b].onComplete.add(function () {
                if ((a.length - b) == 1) {
                    if (c) {
                        c();
                    }
                }
                me.dg(a, b + 1, c);
            });
        }
    };
    return Daojs;
}());
