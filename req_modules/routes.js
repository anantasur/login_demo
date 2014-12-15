var express = require('express');
var router = express.Router();

router.view_dashboard  = function(req,res){
	console.log('in view_dashboard.js')
	res.json(req.body);
	res.render("dashboard");
};

module.exports = router;