const passport = require('passport');
const LocalStrategy = require('passport-local');
const userModel = require('./../models/user.js');

module.exports = passport.use(new LocalStrategy(
    (email, password, done) => {
        userModel.findOne({ email: email }, function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            if (!user.verifyPassword(password)) { return done(null, false); }
            return done(null, user);
        });
    }
));