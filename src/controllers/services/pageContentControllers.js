const { ServicesPageContent } = require("../../models/Services");

exports.upsertPageHeader = async (req, res) => {
  try {
    const { header } = req.body;
    const pageHeader = await ServicesPageContent.findOneAndUpdate(
      {},
      { header },
      { new: true, upsert: true }
    );
    res.json(pageHeader);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPageHeader = async (req, res) => {
  try {
    const pageHeader = await ServicesPageContent.findOne({});
    res.json(pageHeader);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
