var express = require("express"); 
var router = express.Router(); 

require("../models/connection"); 
const Trip = require("../models/trips");


router.post("/", (req, res) => { 
    let departure = req.body.departure; 
    let arrival = req.body.arrival; 

    Trip.find({departure, arrival}) 
    .then(data => { 
        res.json({trips : data}) 
    }) 
}); 

router.get('/', (req, res) => {
    Trip.find()
    .then(data => {
        console.log(data);
        res.json({trips: data})
    })
});




module.exports = router;