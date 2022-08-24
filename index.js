/* ================================================================ */
/* Variables */

const fm = require('./src/fm');

//const fs = require('fs'); 
//const XLSX = require('xlsx');
const path = require('path');
const express = require('express');
const http = require('http');
const PORT = 3000;

const app = express();
const server = http.createServer(app);

/* ================================================================ */
/* Setup */

fm.WatchFile();

app.use(express.static(path.join(__dirname, 'public')));

app.set('port', PORT);
app.set('view engine', 'ejs');
app.set('views', './views');

/* ================================================================ */
/* Routes */

app.get(`/quiz/:sheet`, (req, res) => {
    res.render('main', {
        title: 'Quiz',
        message: JSON.stringify(fm.GetSheet(req.params.sheet))
    })
})

app.get('/quiz', (req, res) => {
    res.render('list', {sheets: fm.WB.SheetNames})
})

/* ================================================================ */
/* Server */

server.listen(PORT, 'localhost', () => {
    console.log(server.address())
    console.log(`Server is running on port ${PORT}`);
})