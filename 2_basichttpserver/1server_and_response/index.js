const http = require('http');
const port = 8000;

const fs = require('fs'); //fs module is used to read and write files

function requestHandler1(req,res)
{
    console.log(req.url); // return request url or searching url

    res.writeHead(200,{'content-type':'text/html'});
    res.end('hello browser'); // send simple response to browser
    res.end('<h1>hello browser</h1>'); // send html response to the browser
}

function requestHandler(req,res)
{
    res.writeHead(200,{'content-type':'text/html'});
    
    // to read file
    fs.readFile('./index.html',function(err,data){
        if(err)
        {
            console.log('error in reading file',err);
            return res.end('<h1>something went wrong</h1>');
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