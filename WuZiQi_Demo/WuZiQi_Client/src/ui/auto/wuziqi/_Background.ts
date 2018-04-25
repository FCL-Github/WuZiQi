module ui.wuziqi
{
	import _BtnMusic = ui.wuziqi._BtnMusic
	import _Button = ui.wuziqi._Button
	import _Mask = ui.wuziqi._Mask
	import Controller = fairygui.Controller
	import UIPackage = fairygui.UIPackage
	import GButton = fairygui.GButton
	import GComboBox = fairygui.GComboBox
	import GComponent = fairygui.GComponent
	import GImage = fairygui.GImage
	import GGraph = fairygui.GGraph
	import GGroup = fairygui.GGroup
	import GLabel = fairygui.GLabel
	import GList = fairygui.GList
	import GLoader = fairygui.GLoader
	import GMovieClip = fairygui.GMovieClip
	import GProgressBar = fairygui.GProgressBar
	import GRichTextField = fairygui.GRichTextField
	import GScrollBar = fairygui.GScrollBar
	import GSlider = fairygui.GSlider
	import GTextField = fairygui.GTextField
	import GTextInput = fairygui.GTextInput
	import Transition = fairygui.Transition

	export class _Background extends GComponent
	{
		public static url:string = "ui://xve4nbyqtecg0"


		public bg:GLoader
		public checkerboard_bg:GLoader
		public checkerboard:GList
		public _mask:_Mask
		public btnRestart:_Button
		public btnBack:_Button
		public btnMusic:_BtnMusic

		public static createInstance():_Background
		{
			return UIPackage.createObject("wuziqi", "Background", _Background) as _Background
		}

		public constructor(){super()}

		protected constructFromXML(xml:Object):void
		{
			super.constructFromXML(xml)

			this.bg = this.getChildAt(0) as GLoader
			this.checkerboard_bg = this.getChildAt(1) as GLoader
			this.checkerboard = this.getChildAt(2) as GList
			this._mask = this.getChildAt(3) as _Mask
			this.btnRestart = this.getChildAt(4) as _Button
			this.btnBack = this.getChildAt(5) as _Button
			this.btnMusic = this.getChildAt(6) as _BtnMusic
		}
	}
}