module ui.wuziqi
{
	import _BtnMusic = ui.wuziqi._BtnMusic
	import _Background = ui.wuziqi._Background
	import _Button = ui.wuziqi._Button
	import _AlertUI = ui.wuziqi._AlertUI
	import _Mask = ui.wuziqi._Mask
	import _Grid = ui.wuziqi._Grid
	import UIObjectFactory = fairygui.UIObjectFactory

	export class wuziqiBinder
	{
		public static bindAll():void
		{
			UIObjectFactory.setPackageItemExtension(_Grid.url, _Grid)
			UIObjectFactory.setPackageItemExtension(_Mask.url, _Mask)
			UIObjectFactory.setPackageItemExtension(_AlertUI.url, _AlertUI)
			UIObjectFactory.setPackageItemExtension(_Button.url, _Button)
			UIObjectFactory.setPackageItemExtension(_Background.url, _Background)
			UIObjectFactory.setPackageItemExtension(_BtnMusic.url, _BtnMusic)
		}
	}
}