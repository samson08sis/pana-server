const HomeContent = require("../models/HomeContent");

exports.getHomeContent = async (req, res) => {
  try {
    const content = await HomeContent.findOne().lean();
    res.json(content);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch home content" });
  }
};

exports.updateSection = async (req, res) => {
  const { section } = req.params;
  const update = req.body[section];

  const allowedSections = [
    "description",
    "carouselItems",
    "expertiseContent",
    "offerPoints",
    "partners",
  ];

  if (!allowedSections.includes(section)) {
    return res.status(400).json({ error: "Invalid section" });
  }

  try {
    const content = await HomeContent.findOne();

    if (!content) {
      const newContent = new HomeContent({ [section]: update });
      await newContent.save();

      return res.status(201).json({
        message: `${section} section created successfully`,
        newContent,
      });
    } else {
      content.set(section, update);
      await content.save();

      res
        .status(201)
        .json({ message: `${section} section updated successfully`, content });
    }
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to update section: ", message: err.message });
  }
};
