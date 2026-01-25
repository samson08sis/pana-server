const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  src: String,
  alt: String,
});

const PageHeader = new mongoose.Schema({
  title: String,
  hero: ImageSchema,
});

module.exports = { ImageSchema, PageHeader };
