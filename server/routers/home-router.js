'use strict';

module.exports = function(app, express) {
    let homeController = require('../controllers/home-controller')();

    let homeRouter = new express.Router();

    homeRouter.get('/', homeController.home);

    app.use(homeRouter);
};
