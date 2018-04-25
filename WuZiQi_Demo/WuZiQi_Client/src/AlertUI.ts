class AlertUI extends BaseUI<ui.wuziqi._AlertUI>{
    private _chessColor:number = 3
    public constructor(chessColor:number){
        super()
        this.setView(ui.wuziqi._AlertUI.createInstance())
        this._chessColor = chessColor || Const.space
    }

    protected onInit(): void{
        super.onInit()
        if(this._chessColor == Const.white){
            this.view.txtAlert.text = "白子已获胜！！！"
        }else if(this._chessColor == Const.black){
            this.view.txtAlert.text = "黑子已获胜！！！"
        }else{
            this.view.txtAlert.text = ""
        }
        this.view.btnRestart.onClick(this,this.onBtnRestartClicked)
        this.view.btnCancel.onClick(this,this.onBtnCancelClicked)
    }

    protected onEnable(): void{
        super.onEnable()
    }

    protected onDisable(): void{
        super.onDisable()
    }

    private onBtnRestartClicked(): void{
        //Laya.Browser.window.location.reload()
        EventManager.call(EventType.Restart)
        this.close()
    }

    private onBtnCancelClicked(): void{
        this.close()
    }
}