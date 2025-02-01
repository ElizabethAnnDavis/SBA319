const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: Number,
    name: String,
    email: String,
    favBooks: Array,
},
{ versionKey: false }
);

const User = mongoose.model("User", userSchema);
module.exports = User;