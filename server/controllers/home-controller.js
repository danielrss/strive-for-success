'use strict';
const path = require('path');

module.exports = function () {
    return {
        home(req, res) {
            return Promise.resolve()
                .then(() => {
                    res.sendFile(path.join(__dirname, '../../dist/index.html'));
                });
        }
    };
};
