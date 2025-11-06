import express from "express";
import Data from "../models/dataModel.js";

const router = express.Router();
console.log("✅ dataRoutes file loaded");

// GET data by key
router.get("/:key", async (req, res) => {
  try {
    const data = await Data.findOne({ key: req.params.key });
    if (!data) return res.status(404).json({ message: "Not found" });
    res.json(data);
  } catch (error) {
    console.error("GET error:", error);
    res.status(500).json({ error: error.message });
  }
});

// POST or update data by key
router.post("/:key", async (req, res) => {
  try {
    console.log("Received POST:", req.params.key, req.body); // 👈 add this line
    const { value } = req.body;
    if (!value) return res.status(400).json({ error: "Missing value in body" });

    const data = await Data.findOneAndUpdate(
      { key: req.params.key },
      { value },
      { new: true, upsert: true }
    );

    res.json(data);
  } catch (error) {
    console.error("POST error:", error); // 👈 log exact crash cause
    res.status(500).json({ error: error.message });
  }
});

export default router;
