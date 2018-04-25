var ui;
(function (ui) {
    var wuziqi;
    (function (wuziqi) {
        var _BtnMusic = ui.wuziqi._BtnMusic;
        var _Background = ui.wuziqi._Background;
        var _Button = ui.wuziqi._Button;
        var _AlertUI = ui.wuziqi._AlertUI;
        var _Mask = ui.wuziqi._Mask;
        var _Grid = ui.wuziqi._Grid;
        var UIObjectFactory = fairygui.UIObjectFactory;
        var wuziqiBinder = /** @class */ (function () {
            function wuziqiBinder() {
            }
            wuziqiBinder.bindAll = function () {
                UIObjectFactory.setPackageItemExtension(_Grid.url, _Grid);
                UIObjectFactory.setPackageItemExtension(_Mask.url, _Mask);
                UIObjectFactory.setPackageItemExtension(_AlertUI.url, _AlertUI);
                UIObjectFactory.setPackageItemExtension(_Button.url, _Button);
                UIObjectFactory.setPackageItemExtension(_Background.url, _Background);
                UIObjectFactory.setPackageItemExtension(_BtnMusic.url, _BtnMusic);
            };
            return wuziqiBinder;
        }());
        wuziqi.wuziqiBinder = wuziqiBinder;
    })(wuziqi = ui.wuziqi || (ui.wuziqi = {}));
})(ui || (ui = {}));
//# sourceMappingURL=wuziqiBinder.js.map