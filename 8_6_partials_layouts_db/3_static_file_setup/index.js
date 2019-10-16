const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const port = 8000;

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

app.listen(port,function(err){
    if(err)
    {
        console.log(`error in running the server:${err}`);
    }
    console.log(`yup! express server is running on port:${port}`);
});