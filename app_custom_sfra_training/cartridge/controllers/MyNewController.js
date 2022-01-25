/**
* Description of the Controller and the logic it provides
*
* @module  controllers/MyNewController
*/

'use strict';
var server = require('server');
var ArrayList=require("dw/util/ArrayList")
var Prod=require("dw/catalog/ProductMgr")
server.get('start',function(req, res, next){
		var al=new ArrayList();
		al.add(Prod.getProduct('P2611'));
		al.add(Prod.getProduct('newProduct'));
		res.render('Training/myFile',{List: al});
		next();
});
module.exports=server.exports();


