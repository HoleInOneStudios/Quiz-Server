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
        res.render('error', { title: 'Error', error: { status: 306, stack: `"${req.params.quiz}" is not a valid quiz` } });
    }
});

module.exports = router;