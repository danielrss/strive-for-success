'use strict';

module.exports = function(models) {
    const Interview = models.Interview,
        User = models.User;

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
        getInterviewByUserId(id) {
            return new Promise((resolve, reject) => {
                User.findOne({ _id: id }, (err, user) => {
                    if (err) {
                        return reject(err);
                    }

                    if (!user) {
                        return reject(user);
                    }

                    return user;
                })
                .then(user => {
                    if (user.interview) {
                        Interview.findOne({ _id: user.interview.id }, (err, interview) => {
                            if (err) {
                                return reject(err);
                            }

                            return resolve(interview);
                        });
                    } else {
                        reject();
                    }
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
        updateOrCreateUserInterview(userId, update) {
            return new Promise((resolve, reject) => {
                User.findOne({ _id: userId }, (err, user) => {
                    if (err) {
                        return reject(err);
                    }

                    if (!user) {
                        return reject(user);
                    }

                    return user;
                })
                .then(user => {
                    if (user.interview) {
                        Interview.findOneAndUpdate({ _id: user.interview.id }, update, { new: true }, (err, interview) => {
                            if (err) {
                                return reject(err);
                            }

                            return resolve(interview);
                        });
                    } else {
                        let interview = new Interview(update);
                        interview.user = { id: user.id, email: user.email };
                        interview.save((error) => {
                            if (error) {
                                return reject(error);
                            }

                            return resolve(interview);
                        })
                        .then((interview) => {
                            Interview.findOne({ title: update.title }, (err, interview) => {
                                if (err) {
                                    return Promise.reject(err);
                                }

                                return Promise.resolve(interview);
                            })
                            .then(interview => {
                                User.findOneAndUpdate({ _id: userId }, { interview: { id: interview.id, title: interview.title } }, { new: true }, (err, user) => {
                                    if (err) {
                                        return Promise.reject(err);
                                    }

                                    return Promise.resolve(user);
                                });
                            });
                        });
                    }
                });
            })
            .catch(err => {
                console.log(err);
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
