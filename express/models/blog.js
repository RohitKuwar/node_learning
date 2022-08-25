const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//define Schema for blog
const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
}, { timestamps: true });

//created model based on  blogSchema schema
const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;