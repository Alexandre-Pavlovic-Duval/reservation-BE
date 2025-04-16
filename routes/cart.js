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

const Booking = require('../models/bookings')

router.post('/', (req, res) => {
  let {trips, hours, price} = req.body;

  trips = trips.split(" ")
  let departure = trips[0]
  let arrival = trips[2]

  let purchaseTrip = new Booking ({
      departure: departure,
      arrival: arrival,
      hours: hours,
      price: price,
  })
  purchaseTrip.save()
  .then(res.json({purchaseTrip}))

});

module.exports = router;
