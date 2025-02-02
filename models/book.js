const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    entry_id: {type: Number, required: true},
    name: {type: String, required: true},
    author: String,
    inSeries: Boolean,
},
{ versionKey: false }
);

bookSchema.index({entry_id: 1});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;