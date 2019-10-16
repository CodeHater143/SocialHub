const nodeMailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');

let transporter = nodeMailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'ashokyadavay7649926@gmail.com', // generated ethereal user
        pass: 'yadavashok@23514' // generated ethereal password
    }
});

let renderTemplate = (data,relativePath)=>{
    let mailHTML;
    ejs.renderFile(
        path.join(__dirname,'../views/mailers',relativePath),
        data,
        function(err,template){
            if(err){
                console.log('error in rendering template',err);
                return;
            }
            mailHTML = template;
        }
    );
    console.log('success');
    return mailHTML;
}


module.exports = {
    transporter: transporter,
    renderTemplate: renderTemplate
}