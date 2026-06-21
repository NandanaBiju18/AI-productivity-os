import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import taskRoutes from "./routes/taskRoutes.js";
import authRoutes from "./routes/authRoutes.js";

connectDB();

dotenv.config();
console.log("MONGO URI:", process.env.MONGO_URI);
console.log("GROQ KEY:", process.env.GROQ_API_KEY);
const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://ai-productivity-hou4mztsw-nandana-projects.vercel.app",
      "https://ai-productivity-os-wy4j.vercel.app",
    ],
    credentials: true,
  })
);
app.use(express.json());
app.use("/api/tasks", taskRoutes);
app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
  res.send("AI Productivity OS API Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});