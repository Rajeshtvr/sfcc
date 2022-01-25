/**
* Description of the Controller and the logic it provides
*
* @module  controllers/TestController
*/

'use strict';
var server = require('server');
var cookie = require('dw/web/Cookie')
server.get('start',function(req, res, next){
	res.render('Training/coockie');
	next();
});
module.exports = server.exports();
