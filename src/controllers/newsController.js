const NewsItem = require("../models/NewsItem.js");

// GET all news items
exports.getNewsItems = async (req, res) => {
  try {
    const items = await NewsItem.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST create new item
exports.createNewsItem = async (req, res) => {
  try {
    const news = await NewsItem.insertMany(req.body);
    // const item = new NewsItem(req.body);
    // await item.save();
    res.status(201).json(news);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PUT update item
exports.updateNewsItem = async (req, res) => {
  try {
    const updated = await NewsItem.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: new Date() },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE item
exports.deleteNewsItem = async (req, res) => {
  try {
    await NewsItem.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE All Items
exports.deleteAll = async (req, res) => {
  console.log("Preparing to delete...");
  try {
    await NewsItem.deleteMany({});
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ error: err.message });
  }
};
