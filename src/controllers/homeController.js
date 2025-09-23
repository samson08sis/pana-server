const HomeContent = require("../models/HomeContent");

exports.getHomeContent = async (req, res) => {
  try {
    const content = await HomeContent.findOne();
    res.json(content);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch home content" });
  }
};

exports.updateSection = async (req, res) => {
  const { section } = req.params;
  const update = req.body;

  try {
    const content = await HomeContent.findOne();
    if (!content) return res.status(404).json({ error: "Content not found" });

    content.set("partners", req.body.partners);
    await content.save();

    res
      .status(201)
      .json({ message: `${section} section updated successfully`, content });
  } catch (err) {
    res.status(500).json({ error: "Failed to update section" });
  }
};
