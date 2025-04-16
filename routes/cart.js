var express = require("express");
var router = express.Router();
require("../models/connection");
const Cart = require("../models/cart");

router.get("/", function (req, res) {
  Cart.find().then((data) => {
    console.log(data);
    res.json({ cart: data });
  });
});

router.delete("/:id", (req, res) => {
  Cart.deleteOne({ _id: req.params.id }).then(() => {
    Cart.find().then((data) => {
      res.json({ result: true, cart: data });
    });
  });
});

module.exports = router;
