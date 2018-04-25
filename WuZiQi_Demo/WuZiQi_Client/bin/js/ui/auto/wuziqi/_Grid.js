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
        var _Grid = /** @class */ (function (_super) {
            __extends(_Grid, _super);
            function _Grid() {
                return _super.call(this) || this;
            }
            _Grid.createInstance = function () {
                return UIPackage.createObject("wuziqi", "Grid", _Grid);
            };
            _Grid.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.imgIcon = this.getChildAt(0);
                this.mark = this.getChildAt(1);
            };
            _Grid.url = "ui://xve4nbyqtecg1";
            return _Grid;
        }(GButton));
        wuziqi._Grid = _Grid;
    })(wuziqi = ui.wuziqi || (ui.wuziqi = {}));
})(ui || (ui = {}));
//# sourceMappingURL=_Grid.js.map