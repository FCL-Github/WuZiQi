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
        var _Mask = /** @class */ (function (_super) {
            __extends(_Mask, _super);
            function _Mask() {
                return _super.call(this) || this;
            }
            _Mask.createInstance = function () {
                return UIPackage.createObject("wuziqi", "Mask", _Mask);
            };
            _Mask.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            _Mask.url = "ui://xve4nbyqqyau9";
            return _Mask;
        }(GComponent));
        wuziqi._Mask = _Mask;
    })(wuziqi = ui.wuziqi || (ui.wuziqi = {}));
})(ui || (ui = {}));
//# sourceMappingURL=_Mask.js.map