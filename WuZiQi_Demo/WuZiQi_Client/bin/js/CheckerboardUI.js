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
var CheckerboardUI = /** @class */ (function (_super) {
    __extends(CheckerboardUI, _super);
    function CheckerboardUI() {
        var _this = _super.call(this) || this;
        _this._chessDic = {}; //记录棋子位置及棋子黑白状态字典
        _this._chessColorFlag = false; //棋子黑白icon标志
        _this._chessPos = []; //记录下棋顺序
        //console.log("BBBBB",ui.wuziqi._Background.createInstance())
        _this.setView(ui.wuziqi._Background.createInstance());
        return _this;
    }
    CheckerboardUI.prototype.onInit = function () {
        _super.prototype.onInit.call(this);
        // this.view.btnBack.displayObject.cacheAs = "bitmap"
        // this.view.btnMusic.displayObject.cacheAs = "bitmap"
        // this.view.btnRestart.displayObject.cacheAs = "bitmap"
        this.view.bg.displayObject.cacheAs = "bitmap";
        //this.view.checkerboard_bg.displayObject.cacheAs = "bitmap"
        this.view.checkerboard.displayObject.cacheAs = "bitmap";
        laya.media.SoundManager.playMusic("res/audio/fenglin.mp3", 0);
        this.view.btnMusic.onClick(this, this.onBtnMusicClicked);
        this.view.btnRestart.onClick(this, this.onBtnRestartClicked);
        this.view.btnBack.onClick(this, this.onBtnBackClicked);
        this.view._mask.visible = false;
        this.view._mask.onClick(this, this.onMaskClicked);
        this.view.checkerboard.on(fairygui.Events.CLICK_ITEM, this, this.onListItemClicked);
        for (var i = 0; i < 225; ++i) {
            this._chessDic[i] = Const.space;
        }
    };
    CheckerboardUI.prototype.onEnable = function () {
        _super.prototype.onEnable.call(this);
        EventManager.push(EventType.Restart, this, this.onBtnRestartClicked);
    };
    CheckerboardUI.prototype.onDisable = function () {
        _super.prototype.onDisable.call(this);
    };
    CheckerboardUI.prototype.onListItemClicked = function () {
        var index = this.view.checkerboard.selectedIndex;
        var item = this.view.checkerboard.getChildAt(index);
        if ("" != item.icon) {
            return;
        }
        if (null != this._chessPos) {
            var lastParam = this._chessPos.length - 1;
            var lastItem = this.view.checkerboard.getChildAt(this._chessPos[lastParam]);
            lastItem.mark.visible = false;
        }
        //console.log("第几个Item", this.view.checkerboard.selectedIndex)
        if (this._chessColorFlag) {
            //白棋标志
            this._chessDic[index] = Const.white;
            item.icon = "ui://xve4nbyqmju07";
            this._chessColorFlag = false;
            this._chessPos.push(index);
            item.mark.visible = true;
        }
        else {
            //黑棋标志
            this._chessDic[index] = Const.black;
            this._chessPos.push(index);
            item.icon = "ui://xve4nbyqmju06";
            this._chessColorFlag = true;
            item.mark.visible = true;
        }
        var winner = Player.instance.judgeWinner(index, this._chessDic);
        if (winner) {
            //console.log("WINNER BE BORN")
            this.view._mask.visible = true;
            var alertUI = new AlertUI(this._chessDic[index]);
            alertUI.show();
        }
    };
    CheckerboardUI.prototype.onMaskClicked = function () {
        var chessColor = this._chessColorFlag && Const.black || Const.white;
        var alertUI = new AlertUI(chessColor);
        alertUI.show();
    };
    CheckerboardUI.prototype.onBtnMusicClicked = function () {
        laya.media.SoundManager.musicMuted = this.view.btnMusic.selected;
    };
    CheckerboardUI.prototype.onBtnRestartClicked = function () {
        this._chessColorFlag = false;
        this.view._mask.visible = false;
        this._chessPos = [];
        for (var i = 0; i < 225; ++i) {
            this._chessDic[i] = Const.space;
            var item = this.view.checkerboard.getChildAt(i);
            item.icon = "";
            item.mark.visible = false;
        }
    };
    CheckerboardUI.prototype.onBtnBackClicked = function () {
        if (null == this._chessPos || this._chessPos.length < 2) {
            return;
        }
        //console.log("悔棋前",this._chessPos)
        var lastIndex = this._chessPos[this._chessPos.length - 1];
        var penultimateIndex = this._chessPos[this._chessPos.length - 2];
        //this._chessColorFlag = this._chessDic[lastIndex] == Const.black
        var lastItem = this.view.checkerboard.getChildAt(lastIndex);
        lastItem.icon = "";
        lastItem.mark.visible = false;
        var penultimateItem = this.view.checkerboard.getChildAt(penultimateIndex);
        penultimateItem.icon = "";
        penultimateItem.mark.visible = false;
        this._chessDic[lastIndex] = Const.space;
        this._chessDic[penultimateIndex] = Const.space;
        this.view._mask.visible = false;
        this._chessPos.pop();
        this._chessPos.pop();
        if (this._chessPos.length > 0) {
            var antepenultimateItem = this.view.checkerboard.getChildAt(this._chessPos[this._chessPos.length - 1]);
            antepenultimateItem.mark.visible = true;
        }
        //console.log("悔棋后",this._chessPos)
    };
    return CheckerboardUI;
}(BaseUI));
//# sourceMappingURL=CheckerboardUI.js.map