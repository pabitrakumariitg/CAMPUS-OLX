const express = require("express");
const cors = require("cors");
const { connectMongoDb } = require("./connect"); // Corrected the import statement

// Import routers
const SignUpRouter = require("./routes/user");

const app = express();
const PORT = 8000;

// MongoDB connection setup
const mongoURI = "mongodb://localhost:27017/campus-olx";
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

// Start the server
app.listen(PORT, () => {
    console.log(`Server is started at PORT:${PORT}`);
});
