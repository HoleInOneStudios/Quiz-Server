const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', './views');

app.get(`/quiz`, (req, res) => {
    res.render('main', {
        title: 'Hello World',
        message: [1, 2, 3, 4]})
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})