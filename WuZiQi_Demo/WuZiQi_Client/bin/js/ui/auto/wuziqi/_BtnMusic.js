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
        var GButton = fairygui.GButton;
        var _BtnMusic = /** @class */ (function (_super) {
            __extends(_BtnMusic, _super);
            function _BtnMusic() {
                return _super.call(this) || this;
            }
            _BtnMusic.createInstance = function () {
                return UIPackage.createObject("wuziqi", "BtnMusic", _BtnMusic);
            };
            _BtnMusic.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.button = this.getControllerAt(0);
                this.imgIcon = this.getChildAt(0);
            };
            _BtnMusic.url = "ui://xve4nbyqrjbid";
            return _BtnMusic;
        }(GButton));
        wuziqi._BtnMusic = _BtnMusic;
    })(wuziqi = ui.wuziqi || (ui.wuziqi = {}));
})(ui || (ui = {}));
//# sourceMappingURL=_BtnMusic.js.map