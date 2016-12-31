'use strict';

const config = require('./config');
const app = require('./config/application')(config);
const data = require('./data')();

require('./config/database')(config.connectionString);
require('./auth')(app, config, data);
require('./routers')(app, data);

let interview1 = {
    title: 'Ernest Hemingway, Writer',
    imageUrl: 'https://adobe99u.files.wordpress.com/2011/06/hemingway_550.png?w=550&h=373',
    questions: [{
        spdf: 'asdfasdf'
    }],
    isShownInHome: true,
};
let interview2 = {
    title: 'Steve Jobs',
    imageUrl: 'http://img.wennermedia.com/article-leads-horizontal/rs-19622-rectangle.jpg',
    questions: [{
        spdf: 'asdfasdf'
    }],
    isShownInHome: true,
};
let user1 = {
    firstName: 'admin',
    lastName: 'adminski',
    email: 'admin@gmai.com',
};

// data.createInterview(interview1);
// data.createInterview(interview2);
// data.createUser(user1);

app.start();
