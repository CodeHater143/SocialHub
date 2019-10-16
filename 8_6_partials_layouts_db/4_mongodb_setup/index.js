const express = require('express'); //express library is required to build app
const app = express(); //how to mount express on app variable
const expressLayouts = require('express-ejs-layouts'); //how to include  express layouts
const port = 8000;
const db = require('./config/mongoose'); //make connection from database

//how to use assets folder
app.use(express.static('./assets'));

//how to use express-ejs-layouts
app.use(expressLayouts);

//extract styles and script from sub pages into layout page
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


//how to use express router 
app.use('/',require('./routes/index'))  //it is a middleware 

//view engine setup
app.set('view engine', 'ejs');
app.set('views', './views');


//establisement of server
app.listen(port,function(err){
    if(err)
    {
        console.log(`error in running the server:${err}`); //error in running the server
    }
    console.log(`yup! express server is running on port:${port}`); //server is running successfuly 
});