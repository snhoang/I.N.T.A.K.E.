const userModel = require("../models/user");

const bcrypt = require('bcrypt');
const saltRounds = 10;

const userController = {
    login: (req, res) => {
        // obtain data from front-end
        const { email, password } = req.body;

        //check if username and password is in database
        userModel.find({ email: email }, (err, user) => {
            if (err) {
                res.json(err)
            } else {
                const encryptedPassword = user[0].password // this is the encrypted password
                const isValid = bcrypt.compareSync(password, encryptedPassword); // this would return true or false

                isValid ? res.json(user) : res.json("invalid email or password")
            }
        })
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
            error ? res.json(error) : res.json("success user inserted")
        })
    }
}

module.exports = userController;