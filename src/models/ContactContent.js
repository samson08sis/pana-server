const mongoose = require("mongoose");

const SocialLinkSchema = new mongoose.Schema({
  platform: {
    type: String,
    enum: ["Twitter", "Instagram", "LinkedIn", "GitHub", "Facebook"],
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
});

const ContactContentSchema = new mongoose.Schema(
  {
    headTitle: {
      type: String,
      required: true,
    },
    contactAddress: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mapUrl: {
      type: String,
      required: true,
    },
    socialLinks: [SocialLinkSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("ContactContent", ContactContentSchema);
