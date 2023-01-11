var express = require('express');
var fs = require('fs');
var router = express.Router();

const sessionDataFile = "./session.data";

router.post('/send_score', function (req, res) {
    res.send("OK");

    req.body.SESSION.START_TIME = new Date(req.body.SESSION.START_TIME).toString();
    req.body.SESSION.END_TIME = new Date(req.body.SESSION.END_TIME).toString();
    req.body.SESSION.score = req.body.SESSION.score / req.body.SESSION.QUESTIONS.length * 100;

    //Check if session data file exists if not create one
    if (!fs.existsSync(sessionDataFile)) {
        fs.appendFile(sessionDataFile, "", function (err) {
            if (err) throw err;
            console.log('Data File Created...');
        });
    }

    //Write Session to file
    fs.appendFile(sessionDataFile, JSON.stringify(req.body.SESSION) + "\n", function (err) {
        if (err) throw err;
        console.log('Session Data Saved...');
    });
});

module.exports = router;