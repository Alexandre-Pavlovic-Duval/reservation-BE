var express = require("express"); 
var router = express.Router(); 

require("../models/connection"); 
const Trip = require("../models/trips");


router.post("/", (req, res) => { 
    let departure = req.body.departure; 
    let arrival = req.body.arrival; 
    // let date = req.body.date; 

    Trip.find({departure, arrival}) 
    .then(data => { 
        res.json({trips : data}) 
    }) 
}); 

module.exports = router;