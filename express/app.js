const express = require('express');

//express app
const app = express();

//register view engine
app.set('view engine', 'ejs');

//listen for requests
app.listen(8000);

app.get('/', (req, res) => {
  // res.sendFile('./views/index.html', {root: __dirname});
  
  //here we are rendering html page using ejs view engine
  //we are passing data to index.ejs file using object like syntax
  res.render('index', {title: 'Home', number: '100'});
});

//here we are rendering html page using ejs view engine
app.get('/blog', (req, res) => {
  const blogs = [
    {title: 'Blog1', text: 'This is blog1.'},
    {title: 'Blog2', text: 'This is blog2.'},
    {title: 'Blog3', text: 'This is blog3.'},
  ];

  res.render('blog', {title: 'Blog', blogs: blogs});
});

app.get('/blog/create', (req, res) => {
  res.render('create', {title: 'Create'});
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