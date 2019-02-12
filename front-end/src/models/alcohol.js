const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const alcoholSchema = new Schema({
    title:{type : String, required: true},
    amount:{type : Number, required : true},
    percent:{type : Number, requires: true},
});


const Alcohol = mongoose.model("Alcohol", alcoholSchema);

module.exports = Alcohol;