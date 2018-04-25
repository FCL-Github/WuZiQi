// 程序入口
var Handler = laya.utils.Handler;
var Loader = laya.net.Loader;
var EventManager = utils.EventManager;
var GameMain = /** @class */ (function () {
    function GameMain() {
    }
    GameMain.initGame = function () {
        //设置绘图区域
        Laya.init(750, 1334, Laya.WebGL); //9:16
        Laya.stage.frameRate = 'slow';
        //设置适配模式
        if (Laya.Browser.clientWidth / Laya.Browser.clientHeight > Const.maxWPH
            || Laya.Browser.clientWidth / Laya.Browser.clientHeight < Const.minWPH) {
            Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
        }
        else {
            Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_HEIGHT;
        }
        Laya.MouseManager.multiTouchEnabled = false;
        //设置横竖屏
        //Laya.stage.screenMode = Laya.Stage.SCREEN_VERTICAL
        Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
        //设置水平对齐
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        //设置垂直对齐
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        //设置默认字体
        // laya.display.css.Font.defaultFamily = "PingFang SC,Heiti SC"
        // fairygui.UIConfig.defaultFont = "PingFang SC,Heiti SC"
        laya.display.css.Font.defaultFamily = "Heiti SC";
        fairygui.UIConfig.defaultFont = "Heiti SC";
        // 华文行楷	
        // laya.display.css.Font.defaultFamily = "Songti"
        // fairygui.UIConfig.defaultFont = "Songti"
        Laya.stage.addChild(fairygui.GRoot.inst.displayListContainer);
        //显示帧率
        Laya.Stat.show(0, 0);
    };
    GameMain.runGame = function () {
        this.initGame();
        //添加UI资源
        Laya.loader.load([{ url: "res/ui/wuziqi.fui", type: Loader.BUFFER },
            { url: "res/ui/wuziqi@atlas0.png", type: Loader.IMAGE }], Handler.create(this, function () {
            //Laya.stage.addChild(fairygui.GRoot.inst.displayListContainer)
            fairygui.UIPackage.addPackage("res/ui/wuziqi");
            ui.wuziqi.wuziqiBinder.bindAll();
            ui.GUICodeBinders.bindAll();
            var checkerboard = new CheckerboardUI();
            checkerboard.show();
        }, null, false));
        // let checkerboard = new CheckerboardUI()
        // checkerboard.show()
    };
    return GameMain;
}());
GameMain.runGame();
//# sourceMappingURL=Game.js.map