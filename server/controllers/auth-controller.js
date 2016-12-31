'use strict';
const tokenKey = require('../config').sessionSecret,
    passport = require('passport'),
    helpers = require('../helpers'),
    jwt = require('jwt-simple');

module.exports = function(data) {
    return {
        register(req, res) {
            const user = req.body;

            return Promise.resolve()
                .then(() => {
                    res.status(200).json(data.createUser(user));
                })
                .catch(error => {
                    res.status(400)
                        .send(JSON.stringify({ validationErrors: helpers.errorHelper(error) }));
                });
        },
        loginLocal(req, res, next) {
            const auth = passport.authenticate('local', function(error, user) {
                if (error) {
                    next(error);
                    return;
                }

                if (!user) {
                    res.status(400);
                    return res.json({
                        success: false,
                        message: 'Invalid name or password!'
                    });
                }

                req.login(user, error => {
                    if (error) {
                        next(error);
                        return;
                    }

                    let token = jwt.encode(user, tokenKey);
                    res.status(200)
                        .json({
                            success: true,
                            token
                        });
                });
            });

            return Promise.resolve()
                .then(() => {
                    auth(req, res, next);
                });
        }
    };
};
