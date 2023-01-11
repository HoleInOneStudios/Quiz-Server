var express = require('express');
var { resolve, join, dirname } = require('path');
var ejs = require('ejs');
var bodyParser = require('body-parser')

//Routes
var dataRouter = require('./routes/data');
var indexRouter = require('./routes/main');
var quizRouter = require('./routes/quiz');

var app = express();

app.use(express.static(join(__dirname, 'views'))) //Just for the sake of pkg, not needed otherwise
app.use("/public", express.static(join(__dirname, 'public'))) //Just for the sake of pkg, not needed otherwise

// set up rate limiter: maximum of five requests per minute
var RateLimit = require('express-rate-limit');
var limiter = RateLimit.rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 60 // limit each IP to 60 requests per windowMs Minute
});

// apply rate limiter to all requests
app.use(limiter);

let FILE_PATH;
if (process.env.NODE_ENV == undefined) {
    FILE_PATH = resolve(dirname(process.execPath), process.env.IMAGE_PATH);
} else {
    FILE_PATH = join(__dirname, process.env.IMAGE_PATH);
}
app.use("/img", express.static(FILE_PATH)) //Just for the sake of pkg, not needed otherwise

//view engine setup
app.set('views', resolve(__dirname, './views'));
app.set('view engine', 'ejs');

// parse application/json
app.use(bodyParser.json())

app.use('/', dataRouter);
app.use('/', indexRouter);
app.use('/', quizRouter);

module.exports = app;