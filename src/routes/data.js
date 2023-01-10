var express = require('express');
var router = express.Router();

router.post('/send_score', function (req, res) {
    console.log(JSON.stringify(req.body));
    console.log(typeof (req.body))

    res.send(JSON.stringify(req.body));
});

module.exports = router;