var express = require('express');
var router = express.Router();

var fm = require('../bin/getData');

/* GET home page */
router.get('/', function (req, res) {
    res.render('index', { message: fm.WB.SheetNames, title: 'Quiz List' });
});

module.exports = router;