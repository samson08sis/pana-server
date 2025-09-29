const mongoose = require("mongoose");

const carouselItemSchema = new mongoose.Schema({
  id: String,
  src: String,
  alt: String,
  hint: String,
});

const partnerSchema = new mongoose.Schema({
  src: String,
  alt: String,
  hint: String,
  link: String,
});

const homeContentSchema = new mongoose.Schema({
  description: String,
  carouselItems: [carouselItemSchema],
  expertiseContent: String,
  offerPoints: [String],
  partners: [partnerSchema],
});

module.exports = mongoose.model("HomeContent", homeContentSchema);
