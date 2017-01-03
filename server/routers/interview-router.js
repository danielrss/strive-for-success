'use strict';

module.exports = function(app, passport, express, data) {
    let interviewsRouter = new express.Router(),
        interviewsController = require('../controllers/interviews-controller')(data);

    interviewsRouter
        .post('/create', interviewsController.createInterview)
        .get('/:id', interviewsController.getInterview)
        .get('/', interviewsController.getAllInterviews);

    app.use('/api/interviews', interviewsRouter);
};
