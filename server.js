// module import
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const passport = require("passport");

// routes import
const userRoutes = require("./routes/user-routes.js")

const app = express();

// PORT for production and development
const PORT = process.env.PORT || 4000;

//mongo configuration
mongoose.connect("mongodb+srv://test1234:test1234@cluster0-sjwmf.mongodb.net/test?retryWrites=true", { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, 'connection error: '));
db.once('open', () => {
    console.log("DATABASE CONNECTED !!!")
});

// Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize())

// PASSPORT


// Use Routes
app.use("/user", userRoutes)

// Lunch our server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));