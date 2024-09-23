/**
  *
  * main() will be run when you invoke this action
  *
  * @param Cloud Functions actions accept a single parameter, which must be a JSON object.
  *
  * @return The output of this action, which must be a JSON object.
  *
  */
const nodemailer = require('nodemailer');


async function main(params) {
    const command = params.command;
    const type = params.type;
    if (command == 'email') {
        // console.log('type is:',type)
        const emailForm = 'adateakshay5@gmail.com'
        let subject = ""
        let message = ""
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: emailForm,
                pass: "qknbpgckmjcmifaf"
            }
        });
        const toMail = 'poornima.trikkur@gmail.com';
        if (type == 'laptop_request') {
            subject = 'Laptop Request - Received';
            message = `We have received a request for a laptop from you. We have sent this request to your manager for approval.\nPlease contact helpdesk@company.com for further details\n\nPlease Note: This is an automated mail. Do not reply\n\nThank you.`;
        }
        if (type == 'password_reset') {
            subject = 'password reset Request - Received';
            message = `We have received a password reset request.Your password has been changed successfully. This is an automated mail. Do not reply\n\nThank you.`;
        }
        let mailOptions = {
            from: emailForm,
            to: toMail,
            subject: subject,
            text: message,
            replyTo: emailForm
        };
        //   const called=new  Promise ((resolve, reject) => {
        // await transporter.sendMail(mailOptions, function (err, res) {
        //      console.log('inside sendmail')
        //      if (err) {
        //          console.log("there was an error: ", err);
        //          // return { "response": "Email sent successfully" }
        //          reject(true);
        //      } else {
        //          // console.log("here is the res: ", res);
        //          // return { "response": "Email sent Failed" }
        //          resolve(true);
        //      }
        //  });
        // });

        //  called.then(res=>{
        //      console.log(res)
        //  }).catch(err=>{
        //      console.log(err)
        //  })


        await new Promise((resolve, reject) => {
            // send mail
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    console.error(err);
                    reject(err);
                } else {
                    console.log('Mail sent');
                    resolve(info);
                }
            });
        });

    }
}

main({ "command": "email", "type": "laptop_request" });
