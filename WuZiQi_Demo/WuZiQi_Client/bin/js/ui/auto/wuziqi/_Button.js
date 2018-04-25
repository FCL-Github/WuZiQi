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
        var _Button = /** @class */ (function (_super) {
            __extends(_Button, _super);
            function _Button() {
                return _super.call(this) || this;
            }
            _Button.createInstance = function () {
                return UIPackage.createObject("wuziqi", "Button", _Button);
            };
            _Button.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.button = this.getControllerAt(0);
                this.imgIcon = this.getChildAt(0);
                this.txtTitle = this.getChildAt(1);
            };
            _Button.url = "ui://xve4nbyqqyaua";
            return _Button;
        }(GButton));
        wuziqi._Button = _Button;
    })(wuziqi = ui.wuziqi || (ui.wuziqi = {}));
})(ui || (ui = {}));
//# sourceMappingURL=_Button.js.map