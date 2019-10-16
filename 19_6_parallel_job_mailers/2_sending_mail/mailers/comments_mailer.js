const nodeMailer = require('../config/node_mailer');

//this is another way of exporting a methods
exports.newComment = (comment)=>{

    console.log('inside newComment mailer');
    console.log(comment.user.email);
    nodeMailer.transporter.sendMail({
        from: 'ashokyadavay7649926@gmail.com',
        to: comment.user.email,
        subject: "New Comment is published!",
        html: '<h1>Yup! your new comment is just published</h1>'
    },(err,info)=>{
        if(err){
            console.log('Error in sending mail',err);
            return;
        }
        console.log('Message is sent',info);
        return ;
    });
}