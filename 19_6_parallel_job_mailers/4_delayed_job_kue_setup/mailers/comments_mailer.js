const nodeMailer = require('../config/node_mailer');

//this is another way of exporting a methods
exports.newComment = (comment)=>{
    let htmlString = nodeMailer.renderTemplate({comment: comment},'/comments/newComments.ejs');
    console.log('inside newComment mailer');
    console.log(comment.user.email);
    nodeMailer.transporter.sendMail({
        from: 'ashokyadavay7649926@gmail.com',
        to: comment.user.email,
        subject: "New Comment is published!",
        html: htmlString
    },(err,info)=>{
        if(err){
            console.log('Error in sending mail',err);
            return;
        }
        console.log('Message is sent',info);
        return ;
    });
}