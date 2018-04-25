module ui.wuziqi
{
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

	export class _BtnMusic extends GButton
	{
		public static url:string = "ui://xve4nbyqrjbid"


		public button:Controller
		public imgIcon:GLoader

		public static createInstance():_BtnMusic
		{
			return UIPackage.createObject("wuziqi", "BtnMusic", _BtnMusic) as _BtnMusic
		}

		public constructor(){super()}

		protected constructFromXML(xml:Object):void
		{
			super.constructFromXML(xml)

			this.button = this.getControllerAt(0)
			this.imgIcon = this.getChildAt(0) as GLoader
		}
	}
}