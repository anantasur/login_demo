var express = require('express');
var router = express.Router();

router.view_dashboard  = function(req,res){
	console.log('here');
	res.render("dashboard");
};

module.exports = router;