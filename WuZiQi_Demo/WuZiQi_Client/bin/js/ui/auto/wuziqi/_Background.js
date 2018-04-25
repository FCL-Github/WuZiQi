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
        var _Background = /** @class */ (function (_super) {
            __extends(_Background, _super);
            function _Background() {
                return _super.call(this) || this;
            }
            _Background.createInstance = function () {
                return UIPackage.createObject("wuziqi", "Background", _Background);
            };
            _Background.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.bg = this.getChildAt(0);
                this.checkerboard_bg = this.getChildAt(1);
                this.checkerboard = this.getChildAt(2);
                this._mask = this.getChildAt(3);
                this.btnRestart = this.getChildAt(4);
                this.btnBack = this.getChildAt(5);
                this.btnMusic = this.getChildAt(6);
            };
            _Background.url = "ui://xve4nbyqtecg0";
            return _Background;
        }(GComponent));
        wuziqi._Background = _Background;
    })(wuziqi = ui.wuziqi || (ui.wuziqi = {}));
})(ui || (ui = {}));
//# sourceMappingURL=_Background.js.map