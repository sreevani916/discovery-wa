const nodemailer = require('nodemailer');

function mailSend() {
    const emailForm = 'adateakshay5@gmail.com'
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: emailForm,
            pass: "qknbpgckmjcmifaf"
        }
    });
    const toMail = 'poornima.trikkur@gmail.com';
    const subject = 'Laptop Request - Received';
    const message = `We have received a request for a laptop from you. We have sent this request to your manager for approval.\nPlease contact helpdesk@company.com for further details\n\nPlease Note: This is an automated mail. Do not reply\n\nThank you.`;

    const mailOptions = {
        from: emailForm,
        to: toMail,
        subject: subject,
        text: message,
        replyTo: emailForm
    };

    transporter.sendMail(mailOptions, function (err, res) {
        if (err) {
            console.error("there was an error: ", err);
        } else {
            console.log("here is the res: ", res);
        }
    });
}

mailSend();