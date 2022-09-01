var express = require('express');
var router = express.Router();

var fm = require('../bin/getData');

/* GET quiz page */
router.get('/:quiz', function (req, res) {
    res.render('quiz', { message: fm.GetSheet(req.params.quiz) });
});

module.exports = router;