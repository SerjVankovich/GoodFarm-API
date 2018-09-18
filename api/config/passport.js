const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const mongoose = require('mongoose')
const Seller = mongoose.model("Seller")

passport.use(new LocalStrategy({usernameField: 'email' },
    function(username, password, done) {
        Seller.findOne({ email: username }, (err, user) => {
            if (err) { return done(err) }
            if (!user) {
                return done(null, false, { message: "Incorrect username" })
            }
            if (!user.checkPassword(password)) {
                return done(null, false, { message: "Incorrect password" })
            }
            return done(null, user)

        })
    }

))