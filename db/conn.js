const mongoose = require('mongoose');
require('dotenv').config();

const db = mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}!`);
});

module.exports = db;