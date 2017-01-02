'use strict';

const helpers = require('../helpers'),
    path = require('path');

module.exports = function(data) {
    return {
        updateProfile(req, res) {
            const updatedUser = req.body;

            return data.findUserByIdAndUpdate(req.params.id, updatedUser)
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
            return data.getUserById(req.params.id)
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
        updateInterview(req, res) {
            const updatedInterview = req.body;

            return data.updateOrCreateUserInterview(req.params.id, updatedInterview)
                .then((interview) => {
                    if (interview) {
                        res.status(200).json({ message: 'success', interview });
                    } else {
                        res.status(400).json({ message: 'user not found' });
                    }
                })
                .catch(err => {
                    res.status(400)
                        .send(JSON.stringify({ validationErrors: helpers.errorHelper(err) }));
                });
        },
        getInterview(req, res) {
            return data.getInterviewByUserId(req.params.id)
                .then((interview) => {
                    if (interview) {
                        res.status(200).json({ message: 'success', interview });
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
