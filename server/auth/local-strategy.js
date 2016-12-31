'use strict';

const LocalStrategy = require('passport-local');

module.exports = function (passport, data) {
    const authStrategy = new LocalStrategy(
        {
            username: 'username',
            password: 'password'
        },
        (email, password, done) => {
            data.getUserByEmail(email)
                .then(user => {
                    if (user && user.authenticatePassword(password)) {
                        done(null, user);
                    } else {
                        done(null, false);
                    }
                })
                .catch(error => done(error, false));
        });

    passport.use(authStrategy);
};
