// routes/blog.js
import express from "express";
import Blog from "../models/Blog.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { title, subtitle, content } = req.body;
    const blog = new Blog({ title, subtitle, content });
    await blog.save();
    res.status(201).json({ message: "Blog created successfully", blog });
  } catch (error) {
    console.error("Blog creation failed:", error);
    res.status(500).json({ error: "Failed to create blog" });
  }
});

router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
});

export default router;
