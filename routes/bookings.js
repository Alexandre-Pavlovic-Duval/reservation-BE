var express = require("express");
var router = express.Router();
require("../models/connection");
const Booking = require('../models/bookings')

router.post('/', (req, res) => {
let {departure, arrival, hours, price} = req.body;

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