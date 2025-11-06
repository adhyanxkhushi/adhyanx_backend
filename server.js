import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import dataRoutes from "./routes/dataRoutes.js";
import testimonialRoutes from "./routes/testimonialRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
// --- MongoDB connection ---
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection failed:", err));


// --- Start server ---
const PORT = process.env.PORT || 8080;

app.listen(PORT, (err) => {
  if (err) {
    console.error("❌ Error starting server:", err);
  } else {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  }
});
app.use("/api/testimonials", testimonialRoutes);
