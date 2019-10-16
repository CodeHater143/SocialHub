const express = require('express');
const app = express();
const port = 8000;

//how to use express router 
app.use('/',require('./routes/index'))  //it is a middleware

//how to write server code
app.listen(port,function(err){
    if(err)
    {
        console.log(`error in running the server:${err}`);
    }
    console.log(`yup! express server is running on port:${port}`);
});