const http = require('http');
const dotenv = require('dotenv');
const { environment } = require('./config')
const hostname = '127.0.0.1';
const port = 3000;

//environment varialbles in 
dotenv.config();

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`server running at http://${hostname}:${port}`);
  console.log(`user id: ${process.env.USER_ID}`);
  console.log(`environment: ${environment}`);
});