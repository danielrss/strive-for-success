'use strict';

module.exports = function(models) {
    const User = models.User;

    return {
        createUser(userData) {
            return new Promise((resolve, reject) => {
                let user = new User(userData);
                user.save((error) => {
                    if (error) {
                        return reject(error);
                    }

                    return resolve(user);
                });
            });
        },
        getUserById(id) {
            return new Promise((resolve, reject) => {
                User.findOne({ _id: id }, (err, user) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(user);
                });
            });
        },
        findUserByIdAndUpdate(id, update) {
            return new Promise((resolve, reject) => {
                User.findOneAndUpdate({ _id: id }, update, { new: true }, (err, user) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(user);
                });
            });
        },
        getUserByEmail(email) {
            return new Promise((resolve, reject) => {
                User.findOne({ email: email }, (err, user) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(user);
                });
            });
        },
        getAllUsers() {
            return new Promise((resolve, reject) => {
                User.find((err, users) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(users);
                });
            });
        },

        getUsers(usersPerPage, pageNumber) {
            return new Promise((resolve, reject) => {
                User.find({})
                    .limit(usersPerPage)
                    .skip(usersPerPage * pageNumber)
                    .select('_id firstName lastName avatarUrl')
                    .exec((err, users) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(users);
                    });
            });
        },
        searchUsers(name) {
            return new Promise((resolve, reject) => {
                User.find({ $or:[{ 'firstName': new RegExp(name, 'i') }, { 'lastName': new RegExp(name, 'i') }] }, (err, users) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(users);
                });
            });
        },
    };
};
