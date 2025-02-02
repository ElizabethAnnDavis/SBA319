const mongoose = require('mongoose');

const seriesSchema = new mongoose.Schema({
    entry_id: {type: Number, required: true},
    name: {type: String, required: true},
    author: String,
    books: Array,
    numOfBooks: Number,
    classifiedAs: String, 
},
{ versionKey: false }
);

/*
A series of 2 books = Duology
A series of 3 books = Trilogy
A series of 4 books = Tetralogy
A series of 5 books = Pentalogy
A series of 6 books = Hexalogy
A series of 7 books = Heptalogy
A series of 8 books = Octology
A series of 9 books = Ennealogy
A series of 10 books = Decology
A series of 11 books = Undecology
A series of 12 books = Dodecology
A series of 13 books = Tridecology
A series of 14 books = Tetradecology
A series of 15 books = Pentadecology
A series of 16 books = Hexadecology
A series of 17 books = Heptadecology
A series of 18 books = Octodecology
A series of 19 books = Nonodecology
A series of 20 books = Icosology
*/

seriesSchema.index({entry_id: 1});

const Series = mongoose.model("Series", seriesSchema);
module.exports = Series;