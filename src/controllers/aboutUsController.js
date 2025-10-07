const AboutUsContent = require("../models/AboutUsContent");

exports.getContent = async (req, res) => {
  try {
    let content = await AboutUsContent.findOne().lean();
    if (!content) {
      content = await AboutUsContent.create({});
    }
    res.json(content);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch about us content" });
  }
};

exports.updateAll = async (req, res) => {
  const update = req.body;
  const result = await AboutUsContent.updateOne({}, update, { upsert: true });
  res.json({ message: "Creation succussful!", result });
};

exports.updateSection = async (req, res) => {
  const { section } = req.params;
  const update = req.body[section];

  const allowedSections = ["headTitle", "mission", "values", "quote", "team"];

  if (!allowedSections.includes(section)) {
    return res.status(400).json({ error: "Invalid section" });
  }

  try {
    const result = await AboutUsContent.updateOne(
      {},
      { $set: { [section]: update } },
      { upsert: true }
    );

    const message = result.upsertedCount
      ? `${section} section created successfully`
      : `${section} section updated successfully`;

    res.status(201).json({ message });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to update section: ", message: err.message });
  }
};

exports.resetContent = async (req, res) => {
  await AboutUsContent.deleteMany({});
  res.json({ message: "About Us page's content reset" });
};
