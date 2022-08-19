const http = require('http');

const server = http.createServer((req, res) => {
  console.log('request made to server');
});

server.listen(3000, 'localhost', () => {
  console.log('server running on localhost:3000');
});