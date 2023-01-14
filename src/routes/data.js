var express = require('express');
var fs = require('fs');
var router = express.Router();

const sessionDataFile = "./session.log";

function buildLogData(session) {
    let logData = JSON.stringify(session);
    return logData;
}


router.post('/send_score', function (req, res) {
    res.send("OK");

    req.body.SESSION.START_TIME = new Date(req.body.SESSION.START_TIME).toLocaleString();
    req.body.SESSION.END_TIME = new Date(req.body.SESSION.END_TIME).toLocaleString();
    req.body.SESSION.SCORE = req.body.SESSION.SCORE / req.body.SESSION.QUESTIONS.length * 100;

    //Check if session data file exists if not create one
    if (!fs.existsSync(sessionDataFile)) {
        fs.appendFile(sessionDataFile, "", function (err) {
            console.log('Data File Created...');
        });
    }

    //Write Session to file
    fs.appendFile(sessionDataFile, buildLogData(req.body.SESSION) + "\n", function (err) {
        console.log('Session Data Saved...');
    });
});

module.exports = router;