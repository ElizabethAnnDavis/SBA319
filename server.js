const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 3000;

const Book = require('./models/book.js');
const User = require('./models/user.js');
const Series = require('./models/series.js');

const books = require('./routes/books');
const users = require('./routes/users');
const series = require('./routes/series');

app.use(express.json());

app.use('/books', books);
app.use('/users', users);
app.use('/series', series);

app.get('/', (req, res) => {
    res.send("Welcome to the Library");
});

// probably some error handling middleWARE here

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});