'use strict';
const webTokenSecret = require('../config').webTokenSecret,
    helpers = require('../helpers'),
    jwt = require('jsonwebtoken');

module.exports = function(data) {
    return {
        register(req, res) {
            const user = req.body;
            return data.getUserByEmail(user.email)
                .then(user => {
                    if (user) {
                        throw new Error('Email already exists.');
                    }
                })
                .then(() => {
                    return data.createUser(user);
                })
                .then(() => {
                    res.status(200).json({ message: 'success' });
                })
                .catch((err) => {
                    res.status(400)
                        .send(JSON.stringify({ validationErrors: helpers.errorHelper(err) }));
                });
        },
        login(req, res, next) {
            const webTokenObject = {
                _id: req.user.id,
                username: req.user.email
            };

            res.status(200).json({
                email: req.user.email,
                auth_token: jwt.sign(webTokenObject, webTokenSecret)
            });
        },
        authenticate(req, res) {
            let token = req.get('AuthToken');

            if (token) {
                let decoded = jwt.decode(token, webTokenSecret);

                return data.getUserByEmail(decoded.username)
                    .then((user, err) => {
                        if (!user) {
                            return res.json({ success: false, message: 'No user.' });
                        } else {
                            res.json({
                                success: true,
                                user: {
                                    token,
                                    _id: user._id,
                                    email: user.email,
                                    firstName: user.firstName,
                                    lastName: user.lastName,
                                    age: user.age,
                                    avatarUrl: user.avatarUrl,
                                    interview: user.interview,
                                    projects: user.projects
                                }
                            });
                        }
                    });
            }
            else {
                return res.json({ success: false, message: 'No token!' });
            }
        },
    };
};
