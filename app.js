require("dotenv").config()
require("./models/connection")

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var cartRouter = require('./routes/cart')
var usersRouter = require('./routes/users');
var tripsRouter = require('./routes/trips');
var bookingsRouter = require('./routes/trips');

var app = express();
const cors = require("cors");
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/cart', cartRouter);
app.use('/users', usersRouter);
app.use('/trips', tripsRouter);
app.use('.bookings', bookingsRouter);

module.exports = app;
