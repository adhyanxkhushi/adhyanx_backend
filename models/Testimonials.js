import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, required: true },
  rating: { type: Number, required: true },
  text: { type: String, required: true },       
  profile_pic: { type: String},
});

export default mongoose.model("Testimonial", testimonialSchema);
