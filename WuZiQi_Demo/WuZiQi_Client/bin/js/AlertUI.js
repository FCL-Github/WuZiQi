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
var AlertUI = /** @class */ (function (_super) {
    __extends(AlertUI, _super);
    function AlertUI(chessColor) {
        var _this = _super.call(this) || this;
        _this._chessColor = 3;
        _this.setView(ui.wuziqi._AlertUI.createInstance());
        _this._chessColor = chessColor || Const.space;
        return _this;
    }
    AlertUI.prototype.onInit = function () {
        _super.prototype.onInit.call(this);
        if (this._chessColor == Const.white) {
            this.view.txtAlert.text = "白子已获胜！！！";
        }
        else if (this._chessColor == Const.black) {
            this.view.txtAlert.text = "黑子已获胜！！！";
        }
        else {
            this.view.txtAlert.text = "";
        }
        this.view.btnRestart.onClick(this, this.onBtnRestartClicked);
        this.view.btnCancel.onClick(this, this.onBtnCancelClicked);
    };
    AlertUI.prototype.onEnable = function () {
        _super.prototype.onEnable.call(this);
    };
    AlertUI.prototype.onDisable = function () {
        _super.prototype.onDisable.call(this);
    };
    AlertUI.prototype.onBtnRestartClicked = function () {
        //Laya.Browser.window.location.reload()
        EventManager.call(EventType.Restart);
        this.close();
    };
    AlertUI.prototype.onBtnCancelClicked = function () {
        this.close();
    };
    return AlertUI;
}(BaseUI));
//# sourceMappingURL=AlertUI.js.map