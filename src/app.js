var express = require('express');
var { join } = require('path');

//Routes
var indexRouter = require('./routes/index');
var quizRouter = require('./routes/quiz');

var app = express();

//view engine setup
app.set('views', join(__dirname, './views'))
app.set('view engine', 'ejs');

app.use(express.static(join(__dirname, './public')));

app.use('/', indexRouter)
app.use('/', quizRouter)

module.exports = app;