'use strict';

module.exports = function(models) {
    const Interview = models.Interview;

    return {
        createInterview(interviewData) {
            let interview = new Interview(interviewData);

            return new Promise((resolve, reject) => {
                interview.save((error) => {
                    if (error) {
                        return reject(error);
                    }

                    return resolve(interview);
                });
            });
        },
        getInterviewById(id) {
            return new Promise((resolve, reject) => {
                Interview.findOne({ _id: id }, (err, interview) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(interview);
                });
            });
        },
        findInterviewByIdAndUpdate(id, update) {
            return new Promise((resolve, reject) => {
                Interview.findOneAndUpdate({ _id: id }, update, { new: true }, (err, interview) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(interview);
                });
            });
        },
        getInterviewByTitle(title) {
            return new Promise((resolve, reject) => {
                Interview.findOne({ title: title }, (err, interview) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(interview);
                });
            });
        },
        getAllInterviewsShownInHome() {
            return new Promise((resolve, reject) => {
                Interview.find({ isShownInHome: true, isDeleted: false }, (err, interviews) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(interviews);
                });
            });
        },
        getAllInterviewsNotShownInHome() {
            return new Promise((resolve, reject) => {
                Interview.find({ isShownInHome: false, isDeleted: false }, (err, interviews) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(interviews);
                });
            });
        },
        getAllInterviews() {
            return new Promise((resolve, reject) => {
                Interview.find((err, users) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(users);
                });
            });
        }
    };
};
