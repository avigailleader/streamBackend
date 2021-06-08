const nodemailer = require("nodemailer");

//שליחת מייל להזמנה לשיחה
const sendJoinEmail = (email, room, userEmail) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'leader.meet.mail@gmail.com',
            pass: 'leadermeet123',
        }
    });

    const mailOptions = {
        from: 'leader.meet.mail@gmail.com',
        to: email,
        subject: `${userEmail} invites you to a conversation`,
        html: `<a id="btnConnectCall" href="https://meet.dev.leader.codes/#connection/${room}">
                Click to join the conversation</a>`
    };

    //הפעלת הפונקציה לשליחת המייל
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    })
}

module.exports = {
    sendJoinEmail,
}