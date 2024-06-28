const UploadedItem = require("../models/UploadedItems");

async function handleUploadItem(req, res) {
  const { username, email, uploadType, title, description, images, hostel, itemCategory } = req.body;

  // Check for missing fields
  if (!username || !email || !uploadType || !title || !description || !hostel || !itemCategory) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  try {
    // Create a new UploadedItem instance
    const result = await UploadedItem.create({
      username,
      email,
      uploadType,
      title,
      description,
      images,
      hostel,
      itemCategory,
    });

    return res.status(201).json({ msg: "Success", id: result._id });
  } catch (error) {
    console.error("Error uploading item:", error);
    return res.status(500).json({ msg: "Internal Server Error", error });
  }
}

module.exports = {
  handleUploadItem,
};
