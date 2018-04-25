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
var ui;
(function (ui) {
    var wuziqi;
    (function (wuziqi) {
        var UIPackage = fairygui.UIPackage;
        var GComponent = fairygui.GComponent;
        var _AlertUI = /** @class */ (function (_super) {
            __extends(_AlertUI, _super);
            function _AlertUI() {
                return _super.call(this) || this;
            }
            _AlertUI.createInstance = function () {
                return UIPackage.createObject("wuziqi", "AlertUI", _AlertUI);
            };
            _AlertUI.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this._mask = this.getChildAt(0);
                this.btnRestart = this.getChildAt(2);
                this.btnCancel = this.getChildAt(3);
                this.txtAlert = this.getChildAt(4);
            };
            _AlertUI.url = "ui://xve4nbyqqyau8";
            return _AlertUI;
        }(GComponent));
        wuziqi._AlertUI = _AlertUI;
    })(wuziqi = ui.wuziqi || (ui.wuziqi = {}));
})(ui || (ui = {}));
//# sourceMappingURL=_AlertUI.js.map