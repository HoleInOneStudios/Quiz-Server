var express = require('express');
var router = express.Router();

var { WatchFile, GetSheet } = require('../bin/getData');

/* GET quiz page */
router.get('/:quiz', function (req, res) {
    var a = GetSheet(req.params.quiz);
    a.shift();

    if (a.length != 0) {
        res.render('quiz', { message: a, title: req.params.quiz });
    } else {
        res.send("Error: Sheet doesn't exist <br> <a href='/'>back</a>")
    }
});

module.exports = router;