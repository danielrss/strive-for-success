'use strict';
const path = require('path');

const nodemailer = require('nodemailer');
const supportEmail = 'striveforsuccess.sup@gmail.com';
const supportEmailPass = require('../config').supportEmailPassword;

const settings = {
    host: 'smtp.sendgrid.net',
    service: 'Gmail',
    port: parseInt(587, 10),
    requiresAuth: true,
    auth: {
        user: 'striveforsuccess.sup@gmail.com',
        pass: supportEmailPass
    }
};
const transporter = nodemailer.createTransport(settings);

module.exports = function () {
    return {
        home(req, res) {
            return Promise.resolve()
                .then(() => {
                    res.sendFile(path.join(__dirname, '../../dist/index.html'));
                });
        },
        sendEmail(req, res) {
            return new Promise((resolve, reject) => {
                let userEmail = req.body.email,
                    subject = req.body.subject,
                    message = req.body.message;

                const mailOptions = {
                    to: supportEmail,
                    from: supportEmail,
                    subject: subject,
                    text: message,
                    html: `useremail: ${userEmail}, messages ${message}`
                };

                transporter.sendMail(mailOptions, (err) => {
                    if (err) {
                        res.status(400)
                            .send(JSON.stringify({ err }));
                        return reject(err);
                    }

                    res.status(200).json({ message: 'success' });
                    return resolve();
                });
            })
            .catch(err => {
                res.status(400)
                    .send(JSON.stringify({ err }));
            });
        }
    };
};
