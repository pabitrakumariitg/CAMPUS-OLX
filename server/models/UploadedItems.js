const mongoose = require("mongoose");

const uploadedItemsSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  uploadType: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: {
    type: [String], // Assuming multiple images can be stored as an array of strings
  },
  hostel: {
    type: String,
    required: true,
  },
  itemCategory: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("UploadedItem", uploadedItemsSchema);
