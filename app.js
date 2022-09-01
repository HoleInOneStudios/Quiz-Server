var express = require('express');
var path = require('path');

//Routes
var indexRouter = require('./src/routes/index');

var app = express();

//view engine setup
app.set('views', path.join(__dirname, './src/views'))
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, './src/public')));

app.use('/', indexRouter)

module.exports = app;