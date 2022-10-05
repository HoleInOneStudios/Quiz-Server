var express = require('express');
var router = express.Router();

var { WatchFile, GetSheet } = require('../bin/getData');

/* GET quiz page */
router.get('/:quiz', function (req, res) {
    var a = GetSheet(req.params.quiz);
    a.shift();
    res.render('quiz', { message: a, title: req.params.quiz });
});

module.exports = router;