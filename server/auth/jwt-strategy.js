'use strict';

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

module.exports = function (passport, app, webTokenSecret, data) {
    app.use(passport.initialize());
    app.use(passport.session());

    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
    opts.secretOrKey = webTokenSecret;

    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        data.getUserById(jwt_payload._id)
            .then((user) => {
                if (user) {
                    return done(null, user);
                }
                return done(null, false);
            })
            .catch((err) => {
                done(err, false);
            });
    }));
};
