const express = require('express');
const port = 8000;
const app = express();

app.get('/',function(req,res){
    //res.send('hi! developer!') // simple response to browser

    res.send('<h1>html response to browser</h1>');// html response to browser
});



app.listen(port,function(err){
    if(err)
    {
        console.log('error in creating server:',err);
    }
    console.log('express server is up on port:',port);
});
