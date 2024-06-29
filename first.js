// let calc = require("./node")
// calc.vish(3,0)
// let hello = ()=>{
//  console.log("i am vishwam")
// }

// hello()

// console.log(global)

// const http = require('http');

// // Create an HTTP server
// const server = http.createServer((req, res) => {
//     // Set the response header with HTTP status and content type
//     res.writeHead(200, { 'Content-Type': 'text/plain' });

//     // Send response body
//     res.end('welcome to our server');
// });

// // The server listens on port 3000
// server.listen(3000, '127.0.0.1', () => {
//     console.log('Server running at http://127.0.0.1:3000/');
//     console.log("the server will close in 10 seconds")
// });


//  setTimeout(() => {
//     server.close(()=>{
//         console.log("server closed")
//     })
//  }, 10000);

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200,'this is home page');
        res.end('Welcome to the Home Page!\n');
    } else if (req.url === '/about') {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('This is the About Page.\n');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found\n');
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:3000/');
});
