const mongoose = require('mongoose');

const seriesSchema = new mongoose.Schema({
    entry_id: {type: Number, required: true},
    name: {type: String, required: true},
    author: String,
    books: { 
        type: Array, 
        required: true,
        validate: {
            validator: function(v) {
                return v.length >= 2;
            },
            message: 'The books array must contain at least 2 items.'
        }
    },
    numOfBooks: Number,
    classifiedAs: String, 
},
{ versionKey: false }
);

seriesSchema.pre('save', function(next) {
    const bookCount = this.books.length;

    const seriesTypes = {
        2: 'Duology',
        3: 'Trilogy',
        4: 'Tetralogy',
        5: 'Pentalogy',
        6: 'Hexalogy',
        7: 'Heptalogy',
        8: 'Octology',
        9: 'Ennealogy',
        10: 'Decology',
        11: 'Undecology',
        12: 'Dodecology',
        13: 'Tridecology',
        14: 'Tetradecology',
        15: 'Pentadecology',
        16: 'Hexadecology',
        17: 'Heptadecology',
        18: 'Octodecology',
        19: 'Nonodecology',
        20: 'Icosology'
    };

    this.classifiedAs = seriesTypes[bookCount] || 'Unknown';

    this.numOfBooks = bookCount;

    next();
});

seriesSchema.index({entry_id: 1});

const Series = mongoose.model("Series", seriesSchema);
module.exports = Series;