const express = require('express');
const app = express();
const port = 8000;

//sever codes
app.listen(port,function(err){
    if(err)
    {
        console.log(`error in running the server:${err}`);
    }
    console.log(`yup! express server is running on port:${port}`);
});