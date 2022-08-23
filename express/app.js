const express = require('express');

//express app
const app = express();

//listen for requests
app.listen(8000);

app.get('/', (req, res) => {
  res.sendFile('./views/index.html', {root: __dirname});
});

app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});

//redirect
app.get('./about-us', (req, res) => {
  res.redirect('/about')
});

//error page
app.use((req, res) => {
  res.status(404).sendFile("./views/error.html", { root: __dirname });
});