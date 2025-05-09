const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    departure: String,
    arrival: String,
    date: String,
    price: String,
});

const Booking = mongoose.model('bookings', bookingSchema);

module.exports = Booking;