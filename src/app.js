var express = require('express');
var { resolve } = require('path');

//Routes
var indexRouter = require('./routes/index');
var quizRouter = require('./routes/quiz');

var app = express();

//view engine setup
app.set('views', resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(resolve(__dirname, './public')));

app.use('/', indexRouter)
app.use('/', quizRouter)

module.exports = app;