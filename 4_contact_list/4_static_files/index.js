const express = require('express');
const port = 8000;
const path = require('path'); //to sortout path problems
const app = express();

app.set('view engine','ejs'); //view engine setup by express or how express will know about view engine
app.set('views',path.join(__dirname,'views')); //how to give views directory path dynamically
//middleware
app.use(express.urlencoded()); //it is body-parser which makes body objects 
//express middleware to access assets
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
   
    //how to acces new key-value pair changed in middleware
   console.log(req.fname);
   
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
    //return res.redirect('/practice'); // redirect to '/practice' url (just above router )
    //console.log(req.body);

    /* contactList.push({
        name:req.body.name,
        phone:req.body.phone
    }); */

    contactList.push(req.body);

    return res.redirect('/'); //
    return res.redirect('back') // back to the page which has called this post request

 });



app.listen(port,function(err){
    if(err)
    {
        console.log('error in creating server:',err);
    }
    console.log('express server is up on port:',port);
});
