const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb+srv://NirubamaA:ananthrevathi@myprojects.sdhk8sk.mongodb.net/portfolio")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  });

const projectSchema = new mongoose.Schema({
  title: String,
  category: String,
  description: String,
  technologies: [String],
  projectType: String,
  createdAt: { type: Date, default: Date.now }
});

const Project = mongoose.model(
  "Project",
  projectSchema,
  "myProjects"
);

app.get("/api/projects", async (req, res) => {
  try {
    const projects = await Project.find({});
    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



const PORT =   5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
