const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  src: String,
  alt: String,
});

const SocialLinkSchema = new mongoose.Schema({
  platform: {
    type: String,
    enum: ["Twitter", "Instagram", "LinkedIn", "GitHub", "Facebook"],
  },
  url: String,
});

const MissionSchema = new mongoose.Schema({
  image: ImageSchema,
  paragraphs: [String],
});

const ValueSchema = new mongoose.Schema({
  title: String,
  icon: String,
  description: String,
  isActive: { type: Boolean, default: true },
});

const QuoteSchema = new mongoose.Schema({
  quote: String,
  name: String,
  image: ImageSchema,
  role: String,
});

const TeamSchema = new mongoose.Schema({
  name: String,
  image: ImageSchema,
  role: String,
  socialLinks: [SocialLinkSchema],
});

const AboutUsContentSchema = new mongoose.Schema({
  header: {
    title: String,
    hero: ImageSchema,
  },
  mission: MissionSchema,
  values: [ValueSchema],
  quote: QuoteSchema,
  team: [TeamSchema],
});

module.exports = mongoose.model("AboutUsContent", AboutUsContentSchema);
