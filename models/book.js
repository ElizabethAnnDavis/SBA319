const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    entry_id: Number,
    name: String,
    author: String,
    inSeries: Boolean,
},
{ versionKey: false }
);

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;