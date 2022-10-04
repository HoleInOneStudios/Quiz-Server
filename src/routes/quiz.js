var express = require('express');
var router = express.Router();

var fm = require('../bin/getData');
//fm.WatchFile();

/* GET quiz page */
router.get('/:quiz', function (req, res) {
    var a = fm.GetSheet(req.params.quiz);
    a.shift();
    res.render('quiz', { message: a, title: req.params.quiz });
});

module.exports = router;