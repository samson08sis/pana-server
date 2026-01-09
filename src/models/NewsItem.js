const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  src: { type: String, required: true },
  alt: { type: String, required: true },
  hint: { type: String },
});

const newsItemSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    category: { type: String, required: true },
    date: { type: String, required: true },
    excerpt: { type: String, required: true },
    fullContent: { type: String, required: true },
    image: imageSchema,
  },
  { timestamps: true }
);

module.exports = mongoose.model("NewsItem", newsItemSchema);
