const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 3000;

const booksData = require('./data/books');
const usersData = require('./data/users');
const seriesData = require('./data/series');

const Book = require('./models/book.js');
const User = require('./models/user.js');
const Series = require('./models/series.js');

const books = require('./routes/books');
const users = require('./routes/users');
const series = require('./routes/series');

async function addInitialData(){
    const findUsers = await User.find();
    if(!findUsers || findUsers.length === 0){
        User.insertMany(usersData);
    };

    const findBooks = await Book.find();
    if(!findBooks || findBooks.length === 0){
        Book.insertMany(booksData);
    };

    const findSeries = await Series.find();
    if(!findSeries || findSeries.length === 0){
        Series.insertMany(seriesData);
    };
};
addInitialData();

app.use(express.json());

app.use('/books', books);
app.use('/users', users);
app.use('/series', series);

app.get('/', (req, res) => {
    res.send("Welcome to the Library");
});

// 404 MiddleWARE.
app.use((err, req, res, next) => {
    console.log("Something went wrong");
    res.send("Something went wrong");
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});