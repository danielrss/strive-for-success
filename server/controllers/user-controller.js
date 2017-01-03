'use strict';

const helpers = require('../helpers'),
    path = require('path');

module.exports = function(data) {
    return {
        getUsers(req, res) {
            let usersPerPage = 10;
            return data.getUsers(usersPerPage, req.params.page)
                .then((users => {
                    if (!users) {
                        throw new Error('No users found!');
                    }

                    res.status(200).json({ message: 'success', users });
                }))
                .catch(err => {
                    res.status(400)
                        .json({ validationErrors: helpers.errorHelper(err) });
                });
        },
        getAllUsers(req, res) {
            return data.getAllUsers()
                .then((users => {
                    if (!users) {
                        throw new Error('No users found!');
                    }

                    res.status(200).json({ message: 'success', users });
                }))
                .catch(err => {
                    res.status(400)
                        .json({ validationErrors: helpers.errorHelper(err) });
                });
        },
        searchUsers(req, res) {
            return data.searchUsers(req.params.name)
                .then((users => {
                    if (!users) {
                        throw new Error('No users found!');
                    }

                    res.status(200).json({ message: 'success', users });
                }))
                .catch(err => {
                    res.status(400)
                        .json({ validationErrors: helpers.errorHelper(err) });
                });
        },
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
        }
    };
};
