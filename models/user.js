const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    beverages: [
        {
            beverage_name: String,
            volume: Number,
            alcohol: Number,
            caffeine: Number,
            sugar: Number,
            date: Number
        }
    ]
});

const User = mongoose.model('User', userSchema)

module.exports = User;