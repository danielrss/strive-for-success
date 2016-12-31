'use strict';

const express = require('express'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    cookieParser = require('cookie-parser'),
    passport = require('passport'),
    path = require('path');

/* Setup App */
module.exports = function(config) {
    let app = express();

    app.use(express.static(path.join(__dirname, '../../dist')));

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(session({
        secret: config.sessionSecret,
        resave: true,
        saveUninitialized: true
    }));
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, DELETE, GET');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

        res.setHeader('Cache-Control', 'no-cache');
        next();
    });

    app.start = function() {
        const port = config.port;
        app.listen(port, () => console.log(`App running at: http://localhost:${port}`));
    };

    return app;
};
