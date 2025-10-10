const ContactContent = require("../models/ContactContent");

exports.getContactContent = async (req, res) => {
  try {
    let content = await ContactContent.findOne().lean();
    if (!content) {
      content = await ContactContent.create({});
    }
    res.json(content);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch contact content" });
  }
};

exports.updateAll = async (req, res) => {
  const update = req.body;
  try {
    const result = await ContactContent.updateOne({}, update, { upsert: true });
    res.json({ message: "Creation successful!", result });
  } catch (err) {
    res
      .status(500)
      .json({
        error: "Failed to update contact content",
        message: err.message,
      });
  }
};

exports.updateSection = async (req, res) => {
  const { section } = req.params;
  const update = req.body[section];

  const allowedSections = [
    "headTitle",
    "contactAddress",
    "phone",
    "email",
    "mapUrl",
    "socialLinks",
  ];

  if (!allowedSections.includes(section)) {
    return res.status(400).json({ error: "Invalid section" });
  }

  try {
    const result = await ContactContent.updateOne(
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
      .json({ error: "Failed to update section", message: err.message });
  }
};

exports.resetContactContent = async (req, res) => {
  await ContactContent.deleteMany({});
  res.json({ message: "Contact content reset" });
};
