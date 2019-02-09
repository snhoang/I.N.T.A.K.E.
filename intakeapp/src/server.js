// const express = require("express");

// const mongoose = require("mongoose");
// const routes = require("./routes");
// const app = express();
// const PORT = process.env.PORT || 3001;

// // Define the middleware here

// app.use(express.urlencoded({extended:true }));
// app.use(express.json());

// // Serve up static assets (usually on heroku)
// if(process.env.NODE_ENV === "production"){
//     app.use(express.static("client/build"));
// }
// // Add routes to both API and view
// app.use(routes);

const express = require("express");

// Set up the Express App

const app = express();
const PORT = process.env.PORT || 3001;

const db = require("./models");

app.use(express.urlencoded({ extended:true}));
app.use(express.json());

app.use(express.static("public"));


require("./routes/api-routes.js")(app);

db.sequelize.sync().then(function(){
    app.listen(PORT, function(){
        console.log("App listening on PORT " + PORT);
    });
});


