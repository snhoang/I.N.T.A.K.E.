const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sugarSchema = new Schema({

    title: {type: String, required:true},
    type: {type: String, required: true},
    amount: {type:Number}
});


const Sugar = mongoose.model("Sugar", sugarSchema);

module.exports = Sugar;