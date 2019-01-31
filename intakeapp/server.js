const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

const PORT = process.env.PORT || 3001;


//Define the middleware

app.use(express.urlencoded({extended:true}));
app.use(express.json());

//Server up static assets (usually on heroku)

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}

// Add routes, both API and view

app.use(routes);

// connect to the Mongo DB


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/");



app.listen(PORT, function(){
    console.log(`It is listening ${PORT}!`);
});