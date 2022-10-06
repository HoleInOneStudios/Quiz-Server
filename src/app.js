var express = require('express');
var { resolve, join } = require('path');
var ejs = require('ejs');

//Routes
var indexRouter = require('./routes/main');
var quizRouter = require('./routes/quiz');

var app = express();



//app.use(express.static(resolve(process.cwd(), './src/public')));

app.use(express.static(join(__dirname, 'views'))) //Just for the sake of pkg, not needed otherwise
app.use(express.static(join(__dirname, 'public'))) //Just for the sake of pkg, not needed otherwise

//view engine setup
app.set('views', resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/', quizRouter);

module.exports = app;