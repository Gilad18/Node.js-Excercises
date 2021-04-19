const http = require('http');
const fs = require('fs');
const userJson = require('./users.json');
const port = 3000

fs.readFile('index.html' , (err , data) => {   
    if (err) {
        throw err 
    }  
    const server = http.createServer((req, res) => {
        if (req.method === 'GET') {
            if (req.url === "/raw-html") {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write('<h1>Welcome<h1/>');
            } else if (req.url === "/users") {
                res.writeHead(200, { "Content-Type": "application/json" });
                res.write(JSON.stringify(userJson));
            } 
            else if (req.url === "/") {
                res.write(data );  
            }
        }
        res.end();
    })
    
    server.listen(port, () => {
        console.log("Server runs at port " + port)
    })
     
});

