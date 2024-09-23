/**
  *
  * main() will be run when you invoke this action
  *
  * @param Cloud Functions actions accept a single parameter, which must be a JSON object.
  *
  * @return The output of this action, which must be a JSON object.
  *
  */
 async function main(params) {
    let command = params.command;
    let empid= params.empid;

   const nodemailer = require('nodemailer');
   //const mailgun = require('mailgun-js');
    const fetch = require("node-fetch")
    
if (command == 'email') {
     const type= params.type
    console.log(command)
    console.log(type)
    const emailForm = 'adateakshay5@gmail.com'
    let subject =""
    let message =""
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: emailForm,
            pass: "qknbpgckmjcmifaf"
        }
    });
    const toMail = 'poornima.trikkur@gmail.com';
    
    if(type == 'laptop_request')
     {
     subject = 'Laptop Request - Received';
     message = 'We have received a request for a laptop from you. We have sent this request to your manager for approval.\nPlease contact helpdesk@company.com for further details\n\nPlease Note: This is an automated mail. Do not reply\n\nThank you.';
     }
     if(type == 'password_reset')
    {
     subject = 'password reset Request - Received';
     message = 'We have received a password reset request.Your password has been changed successfully. This is an automated mail. Do not reply\n\nThank you.';
    }
     
    const mailOptions = {
        from: emailForm,
        to: toMail,
        subject: subject,
        text: message,
        replyTo: emailForm
    };
    
    
    let mail = await new Promise((resolve,reject)=>{
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
        reject(error);
    } else {
        res.status(200).json({ "success": true, "message": 'Thank you for your registration! We\'ve sent you an email to confirm!' });
        // change below
        resolve(info);
    }
  });
});
 
 }

if(command == "github")
{
    
 const body = {
   "title": params.title
  }

function fetchStop(){
return fetch("https://api.github.com/repos/sreevani916/Infosys-portal/issues", 
{
method: "post",
body: JSON.stringify(body),
headers: { "Content-Type": "application/json" ,
'Authorization' :'Basic ' + btoa('apikey'+":"+'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')
}
})
.then(res => res.json())
}

var res = fetchStop().then((result)=> text=
  
      (result)
    
    )

return res
}

}

