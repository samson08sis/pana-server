const cloudinary = require("../../config/cloudinary");
const upload = require("../middlewares/multer");
const fs = require("fs");

// ('/upload', upload.single('image'),
exports.postImage = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "p_test",
    });

    fs.unlinkSync(req.file.path); // Clean up local file

    res.status(201).json({
      message: "Image uploaded successfully",
      url: result.secure_url,
      public_id: result.public_id,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteImage = async (req, res) => {
  try {
    const { public_id } = req.body;

    if (!public_id) {
      return res
        .status(400)
        .json({ error: "Missing public_id in request body" });
    }

    const result = await cloudinary.uploader.destroy(public_id);

    if (result.result !== "ok") {
      return res
        .status(404)
        .json({ error: "Image not found or already deleted" });
    }

    res.status(200).json({ message: "Image deleted successfully", public_id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
