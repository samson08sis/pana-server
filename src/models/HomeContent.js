const mongoose = require("mongoose");

const carouselItemSchema = new mongoose.Schema({
  id: String,
  src: String,
  alt: String,
  hint: String,
});

const partnerSchema = new mongoose.Schema({
  logo: {
    src: { type: String, default: "" },
    alt: { type: String, default: "" },
  },
  link: String,
});

const homeContentSchema = new mongoose.Schema({
  slogan: String,
  carouselItems: [carouselItemSchema],
  expertiseContent: String,
  offerPoints: [String],
  partners: [partnerSchema],
});

module.exports = mongoose.model("HomeContent", homeContentSchema);
