class BaseUI<V extends fairygui.GComponent> {
    //需要通过setView设置view
    protected _view: fairygui.GComponent

    get view(): V {
        return this._view as V
    }

    public setView(view: V) {
        //console.log("aaaaaaa",view)
        this._view = view

        if (null == view) {
            console.error("BaseWidget view == null, check fairygui.UIPackage.addPackage")
        }

        if (undefined != view["logicObject"]) {
            console.error("BaseWidget 请检查这个view是否被多个逻辑对象使用")
        }
        view["logicObject"] = this

        this.view.on(laya.events.Event.DISPLAY, this, this._onEnable)
        this.view.on(laya.events.Event.UNDISPLAY, this, this._onDisable)

        //TODO
        //WARNING 当view.visible为false是，从场景中移除并不会触发该事件
        if (undefined != this["onClosed"]) {
            this._view.on(laya.events.Event.REMOVED, this, this._onClosed)
        }

        if (view.displayObject.displayedInStage && view.visible) {
            this._onEnable()
        }
    }

    public constructor() {

    }

    public show(resetSizeToParent = false): void {
        if (null == this.view.parent) {
            if (resetSizeToParent) {
                this.resetSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height)
            }
            fairygui.GRoot.inst.addChild(this.view)
        } else {
            if (resetSizeToParent) {
                this.resetSize(this._view.parent.width, this._view.parent.height)
            }
        }
        this.view.visible = true
        this._onEnable()
    }

    public showOn(parent: fairygui.GComponent, resetSizeToParent = false): void {
        console.assert(null != parent, "IBaseWidget.showOn parent == null")
        if (resetSizeToParent) {
            this.resetSize(parent.width, parent.height)
        }
        parent.addChild(this.view)

        this.view.visible = true
        this._onEnable()
    }

    public resetSize(width: number, height: number): void {
        if (width == Laya.stage.width && Laya.stage.width / Laya.stage.height > Const.maxWPH) {
            width = Math.min(height * Const.maxWPH)
            this.view.x = (width - this._view.width) / 2
            this.view.y = (height - this._view.height) / 2

            this.view.setSize(width, height)
        } else {
            this.view.setSize(width, height)
        }
    }

    public close(): void {
        if (null == this._view) {
            return
        }

        this._onDisable()
        this.view.removeFromParent()
        this._view = null
    }

    /**
     * 这里undisplay()与display()只是做隐藏与现实处理，不能使用undisplay()后在使用show()
     */
    public undisplay(): void {
        this._onDisable()
        if (undefined != this._view) {
            this._view.visible = false
        }
    }
    public display(): void {
        this._onEnable()
        this._view.visible = true
    }

    //第一次进入场景后回调
    protected onInit(): void {

    }

    //显示时回调
    protected onEnable(): void {

    }
    //隐藏时或关闭回调
    protected onDisable(): void {
        this.popAllEvents()
        this.popAllTimer()
    }

    protected popAllEvents(): void {
        EventManager.popWithCaller(this)
    }

    protected popAllTimer(): void {
        Laya.timer.clearAll(this)
    }

    private _hasInited: boolean = false
    private _enable = false

    private _onInit(): void {
        if (!this._hasInited) {
            this.onInit()
        }
        this._hasInited = true
    }

    private _onEnable(): void {
        this._onInit()

        if (!this._enable) {
            this.onEnable()
        }
        this._enable = true
    }

    private _onDisable(): void {
        if (this._enable) {
            this.onDisable()
        }
        this._enable = false
    }

    //TODO
    //WARNING 当view.visible为false是，从场景中移除并不会触发该事件
    private _onClosed(): void {
        if (null == this.view.parent) {
            this["onClosed"]()
        }
    }
}