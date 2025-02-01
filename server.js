const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = 3000;

const Book = require("./models/book.js");
const User = require("./models/user.js");
const Series = require("./models/series.js");

const books = require('./routes/books');
const users = require('./routes/users');
const series = require('./routes/series');

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}!`);
});

app.use(express.json());

app.use("/books", books);
app.use("/users", users);
app.use("/series", series);

app.get("/", (req, res) => {
    res.send("Welcome to the Library");
});
app.post("/users", async(req, res) => {
    await User.create(req.body);
    res.send("USER CREATED");
});

app.post("/books", async(req, res) => {
    await Book.create(req.body);
    res.send("BOOK ADDED");
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});