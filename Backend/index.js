import express from "express";
import cors from "cors";
import { config } from "dotenv";
import mdb from "./config/db.js"; // Import and execute MongoDB connection

config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(cors());

// Serve static files from the 'public' folder
//app.use("/public", static("public"));

// Routes
import AuthRouter from "./routes/AuthRouter.js";
import PropertyRouter from "./routes/PropertyRouter.js";

app.use("/auth", AuthRouter); // Mount AuthRouter at /auth
app.use("/api/properties", PropertyRouter); // Mount PropertyRouter at /properties

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});