var BaseUI = /** @class */ (function () {
    function BaseUI() {
        this._hasInited = false;
        this._enable = false;
    }
    Object.defineProperty(BaseUI.prototype, "view", {
        get: function () {
            return this._view;
        },
        enumerable: true,
        configurable: true
    });
    BaseUI.prototype.setView = function (view) {
        //console.log("aaaaaaa",view)
        this._view = view;
        if (null == view) {
            console.error("BaseWidget view == null, check fairygui.UIPackage.addPackage");
        }
        if (undefined != view["logicObject"]) {
            console.error("BaseWidget 请检查这个view是否被多个逻辑对象使用");
        }
        view["logicObject"] = this;
        this.view.on(laya.events.Event.DISPLAY, this, this._onEnable);
        this.view.on(laya.events.Event.UNDISPLAY, this, this._onDisable);
        //TODO
        //WARNING 当view.visible为false是，从场景中移除并不会触发该事件
        if (undefined != this["onClosed"]) {
            this._view.on(laya.events.Event.REMOVED, this, this._onClosed);
        }
        if (view.displayObject.displayedInStage && view.visible) {
            this._onEnable();
        }
    };
    BaseUI.prototype.show = function (resetSizeToParent) {
        if (resetSizeToParent === void 0) { resetSizeToParent = false; }
        if (null == this.view.parent) {
            if (resetSizeToParent) {
                this.resetSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
            }
            fairygui.GRoot.inst.addChild(this.view);
        }
        else {
            if (resetSizeToParent) {
                this.resetSize(this._view.parent.width, this._view.parent.height);
            }
        }
        this.view.visible = true;
        this._onEnable();
    };
    BaseUI.prototype.showOn = function (parent, resetSizeToParent) {
        if (resetSizeToParent === void 0) { resetSizeToParent = false; }
        console.assert(null != parent, "IBaseWidget.showOn parent == null");
        if (resetSizeToParent) {
            this.resetSize(parent.width, parent.height);
        }
        parent.addChild(this.view);
        this.view.visible = true;
        this._onEnable();
    };
    BaseUI.prototype.resetSize = function (width, height) {
        if (width == Laya.stage.width && Laya.stage.width / Laya.stage.height > Const.maxWPH) {
            width = Math.min(height * Const.maxWPH);
            this.view.x = (width - this._view.width) / 2;
            this.view.y = (height - this._view.height) / 2;
            this.view.setSize(width, height);
        }
        else {
            this.view.setSize(width, height);
        }
    };
    BaseUI.prototype.close = function () {
        if (null == this._view) {
            return;
        }
        this._onDisable();
        this.view.removeFromParent();
        this._view = null;
    };
    /**
     * 这里undisplay()与display()只是做隐藏与现实处理，不能使用undisplay()后在使用show()
     */
    BaseUI.prototype.undisplay = function () {
        this._onDisable();
        if (undefined != this._view) {
            this._view.visible = false;
        }
    };
    BaseUI.prototype.display = function () {
        this._onEnable();
        this._view.visible = true;
    };
    //第一次进入场景后回调
    BaseUI.prototype.onInit = function () {
    };
    //显示时回调
    BaseUI.prototype.onEnable = function () {
    };
    //隐藏时或关闭回调
    BaseUI.prototype.onDisable = function () {
        this.popAllEvents();
        this.popAllTimer();
    };
    BaseUI.prototype.popAllEvents = function () {
        EventManager.popWithCaller(this);
    };
    BaseUI.prototype.popAllTimer = function () {
        Laya.timer.clearAll(this);
    };
    BaseUI.prototype._onInit = function () {
        if (!this._hasInited) {
            this.onInit();
        }
        this._hasInited = true;
    };
    BaseUI.prototype._onEnable = function () {
        this._onInit();
        if (!this._enable) {
            this.onEnable();
        }
        this._enable = true;
    };
    BaseUI.prototype._onDisable = function () {
        if (this._enable) {
            this.onDisable();
        }
        this._enable = false;
    };
    //TODO
    //WARNING 当view.visible为false是，从场景中移除并不会触发该事件
    BaseUI.prototype._onClosed = function () {
        if (null == this.view.parent) {
            this["onClosed"]();
        }
    };
    return BaseUI;
}());
//# sourceMappingURL=BaseUI.js.map