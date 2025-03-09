import mongoose from "mongoose";
import { config } from "dotenv";

config();

const mongo_url = process.env.MONGO_CONN;

const connectDB = async () => {
  try {
    await mongoose.connect(mongo_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected...");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1); // Exit process if DB connection fails
  }
};

export default connectDB;
