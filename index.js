const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();
const PORT = 3000;

let wb = XLSX.readFile(path.join(__dirname, './data/data.xlsx'));

fs.watch(path.join(__dirname, "./data/data.xlsx"), (eventType) => {
    if (eventType === "change") {
        wb = XLSX.readFile(path.join(__dirname, './data/data.xlsx'));
    }
});

function getSheet(sheetName) {
    return XLSX.utils.sheet_to_json(wb.Sheets[sheetName], { header: ["Question", "1", "2", "3", "4", "Correct", "Hint"] });
}

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.get(`/quiz/:sheet`, (req, res) => {
    res.render('main', {
        title: 'Quiz',
        message: JSON.stringify(getSheet(req.params.sheet))
    })
})

app.get('/quiz', (req, res) => {
    res.render('list', {sheets: wb.SheetNames})
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})