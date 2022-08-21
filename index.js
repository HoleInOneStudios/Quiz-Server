const XLSX = require('xlsx');
const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

const wb = XLSX.readFile(path.join(__dirname, './example/data.xlsx'));
const xlData = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], {header: 1});

console.log(xlData);

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', './views');

app.get(`/quiz`, (req, res) => {
    res.send(XLSX.utils.sheet_to_html(wb.Sheets[wb.SheetNames[0]]))
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})