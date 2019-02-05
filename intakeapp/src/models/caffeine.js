const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const caffeineSchema = new Schema({
    title:{type: String, required: true},
    type: {type: String, required: true},
    amount: {type: Number}
    


});

const Caffeine = mongoose.model("Caffeine", caffeineSchema);

module.exports = Caffeine;