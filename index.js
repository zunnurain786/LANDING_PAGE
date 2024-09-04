// server/server.js
const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

//static file
app.use(express.static(path.join(__dirname, "./Landing_page/dist")));

// Routes
app.use("/api/auth", authRoutes);

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./Landing_page/dist/index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
