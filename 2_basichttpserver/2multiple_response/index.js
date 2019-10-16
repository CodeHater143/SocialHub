const http = require('http');
const port = 8000;

const fs = require('fs'); //fs module is used to read and write files

function requestHandler(req,res)
{
    console.log(req.url); // 
    res.writeHead(200,{'content-type':'text/html'});
    let filepath;
    switch(req.url)
    {
        case '/':
            filepath='./index.html';
            break;
        case '/profile':
            filepath='./profile.html';
            break;
        default:
            filepath='./404.html';
    }
    
    // to read file
    fs.readFile(filepath,function(err,data){
        if(err)
        {
            console.log('error in reading file:',err);
            return res.end('<h1>something went wrong in reading file</h1>');
        }
        return res.end(data);
    }) 
}

const server = http.createServer(requestHandler); // createServer() server is not sending any data to browser 
//therefore searching is going on in the brower and timeout

server.listen(port,function(err){
    if(err)
    {
        console.log('error in server',err);
        return;
    }
    console.log('server is up and running on port:',port);
});