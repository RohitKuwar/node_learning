const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

//environment varialbles in app.js
dotenv.config();

//express app
const app = express();

//connect to MongoDB
const dbURI = `${process.env.DB_URI}`;

mongoose.connect(dbURI)
.then(res => console.log('connected to DB', res))
.catch(err => console.log('error connecting to DB', err));

//register view engine
app.set('view engine', 'ejs');

//listen for requests
app.listen(8000);

//mongoose and mongo sandbox routes
app.get('/add-blog', (req, res) => {
  const blog = new Blog({
    title: 'my new blog 11',
    body: 'about my new blog 11 blah blah blah blah....'
  })
  blog.save()
  .then(result => res.send(result))
  .catch(err => console.log(err))
})

app.get('/all-blog', (req, res) => {
  Blog.find()
  .then(result => res.send(result))
  .catch(err => console.log(err))
})

app.get('/single-blog', (req, res) => {
  Blog.findById('63070451849d83160686aeaf')
    .then(result => res.send(result))
    .catch(err => console.log(err))
})

//middleware - It is the code running on the server in between request and response process
app.use((req, res, next) => {
  console.log('new request made');
  console.log('host:', req.hostname);
  console.log('path:', req.path);
  console.log('method:', req.method);
  next();       //It tells express to move to next middleware
});

app.use((req, res, next) => {
  console.log('next middleware');
  next();
});

app.get('/', (req, res) => {
  // res.sendFile('./views/index.html', {root: __dirname});
  
  //here we are rendering html page using ejs view engine
  //we are passing data to index.ejs file using object like syntax
  res.render('index', {title: 'Home', number: '100'});
});

//As we have placed below middleware after home page request code so it will not run on home page request. Hence order and place of middleware matters.
app.use((req, res, next) => {
  console.log('next middleware after home page');
  next();
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