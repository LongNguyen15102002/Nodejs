const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Run request');
    res.setHeader('Content type', 'text, html');
    res.write('<h3>Hello World! <h3>');
    res.write('<h2>Bruh lmao lmao <h2>');
    res.end();
})

server.listen(3000, 'localhost', () => {
    console.log('Nodejs is running on port:3000');
})