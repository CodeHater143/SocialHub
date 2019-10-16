const express = require('express');
const port = 8000;
const path = require('path'); //to sortout path problems
const app = express();

app.set('view engine','ejs'); //view engine setup by express or how express will know about view engine

app.set('views',path.join(__dirname,'views')); //how to give views directory path dynamically

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


app.listen(port,function(err){
    if(err)
    {
        console.log('error in creating server:',err);
    }
    console.log('express server is up on port:',port);
});
