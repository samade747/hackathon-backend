import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { rateLimit } from "express-rate-limit";
import { connectDB } from "./config/default.js";
import { authRoutes } from "./routes/auth.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

connectDB();

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  limit: 4, // Limit each IP to 4 requests per `window`.
  message: "Too many requests, please try again later.",
});

app.use(limiter);

// Routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
