'use strict';

const helpers = require('../helpers'),
    path = require('path');

module.exports = function(data) {
    return {
        getAllUsers(req, res) {
            console.log(req.body);
            return data.getAllUsers()
                .then((users => {
                    if (!users) {
                        throw new Error('No users found!');
                    }
                    res.status(200)
                        .json(users);
                }))
                .catch(err => {
                    res.status(400)
                        .json({ validationErrors: helpers.errorHelper(err) });
                });
        }
    };
};