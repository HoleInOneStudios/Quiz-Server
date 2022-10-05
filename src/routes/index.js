var express = require('express');
var router = express.Router();

var { WatchFile, WB } = require('../bin/getData');

/* GET home page */
router.get('/', function (req, res) {
    res.render('index', { message: WB.SheetNames, title: 'Quiz List' });
});

module.exports = router;