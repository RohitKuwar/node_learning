const http = require('http');
const dotenv = require('dotenv');
const { environment } = require('./config')
const hostname = '127.0.0.1';
const port = 3000;
const os = require('os');
const {people, ages} = require('./people')
const file = require('./filesystem')

//environment varialbles in app.js
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

// console.log(global);
// setTimeout(() => {
//   console.log('in the setTimeout after 3000ms');
//   clearInterval(inte);
//   console.log('clear');
// }, 3000);

// const inte = setInterval(() => {
//   console.log("setInterval 1000ms");
// }, 1000);

console.log("os:", os.platform(), os.homedir());
console.log("dirname:", __dirname);
console.log("filename:", __filename);

console.log("people file:", people, ages);