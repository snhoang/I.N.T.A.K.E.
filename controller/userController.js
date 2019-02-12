const userModel = require("../models/user");

const bcrypt = require('bcrypt');
const saltRounds = 10;

const userController = {
    login: (req, res) => {
        // obtain data from front-end

        // decrypt password

        //check if username and password is in database

    },
    signup: (req, res) => {
        // obtain data from front-end / req
        const { name, email, password } = req.body;

        // encrypt the password
        const hash = bcrypt.hashSync(password, saltRounds);

        // insert to database
        userModel.create({
            name: name,
            email: email,
            password: hash
        }, (error, user) => {
            // if success res.json(sucess)
            // if not res.json(fail)
            error ? res.json(error) : res.json("sucess user inserted")
        })
    }
}

module.exports = userController;