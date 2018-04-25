module ui.wuziqi
{
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

	export class _AlertUI extends GComponent
	{
		public static url:string = "ui://xve4nbyqqyau8"


		public _mask:_Mask
		public btnRestart:_Button
		public btnCancel:_Button
		public txtAlert:GTextField

		public static createInstance():_AlertUI
		{
			return UIPackage.createObject("wuziqi", "AlertUI", _AlertUI) as _AlertUI
		}

		public constructor(){super()}

		protected constructFromXML(xml:Object):void
		{
			super.constructFromXML(xml)

			this._mask = this.getChildAt(0) as _Mask
			this.btnRestart = this.getChildAt(2) as _Button
			this.btnCancel = this.getChildAt(3) as _Button
			this.txtAlert = this.getChildAt(4) as GTextField
		}
	}
}