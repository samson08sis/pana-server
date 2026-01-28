const mongoose = require("mongoose");
const { ImageSchema, PageHeader } = require("./CommonSchemas");

const ServicesPageContentSchema = new mongoose.Schema({
  header: PageHeader,
});

const ServicesDataSchema = new mongoose.Schema({
  title: String,
  keyword: String,
  image: ImageSchema,
  description: String,
  offerings: [String],
});

module.exports = {
  ServicesPageContent: mongoose.model(
    "ServicesPageContent",
    ServicesPageContentSchema
  ),
  ServicesData: mongoose.model("ServicesData", ServicesDataSchema),
};
