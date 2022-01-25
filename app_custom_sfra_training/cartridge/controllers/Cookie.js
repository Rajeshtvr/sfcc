/**
* Description of the Controller and the logic it provides
*
* @module  controllers/Cookie
*/

'use strict';
var server = require('server');
var ab = request.httpCookies['RedirectURL'].value;
server.get('start', function(req, res, next){
	res.render('Training/cookie3', {b:ab});
	next();
});
module.exports = server.exports();
