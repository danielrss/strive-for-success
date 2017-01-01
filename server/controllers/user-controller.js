'use strict';

const helpers = require('../helpers'),
    path = require('path');

module.exports = function(data) {
    return {
        updateProfile(req, res) {
            const updatedUser = req.body;

            return Promise.resolve()
                .then(() => {
                    return data.findUserByIdAndUpdate(req.params.id, updatedUser);
                })
                .then((user) => {
                    if (user) {
                        res.status(200).json({ message: 'success', user });
                    } else {
                        res.status(400).json({ message: 'user not found' });
                    }
                })
                .catch(err => {
                    res.status(400)
                        .send(JSON.stringify({ validationErrors: helpers.errorHelper(err) }));
                });
        },
        getProfile(req, res) {
            return Promise.resolve()
                .then(() => {
                    return data.getUserById(req.params.id);
                })
                .then((user) => {
                    if (user) {
                        res.status(200).json({ message: 'success', user });
                    } else {
                        res.status(400).json({ message: 'user not found' });
                    }
                })
                .catch(err => {
                    res.status(400)
                        .send(JSON.stringify({ validationErrors: helpers.errorHelper(err) }));
                });
        }
    };
};
