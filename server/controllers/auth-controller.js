'use strict';
const passport = require('passport'),
    helpers = require('../helpers');

module.exports = function(data) {
    return {
        register(req, res) {
            const user = req.body;

            // return Promise.resolve()
            //     .then(() => {
            //         if (!req.isAuthenticated()) {
            //             return data.createUser(user);
            //         } else {
            //             res.redirect('/home');
            //         }
            //     })
            //     .then(dbUser => {
            //         passport.authenticate('local')(req, res, function() {
            //             res.status(200)
            //                 .send({ redirectRoute: '/profile' });
            //         });
            //     })
            //     .catch(error => {
            //         res.status(400)
            //             .send(JSON.stringify({ validationErrors: helpers.errorHelper(error) }));
            //     });

            data.createUser(user)
                .then(() => {
                    res.json({
                        success: true,
                        message: 'Registration successfull!'
                    });
                })
                .catch(() => {
                    res.json({
                        error: 'Login successfull!'
                    });
                });
        },
        loginLocal(req, res, next) {
            const auth = passport.authenticate('local', function(error, user) {
                if (error) {
                    // next(error);
                    // return;
                    return res.json({
                        error: 'Invalid name or password!'
                    });
                }

                if (!user) {
                    //res.status(400);
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

                    // res.status(200)
                    //     .send({ redirectRoute: '/profile' });
                    res.status(200)
                        .json({
                            success: true,
                            message: 'Login successfull!'
                        });
                });
            });

            // return Promise.resolve()
            //     .then(() => {
            //         if (!req.isAuthenticated()) {
            //             auth(req, res, next);
            //         } else {
            //             res.redirect('/home');
            //         }
            //     });

            auth(req, res, next);
        },
        logout(req, res) {
            // return Promise.resolve()
            //     .then(() => {
            //         if (!req.isAuthenticated()) {
            //             res.redirect('/home');
            //         } else {
            //             req.logout();
            //             res.redirect('/home');
            //         }
            //     });

            req.logout();
            res.json({
                result: {
                    success: true
                }
            });
        }
    };
};