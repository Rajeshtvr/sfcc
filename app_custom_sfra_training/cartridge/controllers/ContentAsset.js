'use strict';
var server = require('server');
server.get('show', function(req, res, next){
	res.render('Training/contentAsset1');
	next();
});
module.exports = server.exports();

