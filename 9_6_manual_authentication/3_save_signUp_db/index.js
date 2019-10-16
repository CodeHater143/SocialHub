const express = require('express'); //express library is required to build app
const app = express(); //how to mount express on app variable
const expressLayouts = require('express-ejs-layouts'); //how to include  express layouts
const cookieParser = require('cookie-parser');
const port = 8000;

//conection is already establised inside config folder
const db = require('./config/mongoose'); //acuired connection of database from config folder


//how to tell app to use body-parser
app.use(express.urlencoded());

//how to tell app to use cookie-parser
app.use(cookieParser());

//how to tell app to use assets folder
app.use(express.static('./assets'));

//how to tell app to use express-ejs-layouts
app.use(expressLayouts);

//how to tell app to extract styles and script from sub pages into layout page
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


//how to tell app to use express router 
app.use('/',require('./routes/index'))  //it is a middleware 

//how to tell app to use view engine setup
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