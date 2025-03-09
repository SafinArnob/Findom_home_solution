import express from "express";
import cors from "cors";
import { config } from "dotenv";
import connectDB from "./config/db.js"; // Import MongoDB connection

// Load environment variables
config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Routes
import AuthRouter from "./routes/AuthRouter.js";
import PropertyRouter from "./routes/PropertyRouter.js";

app.use("/auth", AuthRouter);
app.use("/api/properties", PropertyRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
