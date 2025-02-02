
const users = [
    {
        "name": "Elizabeth",
        "email": "someEmail@email.com",
        "favBooks": ["AGoT", "ACoK", "ASoS", "AFfC", "ADoD", "WoW", "ADoS"]
    },
    {
        "name": "Lizzy",
        "email": "anotherEmail@email.com",
        "favBooks": ["AGoT", "ACoK", "ASoS", "AFfC", "ADoD"]
    },
    {
        "name": "Liz",
        "email": "thisEmail@email.com",
        "favBooks": ["Prisoner of Azkaban", "Order of the Phoenix", "Half-Blood Prince"]
    },
    {
        "name": "Ellie",
        "email": "yetAnotherEmail@email.com",
        "favBooks": ["AGoT", "ADoD"]
    },
    {
        "name": "El",
        "email": "email@email.com",
        "favBooks": ["Half-Blood Prince"]
    }
];



const books = [
    {
        "name": "Elizabeth",
        "author": "Ken Greenhall",
        "inSeries": false
    },
    {
        "name": "Harry Potter and the Sorcerer's Stone",
        "author": "J.K. Rowling",
        "inSeries": true
    },
    {
        "name": "Harry Potter and the Chamber of Secrets",
        "author": "J.K. Rowling",
        "inSeries": true
    },
    {
        "name": "Harry Potter and the Prisoner of Azkaban",
        "author": "J.K. Rowling",
        "inSeries": true
    },
    {
        "name": "Harry Potter and the Goblet of Fire",
        "author": "J.K. Rowling",
        "inSeries": true
    },
    {
        "name": "Harry Potter and the Order of the Phoenix",
        "author": "J.K. Rowling",
        "inSeries": true
    },
    {
        "name": "Harry Potter and the Half-Blood Prince",
        "author": "J.K. Rowling",
        "inSeries": true
    },
    {
        "name": "Harry Potter and the Deathly Hallows",
        "author": "J.K. Rowling",
        "inSeries": true
    },
    {
        "name": "One Hundred Years of Solitude",
        "author": "Gabriel García Márquez",
        "inSeries": false
    },
    {
        "name": "The Road",
        "author": "Cormac McCarthy",
        "inSeries": false
    },
    {
        "name": "Siddhartha",
        "author": "Hermann Hesse",
        "inSeries": false
    },
    {
        "name": "Brave New World",
        "author": "Aldous Huxley",
        "inSeries": false
    },
    {
        "name": "The Picture of Dorian Gray",
        "author": "Oscar Wilde",
        "inSeries": false
    },
    {
        "name": "The Alchemist",
        "author": "Paulo Coelho",
        "inSeries": false
    },
    {
        "name": "The Catcher in the Rye",
        "author": "J.D. Salinger",
        "inSeries": false
    },
    {
        "name": "1984",
        "author": "George Orwell",
        "inSeries": false
    },
    {
        "name": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "inSeries": false
    },
    {
        "name": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "inSeries": false
    },
    {
        "name": "Divergent",
        "author": "Veronica Roth",
        "inSeries": true
    },
    {
        "name": "The Great Hunt",
        "author": "Robert Jordan",
        "inSeries": true
    },
    {
        "name": "Percy Jackson and the Olympians: The Sea of Monsters",
        "author": "Rick Riordan",
        "inSeries": true
    },
    {
        "name": "The Maze Runner",
        "author": "James Dashner",
        "inSeries": true
    },
    {
        "name": "Eragon",
        "author": "Christopher Paolini",
        "inSeries": true
    },
    {
        "name": "The Lightning Thief",
        "author": "Rick Riordan",
        "inSeries": true
    },
    {
        "name": "A Game of Thrones",
        "author": "George R.R. Martin",
        "inSeries": true
    },
    {
        "name": "The Hunger Games",
        "author": "Suzanne Collins",
        "inSeries": true
    },
    {
        "name": "The Fellowship of the Ring",
        "author": "J.R.R. Tolkien",
        "inSeries": true
    }
];


const series = [
    {
        "name": "A Song of Ice and Fire",
        "author": "George R.R. Martin",
        "books": ["A Game of Thrones", "A Clash of Kings", "A Storm of Swords", "A Feast for Crows", "A Dance with Dragons", "The Winds of Winter", "A Dream of Spring"],
        "numOfBooks": 7,
        "classifiedAs": "Planned Heptalogy"
    },
    {
        "name": "Harry Potter",
        "author": "J.K. Rowling",
        "books": ["Philosopher's Stone","Chamber of Secrets","Prisoner of Azkaban","Goblet of Fire","Order of the Phoenix","Half-Blood Prince","Deathly Hallows"],
        "numOfBooks": 7,
        "classifiedAs": "Heptalogy"
    },
    {
        "name": "The Lord of the Rings",
        "author": "J.R.R. Tolkien",
        "books": ["The Fellowship of the Ring", "The Two Towers", "The Return of the King"],
        "numOfBooks": 3,
        "classifiedAs": "Trilogy"
    },
    {
        "name": "Percy Jackson & the Olympians",
        "author": "Rick Riordan",
        "books": ["The Lightning Thief", "The Sea of Monsters", "The Titan's Curse", "The Battle of the Labyrinth", "The Last Olympian"],
        "numOfBooks": 5,
        "classifiedAs": "Pentalogy"
    },
    {
        "name": "The Hunger Games",
        "author": "Suzanne Collins",
        "books": ["The Hunger Games", "Catching Fire", "Mockingjay"],
        "numOfBooks": 3,
        "classifiedAs": "Trilogy"
    },
    {
        "name": "Divergent",
        "author": "Veronica Roth",
        "books": ["Divergent", "Insurgent", "Allegiant", "Four: A Divergent Collection"],
        "numOfBooks": 4,
        "classifiedAs": "Tetralogy"
    },
    {
        "name": "The Chronicles of Narnia",
        "author": "C.S. Lewis",
        "books": ["The Lion, the Witch and the Wardrobe", "Prince Caspian", "The Voyage of the Dawn Treader", "The Silver Chair", "The Horse and His Boy", "The Magician's Nephew", "The Last Battle"],
        "numOfBooks": 7,
        "classifiedAs": "Heptalogy"
    },
    {
        "name": "The Maze Runner",
        "author": "James Dashner",
        "books": ["The Maze Runner", "The Scorch Trials", "The Death Cure", "The Kill Order", "The Fever Code"],
        "numOfBooks": 5,
        "classifiedAs": "Pentalogy"
    },
    {
        "name": "The Dark Tower",
        "author": "Stephen King",
        "books": ["The Gunslinger", "The Drawing of the Three", "The Waste Lands", "Wizard and Glass", "Wolves of the Calla", "Song of Susannah", "The Dark Tower"],
        "numOfBooks": 7,
        "classifiedAs": "Heptalogy"
    },
    {
        "name": "The Inheritance Cycle",
        "author": "Christopher Paolini",
        "books": ["Eragon", "Eldest", "Brisingr", "Inheritance"],
        "numOfBooks": 4,
        "classifiedAs": "Tetralogy"
    },
    {
        "name": "The Wheel of Time",
        "author": "Robert Jordan",
        "books": ["The Eye of the World", "The Great Hunt", "The Dragon Reborn", "The Shadow Rising", "The Fires of Heaven", "Lord of Chaos", "A Crown of Swords", "The Path of Daggers", "The Winter's Heart", "Crossroads of Twilight", "The Knife of Dreams", "The Gathering Storm", "Towers of Midnight", "A Memory of Light"],
        "numOfBooks": 14,
        "classifiedAs": "Tetradecology"
    }    
];


module.exports = users;
module.exports = books;
module.exports = series;