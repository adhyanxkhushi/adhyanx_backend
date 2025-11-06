import express from "express";
import Contact from "../models/contactModel.js";

const router = express.Router();

// POST - Save contact form data
router.post("/", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ success: true, message: "Contact saved successfully!" });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ success: false, message: "Failed to save contact" });
  }
});

// (Optional) GET - Fetch all contacts (for admin dashboard)
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ timestamp: -1 });
    res.status(200).json({ success: true, data: contacts });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({ success: false, message: "Failed to fetch contacts" });
  }
});

export default router;
