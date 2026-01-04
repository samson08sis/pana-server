const AboutUsContent = require("../models/AboutUsContent");

exports.getContent = async (req, res) => {
  try {
    const content = await AboutUsContent.findOne().lean();
    if (!content) return res.json({});

    // Helper to remove _id from image objects
    const cleanImage = (img) => {
      if (!img) return img;
      const { _id, ...rest } = img;
      return rest;
    };

    // Clean mission image
    if (content.mission?.image) {
      content.mission.image = cleanImage(content.mission.image);
    }

    // Clean quote image
    if (content.quote?.image) {
      content.quote.image = cleanImage(content.quote.image);
    }

    // Clean team images only (keep team member _id)
    content.team = content.team.map((member) => ({
      ...member,
      image: cleanImage(member.image),
    }));

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

  const allowedSections = ["header", "mission", "values", "quote", "team"];

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
