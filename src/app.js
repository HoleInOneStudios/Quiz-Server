var express = require('express');
var path = require('path');

//Routes
var indexRouter = require('./routes/index');
var quizRouter = require('./routes/quiz');

var app = express();

//view engine setup
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, './public')));

app.use('/', indexRouter)
app.use('/', quizRouter)

module.exports = app;