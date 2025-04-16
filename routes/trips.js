var express = require("express"); 
var router = express.Router(); 

require("../models/connection"); 
const Trip = require("../models/trips");
const Cart = require("../models/cart");


router.post("/", (req, res) => { 
    let { tripsToSend, hoursToSend, priceToSend } = req.body

    departureToConvert = tripsToSend.split(" ")
    departure = departureToConvert[0]
    arrival = departureToConvert[2]
    
    priceToConvert = priceToSend.split("€")
    price = priceToConvert[0]
    console.log("test", priceToSend);

    let tripToCart = new Cart({
        departure: departure,
        arrival: arrival,
        date: hoursToSend,
        price: price,
    });

    tripToCart.save()
    .then(
        res.json({tripToCart})
    );

}); 

router.get('/', (req, res) => {
    Trip.find()
    .then(data => {
        res.json({trips: data})
    })
});


module.exports = router;