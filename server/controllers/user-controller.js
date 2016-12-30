'use strict';

const helpers = require('../helpers'),
    path = require('path');

module.exports = function(data) {
    return {
        getRegister(req, res) {
            return Promise.resolve()
                .then(() => {
                    if (!req.isAuthenticated()) {
                        res.render('/register');
                    } else {
                        res.redirect('/home');
                    }
                });
        },
    };
};