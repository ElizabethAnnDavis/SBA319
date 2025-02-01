const mongoose = require('mongoose');

const seriesSchema = new mongoose.Schema({
    name: String,
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
*/

const Series = mongoose.model("Series", seriesSchema);
module.exports = Series;