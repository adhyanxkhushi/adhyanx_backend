import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();
// Add new contact
router.post("/", async (req, res) => {
  try {
    const contact = new Contact({
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      phone_number: req.body.phone_number,
      plan_type: req.body.plan_type,
      message: req.body.message,
    });

    const saved = await contact.save();

    res.json({
      id: saved._id,
      fname: saved.fname,
      lname: saved.lname,
      email: saved.email,
      phone_number: saved.phone_number,
      plan_type: saved.plan_type,
      message: saved.message
    });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ message: "Failed to save contact" });
  }
});

export default router;
