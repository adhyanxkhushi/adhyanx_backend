import express from "express";
import Testimonial from "../models/Testimonials.js";

const router = express.Router();

// Get all testimonials
router.get("/", async (req, res) => {
  try {
    const testimonials = await Testimonial.find();

    // Normalize response fields
    const formatted = testimonials.map((t) => ({
      id: t._id,
      name: t.name,
      email: t.email,
      role: t.role,
      rating: t.rating,
      text: t.text, 
      image: t.profile_pic || "", 
      avatar: t.name?.charAt(0).toUpperCase() || "U",
    }));

    res.json({ success: true, data: formatted });
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});


// Add new testimonial
router.post("/", async (req, res) => {
  try {
    const testimonial = new Testimonial({
      name: req.body.name,
      email: req.body.email,
      role: req.body.role,
      rating: req.body.rating,
      text: req.body.text,
      profile_pic: req.body.profile_pic,
    });

    const saved = await testimonial.save();

    res.json({
      id: saved._id,
      name: saved.name,
      email: saved.email,
      role: saved.role,
      rating: saved.rating,
      text: saved.text,
      image: saved.profile_pic || "",
      avatar: saved.name?.charAt(0).toUpperCase() || "U",
    });
  } catch (error) {
    console.error("Error saving testimonial:", error);
    res.status(500).json({ message: "Failed to save testimonial" });
  }
});


// Delete a testimonial
router.delete("/:id", async (req, res) => {
  try {
    const deletedTestimonial = await Testimonial.findByIdAndDelete(req.params.id);

    if (!deletedTestimonial) {
      return res.status(404).json({ success: false, message: "Testimonial not found" });
    }

    res.status(200).json({ success: true, message: "Testimonial deleted successfully" });
  } catch (error) {
    console.error("Error deleting testimonial:", error);
    res.status(500).json({ success: false, message: "Error deleting testimonial" });
  }
});

export default router;
