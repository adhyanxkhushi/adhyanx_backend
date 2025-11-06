import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, required: true },
  phone_number: { type: Number, required: true },
  plan_type: { type: String, required: true },
  message: { type: String, required: true },       
});

export default mongoose.model("Contact", contactSchema);
