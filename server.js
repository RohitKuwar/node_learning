const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log("request made to server");
  console.log(req.url, req.method);

  //set header content type
  // res.setHeader("Content-Type", "text/plain");
  // res.write("Hello world!!!");
  // res.end();

  //send html page
  res.setHeader("Content-Type", "text/html");
  fs.readFile('./views/index.html', (err, data) => {
    if(err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  })
});

server.listen(3000, 'localhost', () => {
  console.log('server running on localhost:3000');
});