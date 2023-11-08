'use strict';
const http = require('node:http');
const fs = require('node:fs');
const port = 8000;

function sendFile(name,contentType,res){
  fs.readFile(name,'utf-8',(err,data) => {
    res.writeHead(200,{'Content-Type':contentType});
    res.write(data);
    res.end();
  });
}

const server = http.createServer((req, res) => {
  sendFile('index.html','text/html',res);
  sendFile('./js/cubeRotation.js','application/javascript',res);
});

server.listen(port, () => {
  console.log(`Listening on ${port}`);
});