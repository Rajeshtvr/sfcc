/**
* Description of the module and the logic it provides
*
* @module cartridge/models/NewModule
*/

'use strict';
var arrayList = require('dw/util/ArrayList');
var pjtmgr = require('dw/catalog/ProductMgr');
var System = require('dw/system');
function customPref() {
	var arrlist = new arrayList();
	var name = System.Site.getCurrent();
	var myPreferenceID = name.getCustomPreferenceValue("p2611");
	for (var i = 0; i < myPreferenceID.length; i++) 
	{
		arrlist.add(pjtmgr.getProduct(myPreferenceID[i]));
	}
	return arrlist;
}
module.exports =customPref();
