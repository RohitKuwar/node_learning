const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');

router.get('/blog', (req, res) => {
  Blog.find()
  .then(result => {
    res.render('blog', {title: 'Blog', blogs: result});
  })
  .catch(err => console.log(err));
});

router.post('/blog', (req, res) => {
  const blog = new Blog(req.body);
  blog.save()
  .then(result => {
      res.redirect('/blog');
    })
    .catch(err => {
      console.log(err);
    });
})

router.get('/blog/create', (req, res) => {
  res.render('create', {title: 'Create'});
});

module.exports = router;