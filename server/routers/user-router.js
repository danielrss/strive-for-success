'use strict';
module.exports = function(app, passport, express, data) {
    let userRouter = new express.Router(),
        authController = require('../controllers/auth-controller')(data),
        userController = require('../controllers/user-controller')(data);

    userRouter
        // .get('/login', userController.getLogin)
        .post('/authenticate', authController.authenticate)
        .post('/login', passport.authenticate('local'), authController.login)
        // .get('/auth/facebook', authController.loginFacebook())
        // .get('/auth/facebook/callback', authController.loginFacebookCallback())
        // .get('/auth/google', authController.loginGooglePlus())
        // .get('/auth/google/callback', authController.loginGooglePlusCallback())
        // .get('/auth/twitter', authController.loginTwitter())
        // .get('/auth/twitter/callback', authController.loginTwitterCallback())
        // .get('/logout', authController.logout)
        .post('/register', authController.register)
        .get('/:id', userController.getProfile)
        .post('/:id', userController.updateProfile)
        .get('/search/:name', userController.searchUsers)
        .get('/page/:page', userController.getUsers)
        .get('/', userController.getAllUsers);
    // .get('/profile/avatar', userController.getProfileAvatar)
    // .post('/profile/avatar', userController.uploadProfileAvatar)
    // .get('/unauthorized', userController.getUnauthorized)
    // .get('/approvals', userController.getAllEventsForApproval)
    // .post('/approvals', userController.updateEvent)
    // .get('/contact', userController.getContactForm)
    // .post('/contact', userController.sendEmail);

    app.use('/api/users', userRouter);
};
