const express = require("express");
const router = express.Router();
const { handleUploadItem } = require("../controller/UploadItem");

// Route to handle item uploads
router.post("/", handleUploadItem);

module.exports = router;
