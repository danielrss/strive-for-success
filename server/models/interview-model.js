'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const ALPHA_PATTERN = /[A-Za-z1-9]/;

let InterviewSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: [3, 'Title is too short!'],
        maxlength: [50, 'Title is too long!'],
        match: ALPHA_PATTERN
    },
    createdOn: {
        type: Date,
        default: Date.now,
    },
    user: {},
    imageUrl: {
        type: String
    },
    category:{
        type: String,
        required: true,
        minlength: [1, 'Category is too short!'],
        maxlength: [50, 'Category is too long!'],
        match: ALPHA_PATTERN
    },
    image: {},
    questions: [{}],
    peopleWhoLikeThis: [{}],
    comments: [{}],
    isShownInHome: {
        type: Boolean,
        default: false
    },
    isDeleted: {
        type: Boolean,
        default: false
    } 
});

mongoose.model('Interview', InterviewSchema);
let Interview = mongoose.model('Interview');
module.exports = Interview;