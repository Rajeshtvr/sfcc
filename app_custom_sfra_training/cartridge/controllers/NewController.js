'use strict';
var server = require('server');
server.get('Snow', function(req, res, next){
	var module = require('../models/NewModule');
	res.render('Training/practice', {ac: module});
	next();
});
module.exports = server.exports();
