const express = require("express");
const cors = require("cors");
const { connectMongoDb } = require("./connect");
require("dotenv").config();
// Import routers
const ChatRouter=require("./routes/chat")
const SignUpRouter = require("./routes/user");
const UploadItemRouter = require("./routes/UploadItem");

const app = express();
const PORT = 8000;

// MongoDB connection setup
const mongoURI = "mongodb://127.0.0.1:27017/campus-olx";
connectMongoDb(mongoURI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Routes
app.use("/signUp", SignUpRouter);
app.use("/sell", UploadItemRouter);
app.use("/donate", UploadItemRouter);
app.use("/chat", ChatRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is started at PORT:${PORT}`);
});
