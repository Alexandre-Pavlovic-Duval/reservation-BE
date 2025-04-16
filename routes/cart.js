var express = require('express');
var router = express.Router();
require("../models/connection");
const Cart = require('../models/cart');

router.get('/', function(req, res) {
    Cart.find().then(data => {
		console.log(data)
		res.json({ cart:data });
	});
}); 





module.exports = router;

