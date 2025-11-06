import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true },
  value: { type: mongoose.Schema.Types.Mixed, required: true },
});

const Data = mongoose.model("Data", dataSchema);
export default Data;
