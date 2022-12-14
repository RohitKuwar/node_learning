const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {
  let path = './views/';
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    //redirect to about page
    case "/about-me":
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end();
      break;
    default:
      path += "error.html";
      res.statusCode = 400;
      break;
  }

  res.setHeader("Content-Type", "text/html");
  fs.readFile(path, (err, data) => {
    if(err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  })
});

server.listen(3000);