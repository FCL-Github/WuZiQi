class CheckerboardUI extends BaseUI<ui.wuziqi._Background>{
    private _chessDic: { [key: number]: number } = {}                   //记录棋子位置及棋子黑白状态字典
    private _chessColorFlag: boolean = false                            //棋子黑白icon标志
    private _chessPos: Array<number> = []                               //记录下棋顺序

    public constructor() {
        super()
        //console.log("BBBBB",ui.wuziqi._Background.createInstance())
        this.setView(ui.wuziqi._Background.createInstance())
    }

    protected onInit(): void {
        super.onInit()
        // this.view.btnBack.displayObject.cacheAs = "bitmap"
        // this.view.btnMusic.displayObject.cacheAs = "bitmap"
        // this.view.btnRestart.displayObject.cacheAs = "bitmap"
        this.view.bg.displayObject.cacheAs = "bitmap"
        //this.view.checkerboard_bg.displayObject.cacheAs = "bitmap"
        this.view.checkerboard.displayObject.cacheAs = "bitmap"

        laya.media.SoundManager.playMusic("res/audio/fenglin.mp3", 0)
        this.view.btnMusic.onClick(this, this.onBtnMusicClicked)
        this.view.btnRestart.onClick(this, this.onBtnRestartClicked)
        this.view.btnBack.onClick(this, this.onBtnBackClicked)
        this.view._mask.visible = false
        this.view._mask.onClick(this, this.onMaskClicked)
        this.view.checkerboard.on(fairygui.Events.CLICK_ITEM, this, this.onListItemClicked)
        for (let i = 0; i < 225; ++i) {
            this._chessDic[i] = Const.space
        }
    }

    protected onEnable(): void {
        super.onEnable()
        EventManager.push(EventType.Restart, this, this.onBtnRestartClicked)
    }

    protected onDisable(): void {
        super.onDisable()
    }

    private onListItemClicked(): void {
        let index = this.view.checkerboard.selectedIndex
        let item = this.view.checkerboard.getChildAt(index) as ui.wuziqi._Grid
        if ("" != item.icon) {
            return
        }

        if (null != this._chessPos) {
            let lastParam = this._chessPos.length - 1
            let lastItem = this.view.checkerboard.getChildAt(this._chessPos[lastParam]) as ui.wuziqi._Grid
            lastItem.mark.visible = false
        }

        //console.log("第几个Item", this.view.checkerboard.selectedIndex)
        if (this._chessColorFlag) {
            //白棋标志
            this._chessDic[index] = Const.white
            item.icon = "ui://xve4nbyqmju07"
            this._chessColorFlag = false
            this._chessPos.push(index)
            item.mark.visible = true
        } else {
            //黑棋标志
            this._chessDic[index] = Const.black
            this._chessPos.push(index)
            item.icon = "ui://xve4nbyqmju06"
            this._chessColorFlag = true
            item.mark.visible = true
        }
        let winner = Player.instance.judgeWinner(index, this._chessDic)
        if (winner) {
            //console.log("WINNER BE BORN")
            this.view._mask.visible = true
            let alertUI = new AlertUI(this._chessDic[index])
            alertUI.show()
        }
    }

    private onMaskClicked(): void {
        let chessColor = this._chessColorFlag && Const.black || Const.white
        let alertUI = new AlertUI(chessColor)
        alertUI.show()
    }

    private onBtnMusicClicked(): void {
        laya.media.SoundManager.musicMuted = this.view.btnMusic.selected
    }

    private onBtnRestartClicked(): void {
        this._chessColorFlag = false
        this.view._mask.visible = false
        this._chessPos = []
        for (let i = 0; i < 225; ++i) {
            this._chessDic[i] = Const.space
            let item = this.view.checkerboard.getChildAt(i) as ui.wuziqi._Grid
            item.icon = ""
            item.mark.visible = false
        }
    }

    private onBtnBackClicked(): void {
        if (null == this._chessPos || this._chessPos.length < 2) {
            return
        }
        //console.log("悔棋前",this._chessPos)
        let lastIndex = this._chessPos[this._chessPos.length - 1]
        let penultimateIndex = this._chessPos[this._chessPos.length - 2]
        //this._chessColorFlag = this._chessDic[lastIndex] == Const.black
        let lastItem = this.view.checkerboard.getChildAt(lastIndex) as ui.wuziqi._Grid
        lastItem.icon = ""
        lastItem.mark.visible = false

        let penultimateItem = this.view.checkerboard.getChildAt(penultimateIndex) as ui.wuziqi._Grid
        penultimateItem.icon = ""
        penultimateItem.mark.visible = false

        this._chessDic[lastIndex] = Const.space
        this._chessDic[penultimateIndex] = Const.space
        this.view._mask.visible = false
        this._chessPos.pop()
        this._chessPos.pop()
        if (this._chessPos.length > 0) {
            let antepenultimateItem = this.view.checkerboard.getChildAt(this._chessPos[this._chessPos.length - 1]) as ui.wuziqi._Grid
            antepenultimateItem.mark.visible = true
        }
        //console.log("悔棋后",this._chessPos)
    }
}