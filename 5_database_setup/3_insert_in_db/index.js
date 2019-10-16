const express = require('express'); //required express library
const path = require('path'); //to sortout path problems

const db = require('./config/mongoose');
const Contact = require('./models/contacts');
const port = 8000;

const app = express();

app.set('view engine','ejs'); //view engine setup by express or how express will know about view engine
app.set('views',path.join(__dirname,'views')); //how to give views directory path dynamically
//middleware
app.use(express.urlencoded()); //it is body-parser which makes body objects 
//express middleware to access assets folder
app.use(express.static('assets'));

// create contact list and display it to browser
var contactList=[
    {
        name:'Ashok yadav',
        phone:'9876543'
    },
    {
        name:'Tony stark',
        phone:'098734567'
    },
    {
        name:'Captain america',
        phone:'9845679876'
    }
]


app.get('/',function(req,res){
   
   return res.render('home',{
       title:'my contact list',
       contact_list:contactList
    }); //sending a response to browser(home.ejs which is present in views directory )
});

app.get('/practice',function(req,res){
    return res.render('practice',{
        title:'practice is going on'

    }); //sending a response to browser(home.ejs which is present in views directory )
 });

 app.post('/create-contact',function(req,res){

    //how to store contact list into database 
     Contact.create({
         name:req.body.name,
         phone:req.body.phone
     },function(err,newcontact){
         if(err)
         {
             //
            console.log('error in creating contact',err);
            return;
         }
         console.log('contact is created successfully',newcontact);
         return res.redirect('back');
     });
 });

 //method 2 to receive data from front-end to back-end through query params
 //how to delete contact list
 app.get('/delete-contact/',function(req,res){
     //to get query url
    console.log(req.query);
    let phone=req.query.phone

    let contactIndex=contactList.findIndex(contact=>contact.phone==phone);
    if(contactIndex!=-1)
    {
        contactList.splice(contactIndex,1);
    }
    return res.redirect('back');
});



app.listen(port,function(err){
    if(err)
    {
        console.log('error in creating server:',err);
    }
    console.log('express server is up on port:',port);
});
