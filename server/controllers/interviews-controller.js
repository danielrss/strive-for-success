'use strict';
const helpers = require('../helpers');

module.exports = function(data) {
    return {
        createInterview(req, res) {
            const interview = req.body;
            return data.createInterview(interview)
                .then(() => {
                    res.status(200).json({ message: 'success' });
                })
                .catch((err) => {
                    res.status(400)
                        .send(JSON.stringify({ validationErrors: helpers.errorHelper(err) }));
                });
        }
    };
};
